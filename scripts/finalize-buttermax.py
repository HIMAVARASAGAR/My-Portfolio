from pathlib import Path
import re,json,shutil
R=Path(__file__).resolve().parents[1];P=R/'public'
# Three useful filters fit the source's gallery layout.
def walk(d):
 if isinstance(d,dict):
  if 'typeOfProject' in d and d.get('slug'):
   cat='Software' if d['slug'] in ['soteria','uce','aegis','portfolio'] else 'Research' if d['slug']=='graphene' else 'Hardware'
   d['typeOfProject']=[{'projectType':{'value':{'id':cat,'type':cat}}}]
  for v in d.values():walk(v)
 elif isinstance(d,list):
  for v in d:walk(v)
for f in (P/'_next/data').rglob('*.json'):
 d=json.loads(f.read_text());walk(d);f.write_text(json.dumps(d))
for f in [R/'index.html',*P.glob('projects/**/index.html'),P/'profile/index.html',P/'contact/index.html']:
 s=f.read_text();m=re.search(r'(<script id="__NEXT_DATA__"[^>]*>)(.*?)(</script>)',s,re.S)
 if m:
  d=json.loads(m[2]);walk(d);s=s[:m.start(2)]+json.dumps(d).replace('<','\\u003c')+s[m.end(2):]
 f.write_text(s)
for f in (P/'_next/static/chunks').rglob('*.js'):
 s=f.read_text().replace('#17172b1','#17172b').replace('#ffD600','#dbfa58').replace('"Buttermax"','"Himavara Sagar"').replace('"Buttermax | ','"Himavara Sagar | ').replace('https://github.com/HIMAVARASAGAR_studio/','https://github.com/HIMAVARASAGAR').replace('https://twitter.com/buttermaxstudio','https://github.com/HIMAVARASAGAR')
 s=s.replace('href:"projects/".concat(a.slug)','href:a.empty?"#":"projects/".concat(a.slug)')
 if f.name=='index-5fde67e9c185fa78.js':
  s=s.replace('var w=t(2071),R=','var w=t(2071),PortfolioImage=w.Z,R=').replace('(0,i.jsx)(w.Z,{src:l[0].featuredImg.url','(0,i.jsx)(PortfolioImage,{src:l[0].featuredImg.url')
 if f.name=='contact-28b3b7b84ce7a67f.js':
  s=s.replace('(0,a.jsx)(j,{ref:_})','(0,a.jsx)("a",{className:"portfolio-email",href:"mailto:himavarasagar6675@gmail.com",children:"himavarasagar6675@gmail.com ↗"})')
  # Ref access in original page choreography must tolerate the removed form.
  s=s.replace('(e=_.current).animateSet','(e=_.current||{}).animateSet').replace('(e=_.current).animateIn','(e=_.current||{}).animateIn').replace('(e=_.current).animateOut','(e=_.current||{}).animateOut')
  s=s.replace('ACCEPTING NEW PROJECTS','GET IN TOUCH').replace('WANNA jam on A PROJECT TOGETHER?','HIMAVARA SAGAR').replace('wanna catch up for a chat? A coffee? A beer?','Software & digital hardware').replace("Think you'd make a good butterhead?",'NIT Calicut')
 f.write_text(s)
for n in ['reel_desktop.mp4','reel_mobile.mp4']:shutil.copyfile(P/'portfolio-media/soteria.mp4',P/'images'/n)
