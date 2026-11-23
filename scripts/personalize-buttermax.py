from pathlib import Path
import json,re,copy
from fontTools.ttLib import TTFont
from fontTools.pens.basePen import BasePen
from PIL import Image,ImageDraw,ImageFont
ROOT=Path(__file__).resolve().parents[1];PUB=ROOT/'public'
class PathPen(BasePen):
 def __init__(self,g):super().__init__(g);self.paths=[];self.current=None
 def _moveTo(self,p):self.current={'i':[[0,0]],'o':[[0,0]],'v':[list(p)],'c':True}
 def _lineTo(self,p):self.current['v'].append(list(p));self.current['i'].append([0,0]);self.current['o'].append([0,0])
 def _curveToOne(self,p1,p2,p3):
  c=self.current;prev=c['v'][-1];c['o'][-1]=[p1[j]-prev[j] for j in range(2)];c['v'].append(list(p3));c['i'].append([p2[j]-p3[j] for j in range(2)]);c['o'].append([0,0])
 def _closePath(self):
  c=self.current
  if c['v'][0]==c['v'][-1]:c['i'][0]=c['i'].pop();c['o'].pop();c['v'].pop()
  self.paths.append(c)
 def _endPath(self):self._closePath()
fonts=[TTFont('/System/Library/Fonts/Supplemental/Arial Bold.ttf'),TTFont('/tmp/portfolio-instrument-serif-italic.ttf')]
parts=[];total=0
for text,font,size in [('Himavara',fonts[0],250),('Sagar',fonts[1],330)]:
 scale=size/font['head'].unitsPerEm;glyphs=font.getGlyphSet();cmap=font.getBestCmap()
 for char in text:
  g=glyphs[cmap[ord(char)]];pen=PathPen(glyphs);g.draw(pen)
  for p in pen.paths:
   for k in ['i','o','v']:
    p[k]=[[round(v[0]*scale+(total if k=='v' else 0),3),round(-v[1]*scale+(365 if k=='v' else 0),3)] for v in p[k]]
  parts.append((char,pen.paths));total+=g.width*scale-6
 total+=20
factor=1850/total;offset=(2048-total*factor)/2
layers=[]
for index,(char,paths) in enumerate(parts):
 for p in paths:
  p['v']=[[v[0]*factor+offset,v[1]] for v in p['v']];p['i']=[[v[0]*factor,v[1]] for v in p['i']];p['o']=[[v[0]*factor,v[1]] for v in p['o']]
 delay=index*.65
 ease={'i':{'x':.2,'y':1},'o':{'x':.3,'y':0}}
 layers.append({'ddd':0,'ind':index+1,'ty':4,'nm':char,'sr':1,'ks':{'o':{'a':0,'k':100},'r':{'a':0,'k':0},'p':{'a':1,'k':[{**ease,'t':delay,'s':[-90,120,0]},{'t':22+delay,'s':[0,0,0]}]},'a':{'a':0,'k':[0,0,0]},'s':{'a':0,'k':[100,100,100]}},'shapes':[{'ty':'gr','it':[*({'ty':'sh','ks':{'a':0,'k':p},'nm':'Glyph'} for p in paths),{'ty':'fl','c':{'a':0,'k':[0,0,0,1]},'o':{'a':1,'k':[{**ease,'t':delay,'s':[0]},{'t':12+delay,'s':[100]}]},'r':1},{'ty':'tr','p':{'a':0,'k':[0,0]},'a':{'a':0,'k':[0,0]},'s':{'a':0,'k':[100,100]},'r':{'a':0,'k':0},'o':{'a':0,'k':100},'sk':{'a':0,'k':0},'sa':{'a':0,'k':0}}]}],'ip':0,'op':51,'st':0,'bm':0})
logo={'v':'5.11.0','fr':30,'ip':0,'op':51,'w':2048,'h':512,'nm':'Himavara Sagar','ddd':0,'assets':[],'layers':layers}
p=PUB/'_next/static/chunks/pages/index-5fde67e9c185fa78.js';s=p.read_text();s=re.sub(r"f=JSON.parse\('(.*?)'\)",lambda m:'f='+json.dumps(logo,separators=(',',':')),s);p.write_text(s)
# Original tagline shader consumes a mask texture, now containing portfolio copy.
img=Image.new('RGBA',(2000,60),(0,0,0,0));draw=ImageDraw.Draw(img);f=ImageFont.truetype('/System/Library/Fonts/Supplemental/Arial Bold.ttf',42);draw.text((0,0),'SOFTWARE & DIGITAL HARDWARE. NIT CALICUT.',font=f,fill=(0,0,0,255));img.save(PUB/'images/tagline.png')
# Disable the original site's analytics and consent prompt, rather than sending events to its owner.
p=PUB/'_next/static/chunks/pages/_app-e4e44d0b5798694c.js';s=p.read_text().replace('localStorage.getItem("buttermax_cookies")','"rejected"');p.write_text(s)
# Adapt original metadata and direct-page styles.
for p in [ROOT/'index.html',*PUB.glob('projects/**/index.html'),PUB/'profile/index.html',PUB/'contact/index.html']:
 s=p.read_text().replace('Buttermax','Himavara Sagar')
 css=''.join('<link rel="stylesheet" href="/_next/static/css/'+f.name+'">' for f in (PUB/'_next/static/css').glob('*.css'))
 s=s.replace('</head>',css+'</head>');p.write_text(s)
