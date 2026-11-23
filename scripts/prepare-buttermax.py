"""Content adapter for the user-supplied Buttermax export. Original runtime is retained."""
from pathlib import Path
import json, re, shutil, copy, subprocess
from PIL import Image, ImageDraw, ImageFont
ROOT=Path(__file__).resolve().parents[1]
SOURCE=Path('/tmp/portfolio-butter-reference/buttermax-extracted')
PUBLIC=ROOT/'public'
BUILD='ydZIUzDZ93OYIY7mqdR7i'
for name in ['_next','assets','fonts','images']:
 shutil.copytree(SOURCE/name,PUBLIC/name,dirs_exist_ok=True)
projects=json.loads((ROOT/'src/data/portfolio-content.json').read_text())
base=json.loads((SOURCE/'next_data.json').read_text())
template=base['props']['pageProps']['projects'][0]
colors={'lime':'#dbfa58','lilac':'#dcd8ff','ink':'#17172b','coral':'#ff775e','paper':'#f8f6ed','blue':'#4353f4'}
fontpath='/System/Library/Fonts/Supplemental/Arial.ttf'
font=ImageFont.truetype(fontpath,70)
small=ImageFont.truetype(fontpath,20)
media=PUBLIC/'portfolio-media'
records=[]
for i,p in enumerate(projects):
 bg=colors.get(p['tone'],'#f8f6ed');fg='#f8f6ed' if p['tone']=='ink' else '#17172b'
 image=Image.new('RGB',(1280,720),bg);draw=ImageDraw.Draw(image)
 draw.text((75,60),f'{i+1:02d} / {p["category"].upper()}',font=small,fill=fg)
 words=p['title'].split();lines=['']
 for word in words:
  candidate=(lines[-1]+' '+word).strip()
  if draw.textlength(candidate,font=font)>1120:lines.append(word)
  else:lines[-1]=candidate
 for n,line in enumerate(lines):draw.text((75,300+n*85),line,font=font,fill=fg)
 draw.line((75,610,1205,610),fill=fg,width=1)
 draw.text((75,640),' / '.join(p['tools'][:4]),font=small,fill=fg)
 image.save(media/f'{p["id"]}.jpg',quality=94)
 video=media/f'{p["id"]}.mp4'
 if not video.exists():
  subprocess.run(['ffmpeg','-loglevel','error','-loop','1','-i',str(media/f'{p["id"]}.jpg'),'-t','2','-vf','scale=1280:720','-c:v','libx264','-pix_fmt','yuv420p','-movflags','+faststart','-r','24','-y',str(video)],check=True)
 def asset(ext):
  url=f'/portfolio-media/{p["id"]}.{ext}'
  return {'id':p['id']+ext,'url':url,'filename':p['id']+'.'+ext,'mimeType':'video/mp4' if ext=='mp4' else 'image/jpeg','width':1280,'height':720,'altText':p['title'],'sizes':{k:{'url':url,'width':1280,'height':720} for k in ['i200px','i400px','i600px','i1024px','i1600px','i2000px','thumbnail']}}
 d=copy.deepcopy(template)
 d.update(id=p['id'],title=p['title'],slug=p['id'],featuredTitle=p['title'],meta=p['overview'],featured=True,headerFeatured=True,featuredImg=asset('jpg'),shareImg=asset('jpg'))
 d['maps']={'device':'controller','orientation':'landscape','images':{},'headerFeatured':True,'glass':False}
 d['colors']={'primary':bg,'secondary':fg,'tertiary':'#f8f6ed'}
 d['heading']={'casestudy':asset('mp4'),'casestudydesktop':asset('mp4')}
 d['info']={'title':p['overview'],'copy':'<br /><br />'.join(p['details']),'year':p.get('year',''),'clients':[{'client':{'value':{'id':p['id'],'name':p['title'],'image':{'url':'/favicon.svg'}}}}],'roles':[{'role':{'value':{'id':str(j),'role':tool}}} for j,tool in enumerate(p['tools'])]}
 if p.get('link'):d['info']['url']=p['link']['url']
 d['typeOfProject']=[{'projectType':{'value':{'id':p['category'],'type':p['category']}}}]
 d['content']=[{'id':p['id']+'cover','layoutType':'landscape','image':asset('jpg'),'useCustomBG':True,'customBG':bg}]
 records.append(d)
home=copy.deepcopy(base['props']['pageProps'])
home['projects']=records;home['headerProjects']=records[:3]
home['data'].update(meta='Himavara Sagar — Software & Digital Hardware',gridHeading={'gridSubtitle':'About','gridTitle':'I build software and digital hardware. Electronics & Communication Engineering, NIT Calicut.'})
home['data']['heading']={'title':[{'line':'Himavara'},{'line':'Sagar'}],'subtitle':[{'line':'Software & digital hardware'},{'line':'NIT Calicut'}]}
profile=json.loads((SOURCE/f'_next/data/{BUILD}/profile.json').read_text())['pageProps']
profile['data']['profileTitle']={'title':'<b>I build</b> software <b>and</b> digital hardware.','body':'My background is in Electronics & Communication Engineering at NIT Calicut. B.Tech, 2021–2025.','video':records[0]['heading']['casestudy']}
profile['data']['profileContent']=[{'id':'skills','title':'Skills','body':'Programming, frontend, hardware tools, and AI workflows.','fullWidth':True,'list':[]},*({'id':str(i),'title':title,'body':body,'list':[],'fullWidth':False} for i,(title,body) in enumerate([('Programming','Python · MATLAB · C / C++ · JavaScript'),('Frontend','React · Vite · Tailwind CSS · HTML / CSS'),('Hardware tools','Proteus · Simulink · CST Microwave Studio · Vivado (basic)'),('AI & workflow','Google ADK · Multi-agent systems · Git & GitHub · Command line'),('Education','B.Tech, Electronics & Communication Engineering<br />NIT Calicut · 2021–2025'),('Workshop Committee','Senior Executive · Tathva, NIT Calicut<br />2023–2024')]))]
contact=json.loads((SOURCE/f'_next/data/{BUILD}/contact.json').read_text())['pageProps']
routes={'/':home,'/projects':{'data':{'projects':records}},'/profile':profile,'/contact':contact}
for i,d in enumerate(records):routes['/projects/'+d['slug']]={'data':d,'nextProject':records[(i+1)%len(records)]}
# Client-only boot prevents hydration of the archive's old, unrelated project content.
html=(SOURCE/'index.html').read_text()
html=re.sub(r'<div id="__next">.*?</div>(?=<script id="__NEXT_DATA__")','<div id="__next"></div>',html,flags=re.S)
# Remove SSR robustly by splitting at the following Next data script.
start=html.index('<div id="__next">');end=html.index('<script id="__NEXT_DATA__"',start)
html=html[:start]+'<div id="__next"></div>'+html[end:]
html=re.sub(r'<title>.*?</title>','<title>Himavara Sagar</title>',html)
html=html.replace('</head>','<link rel="icon" href="/favicon.svg"><link rel="stylesheet" href="/portfolio-adapter.css"></head>')
# Update embedded data on every direct-entry route as well as Next's client route data.
for route,props in routes.items():
 data=copy.deepcopy(base);data['props']={'pageProps':props,'__N_SSG':True};data['page']='/projects/[slug]' if route.startswith('/projects/') else route;data['query']={'slug':route.split('/')[-1]} if route.startswith('/projects/') else {}
 document=re.sub(r'(<script id="__NEXT_DATA__"[^>]*>).*?(</script>)',lambda m:m[1]+json.dumps(data).replace('<','\\u003c')+m[2],html,flags=re.S)
 # Ensure the selected page entry is available before Next boot.
 if route!='/':
  pagefile={'/projects':'projects-f6c3e40628b0e50d.js','/profile':'profile-7d9ac25b9604161f.js','/contact':'contact-28b3b7b84ce7a67f.js'}.get(route,'projects/[slug]-60de19d73c0965c2.js')
  document=document.replace('pages/index-5fde67e9c185fa78.js','pages/'+pagefile)
 output=ROOT/'index.html' if route=='/' else PUBLIC/route.strip('/')/'index.html';output.parent.mkdir(parents=True,exist_ok=True);output.write_text(document)
 datafile=PUBLIC/f'_next/data/{BUILD}'/('index.json' if route=='/' else route.strip('/')+'.json');datafile.parent.mkdir(parents=True,exist_ok=True);datafile.write_text(json.dumps({'pageProps':props,'__N_SSG':True}))
slug=PUBLIC/'_next/static/chunks/pages/projects/[slug]-60de19d73c0965c2.js';slug.parent.mkdir(parents=True,exist_ok=True);shutil.copyfile(SOURCE/'chunks/[slug]-60de19d73c0965c2.js',slug)
# Retain original animation code; replace only identity/palette literals and media bindings.
for file in [*PUBLIC.rglob('*.js'),*PUBLIC.rglob('*.css')]:
 s=file.read_text()
 for a,b in [('#FFD600','#dbfa58'),('#ffd600','#dbfa58'),('#fed602','#dbfa58'),('#101010','#17172b'),('hello@buttermax.net','himavarasagar6675@gmail.com'),('Buttermax is a digital production studio','Himavara Sagar builds software and digital hardware'),('instagram.com/buttermax','github.com/HIMAVARASAGAR'),('linkedin.com/company/buttermax','linkedin.com/in/kakihimavarasagar')]:s=s.replace(a,b)
 if file.name=='main-f1ae51b305fd5b68.js':s=s.replace('_.default.hydrateRoot(e,r,{onRecoverableError:U.default})','(_.default.createRoot(e,{onRecoverableError:U.default})),Z.render(r)')
 if file.name=='index-5fde67e9c185fa78.js':
  s=s.replace('external:z,glui:','src:a.featuredImg.url,glui:')
  s=s.replace('(0,i.jsx)(H,{slides:d,onChange:G})','(0,i.jsx)(w.Z,{src:l[0].featuredImg.url,glui:!0,className:"portfolio-hero-media"})')
 file.write_text(s)
print('Adapted original runtime:',len(records),'projects;',len(routes),'routes')
