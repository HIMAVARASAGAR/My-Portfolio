var Qp=Object.defineProperty;var tm=(r,t,e)=>t in r?Qp(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var Ct=(r,t,e)=>tm(r,typeof t!="symbol"?t+"":t,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const fu="166",em=0,nh=1,nm=2,Yf=1,im=2,Ei=3,nr=0,Mn=1,wi=2,Zi=0,vs=1,oc=2,ih=3,rh=4,rm=5,Er=100,sm=101,om=102,am=103,lm=104,cm=200,um=201,hm=202,fm=203,ac=204,lc=205,dm=206,pm=207,mm=208,_m=209,gm=210,vm=211,xm=212,Mm=213,Sm=214,ym=0,Em=1,Tm=2,Oa=3,bm=4,wm=5,Am=6,Cm=7,qf=0,Rm=1,Pm=2,Ji=0,Lm=1,Dm=2,Im=3,$f=4,Um=5,Nm=6,Om=7,Kf=300,Cs=301,Rs=302,cc=303,uc=304,el=306,hc=1e3,br=1001,fc=1002,Kn=1003,Fm=1004,Oo=1005,si=1006,dl=1007,wr=1008,Di=1009,jf=1010,Zf=1011,vo=1012,du=1013,Or=1014,Ci=1015,Ro=1016,pu=1017,mu=1018,Ps=1020,Jf=35902,Qf=1021,td=1022,oi=1023,ed=1024,nd=1025,xs=1026,Ls=1027,id=1028,_u=1029,rd=1030,gu=1031,vu=1033,Sa=33776,ya=33777,Ea=33778,Ta=33779,dc=35840,pc=35841,mc=35842,_c=35843,gc=36196,vc=37492,xc=37496,Mc=37808,Sc=37809,yc=37810,Ec=37811,Tc=37812,bc=37813,wc=37814,Ac=37815,Cc=37816,Rc=37817,Pc=37818,Lc=37819,Dc=37820,Ic=37821,ba=36492,Uc=36494,Nc=36495,sd=36283,Oc=36284,Fc=36285,Bc=36286,Bm=3200,zm=3201,od=0,km=1,Xi="",ai="srgb",lr="srgb-linear",xu="display-p3",nl="display-p3-linear",Fa="linear",Te="srgb",Ba="rec709",za="p3",Wr=7680,sh=519,Hm=512,Vm=513,Gm=514,ad=515,Wm=516,Xm=517,Ym=518,qm=519,oh=35044,ah="300 es",Ri=2e3,ka=2001;class zs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pl=Math.PI/180,zc=180/Math.PI;function Po(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(tn[r&255]+tn[r>>8&255]+tn[r>>16&255]+tn[r>>24&255]+"-"+tn[t&255]+tn[t>>8&255]+"-"+tn[t>>16&15|64]+tn[t>>24&255]+"-"+tn[e&63|128]+tn[e>>8&255]+"-"+tn[e>>16&255]+tn[e>>24&255]+tn[n&255]+tn[n>>8&255]+tn[n>>16&255]+tn[n>>24&255]).toLowerCase()}function sn(r,t,e){return Math.max(t,Math.min(e,r))}function $m(r,t){return(r%t+t)%t}function ml(r,t,e){return(1-e)*r+e*t}function Hs(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function gn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class ie{constructor(t=0,e=0){ie.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,i,s,o,a,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],f=n[5],_=n[8],g=i[0],p=i[3],m=i[6],M=i[1],v=i[4],S=i[7],A=i[2],w=i[5],T=i[8];return s[0]=o*g+a*M+l*A,s[3]=o*p+a*v+l*w,s[6]=o*m+a*S+l*T,s[1]=c*g+u*M+d*A,s[4]=c*p+u*v+d*w,s[7]=c*m+u*S+d*T,s[2]=h*g+f*M+_*A,s[5]=h*p+f*v+_*w,s[8]=h*m+f*S+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=u*o-a*c,h=a*l-u*s,f=c*s-o*l,_=e*d+n*h+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=d*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=h*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(_l.makeScale(t,e)),this}rotate(t){return this.premultiply(_l.makeRotation(-t)),this}translate(t,e){return this.premultiply(_l.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _l=new Zt;function ld(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ha(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Km(){const r=Ha("canvas");return r.style.display="block",r}const lh={};function cd(r){r in lh||(lh[r]=!0,console.warn(r))}function jm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const ch=new Zt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new Zt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fo={[lr]:{transfer:Fa,primaries:Ba,toReference:r=>r,fromReference:r=>r},[ai]:{transfer:Te,primaries:Ba,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[nl]:{transfer:Fa,primaries:za,toReference:r=>r.applyMatrix3(uh),fromReference:r=>r.applyMatrix3(ch)},[xu]:{transfer:Te,primaries:za,toReference:r=>r.convertSRGBToLinear().applyMatrix3(uh),fromReference:r=>r.applyMatrix3(ch).convertLinearToSRGB()}},Zm=new Set([lr,nl]),me={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!Zm.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,t,e){if(this.enabled===!1||t===e||!t||!e)return r;const n=Fo[t].toReference,i=Fo[e].fromReference;return i(n(r))},fromWorkingColorSpace:function(r,t){return this.convert(r,this._workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this._workingColorSpace)},getPrimaries:function(r){return Fo[r].primaries},getTransfer:function(r){return r===Xi?Fa:Fo[r].transfer}};function Ms(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function gl(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Xr;class Jm{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xr===void 0&&(Xr=Ha("canvas")),Xr.width=t.width,Xr.height=t.height;const n=Xr.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xr}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ha("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ms(e[n]/255)*255):e[n]=Ms(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Qm=0;class ud{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qm++}),this.uuid=Po(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(vl(i[o].image)):s.push(vl(i[o]))}else s=vl(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function vl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Jm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let t_=0;class _n extends zs{constructor(t=_n.DEFAULT_IMAGE,e=_n.DEFAULT_MAPPING,n=br,i=br,s=si,o=wr,a=oi,l=Di,c=_n.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=Po(),this.name="",this.source=new ud(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case hc:t.x=t.x-Math.floor(t.x);break;case br:t.x=t.x<0?0:1;break;case fc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case hc:t.y=t.y-Math.floor(t.y);break;case br:t.y=t.y<0?0:1;break;case fc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Kf;_n.DEFAULT_ANISOTROPY=1;class be{constructor(t=0,e=0,n=0,i=1){be.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],u=l[4],d=l[8],h=l[1],f=l[5],_=l[9],g=l[2],p=l[6],m=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+g)<.1&&Math.abs(_+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const v=(c+1)/2,S=(f+1)/2,A=(m+1)/2,w=(u+h)/4,T=(d+g)/4,C=(_+p)/4;return v>S&&v>A?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=T/n):S>A?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=T/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((p-_)*(p-_)+(d-g)*(d-g)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(p-_)/M,this.y=(d-g)/M,this.z=(h-u)/M,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class e_ extends zs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new _n(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ud(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends e_{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class hd extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class n_ extends _n{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Kn,this.minFilter=Kn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lo{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],d=n[i+3];const h=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d;return}if(a===1){t[e+0]=h,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==h||c!==f||u!==_){let p=1-a;const m=l*h+c*f+u*_+d*g,M=m>=0?1:-1,v=1-m*m;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,m*M);p=Math.sin(p*w)/A,a=Math.sin(a*w)/A}const S=a*M;if(l=l*p+h*S,c=c*p+f*S,u=u*p+_*S,d=d*p+g*S,p===1-a){const A=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=A,c*=A,u*=A,d*=A}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],d=s[o],h=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+u*d+l*f-c*h,t[e+1]=l*_+u*h+c*d-a*f,t[e+2]=c*_+u*f+a*h-l*d,t[e+3]=u*_-a*d-l*h-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),d=a(s/2),h=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"YXZ":this._x=h*u*d+c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"ZXY":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d-h*f*_;break;case"ZYX":this._x=h*u*d-c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d+h*f*_;break;case"YZX":this._x=h*u*d+c*f*_,this._y=c*f*d+h*u*_,this._z=c*u*_-h*f*d,this._w=c*u*d-h*f*_;break;case"XZY":this._x=h*u*d-c*f*_,this._y=c*f*d-h*u*_,this._z=c*u*_+h*f*d,this._w=c*u*d+h*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],d=e[10],h=n+a+d;if(h>0){const f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){const f=2*Math.sqrt(1+n-a-d);this._w=(u-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){const f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(sn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),d=Math.sin((1-e)*u)/c,h=Math.sin(e*u)/c;return this._w=o*d+this._w*h,this._x=n*d+this._x*h,this._y=i*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(t=0,e=0,n=0){O.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(hh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(hh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*u,this.y=n+l*u+a*c-s*d,this.z=i+l*d+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xl.copy(this).projectOnVector(t),this.sub(xl)}reflect(t){return this.sub(xl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(sn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new O,hh=new Lo;class Do{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ei.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ei.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ei.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ei):ei.fromBufferAttribute(s,o),ei.applyMatrix4(t.matrixWorld),this.expandByPoint(ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Bo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Bo.copy(n.boundingBox)),Bo.applyMatrix4(t.matrixWorld),this.union(Bo)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,ei),ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),zo.subVectors(this.max,Vs),Yr.subVectors(t.a,Vs),qr.subVectors(t.b,Vs),$r.subVectors(t.c,Vs),Oi.subVectors(qr,Yr),Fi.subVectors($r,qr),ur.subVectors(Yr,$r);let e=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-ur.z,ur.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,ur.z,0,-ur.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-ur.y,ur.x,0];return!Ml(e,Yr,qr,$r,zo)||(e=[1,0,0,0,1,0,0,0,1],!Ml(e,Yr,qr,$r,zo))?!1:(ko.crossVectors(Oi,Fi),e=[ko.x,ko.y,ko.z],Ml(e,Yr,qr,$r,zo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vi=[new O,new O,new O,new O,new O,new O,new O,new O],ei=new O,Bo=new Do,Yr=new O,qr=new O,$r=new O,Oi=new O,Fi=new O,ur=new O,Vs=new O,zo=new O,ko=new O,hr=new O;function Ml(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){hr.fromArray(r,s);const a=i.x*Math.abs(hr.x)+i.y*Math.abs(hr.y)+i.z*Math.abs(hr.z),l=t.dot(hr),c=e.dot(hr),u=n.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const i_=new Do,Gs=new O,Sl=new O;class Io{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):i_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);const e=Gs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(Sl)),this.expandByPoint(Gs.copy(t.center).sub(Sl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new O,yl=new O,Ho=new O,Bi=new O,El=new O,Vo=new O,Tl=new O;class Mu{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,xi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=xi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(xi.copy(this.origin).addScaledVector(this.direction,e),xi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){yl.copy(t).add(e).multiplyScalar(.5),Ho.copy(e).sub(t).normalize(),Bi.copy(this.origin).sub(yl);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Ho),a=Bi.dot(this.direction),l=-Bi.dot(Ho),c=Bi.lengthSq(),u=Math.abs(1-o*o);let d,h,f,_;if(u>0)if(d=o*l-a,h=o*a-l,_=s*u,d>=0)if(h>=-_)if(h<=_){const g=1/u;d*=g,h*=g,f=d*(d+o*h+2*a)+h*(o*d+h+2*l)+c}else h=s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;else h<=-_?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c):h<=_?(d=0,h=Math.min(Math.max(-s,-l),s),f=h*(h+2*l)+c):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+h*(h+2*l)+c);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),f=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(yl).addScaledVector(Ho,h),f}intersectSphere(t,e){xi.subVectors(t.center,this.origin);const n=xi.dot(this.direction),i=xi.dot(xi)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(t.min.x-h.x)*c,i=(t.max.x-h.x)*c):(n=(t.max.x-h.x)*c,i=(t.min.x-h.x)*c),u>=0?(s=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-h.z)*d,l=(t.max.z-h.z)*d):(a=(t.max.z-h.z)*d,l=(t.min.z-h.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,xi)!==null}intersectTriangle(t,e,n,i,s){El.subVectors(e,t),Vo.subVectors(n,t),Tl.crossVectors(El,Vo);let o=this.direction.dot(Tl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Bi.subVectors(this.origin,t);const l=a*this.direction.dot(Vo.crossVectors(Bi,Vo));if(l<0)return null;const c=a*this.direction.dot(El.cross(Bi));if(c<0||l+c>o)return null;const u=-a*Bi.dot(Tl);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class we{constructor(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p){we.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p)}set(t,e,n,i,s,o,a,l,c,u,d,h,f,_,g,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=h,m[3]=f,m[7]=_,m[11]=g,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new we().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Kr.setFromMatrixColumn(t,0).length(),s=1/Kr.setFromMatrixColumn(t,1).length(),o=1/Kr.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=h-g*c,e[9]=-a*l,e[2]=g-h*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*u,e[9]=-a,e[2]=f*a-_,e[6]=g+h*a,e[10]=o*l}else if(t.order==="ZXY"){const h=l*u,f=l*d,_=c*u,g=c*d;e[0]=h-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*u,e[9]=g-h*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const h=o*u,f=o*d,_=a*u,g=a*d;e[0]=l*u,e[4]=_*c-f,e[8]=h*c+g,e[1]=l*d,e[5]=g*c+h,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=g-h*d,e[8]=_*d+f,e[1]=d,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=f*d+_,e[10]=h-g*d}else if(t.order==="XZY"){const h=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*u,e[4]=-d,e[8]=c*u,e[1]=h*d+g,e[5]=o*u,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*u,e[10]=g*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(r_,t,s_)}lookAt(t,e,n){const i=this.elements;return Rn.subVectors(t,e),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),zi.crossVectors(n,Rn),zi.lengthSq()===0&&(Math.abs(n.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),zi.crossVectors(n,Rn)),zi.normalize(),Go.crossVectors(Rn,zi),i[0]=zi.x,i[4]=Go.x,i[8]=Rn.x,i[1]=zi.y,i[5]=Go.y,i[9]=Rn.y,i[2]=zi.z,i[6]=Go.z,i[10]=Rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],f=n[13],_=n[2],g=n[6],p=n[10],m=n[14],M=n[3],v=n[7],S=n[11],A=n[15],w=i[0],T=i[4],C=i[8],y=i[12],x=i[1],P=i[5],U=i[9],z=i[13],q=i[2],$=i[6],X=i[10],V=i[14],H=i[3],st=i[7],L=i[11],ct=i[15];return s[0]=o*w+a*x+l*q+c*H,s[4]=o*T+a*P+l*$+c*st,s[8]=o*C+a*U+l*X+c*L,s[12]=o*y+a*z+l*V+c*ct,s[1]=u*w+d*x+h*q+f*H,s[5]=u*T+d*P+h*$+f*st,s[9]=u*C+d*U+h*X+f*L,s[13]=u*y+d*z+h*V+f*ct,s[2]=_*w+g*x+p*q+m*H,s[6]=_*T+g*P+p*$+m*st,s[10]=_*C+g*U+p*X+m*L,s[14]=_*y+g*z+p*V+m*ct,s[3]=M*w+v*x+S*q+A*H,s[7]=M*T+v*P+S*$+A*st,s[11]=M*C+v*U+S*X+A*L,s[15]=M*y+v*z+S*V+A*ct,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],d=t[6],h=t[10],f=t[14],_=t[3],g=t[7],p=t[11],m=t[15];return _*(+s*l*d-i*c*d-s*a*h+n*c*h+i*a*f-n*l*f)+g*(+e*l*f-e*c*h+s*o*h-i*o*f+i*c*u-s*l*u)+p*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*u-n*c*u)+m*(-i*a*u-e*l*d+e*a*h+i*o*d-n*o*h+n*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],d=t[9],h=t[10],f=t[11],_=t[12],g=t[13],p=t[14],m=t[15],M=d*p*c-g*h*c+g*l*f-a*p*f-d*l*m+a*h*m,v=_*h*c-u*p*c-_*l*f+o*p*f+u*l*m-o*h*m,S=u*g*c-_*d*c+_*a*f-o*g*f-u*a*m+o*d*m,A=_*d*l-u*g*l-_*a*h+o*g*h+u*a*p-o*d*p,w=e*M+n*v+i*S+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return t[0]=M*T,t[1]=(g*h*s-d*p*s-g*i*f+n*p*f+d*i*m-n*h*m)*T,t[2]=(a*p*s-g*l*s+g*i*c-n*p*c-a*i*m+n*l*m)*T,t[3]=(d*l*s-a*h*s-d*i*c+n*h*c+a*i*f-n*l*f)*T,t[4]=v*T,t[5]=(u*p*s-_*h*s+_*i*f-e*p*f-u*i*m+e*h*m)*T,t[6]=(_*l*s-o*p*s-_*i*c+e*p*c+o*i*m-e*l*m)*T,t[7]=(o*h*s-u*l*s+u*i*c-e*h*c-o*i*f+e*l*f)*T,t[8]=S*T,t[9]=(_*d*s-u*g*s-_*n*f+e*g*f+u*n*m-e*d*m)*T,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*m+e*a*m)*T,t[11]=(u*a*s-o*d*s-u*n*c+e*d*c+o*n*f-e*a*f)*T,t[12]=A*T,t[13]=(u*g*i-_*d*i+_*n*h-e*g*h-u*n*p+e*d*p)*T,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*p-e*a*p)*T,t[15]=(o*d*i-u*a*i+u*n*l-e*d*l-o*n*h+e*a*h)*T,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,d=a+a,h=s*c,f=s*u,_=s*d,g=o*u,p=o*d,m=a*d,M=l*c,v=l*u,S=l*d,A=n.x,w=n.y,T=n.z;return i[0]=(1-(g+m))*A,i[1]=(f+S)*A,i[2]=(_-v)*A,i[3]=0,i[4]=(f-S)*w,i[5]=(1-(h+m))*w,i[6]=(p+M)*w,i[7]=0,i[8]=(_+v)*T,i[9]=(p-M)*T,i[10]=(1-(h+g))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Kr.set(i[0],i[1],i[2]).length();const o=Kr.set(i[4],i[5],i[6]).length(),a=Kr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ni.copy(this);const c=1/s,u=1/o,d=1/a;return ni.elements[0]*=c,ni.elements[1]*=c,ni.elements[2]*=c,ni.elements[4]*=u,ni.elements[5]*=u,ni.elements[6]*=u,ni.elements[8]*=d,ni.elements[9]*=d,ni.elements[10]*=d,e.setFromRotationMatrix(ni),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Ri){const l=this.elements,c=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),h=(n+i)/(n-i);let f,_;if(a===Ri)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===ka)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Ri){const l=this.elements,c=1/(e-t),u=1/(n-i),d=1/(o-s),h=(e+t)*c,f=(n+i)*u;let _,g;if(a===Ri)_=(o+s)*d,g=-2*d;else if(a===ka)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Kr=new O,ni=new we,r_=new O(0,0,0),s_=new O(1,1,1),zi=new O,Go=new O,Rn=new O,fh=new we,dh=new Lo;class _i{constructor(t=0,e=0,n=0,i=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],d=i[2],h=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-sn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-sn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(sn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return fh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(fh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return dh.setFromEuler(this),this.setFromQuaternion(dh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class fd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let o_=0;const ph=new O,jr=new Lo,Mi=new we,Wo=new O,Ws=new O,a_=new O,l_=new Lo,mh=new O(1,0,0),_h=new O(0,1,0),gh=new O(0,0,1),vh={type:"added"},c_={type:"removed"},Zr={type:"childadded",child:null},bl={type:"childremoved",child:null};class $e extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=Po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$e.DEFAULT_UP.clone();const t=new O,e=new _i,n=new Lo,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new we},normalMatrix:{value:new Zt}}),this.matrix=new we,this.matrixWorld=new we,this.matrixAutoUpdate=$e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.multiply(jr),this}rotateOnWorldAxis(t,e){return jr.setFromAxisAngle(t,e),this.quaternion.premultiply(jr),this}rotateX(t){return this.rotateOnAxis(mh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(gh,t)}translateOnAxis(t,e){return ph.copy(t).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(gh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wo.copy(t):Wo.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mi.lookAt(Ws,Wo,this.up):Mi.lookAt(Wo,Ws,this.up),this.quaternion.setFromRotationMatrix(Mi),i&&(Mi.extractRotation(i.matrixWorld),jr.setFromRotationMatrix(Mi),this.quaternion.premultiply(jr.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(c_),bl.child=t,this.dispatchEvent(bl),bl.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mi.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),Zr.child=t,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,a_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,l_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),d=o(t.shapes),h=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}$e.DEFAULT_UP=new O(0,1,0);$e.DEFAULT_MATRIX_AUTO_UPDATE=!0;$e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ii=new O,Si=new O,wl=new O,yi=new O,Jr=new O,Qr=new O,xh=new O,Al=new O,Cl=new O,Rl=new O;class hi{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),ii.subVectors(t,e),i.cross(ii);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){ii.subVectors(i,e),Si.subVectors(n,e),wl.subVectors(t,e);const o=ii.dot(ii),a=ii.dot(Si),l=ii.dot(wl),c=Si.dot(Si),u=Si.dot(wl),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;const h=1/d,f=(c*l-a*u)*h,_=(o*u-a*l)*h;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(o,yi.y),l.addScaledVector(a,yi.z),l)}static isFrontFacing(t,e,n,i){return ii.subVectors(n,e),Si.subVectors(t,e),ii.cross(Si).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ii.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),ii.cross(Si).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return hi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return hi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return hi.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return hi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return hi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Jr.subVectors(i,n),Qr.subVectors(s,n),Al.subVectors(t,n);const l=Jr.dot(Al),c=Qr.dot(Al);if(l<=0&&c<=0)return e.copy(n);Cl.subVectors(t,i);const u=Jr.dot(Cl),d=Qr.dot(Cl);if(u>=0&&d<=u)return e.copy(i);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(Jr,o);Rl.subVectors(t,s);const f=Jr.dot(Rl),_=Qr.dot(Rl);if(_>=0&&f<=_)return e.copy(s);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Qr,a);const p=u*_-f*d;if(p<=0&&d-u>=0&&f-_>=0)return xh.subVectors(s,i),a=(d-u)/(d-u+(f-_)),e.copy(i).addScaledVector(xh,a);const m=1/(p+g+h);return o=g*m,a=h*m,e.copy(n).addScaledVector(Jr,o).addScaledVector(Qr,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},Xo={h:0,s:0,l:0};function Pl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=$m(t,1),e=sn(e,0,1),n=sn(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Pl(o,s,t+1/3),this.g=Pl(o,s,t),this.b=Pl(o,s,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=ai){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ai){const n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ms(t.r),this.g=Ms(t.g),this.b=Ms(t.b),this}copyLinearToSRGB(t){return this.r=gl(t.r),this.g=gl(t.g),this.b=gl(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ai){return me.fromWorkingColorSpace(en.copy(this),t),Math.round(sn(en.r*255,0,255))*65536+Math.round(sn(en.g*255,0,255))*256+Math.round(sn(en.b*255,0,255))}getHexString(t=ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(en.copy(this),e);const n=en.r,i=en.g,s=en.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const d=o-a;switch(c=u<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(en.copy(this),e),t.r=en.r,t.g=en.g,t.b=en.b,t}getStyle(t=ai){me.fromWorkingColorSpace(en.copy(this),t);const e=en.r,n=en.g,i=en.b;return t!==ai?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ki),this.setHSL(ki.h+t,ki.s+e,ki.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ki),t.getHSL(Xo);const n=ml(ki.h,Xo.h,e),i=ml(ki.s,Xo.s,e),s=ml(ki.l,Xo.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new Yt;Yt.NAMES=dd;let u_=0;class Hr extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=Po(),this.name="",this.type="Material",this.blending=vs,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=lc,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=Oa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(n.blending=this.blending),this.side!==nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ac&&(n.blendSrc=this.blendSrc),this.blendDst!==lc&&(n.blendDst=this.blendDst),this.blendEquation!==Er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class Su extends Hr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Oe=new O,Yo=new ie;class Jn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ci,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return cd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yo.fromBufferAttribute(this,e),Yo.applyMatrix3(t),this.setXY(e,Yo.x,Yo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix3(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyMatrix4(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.applyNormalMatrix(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Oe.fromBufferAttribute(this,e),Oe.transformDirection(t),this.setXYZ(e,Oe.x,Oe.y,Oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Hs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=gn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Hs(e,this.array)),e}setX(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Hs(e,this.array)),e}setY(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Hs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Hs(e,this.array)),e}setW(t,e){return this.normalized&&(e=gn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=gn(e,this.array),n=gn(n,this.array),i=gn(i,this.array),s=gn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oh&&(t.usage=this.usage),t}}class pd extends Jn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class md extends Jn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Je extends Jn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let h_=0;const Xn=new we,Ll=new $e,ts=new O,Pn=new Do,Xs=new Do,Xe=new O;class bn extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h_++}),this.uuid=Po(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ld(t)?md:pd)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xn.makeRotationFromQuaternion(t),this.applyMatrix4(Xn),this}rotateX(t){return Xn.makeRotationX(t),this.applyMatrix4(Xn),this}rotateY(t){return Xn.makeRotationY(t),this.applyMatrix4(Xn),this}rotateZ(t){return Xn.makeRotationZ(t),this.applyMatrix4(Xn),this}translate(t,e,n){return Xn.makeTranslation(t,e,n),this.applyMatrix4(Xn),this}scale(t,e,n){return Xn.makeScale(t,e,n),this.applyMatrix4(Xn),this}lookAt(t){return Ll.lookAt(t),Ll.updateMatrix(),this.applyMatrix4(Ll.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const s=t[n];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Je(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Do);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xe.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Xe),Xe.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Xe)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Io);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){const n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Xe.addVectors(Pn.min,Xs.min),Pn.expandByPoint(Xe),Xe.addVectors(Pn.max,Xs.max),Pn.expandByPoint(Xe)):(Pn.expandByPoint(Xs.min),Pn.expandByPoint(Xs.max))}Pn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Xe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Xe));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Xe.fromBufferAttribute(a,c),l&&(ts.fromBufferAttribute(t,c),Xe.add(ts)),i=Math.max(i,n.distanceToSquared(Xe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Jn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new O,l[C]=new O;const c=new O,u=new O,d=new O,h=new ie,f=new ie,_=new ie,g=new O,p=new O;function m(C,y,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,y),d.fromBufferAttribute(n,x),h.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,x),u.sub(c),d.sub(c),f.sub(h),_.sub(h);const P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(u).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(u,-_.x).multiplyScalar(P),a[C].add(g),a[y].add(g),a[x].add(g),l[C].add(p),l[y].add(p),l[x].add(p))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){const x=M[C],P=x.start,U=x.count;for(let z=P,q=P+U;z<q;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const v=new O,S=new O,A=new O,w=new O;function T(C){A.fromBufferAttribute(i,C),w.copy(A);const y=a[C];v.copy(y),v.sub(A.multiplyScalar(A.dot(y))).normalize(),S.crossVectors(w,y);const P=S.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,y=M.length;C<y;++C){const x=M[C],P=x.start,U=x.count;for(let z=P,q=P+U;z<q;z+=3)T(t.getX(z+0)),T(t.getX(z+1)),T(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Jn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);const i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,d=new O;if(t)for(let h=0,f=t.count;h<f;h+=3){const _=t.getX(h+0),g=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),a.add(u),l.add(u),c.add(u),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Xe.fromBufferAttribute(t,e),Xe.normalize(),t.setXYZ(e,Xe.x,Xe.y,Xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,d=a.normalized,h=new c.constructor(l.length*u);let f=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*u;for(let m=0;m<u;m++)h[_++]=c[f++]}return new Jn(h,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new bn,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,d=c.length;u<d;u++){const h=c[u],f=t(h,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const f=c[d];u.push(f.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(e))}const s=t.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mh=new we,fr=new Mu,qo=new Io,Sh=new O,es=new O,ns=new O,is=new O,Dl=new O,$o=new O,Ko=new ie,jo=new ie,Zo=new ie,yh=new O,Eh=new O,Th=new O,Jo=new O,Qo=new O;class Bn extends $e{constructor(t=new bn,e=new Su){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){$o.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],d=s[l];u!==0&&(Dl.fromBufferAttribute(d,t),o?$o.addScaledVector(Dl,u):$o.addScaledVector(Dl.sub(e),u))}e.add($o)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qo.copy(n.boundingSphere),qo.applyMatrix4(s),fr.copy(t.ray).recast(t.near),!(qo.containsPoint(fr.origin)===!1&&(fr.intersectSphere(qo,Sh)===null||fr.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Mh.copy(s).invert(),fr.copy(t.ray).applyMatrix4(Mh),!(n.boundingBox!==null&&fr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,fr)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,A=v;S<A;S+=3){const w=a.getX(S),T=a.getX(S+1),C=a.getX(S+2);i=ta(this,m,t,n,c,u,d,w,T,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=a.getX(p),v=a.getX(p+1),S=a.getX(p+2);i=ta(this,o,t,n,c,u,d,M,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=h.length;_<g;_++){const p=h[_],m=o[p.materialIndex],M=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=M,A=v;S<A;S+=3){const w=S,T=S+1,C=S+2;i=ta(this,m,t,n,c,u,d,w,T,C),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let p=_,m=g;p<m;p+=3){const M=p,v=p+1,S=p+2;i=ta(this,o,t,n,c,u,d,M,v,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function f_(r,t,e,n,i,s,o,a){let l;if(t.side===Mn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===nr,a),l===null)return null;Qo.copy(a),Qo.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Qo);return c<e.near||c>e.far?null:{distance:c,point:Qo.clone(),object:r}}function ta(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,es),r.getVertexPosition(l,ns),r.getVertexPosition(c,is);const u=f_(r,t,e,n,es,ns,is,Jo);if(u){i&&(Ko.fromBufferAttribute(i,a),jo.fromBufferAttribute(i,l),Zo.fromBufferAttribute(i,c),u.uv=hi.getInterpolation(Jo,es,ns,is,Ko,jo,Zo,new ie)),s&&(Ko.fromBufferAttribute(s,a),jo.fromBufferAttribute(s,l),Zo.fromBufferAttribute(s,c),u.uv1=hi.getInterpolation(Jo,es,ns,is,Ko,jo,Zo,new ie)),o&&(yh.fromBufferAttribute(o,a),Eh.fromBufferAttribute(o,l),Th.fromBufferAttribute(o,c),u.normal=hi.getInterpolation(Jo,es,ns,is,yh,Eh,Th,new O),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};hi.getNormal(es,ns,is,d.normal),u.face=d}return u}class Uo extends bn{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],d=[];let h=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(u,3)),this.setAttribute("uv",new Je(d,2));function _(g,p,m,M,v,S,A,w,T,C,y){const x=S/T,P=A/C,U=S/2,z=A/2,q=w/2,$=T+1,X=C+1;let V=0,H=0;const st=new O;for(let L=0;L<X;L++){const ct=L*P-z;for(let Nt=0;Nt<$;Nt++){const qt=Nt*x-U;st[g]=qt*M,st[p]=ct*v,st[m]=q,c.push(st.x,st.y,st.z),st[g]=0,st[p]=0,st[m]=w>0?1:-1,u.push(st.x,st.y,st.z),d.push(Nt/T),d.push(1-L/C),V+=1}}for(let L=0;L<C;L++)for(let ct=0;ct<T;ct++){const Nt=h+ct+$*L,qt=h+ct+$*(L+1),K=h+(ct+1)+$*(L+1),nt=h+(ct+1)+$*L;l.push(Nt,qt,nt),l.push(qt,K,nt),H+=6}a.addGroup(f,H,y),f+=H,h+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ds(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function hn(r){const t={};for(let e=0;e<r.length;e++){const n=Ds(r[e]);for(const i in n)t[i]=n[i]}return t}function d_(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function _d(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}const p_={clone:Ds,merge:hn};var m_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,__=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ir extends Hr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=m_,this.fragmentShader=__,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=d_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class gd extends $e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new we,this.projectionMatrix=new we,this.projectionMatrixInverse=new we,this.coordinateSystem=Ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new O,bh=new ie,wh=new ie;class Un extends gd{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=zc*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(pl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zc*2*Math.atan(Math.tan(pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-t/Hi.z)}getViewSize(t,e){return this.getViewBounds(t,bh,wh),e.subVectors(wh,bh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(pl*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const rs=-90,ss=1;class g_ extends $e{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(rs,ss,t,e);i.layers=this.layers,this.add(i);const s=new Un(rs,ss,t,e);s.layers=this.layers,this.add(s);const o=new Un(rs,ss,t,e);o.layers=this.layers,this.add(o);const a=new Un(rs,ss,t,e);a.layers=this.layers,this.add(a);const l=new Un(rs,ss,t,e);l.layers=this.layers,this.add(l);const c=new Un(rs,ss,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===Ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class vd extends _n{constructor(t,e,n,i,s,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class v_ extends Fr{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:si}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Uo(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Mn,blending:Zi});s.uniforms.tEquirect.value=e;const o=new Bn(i,s),a=e.minFilter;return e.minFilter===wr&&(e.minFilter=si),new g_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const Il=new O,x_=new O,M_=new Zt;class vr{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Il.subVectors(n,e).cross(x_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Il),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||M_.getNormalMatrix(t),i=this.coplanarPoint(Il).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Io,ea=new O;class yu{constructor(t=new vr,e=new vr,n=new vr,i=new vr,s=new vr,o=new vr){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ri){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],d=i[6],h=i[7],f=i[8],_=i[9],g=i[10],p=i[11],m=i[12],M=i[13],v=i[14],S=i[15];if(n[0].setComponents(l-s,h-c,p-f,S-m).normalize(),n[1].setComponents(l+s,h+c,p+f,S+m).normalize(),n[2].setComponents(l+o,h+u,p+_,S+M).normalize(),n[3].setComponents(l-o,h-u,p-_,S-M).normalize(),n[4].setComponents(l-a,h-d,p-g,S-v).normalize(),e===Ri)n[5].setComponents(l+a,h+d,p+g,S+v).normalize();else if(e===ka)n[5].setComponents(a,d,g,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(t){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(ea.x=i.normal.x>0?t.max.x:t.min.x,ea.y=i.normal.y>0?t.max.y:t.min.y,ea.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(ea)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xd(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function S_(r){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,d=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){const u=l.array,d=l._updateRange,h=l.updateRanges;if(r.bindBuffer(c,a),d.count===-1&&h.length===0&&r.bufferSubData(c,0,u),h.length!==0){for(let f=0,_=h.length;f<_;f++){const g=h[f];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}d.count!==-1&&(r.bufferSubData(c,d.offset*u.BYTES_PER_ELEMENT,u,d.offset,d.count),d.count=-1),l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class il extends bn{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,d=t/a,h=e/l,f=[],_=[],g=[],p=[];for(let m=0;m<u;m++){const M=m*h-o;for(let v=0;v<c;v++){const S=v*d-s;_.push(S,-M,0),g.push(0,0,1),p.push(v/a),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let M=0;M<a;M++){const v=M+c*m,S=M+c*(m+1),A=M+1+c*(m+1),w=M+1+c*m;f.push(v,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new il(t.width,t.height,t.widthSegments,t.heightSegments)}}var y_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,T_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,b_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,w_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,R_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,N_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,O_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,G_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,W_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,X_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Y_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,q_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,K_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,tg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ug=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Mg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ig=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,o0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,c0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,u0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,h0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,f0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,m0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,v0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const S0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,C0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,R0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,P0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,L0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,D0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,I0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,U0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,N0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,O0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,V0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,G0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,W0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,j0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Q0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jt={alphahash_fragment:y_,alphahash_pars_fragment:E_,alphamap_fragment:T_,alphamap_pars_fragment:b_,alphatest_fragment:w_,alphatest_pars_fragment:A_,aomap_fragment:C_,aomap_pars_fragment:R_,batching_pars_vertex:P_,batching_vertex:L_,begin_vertex:D_,beginnormal_vertex:I_,bsdfs:U_,iridescence_fragment:N_,bumpmap_pars_fragment:O_,clipping_planes_fragment:F_,clipping_planes_pars_fragment:B_,clipping_planes_pars_vertex:z_,clipping_planes_vertex:k_,color_fragment:H_,color_pars_fragment:V_,color_pars_vertex:G_,color_vertex:W_,common:X_,cube_uv_reflection_fragment:Y_,defaultnormal_vertex:q_,displacementmap_pars_vertex:$_,displacementmap_vertex:K_,emissivemap_fragment:j_,emissivemap_pars_fragment:Z_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:rg,fog_vertex:sg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:ug,lights_lambert_fragment:hg,lights_lambert_pars_fragment:fg,lights_pars_begin:dg,lights_toon_fragment:mg,lights_toon_pars_fragment:_g,lights_phong_fragment:gg,lights_phong_pars_fragment:vg,lights_physical_fragment:xg,lights_physical_pars_fragment:Mg,lights_fragment_begin:Sg,lights_fragment_maps:yg,lights_fragment_end:Eg,logdepthbuf_fragment:Tg,logdepthbuf_pars_fragment:bg,logdepthbuf_pars_vertex:wg,logdepthbuf_vertex:Ag,map_fragment:Cg,map_pars_fragment:Rg,map_particle_fragment:Pg,map_particle_pars_fragment:Lg,metalnessmap_fragment:Dg,metalnessmap_pars_fragment:Ig,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Og,morphtarget_pars_vertex:Fg,morphtarget_vertex:Bg,normal_fragment_begin:zg,normal_fragment_maps:kg,normal_pars_fragment:Hg,normal_pars_vertex:Vg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:Yg,clearcoat_pars_fragment:qg,iridescence_pars_fragment:$g,opaque_fragment:Kg,packing:jg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:t0,roughnessmap_fragment:e0,roughnessmap_pars_fragment:n0,shadowmap_pars_fragment:i0,shadowmap_pars_vertex:r0,shadowmap_vertex:s0,shadowmask_pars_fragment:o0,skinbase_vertex:a0,skinning_pars_vertex:l0,skinning_vertex:c0,skinnormal_vertex:u0,specularmap_fragment:h0,specularmap_pars_fragment:f0,tonemapping_fragment:d0,tonemapping_pars_fragment:p0,transmission_fragment:m0,transmission_pars_fragment:_0,uv_pars_fragment:g0,uv_pars_vertex:v0,uv_vertex:x0,worldpos_vertex:M0,background_vert:S0,background_frag:y0,backgroundCube_vert:E0,backgroundCube_frag:T0,cube_vert:b0,cube_frag:w0,depth_vert:A0,depth_frag:C0,distanceRGBA_vert:R0,distanceRGBA_frag:P0,equirect_vert:L0,equirect_frag:D0,linedashed_vert:I0,linedashed_frag:U0,meshbasic_vert:N0,meshbasic_frag:O0,meshlambert_vert:F0,meshlambert_frag:B0,meshmatcap_vert:z0,meshmatcap_frag:k0,meshnormal_vert:H0,meshnormal_frag:V0,meshphong_vert:G0,meshphong_frag:W0,meshphysical_vert:X0,meshphysical_frag:Y0,meshtoon_vert:q0,meshtoon_frag:$0,points_vert:K0,points_frag:j0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:Q0,sprite_frag:tv},_t={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ui={basic:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:hn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:hn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:hn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:hn([_t.points,_t.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:hn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:hn([_t.common,_t.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:hn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:hn([_t.sprite,_t.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:hn([_t.common,_t.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:hn([_t.lights,_t.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ui.physical={uniforms:hn([ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const na={r:0,b:0,g:0},pr=new _i,ev=new we;function nv(r,t,e,n,i,s,o){const a=new Yt(0);let l=s===!0?0:1,c,u,d=null,h=0,f=null;function _(M){let v=M.isScene===!0?M.background:null;return v&&v.isTexture&&(v=(M.backgroundBlurriness>0?e:t).get(v)),v}function g(M){let v=!1;const S=_(M);S===null?m(a,l):S&&S.isColor&&(m(S,1),v=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(M,v){const S=_(v);S&&(S.isCubeTexture||S.mapping===el)?(u===void 0&&(u=new Bn(new Uo(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:Ds(ui.backgroundCube.uniforms),vertexShader:ui.backgroundCube.vertexShader,fragmentShader:ui.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),pr.copy(v.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(ev.makeRotationFromEuler(pr)),u.material.toneMapped=me.getTransfer(S.colorSpace)!==Te,(d!==S||h!==S.version||f!==r.toneMapping)&&(u.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),u.layers.enableAll(),M.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Bn(new il(2,2),new ir({name:"BackgroundMaterial",uniforms:Ds(ui.background.uniforms),vertexShader:ui.background.vertexShader,fragmentShader:ui.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=me.getTransfer(S.colorSpace)!==Te,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||h!==S.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=S,h=S.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,v){M.getRGB(na,_d(r)),n.buffers.color.setClear(na.r,na.g,na.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(M,v=1){a.set(M),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,m(a,l)},render:g,addToRenderList:p}}function iv(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,o=!1;function a(x,P,U,z,q){let $=!1;const X=d(z,U,P);s!==X&&(s=X,c(s.object)),$=f(x,z,U,q),$&&_(x,z,U,q),q!==null&&t.update(q,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(x,P,U,z),q!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return r.createVertexArray()}function c(x){return r.bindVertexArray(x)}function u(x){return r.deleteVertexArray(x)}function d(x,P,U){const z=U.wireframe===!0;let q=n[x.id];q===void 0&&(q={},n[x.id]=q);let $=q[P.id];$===void 0&&($={},q[P.id]=$);let X=$[z];return X===void 0&&(X=h(l()),$[z]=X),X}function h(x){const P=[],U=[],z=[];for(let q=0;q<e;q++)P[q]=0,U[q]=0,z[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,P,U,z){const q=s.attributes,$=P.attributes;let X=0;const V=U.getAttributes();for(const H in V)if(V[H].location>=0){const L=q[H];let ct=$[H];if(ct===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor)),L===void 0||L.attribute!==ct||ct&&L.data!==ct.data)return!0;X++}return s.attributesNum!==X||s.index!==z}function _(x,P,U,z){const q={},$=P.attributes;let X=0;const V=U.getAttributes();for(const H in V)if(V[H].location>=0){let L=$[H];L===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(L=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(L=x.instanceColor));const ct={};ct.attribute=L,L&&L.data&&(ct.data=L.data),q[H]=ct,X++}s.attributes=q,s.attributesNum=X,s.index=z}function g(){const x=s.newAttributes;for(let P=0,U=x.length;P<U;P++)x[P]=0}function p(x){m(x,0)}function m(x,P){const U=s.newAttributes,z=s.enabledAttributes,q=s.attributeDivisors;U[x]=1,z[x]===0&&(r.enableVertexAttribArray(x),z[x]=1),q[x]!==P&&(r.vertexAttribDivisor(x,P),q[x]=P)}function M(){const x=s.newAttributes,P=s.enabledAttributes;for(let U=0,z=P.length;U<z;U++)P[U]!==x[U]&&(r.disableVertexAttribArray(U),P[U]=0)}function v(x,P,U,z,q,$,X){X===!0?r.vertexAttribIPointer(x,P,U,q,$):r.vertexAttribPointer(x,P,U,z,q,$)}function S(x,P,U,z){g();const q=z.attributes,$=U.getAttributes(),X=P.defaultAttributeValues;for(const V in $){const H=$[V];if(H.location>=0){let st=q[V];if(st===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(st=x.instanceColor)),st!==void 0){const L=st.normalized,ct=st.itemSize,Nt=t.get(st);if(Nt===void 0)continue;const qt=Nt.buffer,K=Nt.type,nt=Nt.bytesPerElement,ht=K===r.INT||K===r.UNSIGNED_INT||st.gpuType===du;if(st.isInterleavedBufferAttribute){const ut=st.data,bt=ut.stride,wt=st.offset;if(ut.isInstancedInterleavedBuffer){for(let Vt=0;Vt<H.locationSize;Vt++)m(H.location+Vt,ut.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Vt=0;Vt<H.locationSize;Vt++)p(H.location+Vt);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let Vt=0;Vt<H.locationSize;Vt++)v(H.location+Vt,ct/H.locationSize,K,L,bt*nt,(wt+ct/H.locationSize*Vt)*nt,ht)}else{if(st.isInstancedBufferAttribute){for(let ut=0;ut<H.locationSize;ut++)m(H.location+ut,st.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ut=0;ut<H.locationSize;ut++)p(H.location+ut);r.bindBuffer(r.ARRAY_BUFFER,qt);for(let ut=0;ut<H.locationSize;ut++)v(H.location+ut,ct/H.locationSize,K,L,ct*nt,ct/H.locationSize*ut*nt,ht)}}else if(X!==void 0){const L=X[V];if(L!==void 0)switch(L.length){case 2:r.vertexAttrib2fv(H.location,L);break;case 3:r.vertexAttrib3fv(H.location,L);break;case 4:r.vertexAttrib4fv(H.location,L);break;default:r.vertexAttrib1fv(H.location,L)}}}}M()}function A(){C();for(const x in n){const P=n[x];for(const U in P){const z=P[U];for(const q in z)u(z[q].object),delete z[q];delete P[U]}delete n[x]}}function w(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const U in P){const z=P[U];for(const q in z)u(z[q].object),delete z[q];delete P[U]}delete n[x.id]}function T(x){for(const P in n){const U=n[P];if(U[x.id]===void 0)continue;const z=U[x.id];for(const q in z)u(z[q].object),delete z[q];delete U[x.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:g,enableAttribute:p,disableUnusedAttributes:M}}function rv(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,d){d!==0&&(r.drawArraysInstanced(n,c,u,d),e.update(u,n,d))}function a(c,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let f=0;for(let _=0;_<d;_++)f+=u[_];e.update(f,n,1)}function l(c,u,d,h){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],u[_],h[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let _=0;for(let g=0;g<d;g++)_+=u[g];for(let g=0;g<h.length;g++)e.update(_,n,h[g])}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sv(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==oi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const T=w===Ro&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Di&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ci&&!T)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=e.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),m=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=f>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:A}}function ov(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new vr,a=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){const _=d.clippingPlanes,g=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!i||_===null||_.length===0||s&&!p)s?u(null):c();else{const M=s?0:n,v=M*4;let S=m.clippingState||null;l.value=S,S=u(_,h,v,f);for(let A=0;A!==v;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,_){const g=d!==null?d.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const m=f+g*4,M=h.matrixWorldInverse;a.getNormalMatrix(M),(p===null||p.length<m)&&(p=new Float32Array(m));for(let v=0,S=f;v!==g;++v,S+=4)o.copy(d[v]).applyMatrix4(M,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function av(r){let t=new WeakMap;function e(o,a){return a===cc?o.mapping=Cs:a===uc&&(o.mapping=Rs),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===cc||a===uc)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new v_(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Md extends gd{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ds=4,Ah=[.125,.215,.35,.446,.526,.582],Tr=20,Ul=new Md,Ch=new Yt;let Nl=null,Ol=0,Fl=0,Bl=!1;const xr=(1+Math.sqrt(5))/2,os=1/xr,Rh=[new O(-xr,os,0),new O(xr,os,0),new O(-os,0,xr),new O(os,0,xr),new O(0,xr,-os),new O(0,xr,os),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class Ph{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Nl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Nl,Ol,Fl),this._renderer.xr.enabled=Bl,t.scissorTest=!1,ia(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Nl=this._renderer.getRenderTarget(),Ol=this._renderer.getActiveCubeFace(),Fl=this._renderer.getActiveMipmapLevel(),Bl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:si,minFilter:si,generateMipmaps:!1,type:Ro,format:oi,colorSpace:lr,depthBuffer:!1},i=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lv(s)),this._blurMaterial=cv(s,t,e)}return i}_compileMaterial(t){const e=new Bn(this._lodPlanes[0],t);this._renderer.compile(e,Ul)}_sceneToCubeUV(t,e,n,i){const a=new Un(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,h=u.toneMapping;u.getClearColor(Ch),u.toneMapping=Ji,u.autoClear=!1;const f=new Su({name:"PMREM.Background",side:Mn,depthWrite:!1,depthTest:!1}),_=new Bn(new Uo,f);let g=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,g=!0):(f.color.copy(Ch),g=!0);for(let m=0;m<6;m++){const M=m%3;M===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):M===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const v=this._cubeSize;ia(i,M*v,m>2?v:0,v,v),u.setRenderTarget(i),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Cs||t.mapping===Rs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;ia(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Ul)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Rh[(i-s-1)%Rh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new Bn(this._lodPlanes[i],c),h=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Tr-1),g=s/_,p=isFinite(s)?1+Math.floor(u*g):Tr;p>Tr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Tr}`);const m=[];let M=0;for(let T=0;T<Tr;++T){const C=T/g,y=Math.exp(-C*C/2);m.push(y),T===0?M+=y:T<p&&(M+=2*y)}for(let T=0;T<m.length;T++)m[T]=m[T]/M;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=m,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=_,h.mipInt.value=v-n;const S=this._sizeLods[i],A=3*S*(i>v-ds?i-v+ds:0),w=4*(this._cubeSize-S);ia(e,A,w,3*S,2*S),l.setRenderTarget(e),l.render(d,Ul)}}function lv(r){const t=[],e=[],n=[];let i=r;const s=r-ds+1+Ah.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ds?l=Ah[o-r+ds-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],f=6,_=6,g=3,p=2,m=1,M=new Float32Array(g*_*f),v=new Float32Array(p*_*f),S=new Float32Array(m*_*f);for(let w=0;w<f;w++){const T=w%3*2/3-1,C=w>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];M.set(y,g*_*w),v.set(h,p*_*w);const x=[w,w,w,w,w,w];S.set(x,m*_*w)}const A=new bn;A.setAttribute("position",new Jn(M,g)),A.setAttribute("uv",new Jn(v,p)),A.setAttribute("faceIndex",new Jn(S,m)),t.push(A),i>ds&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(r,t,e){const n=new Fr(r,t,e);return n.texture.mapping=el,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ia(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cv(r,t,e){const n=new Float32Array(Tr),i=new O(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Dh(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Ih(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Eu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Eu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function uv(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===cc||l===uc,u=l===Cs||l===Rs;if(c||u){let d=t.get(a);const h=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return e===null&&(e=new Ph(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{const f=a.image;return c&&f&&f.height>0||u&&f&&i(f)?(e===null&&(e=new Ph(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function hv(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&cd("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function fv(r,t,e,n){const i={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&t.remove(h.index);for(const _ in h.attributes)t.remove(h.attributes[_]);for(const _ in h.morphAttributes){const g=h.morphAttributes[_];for(let p=0,m=g.length;p<m;p++)t.remove(g[p])}h.removeEventListener("dispose",o),delete i[h.id];const f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(d,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function l(d){const h=d.attributes;for(const _ in h)t.update(h[_],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const _ in f){const g=f[_];for(let p=0,m=g.length;p<m;p++)t.update(g[p],r.ARRAY_BUFFER)}}function c(d){const h=[],f=d.index,_=d.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let v=0,S=M.length;v<S;v+=3){const A=M[v+0],w=M[v+1],T=M[v+2];h.push(A,w,w,T,T,A)}}else if(_!==void 0){const M=_.array;g=_.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const A=v+0,w=v+1,T=v+2;h.push(A,w,w,T,T,A)}}else return;const p=new(ld(h)?md:pd)(h,1);p.version=g;const m=s.get(d);m&&t.remove(m),s.set(d,p)}function u(d){const h=s.get(d);if(h){const f=d.index;f!==null&&h.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:u}}function dv(r,t,e){let n;function i(h){n=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,f){r.drawElements(n,f,s,h*o),e.update(f,n,1)}function c(h,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,h*o,_),e.update(f,n,_))}function u(h,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,h,0,_);let p=0;for(let m=0;m<_;m++)p+=f[m];e.update(p,n,1)}function d(h,f,_,g){if(_===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<h.length;m++)c(h[m]/o,f[m],g[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,h,0,g,0,_);let m=0;for(let M=0;M<_;M++)m+=f[M];for(let M=0;M<g.length;M++)e.update(m,n,g[M])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function pv(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mv(r,t,e){const n=new WeakMap,i=new be;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(a);if(h===void 0||h.count!==d){let x=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;h!==void 0&&h.texture.dispose();const _=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],M=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let S=0;_===!0&&(S=1),g===!0&&(S=2),p===!0&&(S=3);let A=a.attributes.position.count*S,w=1;A>t.maxTextureSize&&(w=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const T=new Float32Array(A*w*4*d),C=new hd(T,A,w,d);C.type=Ci,C.needsUpdate=!0;const y=S*4;for(let P=0;P<d;P++){const U=m[P],z=M[P],q=v[P],$=A*w*4*P;for(let X=0;X<U.count;X++){const V=X*y;_===!0&&(i.fromBufferAttribute(U,X),T[$+V+0]=i.x,T[$+V+1]=i.y,T[$+V+2]=i.z,T[$+V+3]=0),g===!0&&(i.fromBufferAttribute(z,X),T[$+V+4]=i.x,T[$+V+5]=i.y,T[$+V+6]=i.z,T[$+V+7]=0),p===!0&&(i.fromBufferAttribute(q,X),T[$+V+8]=i.x,T[$+V+9]=i.y,T[$+V+10]=i.z,T[$+V+11]=q.itemSize===4?i.w:1)}}h={count:d,texture:C,size:new ie(A,w)},n.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const g=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function _v(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=t.get(l,u);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;i.get(h)!==c&&(h.update(),i.set(h,c))}return d}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Sd extends _n{constructor(t,e,n,i,s,o,a,l,c,u=xs){if(u!==xs&&u!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===xs&&(n=Or),n===void 0&&u===Ls&&(n=Ps),super(null,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Kn,this.minFilter=l!==void 0?l:Kn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const yd=new _n,Uh=new Sd(1,1),Ed=new hd,Td=new n_,bd=new vd,Nh=[],Oh=[],Fh=new Float32Array(16),Bh=new Float32Array(9),zh=new Float32Array(4);function ks(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Nh[i];if(s===void 0&&(s=new Float32Array(i),Nh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ge(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function We(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function rl(r,t){let e=Oh[t];e===void 0&&(e=new Int32Array(t),Oh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function gv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2fv(this.addr,t),We(e,t)}}function xv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ge(e,t))return;r.uniform3fv(this.addr,t),We(e,t)}}function Mv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4fv(this.addr,t),We(e,t)}}function Sv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;zh.set(n),r.uniformMatrix2fv(this.addr,!1,zh),We(e,n)}}function yv(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Bh.set(n),r.uniformMatrix3fv(this.addr,!1,Bh),We(e,n)}}function Ev(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ge(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),We(e,t)}else{if(Ge(e,n))return;Fh.set(n),r.uniformMatrix4fv(this.addr,!1,Fh),We(e,n)}}function Tv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function bv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2iv(this.addr,t),We(e,t)}}function wv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3iv(this.addr,t),We(e,t)}}function Av(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4iv(this.addr,t),We(e,t)}}function Cv(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Rv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ge(e,t))return;r.uniform2uiv(this.addr,t),We(e,t)}}function Pv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ge(e,t))return;r.uniform3uiv(this.addr,t),We(e,t)}}function Lv(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ge(e,t))return;r.uniform4uiv(this.addr,t),We(e,t)}}function Dv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Uh.compareFunction=ad,s=Uh):s=yd,e.setTexture2D(t||s,i)}function Iv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Td,i)}function Uv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bd,i)}function Nv(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ed,i)}function Ov(r){switch(r){case 5126:return gv;case 35664:return vv;case 35665:return xv;case 35666:return Mv;case 35674:return Sv;case 35675:return yv;case 35676:return Ev;case 5124:case 35670:return Tv;case 35667:case 35671:return bv;case 35668:case 35672:return wv;case 35669:case 35673:return Av;case 5125:return Cv;case 36294:return Rv;case 36295:return Pv;case 36296:return Lv;case 35678:case 36198:case 36298:case 36306:case 35682:return Dv;case 35679:case 36299:case 36307:return Iv;case 35680:case 36300:case 36308:case 36293:return Uv;case 36289:case 36303:case 36311:case 36292:return Nv}}function Fv(r,t){r.uniform1fv(this.addr,t)}function Bv(r,t){const e=ks(t,this.size,2);r.uniform2fv(this.addr,e)}function zv(r,t){const e=ks(t,this.size,3);r.uniform3fv(this.addr,e)}function kv(r,t){const e=ks(t,this.size,4);r.uniform4fv(this.addr,e)}function Hv(r,t){const e=ks(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Vv(r,t){const e=ks(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Gv(r,t){const e=ks(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Wv(r,t){r.uniform1iv(this.addr,t)}function Xv(r,t){r.uniform2iv(this.addr,t)}function Yv(r,t){r.uniform3iv(this.addr,t)}function qv(r,t){r.uniform4iv(this.addr,t)}function $v(r,t){r.uniform1uiv(this.addr,t)}function Kv(r,t){r.uniform2uiv(this.addr,t)}function jv(r,t){r.uniform3uiv(this.addr,t)}function Zv(r,t){r.uniform4uiv(this.addr,t)}function Jv(r,t,e){const n=this.cache,i=t.length,s=rl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||yd,s[o])}function Qv(r,t,e){const n=this.cache,i=t.length,s=rl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Td,s[o])}function tx(r,t,e){const n=this.cache,i=t.length,s=rl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bd,s[o])}function ex(r,t,e){const n=this.cache,i=t.length,s=rl(e,i);Ge(n,s)||(r.uniform1iv(this.addr,s),We(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ed,s[o])}function nx(r){switch(r){case 5126:return Fv;case 35664:return Bv;case 35665:return zv;case 35666:return kv;case 35674:return Hv;case 35675:return Vv;case 35676:return Gv;case 5124:case 35670:return Wv;case 35667:case 35671:return Xv;case 35668:case 35672:return Yv;case 35669:case 35673:return qv;case 5125:return $v;case 36294:return Kv;case 36295:return jv;case 36296:return Zv;case 35678:case 36198:case 36298:case 36306:case 35682:return Jv;case 35679:case 36299:case 36307:return Qv;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}class ix{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ov(e.type)}}class rx{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}}class sx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const zl=/(\w+)(\])?(\[|\.)?/g;function kh(r,t){r.seq.push(t),r.map[t.id]=t}function ox(r,t,e){const n=r.name,i=n.length;for(zl.lastIndex=0;;){const s=zl.exec(n),o=zl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){kh(e,c===void 0?new ix(a,r,t):new rx(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new sx(a),kh(e,d)),e=d}}}class wa{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ox(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Hh(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const ax=37297;let lx=0;function cx(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function ux(r){const t=me.getPrimaries(me.workingColorSpace),e=me.getPrimaries(r);let n;switch(t===e?n="":t===za&&e===Ba?n="LinearDisplayP3ToLinearSRGB":t===Ba&&e===za&&(n="LinearSRGBToLinearDisplayP3"),r){case lr:case nl:return[n,"LinearTransferOETF"];case ai:case xu:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[n,"LinearTransferOETF"]}}function Vh(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+cx(r.getShaderSource(t),o)}else return i}function hx(r,t){const e=ux(t);return`vec4 ${r}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function fx(r,t){let e;switch(t){case Lm:e="Linear";break;case Dm:e="Reinhard";break;case Im:e="OptimizedCineon";break;case $f:e="ACESFilmic";break;case Nm:e="AgX";break;case Om:e="Neutral";break;case Um:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function dx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zs).join(`
`)}function px(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mx(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Zs(r){return r!==""}function Gh(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(r){return r.replace(_x,vx)}const gx=new Map;function vx(r,t){let e=jt[t];if(e===void 0){const n=gx.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(r){return r.replace(xx,Mx)}function Mx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Yh(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Sx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Yf?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===im?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ei&&(t="SHADOWMAP_TYPE_VSM"),t}function yx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Rs:t="ENVMAP_TYPE_CUBE";break;case el:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ex(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Rs:t="ENVMAP_MODE_REFRACTION";break}return t}function Tx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qf:t="ENVMAP_BLENDING_MULTIPLY";break;case Rm:t="ENVMAP_BLENDING_MIX";break;case Pm:t="ENVMAP_BLENDING_ADD";break}return t}function bx(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function wx(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Sx(e),c=yx(e),u=Ex(e),d=Tx(e),h=bx(e),f=dx(e),_=px(s),g=i.createProgram();let p,m,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zs).join(`
`),m.length>0&&(m+=`
`)):(p=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),m=[Yh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ji?"#define TONE_MAPPING":"",e.toneMapping!==Ji?jt.tonemapping_pars_fragment:"",e.toneMapping!==Ji?fx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,hx("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zs).join(`
`)),o=kc(o),o=Gh(o,e),o=Wh(o,e),a=kc(a),a=Gh(a,e),a=Wh(a,e),o=Xh(o),a=Xh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const v=M+p+o,S=M+m+a,A=Hh(i,i.VERTEX_SHADER,v),w=Hh(i,i.FRAGMENT_SHADER,S);i.attachShader(g,A),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function T(P){if(r.debug.checkShaderErrors){const U=i.getProgramInfoLog(g).trim(),z=i.getShaderInfoLog(A).trim(),q=i.getShaderInfoLog(w).trim();let $=!0,X=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,A,w);else{const V=Vh(i,A,"vertex"),H=Vh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+V+`
`+H)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(z===""||q==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:U,vertexShader:{log:z,prefix:p},fragmentShader:{log:q,prefix:m}})}i.deleteShader(A),i.deleteShader(w),C=new wa(i,g),y=mx(i,g)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(g,ax)),x},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=lx++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=A,this.fragmentShader=w,this}let Ax=0;class Cx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rx(t),e.set(t,n)),n}}class Rx{constructor(t){this.id=Ax++,this.code=t,this.usedTimes=0}}function Px(r,t,e,n,i,s,o){const a=new fd,l=new Cx,c=new Set,u=[],d=i.logarithmicDepthBuffer,h=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function p(y,x,P,U,z){const q=U.fog,$=z.geometry,X=y.isMeshStandardMaterial?U.environment:null,V=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),H=V&&V.mapping===el?V.image.height:null,st=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const L=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ct=L!==void 0?L.length:0;let Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let qt,K,nt,ht;if(st){const re=ui[st];qt=re.vertexShader,K=re.fragmentShader}else qt=y.vertexShader,K=y.fragmentShader,l.update(y),nt=l.getVertexShaderID(y),ht=l.getFragmentShaderID(y);const ut=r.getRenderTarget(),bt=z.isInstancedMesh===!0,wt=z.isBatchedMesh===!0,Vt=!!y.map,$t=!!y.matcap,D=!!V,Lt=!!y.aoMap,Ft=!!y.lightMap,Y=!!y.bumpMap,j=!!y.normalMap,I=!!y.displacementMap,gt=!!y.emissiveMap,Mt=!!y.metalnessMap,R=!!y.roughnessMap,E=y.anisotropy>0,W=y.clearcoat>0,et=y.dispersion>0,it=y.iridescence>0,J=y.sheen>0,Rt=y.transmission>0,ot=E&&!!y.anisotropyMap,mt=W&&!!y.clearcoatMap,Bt=W&&!!y.clearcoatNormalMap,at=W&&!!y.clearcoatRoughnessMap,xt=it&&!!y.iridescenceMap,It=it&&!!y.iridescenceThicknessMap,kt=J&&!!y.sheenColorMap,vt=J&&!!y.sheenRoughnessMap,Ht=!!y.specularMap,Xt=!!y.specularColorMap,ue=!!y.specularIntensityMap,F=Rt&&!!y.transmissionMap,Z=Rt&&!!y.thicknessMap,Q=!!y.gradientMap,tt=!!y.alphaMap,lt=y.alphaTest>0,Pt=!!y.alphaHash,Kt=!!y.extensions;let ge=Ji;y.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ge=r.toneMapping);const ve={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:qt,fragmentShader:K,defines:y.defines,customVertexShaderID:nt,customFragmentShaderID:ht,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:wt,batchingColor:wt&&z._colorsTexture!==null,instancing:bt,instancingColor:bt&&z.instanceColor!==null,instancingMorph:bt&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:lr,alphaToCoverage:!!y.alphaToCoverage,map:Vt,matcap:$t,envMap:D,envMapMode:D&&V.mapping,envMapCubeUVHeight:H,aoMap:Lt,lightMap:Ft,bumpMap:Y,normalMap:j,displacementMap:h&&I,emissiveMap:gt,normalMapObjectSpace:j&&y.normalMapType===km,normalMapTangentSpace:j&&y.normalMapType===od,metalnessMap:Mt,roughnessMap:R,anisotropy:E,anisotropyMap:ot,clearcoat:W,clearcoatMap:mt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:at,dispersion:et,iridescence:it,iridescenceMap:xt,iridescenceThicknessMap:It,sheen:J,sheenColorMap:kt,sheenRoughnessMap:vt,specularMap:Ht,specularColorMap:Xt,specularIntensityMap:ue,transmission:Rt,transmissionMap:F,thicknessMap:Z,gradientMap:Q,opaque:y.transparent===!1&&y.blending===vs&&y.alphaToCoverage===!1,alphaMap:tt,alphaTest:lt,alphaHash:Pt,combine:y.combine,mapUv:Vt&&g(y.map.channel),aoMapUv:Lt&&g(y.aoMap.channel),lightMapUv:Ft&&g(y.lightMap.channel),bumpMapUv:Y&&g(y.bumpMap.channel),normalMapUv:j&&g(y.normalMap.channel),displacementMapUv:I&&g(y.displacementMap.channel),emissiveMapUv:gt&&g(y.emissiveMap.channel),metalnessMapUv:Mt&&g(y.metalnessMap.channel),roughnessMapUv:R&&g(y.roughnessMap.channel),anisotropyMapUv:ot&&g(y.anisotropyMap.channel),clearcoatMapUv:mt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:It&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(y.sheenRoughnessMap.channel),specularMapUv:Ht&&g(y.specularMap.channel),specularColorMapUv:Xt&&g(y.specularColorMap.channel),specularIntensityMapUv:ue&&g(y.specularIntensityMap.channel),transmissionMapUv:F&&g(y.transmissionMap.channel),thicknessMapUv:Z&&g(y.thicknessMap.channel),alphaMapUv:tt&&g(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(j||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!$.attributes.uv&&(Vt||tt),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:Vt&&y.map.isVideoTexture===!0&&me.getTransfer(y.map.colorSpace)===Te,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wi,flipSided:y.side===Mn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ve.vertexUv1s=c.has(1),ve.vertexUv2s=c.has(2),ve.vertexUv3s=c.has(3),c.clear(),ve}function m(y){const x=[];if(y.shaderID?x.push(y.shaderID):(x.push(y.customVertexShaderID),x.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)x.push(P),x.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(x,y),v(x,y),x.push(r.outputColorSpace)),x.push(y.customProgramCacheKey),x.join()}function M(y,x){y.push(x.precision),y.push(x.outputColorSpace),y.push(x.envMapMode),y.push(x.envMapCubeUVHeight),y.push(x.mapUv),y.push(x.alphaMapUv),y.push(x.lightMapUv),y.push(x.aoMapUv),y.push(x.bumpMapUv),y.push(x.normalMapUv),y.push(x.displacementMapUv),y.push(x.emissiveMapUv),y.push(x.metalnessMapUv),y.push(x.roughnessMapUv),y.push(x.anisotropyMapUv),y.push(x.clearcoatMapUv),y.push(x.clearcoatNormalMapUv),y.push(x.clearcoatRoughnessMapUv),y.push(x.iridescenceMapUv),y.push(x.iridescenceThicknessMapUv),y.push(x.sheenColorMapUv),y.push(x.sheenRoughnessMapUv),y.push(x.specularMapUv),y.push(x.specularColorMapUv),y.push(x.specularIntensityMapUv),y.push(x.transmissionMapUv),y.push(x.thicknessMapUv),y.push(x.combine),y.push(x.fogExp2),y.push(x.sizeAttenuation),y.push(x.morphTargetsCount),y.push(x.morphAttributeCount),y.push(x.numDirLights),y.push(x.numPointLights),y.push(x.numSpotLights),y.push(x.numSpotLightMaps),y.push(x.numHemiLights),y.push(x.numRectAreaLights),y.push(x.numDirLightShadows),y.push(x.numPointLightShadows),y.push(x.numSpotLightShadows),y.push(x.numSpotLightShadowsWithMaps),y.push(x.numLightProbes),y.push(x.shadowMapType),y.push(x.toneMapping),y.push(x.numClippingPlanes),y.push(x.numClipIntersection),y.push(x.depthPacking)}function v(y,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.skinning&&a.enable(4),x.morphTargets&&a.enable(5),x.morphNormals&&a.enable(6),x.morphColors&&a.enable(7),x.premultipliedAlpha&&a.enable(8),x.shadowMapEnabled&&a.enable(9),x.doubleSided&&a.enable(10),x.flipSided&&a.enable(11),x.useDepthPacking&&a.enable(12),x.dithering&&a.enable(13),x.transmission&&a.enable(14),x.sheen&&a.enable(15),x.opaque&&a.enable(16),x.pointsUvs&&a.enable(17),x.decodeVideoTexture&&a.enable(18),x.alphaToCoverage&&a.enable(19),y.push(a.mask)}function S(y){const x=_[y.type];let P;if(x){const U=ui[x];P=p_.clone(U.uniforms)}else P=y.uniforms;return P}function A(y,x){let P;for(let U=0,z=u.length;U<z;U++){const q=u[U];if(q.cacheKey===x){P=q,++P.usedTimes;break}}return P===void 0&&(P=new wx(r,x,y,s),u.push(P)),P}function w(y){if(--y.usedTimes===0){const x=u.indexOf(y);u[x]=u[u.length-1],u.pop(),y.destroy()}}function T(y){l.remove(y)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:S,acquireProgram:A,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:C}}function Lx(){let r=new WeakMap;function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function e(s){r.delete(s)}function n(s,o,a){r.get(s)[o]=a}function i(){r=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function Dx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function qh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $h(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,h,f,_,g,p){let m=r[t];return m===void 0?(m={id:d.id,object:d,geometry:h,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},r[t]=m):(m.id=d.id,m.object=d,m.geometry=h,m.material=f,m.groupOrder=_,m.renderOrder=d.renderOrder,m.z=g,m.group=p),t++,m}function a(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.push(m):f.transparent===!0?i.push(m):e.push(m)}function l(d,h,f,_,g,p){const m=o(d,h,f,_,g,p);f.transmission>0?n.unshift(m):f.transparent===!0?i.unshift(m):e.unshift(m)}function c(d,h){e.length>1&&e.sort(d||Dx),n.length>1&&n.sort(h||qh),i.length>1&&i.sort(h||qh)}function u(){for(let d=t,h=r.length;d<h;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function Ix(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new $h,r.set(n,[o])):i>=s.length?(o=new $h,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ux(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Yt};break;case"SpotLight":e={position:new O,direction:new O,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function Nx(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let Ox=0;function Fx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Bx(r){const t=new Ux,e=Nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);const i=new O,s=new we,o=new we;function a(c){let u=0,d=0,h=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,p=0,m=0,M=0,v=0,S=0,A=0,w=0,T=0;c.sort(Fx);for(let y=0,x=c.length;y<x;y++){const P=c[y],U=P.color,z=P.intensity,q=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=U.r*z,d+=U.g*z,h+=U.b*z;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],z);T++}else if(P.isDirectionalLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const V=P.shadow,H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=t.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(U).multiplyScalar(z),X.distance=q,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[g]=X;const V=P.shadow;if(P.map&&(n.spotLightMap[A]=P.map,A++,V.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=V.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=$,S++}g++}else if(P.isRectAreaLight){const X=t.get(P);X.color.copy(U).multiplyScalar(z),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=X,p++}else if(P.isPointLight){const X=t.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const V=P.shadow,H=e.get(P);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=P.shadow.matrix,v++}n.point[_]=X,_++}else if(P.isHemisphereLight){const X=t.get(P);X.skyColor.copy(P.color).multiplyScalar(z),X.groundColor.copy(P.groundColor).multiplyScalar(z),n.hemi[m]=X,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==g||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==S||C.numSpotMaps!==A||C.numLightProbes!==T)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+A-w,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,C.directionalLength=f,C.pointLength=_,C.spotLength=g,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=S,C.numSpotMaps=A,C.numLightProbes=T,n.version=Ox++)}function l(c,u){let d=0,h=0,f=0,_=0,g=0;const p=u.matrixWorldInverse;for(let m=0,M=c.length;m<M;m++){const v=c[m];if(v.isDirectionalLight){const S=n.directional[d];S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),d++}else if(v.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(v.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(p),h++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(p),g++}}}return{setup:a,setupView:l,state:n}}function Kh(r){const t=new Bx(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function zx(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Kh(r),t.set(i,[a])):s>=o.length?(a=new Kh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class kx extends Hr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hx extends Hr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Wx(r,t,e){let n=new yu;const i=new ie,s=new ie,o=new be,a=new kx({depthPacking:zm}),l=new Hx,c={},u=e.maxTextureSize,d={[nr]:Mn,[Mn]:nr,[wi]:wi},h=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Vx,fragmentShader:Gx}),f=h.clone();f.defines.HORIZONTAL_PASS=1;const _=new bn;_.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yf;let m=this.type;this.render=function(w,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;const y=r.getRenderTarget(),x=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),U=r.state;U.setBlending(Zi),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const z=m!==Ei&&this.type===Ei,q=m===Ei&&this.type!==Ei;for(let $=0,X=w.length;$<X;$++){const V=w[$],H=V.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const st=H.getFrameExtents();if(i.multiply(st),s.copy(H.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/st.x),i.x=s.x*st.x,H.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/st.y),i.y=s.y*st.y,H.mapSize.y=s.y)),H.map===null||z===!0||q===!0){const ct=this.type!==Ei?{minFilter:Kn,magFilter:Kn}:{};H.map!==null&&H.map.dispose(),H.map=new Fr(i.x,i.y,ct),H.map.texture.name=V.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const L=H.getViewportCount();for(let ct=0;ct<L;ct++){const Nt=H.getViewport(ct);o.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),U.viewport(o),H.updateMatrices(V,ct),n=H.getFrustum(),S(T,C,H.camera,V,this.type)}H.isPointLightShadow!==!0&&this.type===Ei&&M(H,C),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(y,x,P)};function M(w,T){const C=t.update(g);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Fr(i.x,i.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,C,h,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,C,f,g,null)}function v(w,T,C,y){let x=null;const P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=x.uuid,z=T.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let $=q[z];$===void 0&&($=x.clone(),q[z]=$,T.addEventListener("dispose",A)),x=$}if(x.visible=T.visible,x.wireframe=T.wireframe,y===Ei?x.side=T.shadowSide!==null?T.shadowSide:T.side:x.side=T.shadowSide!==null?T.shadowSide:d[T.side],x.alphaMap=T.alphaMap,x.alphaTest=T.alphaTest,x.map=T.map,x.clipShadows=T.clipShadows,x.clippingPlanes=T.clippingPlanes,x.clipIntersection=T.clipIntersection,x.displacementMap=T.displacementMap,x.displacementScale=T.displacementScale,x.displacementBias=T.displacementBias,x.wireframeLinewidth=T.wireframeLinewidth,x.linewidth=T.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const U=r.properties.get(x);U.light=C}return x}function S(w,T,C,y,x){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&x===Ei)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);const z=t.update(w),q=w.material;if(Array.isArray(q)){const $=z.groups;for(let X=0,V=$.length;X<V;X++){const H=$[X],st=q[H.materialIndex];if(st&&st.visible){const L=v(w,st,y,x);w.onBeforeShadow(r,w,T,C,z,L,H),r.renderBufferDirect(C,null,z,L,w,H),w.onAfterShadow(r,w,T,C,z,L,H)}}}else if(q.visible){const $=v(w,q,y,x);w.onBeforeShadow(r,w,T,C,z,$,null),r.renderBufferDirect(C,null,z,$,w,null),w.onAfterShadow(r,w,T,C,z,$,null)}}const U=w.children;for(let z=0,q=U.length;z<q;z++)S(U[z],T,C,y,x)}function A(w){w.target.removeEventListener("dispose",A);for(const C in c){const y=c[C],x=w.target.uuid;x in y&&(y[x].dispose(),delete y[x])}}}function Xx(r){function t(){let F=!1;const Z=new be;let Q=null;const tt=new be(0,0,0,0);return{setMask:function(lt){Q!==lt&&!F&&(r.colorMask(lt,lt,lt,lt),Q=lt)},setLocked:function(lt){F=lt},setClear:function(lt,Pt,Kt,ge,ve){ve===!0&&(lt*=ge,Pt*=ge,Kt*=ge),Z.set(lt,Pt,Kt,ge),tt.equals(Z)===!1&&(r.clearColor(lt,Pt,Kt,ge),tt.copy(Z))},reset:function(){F=!1,Q=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,Z=null,Q=null,tt=null;return{setTest:function(lt){lt?ht(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(lt){Z!==lt&&!F&&(r.depthMask(lt),Z=lt)},setFunc:function(lt){if(Q!==lt){switch(lt){case ym:r.depthFunc(r.NEVER);break;case Em:r.depthFunc(r.ALWAYS);break;case Tm:r.depthFunc(r.LESS);break;case Oa:r.depthFunc(r.LEQUAL);break;case bm:r.depthFunc(r.EQUAL);break;case wm:r.depthFunc(r.GEQUAL);break;case Am:r.depthFunc(r.GREATER);break;case Cm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=lt}},setLocked:function(lt){F=lt},setClear:function(lt){tt!==lt&&(r.clearDepth(lt),tt=lt)},reset:function(){F=!1,Z=null,Q=null,tt=null}}}function n(){let F=!1,Z=null,Q=null,tt=null,lt=null,Pt=null,Kt=null,ge=null,ve=null;return{setTest:function(re){F||(re?ht(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(re){Z!==re&&!F&&(r.stencilMask(re),Z=re)},setFunc:function(re,zt,At){(Q!==re||tt!==zt||lt!==At)&&(r.stencilFunc(re,zt,At),Q=re,tt=zt,lt=At)},setOp:function(re,zt,At){(Pt!==re||Kt!==zt||ge!==At)&&(r.stencilOp(re,zt,At),Pt=re,Kt=zt,ge=At)},setLocked:function(re){F=re},setClear:function(re){ve!==re&&(r.clearStencil(re),ve=re)},reset:function(){F=!1,Z=null,Q=null,tt=null,lt=null,Pt=null,Kt=null,ge=null,ve=null}}}const i=new t,s=new e,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,h=[],f=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,A=null,w=new Yt(0,0,0),T=0,C=!1,y=null,x=null,P=null,U=null,z=null;const q=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=X>=2);let H=null,st={};const L=r.getParameter(r.SCISSOR_BOX),ct=r.getParameter(r.VIEWPORT),Nt=new be().fromArray(L),qt=new be().fromArray(ct);function K(F,Z,Q,tt){const lt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(F,Pt),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<Q;Kt++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(Z,0,r.RGBA,1,1,tt,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(Z+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return Pt}const nt={};nt[r.TEXTURE_2D]=K(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=K(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=K(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=K(r.TEXTURE_3D,r.TEXTURE_3D,1,1),i.setClear(0,0,0,1),s.setClear(1),o.setClear(0),ht(r.DEPTH_TEST),s.setFunc(Oa),Y(!1),j(nh),ht(r.CULL_FACE),Lt(Zi);function ht(F){c[F]!==!0&&(r.enable(F),c[F]=!0)}function ut(F){c[F]!==!1&&(r.disable(F),c[F]=!1)}function bt(F,Z){return u[F]!==Z?(r.bindFramebuffer(F,Z),u[F]=Z,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Z),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Z),!0):!1}function wt(F,Z){let Q=h,tt=!1;if(F){Q=d.get(Z),Q===void 0&&(Q=[],d.set(Z,Q));const lt=F.textures;if(Q.length!==lt.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,Kt=lt.length;Pt<Kt;Pt++)Q[Pt]=r.COLOR_ATTACHMENT0+Pt;Q.length=lt.length,tt=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,tt=!0);tt&&r.drawBuffers(Q)}function Vt(F){return f!==F?(r.useProgram(F),f=F,!0):!1}const $t={[Er]:r.FUNC_ADD,[sm]:r.FUNC_SUBTRACT,[om]:r.FUNC_REVERSE_SUBTRACT};$t[am]=r.MIN,$t[lm]=r.MAX;const D={[cm]:r.ZERO,[um]:r.ONE,[hm]:r.SRC_COLOR,[ac]:r.SRC_ALPHA,[gm]:r.SRC_ALPHA_SATURATE,[mm]:r.DST_COLOR,[dm]:r.DST_ALPHA,[fm]:r.ONE_MINUS_SRC_COLOR,[lc]:r.ONE_MINUS_SRC_ALPHA,[_m]:r.ONE_MINUS_DST_COLOR,[pm]:r.ONE_MINUS_DST_ALPHA,[vm]:r.CONSTANT_COLOR,[xm]:r.ONE_MINUS_CONSTANT_COLOR,[Mm]:r.CONSTANT_ALPHA,[Sm]:r.ONE_MINUS_CONSTANT_ALPHA};function Lt(F,Z,Q,tt,lt,Pt,Kt,ge,ve,re){if(F===Zi){_===!0&&(ut(r.BLEND),_=!1);return}if(_===!1&&(ht(r.BLEND),_=!0),F!==rm){if(F!==g||re!==C){if((p!==Er||v!==Er)&&(r.blendEquation(r.FUNC_ADD),p=Er,v=Er),re)switch(F){case vs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case oc:r.blendFunc(r.ONE,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case oc:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ih:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case rh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,M=null,S=null,A=null,w.set(0,0,0),T=0,g=F,C=re}return}lt=lt||Z,Pt=Pt||Q,Kt=Kt||tt,(Z!==p||lt!==v)&&(r.blendEquationSeparate($t[Z],$t[lt]),p=Z,v=lt),(Q!==m||tt!==M||Pt!==S||Kt!==A)&&(r.blendFuncSeparate(D[Q],D[tt],D[Pt],D[Kt]),m=Q,M=tt,S=Pt,A=Kt),(ge.equals(w)===!1||ve!==T)&&(r.blendColor(ge.r,ge.g,ge.b,ve),w.copy(ge),T=ve),g=F,C=!1}function Ft(F,Z){F.side===wi?ut(r.CULL_FACE):ht(r.CULL_FACE);let Q=F.side===Mn;Z&&(Q=!Q),Y(Q),F.blending===vs&&F.transparent===!1?Lt(Zi):Lt(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),i.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function Y(F){y!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),y=F)}function j(F){F!==em?(ht(r.CULL_FACE),F!==x&&(F===nh?r.cullFace(r.BACK):F===nm?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),x=F}function I(F){F!==P&&($&&r.lineWidth(F),P=F)}function gt(F,Z,Q){F?(ht(r.POLYGON_OFFSET_FILL),(U!==Z||z!==Q)&&(r.polygonOffset(Z,Q),U=Z,z=Q)):ut(r.POLYGON_OFFSET_FILL)}function Mt(F){F?ht(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function R(F){F===void 0&&(F=r.TEXTURE0+q-1),H!==F&&(r.activeTexture(F),H=F)}function E(F,Z,Q){Q===void 0&&(H===null?Q=r.TEXTURE0+q-1:Q=H);let tt=st[Q];tt===void 0&&(tt={type:void 0,texture:void 0},st[Q]=tt),(tt.type!==F||tt.texture!==Z)&&(H!==Q&&(r.activeTexture(Q),H=Q),r.bindTexture(F,Z||nt[F]),tt.type=F,tt.texture=Z)}function W(){const F=st[H];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function et(){try{r.compressedTexImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function it(){try{r.compressedTexImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function J(){try{r.texSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Rt(){try{r.texSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Bt(){try{r.texStorage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{r.texStorage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function xt(){try{r.texImage2D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function It(){try{r.texImage3D.apply(r,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function kt(F){Nt.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Nt.copy(F))}function vt(F){qt.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),qt.copy(F))}function Ht(F,Z){let Q=l.get(Z);Q===void 0&&(Q=new WeakMap,l.set(Z,Q));let tt=Q.get(F);tt===void 0&&(tt=r.getUniformBlockIndex(Z,F.name),Q.set(F,tt))}function Xt(F,Z){const tt=l.get(Z).get(F);a.get(Z)!==tt&&(r.uniformBlockBinding(Z,tt,F.__bindingPointIndex),a.set(Z,tt))}function ue(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},H=null,st={},u={},d=new WeakMap,h=[],f=null,_=!1,g=null,p=null,m=null,M=null,v=null,S=null,A=null,w=new Yt(0,0,0),T=0,C=!1,y=null,x=null,P=null,U=null,z=null,Nt.set(0,0,r.canvas.width,r.canvas.height),qt.set(0,0,r.canvas.width,r.canvas.height),i.reset(),s.reset(),o.reset()}return{buffers:{color:i,depth:s,stencil:o},enable:ht,disable:ut,bindFramebuffer:bt,drawBuffers:wt,useProgram:Vt,setBlending:Lt,setMaterial:Ft,setFlipSided:Y,setCullFace:j,setLineWidth:I,setPolygonOffset:gt,setScissorTest:Mt,activeTexture:R,bindTexture:E,unbindTexture:W,compressedTexImage2D:et,compressedTexImage3D:it,texImage2D:xt,texImage3D:It,updateUBOMapping:Ht,uniformBlockBinding:Xt,texStorage2D:Bt,texStorage3D:at,texSubImage2D:J,texSubImage3D:Rt,compressedTexSubImage2D:ot,compressedTexSubImage3D:mt,scissor:kt,viewport:vt,reset:ue}}function jh(r,t,e,n){const i=Yx(n);switch(e){case Qf:return r*t;case ed:return r*t;case nd:return r*t*2;case id:return r*t/i.components*i.byteLength;case _u:return r*t/i.components*i.byteLength;case rd:return r*t*2/i.components*i.byteLength;case gu:return r*t*2/i.components*i.byteLength;case td:return r*t*3/i.components*i.byteLength;case oi:return r*t*4/i.components*i.byteLength;case vu:return r*t*4/i.components*i.byteLength;case Sa:case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ea:case Ta:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case pc:case _c:return Math.max(r,16)*Math.max(t,8)/4;case dc:case mc:return Math.max(r,8)*Math.max(t,8)/2;case gc:case vc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Sc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case yc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ec:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Tc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case bc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ac:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Cc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Pc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ic:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case ba:case Uc:case Nc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sd:case Oc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Fc:case Bc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Yx(r){switch(r){case Di:case jf:return{byteLength:1,components:1};case vo:case Zf:case Ro:return{byteLength:2,components:1};case pu:case mu:return{byteLength:2,components:4};case Or:case du:case Ci:return{byteLength:4,components:1};case Jf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function qx(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,u=new WeakMap;let d;const h=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,E){return f?new OffscreenCanvas(R,E):Ha("canvas")}function g(R,E,W){let et=1;const it=Mt(R);if((it.width>W||it.height>W)&&(et=W/Math.max(it.width,it.height)),et<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const J=Math.floor(et*it.width),Rt=Math.floor(et*it.height);d===void 0&&(d=_(J,Rt));const ot=E?_(J,Rt):d;return ot.width=J,ot.height=Rt,ot.getContext("2d").drawImage(R,0,0,J,Rt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+it.width+"x"+it.height+") to ("+J+"x"+Rt+")."),ot}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+it.width+"x"+it.height+")."),R;return R}function p(R){return R.generateMipmaps&&R.minFilter!==Kn&&R.minFilter!==si}function m(R){r.generateMipmap(R)}function M(R,E,W,et,it=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let J=E;if(E===r.RED&&(W===r.FLOAT&&(J=r.R32F),W===r.HALF_FLOAT&&(J=r.R16F),W===r.UNSIGNED_BYTE&&(J=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(J=r.R8UI),W===r.UNSIGNED_SHORT&&(J=r.R16UI),W===r.UNSIGNED_INT&&(J=r.R32UI),W===r.BYTE&&(J=r.R8I),W===r.SHORT&&(J=r.R16I),W===r.INT&&(J=r.R32I)),E===r.RG&&(W===r.FLOAT&&(J=r.RG32F),W===r.HALF_FLOAT&&(J=r.RG16F),W===r.UNSIGNED_BYTE&&(J=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(J=r.RG8UI),W===r.UNSIGNED_SHORT&&(J=r.RG16UI),W===r.UNSIGNED_INT&&(J=r.RG32UI),W===r.BYTE&&(J=r.RG8I),W===r.SHORT&&(J=r.RG16I),W===r.INT&&(J=r.RG32I)),E===r.RGB&&W===r.UNSIGNED_INT_5_9_9_9_REV&&(J=r.RGB9_E5),E===r.RGBA){const Rt=it?Fa:me.getTransfer(et);W===r.FLOAT&&(J=r.RGBA32F),W===r.HALF_FLOAT&&(J=r.RGBA16F),W===r.UNSIGNED_BYTE&&(J=Rt===Te?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(J=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(J=r.RGB5_A1)}return(J===r.R16F||J===r.R32F||J===r.RG16F||J===r.RG32F||J===r.RGBA16F||J===r.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function v(R,E){let W;return R?E===null||E===Or||E===Ps?W=r.DEPTH24_STENCIL8:E===Ci?W=r.DEPTH32F_STENCIL8:E===vo&&(W=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Or||E===Ps?W=r.DEPTH_COMPONENT24:E===Ci?W=r.DEPTH_COMPONENT32F:E===vo&&(W=r.DEPTH_COMPONENT16),W}function S(R,E){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==Kn&&R.minFilter!==si?Math.log2(Math.max(E.width,E.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?E.mipmaps.length:1}function A(R){const E=R.target;E.removeEventListener("dispose",A),T(E),E.isVideoTexture&&u.delete(E)}function w(R){const E=R.target;E.removeEventListener("dispose",w),y(E)}function T(R){const E=n.get(R);if(E.__webglInit===void 0)return;const W=R.source,et=h.get(W);if(et){const it=et[E.__cacheKey];it.usedTimes--,it.usedTimes===0&&C(R),Object.keys(et).length===0&&h.delete(W)}n.remove(R)}function C(R){const E=n.get(R);r.deleteTexture(E.__webglTexture);const W=R.source,et=h.get(W);delete et[E.__cacheKey],o.memory.textures--}function y(R){const E=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let et=0;et<6;et++){if(Array.isArray(E.__webglFramebuffer[et]))for(let it=0;it<E.__webglFramebuffer[et].length;it++)r.deleteFramebuffer(E.__webglFramebuffer[et][it]);else r.deleteFramebuffer(E.__webglFramebuffer[et]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[et])}else{if(Array.isArray(E.__webglFramebuffer))for(let et=0;et<E.__webglFramebuffer.length;et++)r.deleteFramebuffer(E.__webglFramebuffer[et]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let et=0;et<E.__webglColorRenderbuffer.length;et++)E.__webglColorRenderbuffer[et]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[et]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=R.textures;for(let et=0,it=W.length;et<it;et++){const J=n.get(W[et]);J.__webglTexture&&(r.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(W[et])}n.remove(R)}let x=0;function P(){x=0}function U(){const R=x;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),x+=1,R}function z(R){const E=[];return E.push(R.wrapS),E.push(R.wrapT),E.push(R.wrapR||0),E.push(R.magFilter),E.push(R.minFilter),E.push(R.anisotropy),E.push(R.internalFormat),E.push(R.format),E.push(R.type),E.push(R.generateMipmaps),E.push(R.premultiplyAlpha),E.push(R.flipY),E.push(R.unpackAlignment),E.push(R.colorSpace),E.join()}function q(R,E){const W=n.get(R);if(R.isVideoTexture&&I(R),R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){const et=R.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(W,R,E);return}}e.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function $(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){qt(W,R,E);return}e.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function X(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){qt(W,R,E);return}e.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function V(R,E){const W=n.get(R);if(R.version>0&&W.__version!==R.version){K(W,R,E);return}e.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const H={[hc]:r.REPEAT,[br]:r.CLAMP_TO_EDGE,[fc]:r.MIRRORED_REPEAT},st={[Kn]:r.NEAREST,[Fm]:r.NEAREST_MIPMAP_NEAREST,[Oo]:r.NEAREST_MIPMAP_LINEAR,[si]:r.LINEAR,[dl]:r.LINEAR_MIPMAP_NEAREST,[wr]:r.LINEAR_MIPMAP_LINEAR},L={[Hm]:r.NEVER,[qm]:r.ALWAYS,[Vm]:r.LESS,[ad]:r.LEQUAL,[Gm]:r.EQUAL,[Ym]:r.GEQUAL,[Wm]:r.GREATER,[Xm]:r.NOTEQUAL};function ct(R,E){if(E.type===Ci&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===si||E.magFilter===dl||E.magFilter===Oo||E.magFilter===wr||E.minFilter===si||E.minFilter===dl||E.minFilter===Oo||E.minFilter===wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,H[E.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,H[E.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,H[E.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,st[E.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,st[E.minFilter]),E.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,L[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Kn||E.minFilter!==Oo&&E.minFilter!==wr||E.type===Ci&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function Nt(R,E){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,E.addEventListener("dispose",A));const et=E.source;let it=h.get(et);it===void 0&&(it={},h.set(et,it));const J=z(E);if(J!==R.__cacheKey){it[J]===void 0&&(it[J]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,W=!0),it[J].usedTimes++;const Rt=it[R.__cacheKey];Rt!==void 0&&(it[R.__cacheKey].usedTimes--,Rt.usedTimes===0&&C(E)),R.__cacheKey=J,R.__webglTexture=it[J].texture}return W}function qt(R,E,W){let et=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(et=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(et=r.TEXTURE_3D);const it=Nt(R,E),J=E.source;e.bindTexture(et,R.__webglTexture,r.TEXTURE0+W);const Rt=n.get(J);if(J.version!==Rt.__version||it===!0){e.activeTexture(r.TEXTURE0+W);const ot=me.getPrimaries(me.workingColorSpace),mt=E.colorSpace===Xi?null:me.getPrimaries(E.colorSpace),Bt=E.colorSpace===Xi||ot===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Bt);let at=g(E.image,!1,i.maxTextureSize);at=gt(E,at);const xt=s.convert(E.format,E.colorSpace),It=s.convert(E.type);let kt=M(E.internalFormat,xt,It,E.colorSpace,E.isVideoTexture);ct(et,E);let vt;const Ht=E.mipmaps,Xt=E.isVideoTexture!==!0,ue=Rt.__version===void 0||it===!0,F=J.dataReady,Z=S(E,at);if(E.isDepthTexture)kt=v(E.format===Ls,E.type),ue&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,kt,at.width,at.height):e.texImage2D(r.TEXTURE_2D,0,kt,at.width,at.height,0,xt,It,null));else if(E.isDataTexture)if(Ht.length>0){Xt&&ue&&e.texStorage2D(r.TEXTURE_2D,Z,kt,Ht[0].width,Ht[0].height);for(let Q=0,tt=Ht.length;Q<tt;Q++)vt=Ht[Q],Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(r.TEXTURE_2D,Q,kt,vt.width,vt.height,0,xt,It,vt.data);E.generateMipmaps=!1}else Xt?(ue&&e.texStorage2D(r.TEXTURE_2D,Z,kt,at.width,at.height),F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at.width,at.height,xt,It,at.data)):e.texImage2D(r.TEXTURE_2D,0,kt,at.width,at.height,0,xt,It,at.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Xt&&ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Z,kt,Ht[0].width,Ht[0].height,at.depth);for(let Q=0,tt=Ht.length;Q<tt;Q++)if(vt=Ht[Q],E.format!==oi)if(xt!==null)if(Xt){if(F)if(E.layerUpdates.size>0){const lt=jh(vt.width,vt.height,E.format,E.type);for(const Pt of E.layerUpdates){const Kt=vt.data.subarray(Pt*lt/vt.data.BYTES_PER_ELEMENT,(Pt+1)*lt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,Pt,vt.width,vt.height,1,xt,Kt,0,0)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,at.depth,xt,vt.data,0,0)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,kt,vt.width,vt.height,at.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?F&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,vt.width,vt.height,at.depth,xt,It,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,kt,vt.width,vt.height,at.depth,0,xt,It,vt.data)}else{Xt&&ue&&e.texStorage2D(r.TEXTURE_2D,Z,kt,Ht[0].width,Ht[0].height);for(let Q=0,tt=Ht.length;Q<tt;Q++)vt=Ht[Q],E.format!==oi?xt!==null?Xt?F&&e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,kt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,vt.width,vt.height,xt,It,vt.data):e.texImage2D(r.TEXTURE_2D,Q,kt,vt.width,vt.height,0,xt,It,vt.data)}else if(E.isDataArrayTexture)if(Xt){if(ue&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Z,kt,at.width,at.height,at.depth),F)if(E.layerUpdates.size>0){const Q=jh(at.width,at.height,E.format,E.type);for(const tt of E.layerUpdates){const lt=at.data.subarray(tt*Q/at.data.BYTES_PER_ELEMENT,(tt+1)*Q/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,xt,It,lt)}E.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,xt,It,at.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,kt,at.width,at.height,at.depth,0,xt,It,at.data);else if(E.isData3DTexture)Xt?(ue&&e.texStorage3D(r.TEXTURE_3D,Z,kt,at.width,at.height,at.depth),F&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,xt,It,at.data)):e.texImage3D(r.TEXTURE_3D,0,kt,at.width,at.height,at.depth,0,xt,It,at.data);else if(E.isFramebufferTexture){if(ue)if(Xt)e.texStorage2D(r.TEXTURE_2D,Z,kt,at.width,at.height);else{let Q=at.width,tt=at.height;for(let lt=0;lt<Z;lt++)e.texImage2D(r.TEXTURE_2D,lt,kt,Q,tt,0,xt,It,null),Q>>=1,tt>>=1}}else if(Ht.length>0){if(Xt&&ue){const Q=Mt(Ht[0]);e.texStorage2D(r.TEXTURE_2D,Z,kt,Q.width,Q.height)}for(let Q=0,tt=Ht.length;Q<tt;Q++)vt=Ht[Q],Xt?F&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,xt,It,vt):e.texImage2D(r.TEXTURE_2D,Q,kt,xt,It,vt);E.generateMipmaps=!1}else if(Xt){if(ue){const Q=Mt(at);e.texStorage2D(r.TEXTURE_2D,Z,kt,Q.width,Q.height)}F&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt,It,at)}else e.texImage2D(r.TEXTURE_2D,0,kt,xt,It,at);p(E)&&m(et),Rt.__version=J.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function K(R,E,W){if(E.image.length!==6)return;const et=Nt(R,E),it=E.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+W);const J=n.get(it);if(it.version!==J.__version||et===!0){e.activeTexture(r.TEXTURE0+W);const Rt=me.getPrimaries(me.workingColorSpace),ot=E.colorSpace===Xi?null:me.getPrimaries(E.colorSpace),mt=E.colorSpace===Xi||Rt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Bt=E.isCompressedTexture||E.image[0].isCompressedTexture,at=E.image[0]&&E.image[0].isDataTexture,xt=[];for(let tt=0;tt<6;tt++)!Bt&&!at?xt[tt]=g(E.image[tt],!0,i.maxCubemapSize):xt[tt]=at?E.image[tt].image:E.image[tt],xt[tt]=gt(E,xt[tt]);const It=xt[0],kt=s.convert(E.format,E.colorSpace),vt=s.convert(E.type),Ht=M(E.internalFormat,kt,vt,E.colorSpace),Xt=E.isVideoTexture!==!0,ue=J.__version===void 0||et===!0,F=it.dataReady;let Z=S(E,It);ct(r.TEXTURE_CUBE_MAP,E);let Q;if(Bt){Xt&&ue&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Z,Ht,It.width,It.height);for(let tt=0;tt<6;tt++){Q=xt[tt].mipmaps;for(let lt=0;lt<Q.length;lt++){const Pt=Q[lt];E.format!==oi?kt!==null?Xt?F&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Pt.width,Pt.height,kt,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Ht,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,0,0,Pt.width,Pt.height,kt,vt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt,Ht,Pt.width,Pt.height,0,kt,vt,Pt.data)}}}else{if(Q=E.mipmaps,Xt&&ue){Q.length>0&&Z++;const tt=Mt(xt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Z,Ht,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,xt[tt].width,xt[tt].height,kt,vt,xt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,xt[tt].width,xt[tt].height,0,kt,vt,xt[tt].data);for(let lt=0;lt<Q.length;lt++){const Kt=Q[lt].image[tt].image;Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,Kt.width,Kt.height,kt,vt,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Ht,Kt.width,Kt.height,0,kt,vt,Kt.data)}}else{Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,kt,vt,xt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Ht,kt,vt,xt[tt]);for(let lt=0;lt<Q.length;lt++){const Pt=Q[lt];Xt?F&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,0,0,kt,vt,Pt.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,lt+1,Ht,kt,vt,Pt.image[tt])}}}p(E)&&m(r.TEXTURE_CUBE_MAP),J.__version=it.version,E.onUpdate&&E.onUpdate(E)}R.__version=E.version}function nt(R,E,W,et,it,J){const Rt=s.convert(W.format,W.colorSpace),ot=s.convert(W.type),mt=M(W.internalFormat,Rt,ot,W.colorSpace);if(!n.get(E).__hasExternalTextures){const at=Math.max(1,E.width>>J),xt=Math.max(1,E.height>>J);it===r.TEXTURE_3D||it===r.TEXTURE_2D_ARRAY?e.texImage3D(it,J,mt,at,xt,E.depth,0,Rt,ot,null):e.texImage2D(it,J,mt,at,xt,0,Rt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),j(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,it,n.get(W).__webglTexture,0,Y(E)):(it===r.TEXTURE_2D||it>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&it<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,et,it,n.get(W).__webglTexture,J),e.bindFramebuffer(r.FRAMEBUFFER,null)}function ht(R,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,R),E.depthBuffer){const et=E.depthTexture,it=et&&et.isDepthTexture?et.type:null,J=v(E.stencilBuffer,it),Rt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=Y(E);j(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ot,J,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,ot,J,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,J,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Rt,r.RENDERBUFFER,R)}else{const et=E.textures;for(let it=0;it<et.length;it++){const J=et[it],Rt=s.convert(J.format,J.colorSpace),ot=s.convert(J.type),mt=M(J.internalFormat,Rt,ot,J.colorSpace),Bt=Y(E);W&&j(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,mt,E.width,E.height):j(E)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt,mt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,mt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ut(R,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),q(E.depthTexture,0);const et=n.get(E.depthTexture).__webglTexture,it=Y(E);if(E.depthTexture.format===xs)j(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(E.depthTexture.format===Ls)j(E)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,it):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function bt(R){const E=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!E.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");ut(E.__webglFramebuffer,R)}else if(W){E.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[et]),E.__webglDepthbuffer[et]=r.createRenderbuffer(),ht(E.__webglDepthbuffer[et],R,!1)}else e.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=r.createRenderbuffer(),ht(E.__webglDepthbuffer,R,!1);e.bindFramebuffer(r.FRAMEBUFFER,null)}function wt(R,E,W){const et=n.get(R);E!==void 0&&nt(et.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&bt(R)}function Vt(R){const E=R.texture,W=n.get(R),et=n.get(E);R.addEventListener("dispose",w);const it=R.textures,J=R.isWebGLCubeRenderTarget===!0,Rt=it.length>1;if(Rt||(et.__webglTexture===void 0&&(et.__webglTexture=r.createTexture()),et.__version=E.version,o.memory.textures++),J){W.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[ot]=[];for(let mt=0;mt<E.mipmaps.length;mt++)W.__webglFramebuffer[ot][mt]=r.createFramebuffer()}else W.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let ot=0;ot<E.mipmaps.length;ot++)W.__webglFramebuffer[ot]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Rt)for(let ot=0,mt=it.length;ot<mt;ot++){const Bt=n.get(it[ot]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&j(R)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ot=0;ot<it.length;ot++){const mt=it[ot];W.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ot]);const Bt=s.convert(mt.format,mt.colorSpace),at=s.convert(mt.type),xt=M(mt.internalFormat,Bt,at,mt.colorSpace,R.isXRRenderTarget===!0),It=Y(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,It,xt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,W.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),ht(W.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(J){e.bindTexture(r.TEXTURE_CUBE_MAP,et.__webglTexture),ct(r.TEXTURE_CUBE_MAP,E);for(let ot=0;ot<6;ot++)if(E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)nt(W.__webglFramebuffer[ot][mt],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,mt);else nt(W.__webglFramebuffer[ot],R,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(E)&&m(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Rt){for(let ot=0,mt=it.length;ot<mt;ot++){const Bt=it[ot],at=n.get(Bt);e.bindTexture(r.TEXTURE_2D,at.__webglTexture),ct(r.TEXTURE_2D,Bt),nt(W.__webglFramebuffer,R,Bt,r.COLOR_ATTACHMENT0+ot,r.TEXTURE_2D,0),p(Bt)&&m(r.TEXTURE_2D)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,et.__webglTexture),ct(ot,E),E.mipmaps&&E.mipmaps.length>0)for(let mt=0;mt<E.mipmaps.length;mt++)nt(W.__webglFramebuffer[mt],R,E,r.COLOR_ATTACHMENT0,ot,mt);else nt(W.__webglFramebuffer,R,E,r.COLOR_ATTACHMENT0,ot,0);p(E)&&m(ot),e.unbindTexture()}R.depthBuffer&&bt(R)}function $t(R){const E=R.textures;for(let W=0,et=E.length;W<et;W++){const it=E[W];if(p(it)){const J=R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Rt=n.get(it).__webglTexture;e.bindTexture(J,Rt),m(J),e.unbindTexture()}}}const D=[],Lt=[];function Ft(R){if(R.samples>0){if(j(R)===!1){const E=R.textures,W=R.width,et=R.height;let it=r.COLOR_BUFFER_BIT;const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Rt=n.get(R),ot=E.length>1;if(ot)for(let mt=0;mt<E.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let mt=0;mt<E.length;mt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(it|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(it|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[mt]);const Bt=n.get(E[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Bt,0)}r.blitFramebuffer(0,0,W,et,0,0,W,et,it,r.NEAREST),l===!0&&(D.length=0,Lt.length=0,D.push(r.COLOR_ATTACHMENT0+mt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(D.push(J),Lt.push(J),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Lt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,D))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let mt=0;mt<E.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,Rt.__webglColorRenderbuffer[mt]);const Bt=n.get(E[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Bt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Rt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const E=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Y(R){return Math.min(i.maxSamples,R.samples)}function j(R){const E=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function I(R){const E=o.render.frame;u.get(R)!==E&&(u.set(R,E),R.update())}function gt(R,E){const W=R.colorSpace,et=R.format,it=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==lr&&W!==Xi&&(me.getTransfer(W)===Te?(et!==oi||it!==Di)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),E}function Mt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=P,this.setTexture2D=q,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=wt,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=j}function $x(r,t){function e(n,i=Xi){let s;const o=me.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===pu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===mu)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jf)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jf)return r.BYTE;if(n===Zf)return r.SHORT;if(n===vo)return r.UNSIGNED_SHORT;if(n===du)return r.INT;if(n===Or)return r.UNSIGNED_INT;if(n===Ci)return r.FLOAT;if(n===Ro)return r.HALF_FLOAT;if(n===Qf)return r.ALPHA;if(n===td)return r.RGB;if(n===oi)return r.RGBA;if(n===ed)return r.LUMINANCE;if(n===nd)return r.LUMINANCE_ALPHA;if(n===xs)return r.DEPTH_COMPONENT;if(n===Ls)return r.DEPTH_STENCIL;if(n===id)return r.RED;if(n===_u)return r.RED_INTEGER;if(n===rd)return r.RG;if(n===gu)return r.RG_INTEGER;if(n===vu)return r.RGBA_INTEGER;if(n===Sa||n===ya||n===Ea||n===Ta)if(o===Te)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sa)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sa)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ea)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ta)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===dc||n===pc||n===mc||n===_c)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===dc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===mc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_c)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gc||n===vc||n===xc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===gc||n===vc)return o===Te?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Mc||n===Sc||n===yc||n===Ec||n===Tc||n===bc||n===wc||n===Ac||n===Cc||n===Rc||n===Pc||n===Lc||n===Dc||n===Ic)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Mc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ec)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Tc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ac)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Lc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dc)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ic)return o===Te?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ba||n===Uc||n===Nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===ba)return o===Te?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sd||n===Oc||n===Fc||n===Bc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Oc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class Kx extends Un{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ps extends $e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jx={type:"move"};class kl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ps,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ps,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ps,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,n),m=this._getHandJoint(c,g);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&h>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&h<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ps;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Qx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new _n,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ir({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Bn(new il(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tM extends zs{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,d=null,h=null,f=null,_=null;const g=new Qx,p=e.getContextAttributes();let m=null,M=null;const v=[],S=[],A=new ie;let w=null;const T=new Un;T.layers.enable(1),T.viewport=new be;const C=new Un;C.layers.enable(2),C.viewport=new be;const y=[T,C],x=new Kx;x.layers.enable(1),x.layers.enable(2);let P=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let nt=v[K];return nt===void 0&&(nt=new kl,v[K]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(K){let nt=v[K];return nt===void 0&&(nt=new kl,v[K]=nt),nt.getGripSpace()},this.getHand=function(K){let nt=v[K];return nt===void 0&&(nt=new kl,v[K]=nt),nt.getHandSpace()};function z(K){const nt=S.indexOf(K.inputSource);if(nt===-1)return;const ht=v[nt];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){i.removeEventListener("select",z),i.removeEventListener("selectstart",z),i.removeEventListener("selectend",z),i.removeEventListener("squeeze",z),i.removeEventListener("squeezestart",z),i.removeEventListener("squeezeend",z),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",$);for(let K=0;K<v.length;K++){const nt=S[K];nt!==null&&(S[K]=null,v[K].disconnect(nt))}P=null,U=null,g.reset(),t.setRenderTarget(m),f=null,h=null,d=null,i=null,M=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(m=t.getRenderTarget(),i.addEventListener("select",z),i.addEventListener("selectstart",z),i.addEventListener("selectend",z),i.addEventListener("squeeze",z),i.addEventListener("squeezestart",z),i.addEventListener("squeezeend",z),i.addEventListener("end",q),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const nt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,nt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Fr(f.framebufferWidth,f.framebufferHeight,{format:oi,type:Di,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let nt=null,ht=null,ut=null;p.depth&&(ut=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=p.stencil?Ls:xs,ht=p.stencil?Ps:Or);const bt={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:s};d=new XRWebGLBinding(i,e),h=d.createProjectionLayer(bt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),M=new Fr(h.textureWidth,h.textureHeight,{format:oi,type:Di,depthTexture:new Sd(h.textureWidth,h.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),qt.setContext(i),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(K){for(let nt=0;nt<K.removed.length;nt++){const ht=K.removed[nt],ut=S.indexOf(ht);ut>=0&&(S[ut]=null,v[ut].disconnect(ht))}for(let nt=0;nt<K.added.length;nt++){const ht=K.added[nt];let ut=S.indexOf(ht);if(ut===-1){for(let wt=0;wt<v.length;wt++)if(wt>=S.length){S.push(ht),ut=wt;break}else if(S[wt]===null){S[wt]=ht,ut=wt;break}if(ut===-1)break}const bt=v[ut];bt&&bt.connect(ht)}}const X=new O,V=new O;function H(K,nt,ht){X.setFromMatrixPosition(nt.matrixWorld),V.setFromMatrixPosition(ht.matrixWorld);const ut=X.distanceTo(V),bt=nt.projectionMatrix.elements,wt=ht.projectionMatrix.elements,Vt=bt[14]/(bt[10]-1),$t=bt[14]/(bt[10]+1),D=(bt[9]+1)/bt[5],Lt=(bt[9]-1)/bt[5],Ft=(bt[8]-1)/bt[0],Y=(wt[8]+1)/wt[0],j=Vt*Ft,I=Vt*Y,gt=ut/(-Ft+Y),Mt=gt*-Ft;nt.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Mt),K.translateZ(gt),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert();const R=Vt+gt,E=$t+gt,W=j-Mt,et=I+(ut-Mt),it=D*$t/E*R,J=Lt*$t/E*R;K.projectionMatrix.makePerspective(W,et,it,J,R,E),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}function st(K,nt){nt===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(nt.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;g.texture!==null&&(K.near=g.depthNear,K.far=g.depthFar),x.near=C.near=T.near=K.near,x.far=C.far=T.far=K.far,(P!==x.near||U!==x.far)&&(i.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,U=x.far,T.near=P,T.far=U,C.near=P,C.far=U,T.updateProjectionMatrix(),C.updateProjectionMatrix(),K.updateProjectionMatrix());const nt=K.parent,ht=x.cameras;st(x,nt);for(let ut=0;ut<ht.length;ut++)st(ht[ut],nt);ht.length===2?H(x,T,C):x.projectionMatrix.copy(T.projectionMatrix),L(K,x,nt)};function L(K,nt,ht){ht===null?K.matrix.copy(nt.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(nt.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(nt.projectionMatrix),K.projectionMatrixInverse.copy(nt.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zc*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&f===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(x)};let ct=null;function Nt(K,nt){if(u=nt.getViewerPose(c||o),_=nt,u!==null){const ht=u.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let ut=!1;ht.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let wt=0;wt<ht.length;wt++){const Vt=ht[wt];let $t=null;if(f!==null)$t=f.getViewport(Vt);else{const Lt=d.getViewSubImage(h,Vt);$t=Lt.viewport,wt===0&&(t.setRenderTargetTextures(M,Lt.colorTexture,h.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(M))}let D=y[wt];D===void 0&&(D=new Un,D.layers.enable(wt),D.viewport=new be,y[wt]=D),D.matrix.fromArray(Vt.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(Vt.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set($t.x,$t.y,$t.width,$t.height),wt===0&&(x.matrix.copy(D.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(D)}const bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const wt=d.getDepthInformation(ht[0]);wt&&wt.isValid&&wt.texture&&g.init(t,wt,i.renderState)}}for(let ht=0;ht<v.length;ht++){const ut=S[ht],bt=v[ht];ut!==null&&bt!==void 0&&bt.update(ut,nt,c||o)}ct&&ct(K,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),_=null}const qt=new xd;qt.setAnimationLoop(Nt),this.setAnimationLoop=function(K){ct=K},this.dispose=function(){}}}const mr=new _i,eM=new we;function nM(r,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,_d(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,M,v,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),h(p,m),m.isMeshPhysicalMaterial&&f(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),_(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),g(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?l(p,m,M,v):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Mn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Mn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const M=t.get(m),v=M.envMap,S=M.envMapRotation;v&&(p.envMap.value=v,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),p.envMapRotation.value.setFromMatrix4(eM.makeRotationFromEuler(mr)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,M,v){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*M,p.scale.value=v*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function h(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,M){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=M.texture,p.transmissionSamplerSize.value.set(M.width,M.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){const M=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(M.matrixWorld),p.nearDistance.value=M.shadow.camera.near,p.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function iM(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function c(M,v){let S=i[M.id];S===void 0&&(_(M),S=u(M),i[M.id]=S,M.addEventListener("dispose",p));const A=v.program;n.updateUBOMapping(M,A);const w=t.render.frame;s[M.id]!==w&&(h(M),s[M.id]=w)}function u(M){const v=d();M.__bindingPointIndex=v;const S=r.createBuffer(),A=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,A,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,S),S}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=i[M.id],S=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,T=S.length;w<T;w++){const C=Array.isArray(S[w])?S[w]:[S[w]];for(let y=0,x=C.length;y<x;y++){const P=C[y];if(f(P,w,y,A)===!0){const U=P.__offset,z=Array.isArray(P.value)?P.value:[P.value];let q=0;for(let $=0;$<z.length;$++){const X=z[$],V=g(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,r.bufferSubData(r.UNIFORM_BUFFER,U+q,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,q),q+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,v,S,A){const w=M.value,T=v+"_"+S;if(A[T]===void 0)return typeof w=="number"||typeof w=="boolean"?A[T]=w:A[T]=w.clone(),!0;{const C=A[T];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return A[T]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function _(M){const v=M.uniforms;let S=0;const A=16;for(let T=0,C=v.length;T<C;T++){const y=Array.isArray(v[T])?v[T]:[v[T]];for(let x=0,P=y.length;x<P;x++){const U=y[x],z=Array.isArray(U.value)?U.value:[U.value];for(let q=0,$=z.length;q<$;q++){const X=z[q],V=g(X),H=S%A;H!==0&&A-H<V.boundary&&(S+=A-H),U.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=V.storage}}}const w=S%A;return w>0&&(S+=A-w),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function p(M){const v=M.target;v.removeEventListener("dispose",p);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(const M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}class rM{constructor(t={}){const{canvas:e=Km(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=o;const f=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const m=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ai,this.toneMapping=Ji,this.toneMappingExposure=1;const v=this;let S=!1,A=0,w=0,T=null,C=-1,y=null;const x=new be,P=new be;let U=null;const z=new Yt(0);let q=0,$=e.width,X=e.height,V=1,H=null,st=null;const L=new be(0,0,$,X),ct=new be(0,0,$,X);let Nt=!1;const qt=new yu;let K=!1,nt=!1;const ht=new we,ut=new O,bt=new be,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function $t(){return T===null?V:1}let D=n;function Lt(b,N){return e.getContext(b,N)}try{const b={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${fu}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",lt,!1),D===null){const N="webgl2";if(D=Lt(N,b),D===null)throw Lt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Ft,Y,j,I,gt,Mt,R,E,W,et,it,J,Rt,ot,mt,Bt,at,xt,It,kt,vt,Ht,Xt,ue;function F(){Ft=new hv(D),Ft.init(),Ht=new $x(D,Ft),Y=new sv(D,Ft,t,Ht),j=new Xx(D),I=new pv(D),gt=new Lx,Mt=new qx(D,Ft,j,gt,Y,Ht,I),R=new av(v),E=new uv(v),W=new S_(D),Xt=new iv(D,W),et=new fv(D,W,I,Xt),it=new _v(D,et,W,I),It=new mv(D,Y,Mt),Bt=new ov(gt),J=new Px(v,R,E,Ft,Y,Xt,Bt),Rt=new nM(v,gt),ot=new Ix,mt=new zx(Ft),xt=new nv(v,R,E,j,it,h,l),at=new Wx(v,it,Y),ue=new iM(D,I,Y,j),kt=new rv(D,Ft,I),vt=new dv(D,Ft,I),I.programs=J.programs,v.capabilities=Y,v.extensions=Ft,v.properties=gt,v.renderLists=ot,v.shadowMap=at,v.state=j,v.info=I}F();const Z=new tM(v,D);this.xr=Z,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const b=Ft.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ft.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize($,X,!1))},this.getSize=function(b){return b.set($,X)},this.setSize=function(b,N,G=!0){if(Z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,X=N,e.width=Math.floor(b*V),e.height=Math.floor(N*V),G===!0&&(e.style.width=b+"px",e.style.height=N+"px"),this.setViewport(0,0,b,N)},this.getDrawingBufferSize=function(b){return b.set($*V,X*V).floor()},this.setDrawingBufferSize=function(b,N,G){$=b,X=N,V=G,e.width=Math.floor(b*G),e.height=Math.floor(N*G),this.setViewport(0,0,b,N)},this.getCurrentViewport=function(b){return b.copy(x)},this.getViewport=function(b){return b.copy(L)},this.setViewport=function(b,N,G,k){b.isVector4?L.set(b.x,b.y,b.z,b.w):L.set(b,N,G,k),j.viewport(x.copy(L).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(ct)},this.setScissor=function(b,N,G,k){b.isVector4?ct.set(b.x,b.y,b.z,b.w):ct.set(b,N,G,k),j.scissor(P.copy(ct).multiplyScalar(V).round())},this.getScissorTest=function(){return Nt},this.setScissorTest=function(b){j.setScissorTest(Nt=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){st=b},this.getClearColor=function(b){return b.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor.apply(xt,arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha.apply(xt,arguments)},this.clear=function(b=!0,N=!0,G=!0){let k=0;if(b){let B=!1;if(T!==null){const rt=T.texture.format;B=rt===vu||rt===gu||rt===_u}if(B){const rt=T.texture.type,dt=rt===Di||rt===Or||rt===vo||rt===Ps||rt===pu||rt===mu,yt=xt.getClearColor(),pt=xt.getClearAlpha(),St=yt.r,Dt=yt.g,Ot=yt.b;dt?(f[0]=St,f[1]=Dt,f[2]=Ot,f[3]=pt,D.clearBufferuiv(D.COLOR,0,f)):(_[0]=St,_[1]=Dt,_[2]=Ot,_[3]=pt,D.clearBufferiv(D.COLOR,0,_))}else k|=D.COLOR_BUFFER_BIT}N&&(k|=D.DEPTH_BUFFER_BIT),G&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",lt,!1),ot.dispose(),mt.dispose(),gt.dispose(),R.dispose(),E.dispose(),it.dispose(),Xt.dispose(),ue.dispose(),J.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",At),Z.removeEventListener("sessionend",ae),ft.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=I.autoReset,N=at.enabled,G=at.autoUpdate,k=at.needsUpdate,B=at.type;F(),I.autoReset=b,at.enabled=N,at.autoUpdate=G,at.needsUpdate=k,at.type=B}function lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Pt(b){const N=b.target;N.removeEventListener("dispose",Pt),Kt(N)}function Kt(b){ge(b),gt.remove(b)}function ge(b){const N=gt.get(b).programs;N!==void 0&&(N.forEach(function(G){J.releaseProgram(G)}),b.isShaderMaterial&&J.releaseShaderCache(b))}this.renderBufferDirect=function(b,N,G,k,B,rt){N===null&&(N=wt);const dt=B.isMesh&&B.matrixWorld.determinant()<0,yt=ye(b,N,G,k,B);j.setMaterial(k,dt);let pt=G.index,St=1;if(k.wireframe===!0){if(pt=et.getWireframeAttribute(G),pt===void 0)return;St=2}const Dt=G.drawRange,Ot=G.attributes.position;let le=Dt.start*St,_e=(Dt.start+Dt.count)*St;rt!==null&&(le=Math.max(le,rt.start*St),_e=Math.min(_e,(rt.start+rt.count)*St)),pt!==null?(le=Math.max(le,0),_e=Math.min(_e,pt.count)):Ot!=null&&(le=Math.max(le,0),_e=Math.min(_e,Ot.count));const ce=_e-le;if(ce<0||ce===1/0)return;Xt.setup(B,k,yt,G,pt);let ke,se=kt;if(pt!==null&&(ke=W.get(pt),se=vt,se.setIndex(ke)),B.isMesh)k.wireframe===!0?(j.setLineWidth(k.wireframeLinewidth*$t()),se.setMode(D.LINES)):se.setMode(D.TRIANGLES);else if(B.isLine){let Tt=k.linewidth;Tt===void 0&&(Tt=1),j.setLineWidth(Tt*$t()),B.isLineSegments?se.setMode(D.LINES):B.isLineLoop?se.setMode(D.LINE_LOOP):se.setMode(D.LINE_STRIP)}else B.isPoints?se.setMode(D.POINTS):B.isSprite&&se.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)se.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Ft.get("WEBGL_multi_draw"))se.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Tt=B._multiDrawStarts,je=B._multiDrawCounts,he=B._multiDrawCount,ti=pt?W.get(pt).bytesPerElement:1,Gr=gt.get(k).currentProgram.getUniforms();for(let Cn=0;Cn<he;Cn++)Gr.setValue(D,"_gl_DrawID",Cn),se.render(Tt[Cn]/ti,je[Cn])}else if(B.isInstancedMesh)se.renderInstances(le,ce,B.count);else if(G.isInstancedBufferGeometry){const Tt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,je=Math.min(G.instanceCount,Tt);se.renderInstances(le,ce,je)}else se.render(le,ce)};function ve(b,N,G){b.transparent===!0&&b.side===wi&&b.forceSinglePass===!1?(b.side=Mn,b.needsUpdate=!0,Se(b,N,G),b.side=nr,b.needsUpdate=!0,Se(b,N,G),b.side=wi):Se(b,N,G)}this.compile=function(b,N,G=null){G===null&&(G=b),p=mt.get(G),p.init(N),M.push(p),G.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==G&&b.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const k=new Set;return b.traverse(function(B){const rt=B.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const yt=rt[dt];ve(yt,G,B),k.add(yt)}else ve(rt,G,B),k.add(rt)}),M.pop(),p=null,k},this.compileAsync=function(b,N,G=null){const k=this.compile(b,N,G);return new Promise(B=>{function rt(){if(k.forEach(function(dt){gt.get(dt).currentProgram.isReady()&&k.delete(dt)}),k.size===0){B(b);return}setTimeout(rt,10)}Ft.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let re=null;function zt(b){re&&re(b)}function At(){ft.stop()}function ae(){ft.start()}const ft=new xd;ft.setAnimationLoop(zt),typeof self<"u"&&ft.setContext(self),this.setAnimationLoop=function(b){re=b,Z.setAnimationLoop(b),b===null?ft.stop():ft.start()},Z.addEventListener("sessionstart",At),Z.addEventListener("sessionend",ae),this.render=function(b,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(N),N=Z.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,N,T),p=mt.get(b,M.length),p.init(N),M.push(p),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),qt.setFromProjectionMatrix(ht),nt=this.localClippingEnabled,K=Bt.init(this.clippingPlanes,nt),g=ot.get(b,m.length),g.init(),m.push(g),Z.enabled===!0&&Z.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&Gt(rt,N,-1/0,v.sortObjects)}Gt(b,N,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(H,st),Vt=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,Vt&&xt.addToRenderList(g,b),this.info.render.frame++,K===!0&&Bt.beginShadows();const G=p.state.shadowsArray;at.render(G,b,N),K===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=g.opaque,B=g.transmissive;if(p.setupLights(),N.isArrayCamera){const rt=N.cameras;if(B.length>0)for(let dt=0,yt=rt.length;dt<yt;dt++){const pt=rt[dt];Wt(k,B,b,pt)}Vt&&xt.render(b);for(let dt=0,yt=rt.length;dt<yt;dt++){const pt=rt[dt];Ut(g,b,pt,pt.viewport)}}else B.length>0&&Wt(k,B,b,N),Vt&&xt.render(b),Ut(g,b,N);T!==null&&(Mt.updateMultisampleRenderTarget(T),Mt.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,N),Xt.resetDefaultState(),C=-1,y=null,M.pop(),M.length>0?(p=M[M.length-1],K===!0&&Bt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?g=m[m.length-1]:g=null};function Gt(b,N,G,k){if(b.visible===!1)return;if(b.layers.test(N.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(N);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||qt.intersectsSprite(b)){k&&bt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ht);const dt=it.update(b),yt=b.material;yt.visible&&g.push(b,dt,yt,G,bt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||qt.intersectsObject(b))){const dt=it.update(b),yt=b.material;if(k&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),bt.copy(b.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),bt.copy(dt.boundingSphere.center)),bt.applyMatrix4(b.matrixWorld).applyMatrix4(ht)),Array.isArray(yt)){const pt=dt.groups;for(let St=0,Dt=pt.length;St<Dt;St++){const Ot=pt[St],le=yt[Ot.materialIndex];le&&le.visible&&g.push(b,dt,le,G,bt.z,Ot)}}else yt.visible&&g.push(b,dt,yt,G,bt.z,null)}}const rt=b.children;for(let dt=0,yt=rt.length;dt<yt;dt++)Gt(rt[dt],N,G,k)}function Ut(b,N,G,k){const B=b.opaque,rt=b.transmissive,dt=b.transparent;p.setupLightsView(G),K===!0&&Bt.setGlobalState(v.clippingPlanes,G),k&&j.viewport(x.copy(k)),B.length>0&&Ce(B,N,G),rt.length>0&&Ce(rt,N,G),dt.length>0&&Ce(dt,N,G),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Wt(b,N,G,k){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[k.id]===void 0&&(p.state.transmissionRenderTarget[k.id]=new Fr(1,1,{generateMipmaps:!0,type:Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float")?Ro:Di,minFilter:wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));const rt=p.state.transmissionRenderTarget[k.id],dt=k.viewport||x;rt.setSize(dt.z,dt.w);const yt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(z),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),Vt?xt.render(G):v.clear();const pt=v.toneMapping;v.toneMapping=Ji;const St=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),p.setupLightsView(k),K===!0&&Bt.setGlobalState(v.clippingPlanes,k),Ce(b,G,k),Mt.updateMultisampleRenderTarget(rt),Mt.updateRenderTargetMipmap(rt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Dt=!1;for(let Ot=0,le=N.length;Ot<le;Ot++){const _e=N[Ot],ce=_e.object,ke=_e.geometry,se=_e.material,Tt=_e.group;if(se.side===wi&&ce.layers.test(k.layers)){const je=se.side;se.side=Mn,se.needsUpdate=!0,te(ce,G,k,ke,se,Tt),se.side=je,se.needsUpdate=!0,Dt=!0}}Dt===!0&&(Mt.updateMultisampleRenderTarget(rt),Mt.updateRenderTargetMipmap(rt))}v.setRenderTarget(yt),v.setClearColor(z,q),St!==void 0&&(k.viewport=St),v.toneMapping=pt}function Ce(b,N,G){const k=N.isScene===!0?N.overrideMaterial:null;for(let B=0,rt=b.length;B<rt;B++){const dt=b[B],yt=dt.object,pt=dt.geometry,St=k===null?dt.material:k,Dt=dt.group;yt.layers.test(G.layers)&&te(yt,N,G,pt,St,Dt)}}function te(b,N,G,k,B,rt){b.onBeforeRender(v,N,G,k,B,rt),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.transparent===!0&&B.side===wi&&B.forceSinglePass===!1?(B.side=Mn,B.needsUpdate=!0,v.renderBufferDirect(G,N,k,B,b,rt),B.side=nr,B.needsUpdate=!0,v.renderBufferDirect(G,N,k,B,b,rt),B.side=wi):v.renderBufferDirect(G,N,k,B,b,rt),b.onAfterRender(v,N,G,k,B,rt)}function Se(b,N,G){N.isScene!==!0&&(N=wt);const k=gt.get(b),B=p.state.lights,rt=p.state.shadowsArray,dt=B.state.version,yt=J.getParameters(b,B.state,rt,N,G),pt=J.getProgramCacheKey(yt);let St=k.programs;k.environment=b.isMeshStandardMaterial?N.environment:null,k.fog=N.fog,k.envMap=(b.isMeshStandardMaterial?E:R).get(b.envMap||k.environment),k.envMapRotation=k.environment!==null&&b.envMap===null?N.environmentRotation:b.envMapRotation,St===void 0&&(b.addEventListener("dispose",Pt),St=new Map,k.programs=St);let Dt=St.get(pt);if(Dt!==void 0){if(k.currentProgram===Dt&&k.lightsStateVersion===dt)return Ee(b,yt),Dt}else yt.uniforms=J.getUniforms(b),b.onBeforeCompile(yt,v),Dt=J.acquireProgram(yt,pt),St.set(pt,Dt),k.uniforms=yt.uniforms;const Ot=k.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ot.clippingPlanes=Bt.uniform),Ee(b,yt),k.needsLights=An(b),k.lightsStateVersion=dt,k.needsLights&&(Ot.ambientLightColor.value=B.state.ambient,Ot.lightProbe.value=B.state.probe,Ot.directionalLights.value=B.state.directional,Ot.directionalLightShadows.value=B.state.directionalShadow,Ot.spotLights.value=B.state.spot,Ot.spotLightShadows.value=B.state.spotShadow,Ot.rectAreaLights.value=B.state.rectArea,Ot.ltc_1.value=B.state.rectAreaLTC1,Ot.ltc_2.value=B.state.rectAreaLTC2,Ot.pointLights.value=B.state.point,Ot.pointLightShadows.value=B.state.pointShadow,Ot.hemisphereLights.value=B.state.hemi,Ot.directionalShadowMap.value=B.state.directionalShadowMap,Ot.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ot.spotShadowMap.value=B.state.spotShadowMap,Ot.spotLightMatrix.value=B.state.spotLightMatrix,Ot.spotLightMap.value=B.state.spotLightMap,Ot.pointShadowMap.value=B.state.pointShadowMap,Ot.pointShadowMatrix.value=B.state.pointShadowMatrix),k.currentProgram=Dt,k.uniformsList=null,Dt}function ze(b){if(b.uniformsList===null){const N=b.currentProgram.getUniforms();b.uniformsList=wa.seqWithValue(N.seq,b.uniforms)}return b.uniformsList}function Ee(b,N){const G=gt.get(b);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function ye(b,N,G,k,B){N.isScene!==!0&&(N=wt),Mt.resetTextureUnits();const rt=N.fog,dt=k.isMeshStandardMaterial?N.environment:null,yt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,pt=(k.isMeshStandardMaterial?E:R).get(k.envMap||dt),St=k.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Dt=!!G.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ot=!!G.morphAttributes.position,le=!!G.morphAttributes.normal,_e=!!G.morphAttributes.color;let ce=Ji;k.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(ce=v.toneMapping);const ke=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,se=ke!==void 0?ke.length:0,Tt=gt.get(k),je=p.state.lights;if(K===!0&&(nt===!0||b!==y)){const Wn=b===y&&k.id===C;Bt.setState(k,b,Wn)}let he=!1;k.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==je.state.version||Tt.outputColorSpace!==yt||B.isBatchedMesh&&Tt.batching===!1||!B.isBatchedMesh&&Tt.batching===!0||B.isBatchedMesh&&Tt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Tt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Tt.instancing===!1||!B.isInstancedMesh&&Tt.instancing===!0||B.isSkinnedMesh&&Tt.skinning===!1||!B.isSkinnedMesh&&Tt.skinning===!0||B.isInstancedMesh&&Tt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Tt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Tt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Tt.instancingMorph===!1&&B.morphTexture!==null||Tt.envMap!==pt||k.fog===!0&&Tt.fog!==rt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Bt.numPlanes||Tt.numIntersection!==Bt.numIntersection)||Tt.vertexAlphas!==St||Tt.vertexTangents!==Dt||Tt.morphTargets!==Ot||Tt.morphNormals!==le||Tt.morphColors!==_e||Tt.toneMapping!==ce||Tt.morphTargetsCount!==se)&&(he=!0):(he=!0,Tt.__version=k.version);let ti=Tt.currentProgram;he===!0&&(ti=Se(k,N,B));let Gr=!1,Cn=!1,ul=!1;const Ne=ti.getUniforms(),Ni=Tt.uniforms;if(j.useProgram(ti.program)&&(Gr=!0,Cn=!0,ul=!0),k.id!==C&&(C=k.id,Cn=!0),Gr||y!==b){Ne.setValue(D,"projectionMatrix",b.projectionMatrix),Ne.setValue(D,"viewMatrix",b.matrixWorldInverse);const Wn=Ne.map.cameraPosition;Wn!==void 0&&Wn.setValue(D,ut.setFromMatrixPosition(b.matrixWorld)),Y.logarithmicDepthBuffer&&Ne.setValue(D,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Ne.setValue(D,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Cn=!0,ul=!0)}if(B.isSkinnedMesh){Ne.setOptional(D,B,"bindMatrix"),Ne.setOptional(D,B,"bindMatrixInverse");const Wn=B.skeleton;Wn&&(Wn.boneTexture===null&&Wn.computeBoneTexture(),Ne.setValue(D,"boneTexture",Wn.boneTexture,Mt))}B.isBatchedMesh&&(Ne.setOptional(D,B,"batchingTexture"),Ne.setValue(D,"batchingTexture",B._matricesTexture,Mt),Ne.setOptional(D,B,"batchingIdTexture"),Ne.setValue(D,"batchingIdTexture",B._indirectTexture,Mt),Ne.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&Ne.setValue(D,"batchingColorTexture",B._colorsTexture,Mt));const hl=G.morphAttributes;if((hl.position!==void 0||hl.normal!==void 0||hl.color!==void 0)&&It.update(B,G,ti),(Cn||Tt.receiveShadow!==B.receiveShadow)&&(Tt.receiveShadow=B.receiveShadow,Ne.setValue(D,"receiveShadow",B.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Ni.envMap.value=pt,Ni.flipEnvMap.value=pt.isCubeTexture&&pt.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&N.environment!==null&&(Ni.envMapIntensity.value=N.environmentIntensity),Cn&&(Ne.setValue(D,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&de(Ni,ul),rt&&k.fog===!0&&Rt.refreshFogUniforms(Ni,rt),Rt.refreshMaterialUniforms(Ni,k,V,X,p.state.transmissionRenderTarget[b.id]),wa.upload(D,ze(Tt),Ni,Mt)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(wa.upload(D,ze(Tt),Ni,Mt),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Ne.setValue(D,"center",B.center),Ne.setValue(D,"modelViewMatrix",B.modelViewMatrix),Ne.setValue(D,"normalMatrix",B.normalMatrix),Ne.setValue(D,"modelMatrix",B.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Wn=k.uniformsGroups;for(let fl=0,Jp=Wn.length;fl<Jp;fl++){const eh=Wn[fl];ue.update(eh,ti),ue.bind(eh,ti)}}return ti}function de(b,N){b.ambientLightColor.needsUpdate=N,b.lightProbe.needsUpdate=N,b.directionalLights.needsUpdate=N,b.directionalLightShadows.needsUpdate=N,b.pointLights.needsUpdate=N,b.pointLightShadows.needsUpdate=N,b.spotLights.needsUpdate=N,b.spotLightShadows.needsUpdate=N,b.rectAreaLights.needsUpdate=N,b.hemisphereLights.needsUpdate=N}function An(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,N,G){gt.get(b.texture).__webglTexture=N,gt.get(b.depthTexture).__webglTexture=G;const k=gt.get(b);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=G===void 0,k.__autoAllocateDepthBuffer||Ft.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,N){const G=gt.get(b);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(b,N=0,G=0){T=b,A=N,w=G;let k=!0,B=null,rt=!1,dt=!1;if(b){const pt=gt.get(b);pt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):pt.__webglFramebuffer===void 0?Mt.setupRenderTarget(b):pt.__hasExternalTextures&&Mt.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);const St=b.texture;(St.isData3DTexture||St.isDataArrayTexture||St.isCompressedArrayTexture)&&(dt=!0);const Dt=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Dt[N])?B=Dt[N][G]:B=Dt[N],rt=!0):b.samples>0&&Mt.useMultisampledRTT(b)===!1?B=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[G]:B=Dt,x.copy(b.viewport),P.copy(b.scissor),U=b.scissorTest}else x.copy(L).multiplyScalar(V).floor(),P.copy(ct).multiplyScalar(V).floor(),U=Nt;if(j.bindFramebuffer(D.FRAMEBUFFER,B)&&k&&j.drawBuffers(b,B),j.viewport(x),j.scissor(P),j.setScissorTest(U),rt){const pt=gt.get(b.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,pt.__webglTexture,G)}else if(dt){const pt=gt.get(b.texture),St=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,pt.__webglTexture,G||0,St)}C=-1},this.readRenderTargetPixels=function(b,N,G,k,B,rt,dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){j.bindFramebuffer(D.FRAMEBUFFER,yt);try{const pt=b.texture,St=pt.format,Dt=pt.type;if(!Y.textureFormatReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Y.textureTypeReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=b.width-k&&G>=0&&G<=b.height-B&&D.readPixels(N,G,k,B,Ht.convert(St),Ht.convert(Dt),rt)}finally{const pt=T!==null?gt.get(T).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,pt)}}},this.readRenderTargetPixelsAsync=async function(b,N,G,k,B,rt,dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&dt!==void 0&&(yt=yt[dt]),yt){j.bindFramebuffer(D.FRAMEBUFFER,yt);try{const pt=b.texture,St=pt.format,Dt=pt.type;if(!Y.textureFormatReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Y.textureTypeReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=b.width-k&&G>=0&&G<=b.height-B){const Ot=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.bufferData(D.PIXEL_PACK_BUFFER,rt.byteLength,D.STREAM_READ),D.readPixels(N,G,k,B,Ht.convert(St),Ht.convert(Dt),0),D.flush();const le=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await jm(D,le,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,rt)}finally{D.deleteBuffer(Ot),D.deleteSync(le)}return rt}}finally{const pt=T!==null?gt.get(T).__webglFramebuffer:null;j.bindFramebuffer(D.FRAMEBUFFER,pt)}}},this.copyFramebufferToTexture=function(b,N=null,G=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,b=arguments[1]);const k=Math.pow(2,-G),B=Math.floor(b.image.width*k),rt=Math.floor(b.image.height*k),dt=N!==null?N.x:0,yt=N!==null?N.y:0;Mt.setTexture2D(b,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,dt,yt,B,rt),j.unbindTexture()},this.copyTextureToTexture=function(b,N,G=null,k=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,b=arguments[1],N=arguments[2],B=arguments[3]||0,G=null);let rt,dt,yt,pt,St,Dt;G!==null?(rt=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.min.x,pt=G.min.y):(rt=b.image.width,dt=b.image.height,yt=0,pt=0),k!==null?(St=k.x,Dt=k.y):(St=0,Dt=0);const Ot=Ht.convert(N.format),le=Ht.convert(N.type);Mt.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const _e=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ke=D.getParameter(D.UNPACK_SKIP_PIXELS),se=D.getParameter(D.UNPACK_SKIP_ROWS),Tt=D.getParameter(D.UNPACK_SKIP_IMAGES),je=b.isCompressedTexture?b.mipmaps[B]:b.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,je.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,je.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,yt),D.pixelStorei(D.UNPACK_SKIP_ROWS,pt),b.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,B,St,Dt,rt,dt,Ot,le,je.data):b.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,B,St,Dt,je.width,je.height,Ot,je.data):D.texSubImage2D(D.TEXTURE_2D,B,St,Dt,rt,dt,Ot,le,je),D.pixelStorei(D.UNPACK_ROW_LENGTH,_e),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,se),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Tt),B===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(b,N,G=null,k=null,B=0){b.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,k=arguments[1]||null,b=arguments[2],N=arguments[3],B=arguments[4]||0);let rt,dt,yt,pt,St,Dt,Ot,le,_e;const ce=b.isCompressedTexture?b.mipmaps[B]:b.image;G!==null?(rt=G.max.x-G.min.x,dt=G.max.y-G.min.y,yt=G.max.z-G.min.z,pt=G.min.x,St=G.min.y,Dt=G.min.z):(rt=ce.width,dt=ce.height,yt=ce.depth,pt=0,St=0,Dt=0),k!==null?(Ot=k.x,le=k.y,_e=k.z):(Ot=0,le=0,_e=0);const ke=Ht.convert(N.format),se=Ht.convert(N.type);let Tt;if(N.isData3DTexture)Mt.setTexture3D(N,0),Tt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)Mt.setTexture2DArray(N,0),Tt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const je=D.getParameter(D.UNPACK_ROW_LENGTH),he=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ti=D.getParameter(D.UNPACK_SKIP_PIXELS),Gr=D.getParameter(D.UNPACK_SKIP_ROWS),Cn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,pt),D.pixelStorei(D.UNPACK_SKIP_ROWS,St),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Dt),b.isDataTexture||b.isData3DTexture?D.texSubImage3D(Tt,B,Ot,le,_e,rt,dt,yt,ke,se,ce.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(Tt,B,Ot,le,_e,rt,dt,yt,ke,ce.data):D.texSubImage3D(Tt,B,Ot,le,_e,rt,dt,yt,ke,se,ce),D.pixelStorei(D.UNPACK_ROW_LENGTH,je),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,he),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ti),D.pixelStorei(D.UNPACK_SKIP_ROWS,Gr),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Cn),B===0&&N.generateMipmaps&&D.generateMipmap(Tt),j.unbindTexture()},this.initRenderTarget=function(b){gt.get(b).__webglFramebuffer===void 0&&Mt.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Mt.setTextureCube(b,0):b.isData3DTexture?Mt.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Mt.setTexture2DArray(b,0):Mt.setTexture2D(b,0),j.unbindTexture()},this.resetState=function(){A=0,w=0,T=null,j.reset(),Xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===xu?"display-p3":"srgb",e.unpackColorSpace=me.workingColorSpace===nl?"display-p3":"srgb"}}class sM extends $e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class wd extends Hr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Va=new O,Ga=new O,Zh=new we,Ys=new Mu,ra=new Io,Hl=new O,Jh=new O;class oM extends $e{constructor(t=new bn,e=new wd){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Va.fromBufferAttribute(e,i-1),Ga.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Va.distanceTo(Ga);t.setAttribute("lineDistance",new Je(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ra.copy(n.boundingSphere),ra.applyMatrix4(i),ra.radius+=s,t.ray.intersectsSphere(ra)===!1)return;Zh.copy(i).invert(),Ys.copy(t.ray).applyMatrix4(Zh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=u.getX(g),M=u.getX(g+1),v=sa(this,t,Ys,l,m,M);v&&e.push(v)}if(this.isLineLoop){const g=u.getX(_-1),p=u.getX(f),m=sa(this,t,Ys,l,g,p);m&&e.push(m)}}else{const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,p=_-1;g<p;g+=c){const m=sa(this,t,Ys,l,g,g+1);m&&e.push(m)}if(this.isLineLoop){const g=sa(this,t,Ys,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function sa(r,t,e,n,i,s){const o=r.geometry.attributes.position;if(Va.fromBufferAttribute(o,i),Ga.fromBufferAttribute(o,s),e.distanceSqToSegment(Va,Ga,Hl,Jh)>n)return;Hl.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(Hl);if(!(l<t.near||l>t.far))return{distance:l,point:Jh.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,object:r}}class Ad extends Hr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Qh=new we,Hc=new Mu,oa=new Io,aa=new O;class aM extends $e{constructor(t=new bn,e=new Ad){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oa.copy(n.boundingSphere),oa.applyMatrix4(i),oa.radius+=s,t.ray.intersectsSphere(oa)===!1)return;Qh.copy(i).invert(),Hc.copy(t.ray).applyMatrix4(Qh);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){const h=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=h,g=f;_<g;_++){const p=c.getX(_);aa.fromBufferAttribute(d,p),tf(aa,p,l,i,t,e,this)}}else{const h=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=h,g=f;_<g;_++)aa.fromBufferAttribute(d,_),tf(aa,_,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function tf(r,t,e,n,i,s,o){const a=Hc.distanceSqToPoint(r);if(a<e){const l=new O;Hc.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,object:o})}}class lM extends _n{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cM{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let i=0;const s=n.length;let o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);const u=n[i],h=n[i+1]-u,f=(o-u)/h;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);const o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new ie:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new O,i=[],s=[],o=[],a=new O,l=new we;for(let f=0;f<=t;f++){const _=f/t;i[f]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE;const u=Math.abs(i[0].x),d=Math.abs(i[0].y),h=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(sn(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(sn(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function uM(r,t){const e=1-r;return e*e*e*t}function hM(r,t){const e=1-r;return 3*e*e*r*t}function fM(r,t){return 3*(1-r)*r*r*t}function dM(r,t){return r*r*r*t}function Vl(r,t,e,n,i){return uM(r,t)+hM(r,e)+fM(r,n)+dM(r,i)}class pM extends cM{constructor(t=new O,e=new O,n=new O,i=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new O){const n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Vl(t,i.x,s.x,o.x,a.x),Vl(t,i.y,s.y,o.y,a.y),Vl(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class sl extends bn{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};const s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new Je(s,3)),this.setAttribute("normal",new Je(s.slice(),3)),this.setAttribute("uv",new Je(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){const v=new O,S=new O,A=new O;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],S),f(e[w+2],A),l(v,S,A,M)}function l(M,v,S,A){const w=A+1,T=[];for(let C=0;C<=w;C++){T[C]=[];const y=M.clone().lerp(S,C/w),x=v.clone().lerp(S,C/w),P=w-C;for(let U=0;U<=P;U++)U===0&&C===w?T[C][U]=y:T[C][U]=y.clone().lerp(x,U/P)}for(let C=0;C<w;C++)for(let y=0;y<2*(w-C)-1;y++){const x=Math.floor(y/2);y%2===0?(h(T[C][x+1]),h(T[C+1][x]),h(T[C][x])):(h(T[C][x+1]),h(T[C+1][x+1]),h(T[C+1][x]))}}function c(M){const v=new O;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(M),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function u(){const M=new O;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];const S=p(M)/2/Math.PI+.5,A=m(M)/Math.PI+.5;o.push(S,1-A)}_(),d()}function d(){for(let M=0;M<o.length;M+=6){const v=o[M+0],S=o[M+2],A=o[M+4],w=Math.max(v,S,A),T=Math.min(v,S,A);w>.9&&T<.1&&(v<.2&&(o[M+0]+=1),S<.2&&(o[M+2]+=1),A<.2&&(o[M+4]+=1))}}function h(M){s.push(M.x,M.y,M.z)}function f(M,v){const S=M*3;v.x=t[S+0],v.y=t[S+1],v.z=t[S+2]}function _(){const M=new O,v=new O,S=new O,A=new O,w=new ie,T=new ie,C=new ie;for(let y=0,x=0;y<s.length;y+=9,x+=6){M.set(s[y+0],s[y+1],s[y+2]),v.set(s[y+3],s[y+4],s[y+5]),S.set(s[y+6],s[y+7],s[y+8]),w.set(o[x+0],o[x+1]),T.set(o[x+2],o[x+3]),C.set(o[x+4],o[x+5]),A.copy(M).add(v).add(S).divideScalar(3);const P=p(A);g(w,x+0,M,P),g(T,x+2,v,P),g(C,x+4,S,P)}}function g(M,v,S,A){A<0&&M.x===1&&(o[v]=M.x-1),S.x===0&&S.z===0&&(o[v]=A/2/Math.PI+.5)}function p(M){return Math.atan2(M.z,-M.x)}function m(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new sl(t.vertices,t.indices,t.radius,t.details)}}class Tu extends sl{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tu(t.radius,t.detail)}}class bu extends sl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new bu(t.radius,t.detail)}}class wu extends bn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],d=new O,h=new O,f=[],_=[],g=[],p=[];for(let m=0;m<=n;m++){const M=[],v=m/n;let S=0;m===0&&o===0?S=.5/e:m===n&&l===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){const w=A/e;d.x=-t*Math.cos(i+w*s)*Math.sin(o+v*a),d.y=t*Math.cos(o+v*a),d.z=t*Math.sin(i+w*s)*Math.sin(o+v*a),_.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),p.push(w+S,1-v),M.push(c++)}u.push(M)}for(let m=0;m<n;m++)for(let M=0;M<e;M++){const v=u[m][M+1],S=u[m][M],A=u[m+1][M],w=u[m+1][M+1];(m!==0||o>0)&&f.push(v,S,w),(m!==n-1||l<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new Je(_,3)),this.setAttribute("normal",new Je(g,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wu(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Au extends bn{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new O,d=new O,h=new O;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){const g=_/i*s,p=f/n*Math.PI*2;d.x=(t+e*Math.cos(p))*Math.cos(g),d.y=(t+e*Math.cos(p))*Math.sin(g),d.z=e*Math.sin(p),a.push(d.x,d.y,d.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),h.subVectors(d,u).normalize(),l.push(h.x,h.y,h.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){const g=(i+1)*f+_-1,p=(i+1)*(f-1)+_-1,m=(i+1)*(f-1)+_,M=(i+1)*f+_;o.push(g,p,M),o.push(p,m,M)}this.setIndex(o),this.setAttribute("position",new Je(a,3)),this.setAttribute("normal",new Je(l,3)),this.setAttribute("uv",new Je(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Au(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Gl extends Hr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cu extends $e{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Wl=new we,ef=new O,nf=new O;class Cd{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new we,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yu,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(ef),nf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(nf),e.updateMatrixWorld(),Wl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const rf=new we,qs=new O,Xl=new O;class mM extends Cd{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new be(2,1,1,1),new be(0,1,1,1),new be(3,1,1,1),new be(1,1,1,1),new be(3,0,1,1),new be(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),qs.setFromMatrixPosition(t.matrixWorld),n.position.copy(qs),Xl.copy(n.position),Xl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Xl),n.updateMatrixWorld(),i.makeTranslation(-qs.x,-qs.y,-qs.z),rf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rf)}}class sf extends Cu{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _M extends Cd{constructor(){super(new Md(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gM extends Cu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($e.DEFAULT_UP),this.updateMatrix(),this.target=new $e,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vM extends Cu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class xM{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=of(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=of();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function of(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fu);class MM{constructor(t){this.canvas=t,this.width=window.innerWidth,this.height=window.innerHeight,this.mouse={x:0,y:0,targetX:0,targetY:0,isDown:!1,prevX:0,prevY:0},this.dragRotation={x:0,y:0,vx:0,vy:0},this.scrollProgress=0,this.mode=document.documentElement.getAttribute("data-mode")||"hardware",this.colors={hardware:{accent:new Yt(13827840),accentSecondary:new Yt(16758784),core:new Yt(13827840),glow:new Yt(10079232),particles:new Yt(14741759)},software:{accent:new Yt(62206),accentSecondary:new Yt(5221630),core:new Yt(62206),glow:new Yt(43263),particles:new Yt(13430783)}},this.init()}init(){this.renderer=new rM({canvas:this.canvas,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.toneMapping=$f,this.renderer.toneMappingExposure=1.25,this.scene=new sM,this.camera=new Un(45,this.width/this.height,.1,100),this.camera.position.set(0,0,7.5),this.setupLighting(),this.buildArtifact(),this.buildParticles(),window.addEventListener("resize",()=>this.onResize(),{passive:!0}),this.setupMouseEvents(),this.clock=new xM,this.animate()}setupLighting(){this.ambientLight=new vM(16777215,.6),this.scene.add(this.ambientLight),this.keyLight=new gM(16777215,2),this.keyLight.position.set(5,8,5),this.scene.add(this.keyLight),this.rimLight=new sf(13827840,3.5,20),this.rimLight.position.set(-5,-4,-3),this.scene.add(this.rimLight),this.coreLight=new sf(13827840,2.5,12),this.coreLight.position.set(0,0,0),this.scene.add(this.coreLight)}buildArtifact(){this.artifactGroup=new ps,this.scene.add(this.artifactGroup);const t=this.colors[this.mode],e=new wu(.72,32,32);this.coreMat=new Gl({color:329744,emissive:t.accent,emissiveIntensity:.8,roughness:.15,metalness:.85,wireframe:!1}),this.coreMesh=new Bn(e,this.coreMat),this.artifactGroup.add(this.coreMesh);const n=new Tu(.88,2);this.coreWireMat=new Su({color:t.accent,wireframe:!0,transparent:!0,opacity:.45}),this.coreWireMesh=new Bn(n,this.coreWireMat),this.artifactGroup.add(this.coreWireMesh),this.rings=[];const i=[1.25,1.65,2.05],s=[.035,.045,.03];i.forEach((l,c)=>{const u=new Au(l,s[c],24,80),d=new Gl({color:c%2===0?t.accent:16777215,emissive:c%2===0?t.accent:2236962,emissiveIntensity:c%2===0?.4:.1,metalness:.95,roughness:.2}),h=new Bn(u,d);h.rotation.x=Math.PI/3*(c+1),h.rotation.y=Math.PI/4*c,this.rings.push({mesh:h,speedX:(c+1)*.003*(c%2===0?1:-1),speedY:(c+1)*.005*(c%2===0?-1:1)}),this.artifactGroup.add(h)});const o=new bu(2.5,1);this.cageMat=new Gl({color:1581106,wireframe:!0,metalness:.9,roughness:.3,transparent:!0,opacity:.3}),this.cageMesh=new Bn(o,this.cageMat),this.artifactGroup.add(this.cageMesh),this.fieldLines=new ps;const a=6;for(let l=0;l<a;l++){const c=l/a*Math.PI*2,d=new pM(new O(0,-.6,0),new O(Math.cos(c)*3.2,-1,Math.sin(c)*3.2),new O(Math.cos(c)*3.2,1,Math.sin(c)*3.2),new O(0,.6,0)).getPoints(50),h=new bn().setFromPoints(d),f=new wd({color:t.accent,transparent:!0,opacity:.35}),_=new oM(h,f);this.fieldLines.add(_)}this.artifactGroup.add(this.fieldLines)}buildParticles(){const e=new bn,n=new Float32Array(1200*3),i=new Float32Array(1200);for(let c=0;c<1200;c++){const u=Math.random()*Math.PI*2,d=1.5+Math.random()*8.5,h=(Math.random()-.5)*8;n[c*3]=Math.cos(u)*d,n[c*3+1]=h,n[c*3+2]=Math.sin(u)*d,i[c]=Math.random()*2+.5}e.setAttribute("position",new Jn(n,3)),e.setAttribute("scale",new Jn(i,1));const s=document.createElement("canvas");s.width=32,s.height=32;const o=s.getContext("2d"),a=o.createRadialGradient(16,16,0,16,16,16);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.3,"rgba(210,255,0,0.8)"),a.addColorStop(1,"rgba(0,0,0,0)"),o.fillStyle=a,o.fillRect(0,0,32,32);const l=new lM(s);this.particleMat=new Ad({size:.12,map:l,transparent:!0,opacity:.65,blending:oc,depthWrite:!1}),this.particleMesh=new aM(e,this.particleMat),this.scene.add(this.particleMesh)}setupMouseEvents(){window.addEventListener("mousemove",t=>{if(this.mouse.targetX=(t.clientX/this.width-.5)*2,this.mouse.targetY=(t.clientY/this.height-.5)*2,this.mouse.isDown){const e=t.clientX-this.mouse.prevX,n=t.clientY-this.mouse.prevY;this.dragRotation.vx=e*.008,this.dragRotation.vy=n*.008,this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY}},{passive:!0}),window.addEventListener("mousedown",t=>{t.clientX>window.innerWidth*.35&&t.clientY<window.innerHeight*.85&&(this.mouse.isDown=!0,this.mouse.prevX=t.clientX,this.mouse.prevY=t.clientY)}),window.addEventListener("mouseup",()=>{this.mouse.isDown=!1})}setThemeMode(t){this.mode=t;const e=this.colors[t]||this.colors.hardware;this.coreMat&&this.coreMat.emissive.set(e.accent),this.coreWireMat&&this.coreWireMat.color.set(e.accent),this.rimLight&&this.rimLight.color.set(e.accent),this.coreLight&&this.coreLight.color.set(e.accent),this.fieldLines&&this.fieldLines.children.forEach(n=>{n.material.color.set(e.accent)})}onResize(){this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}updateScrollProgress(t){this.scrollProgress=t}animate(){requestAnimationFrame(()=>this.animate()),this.clock.getDelta();const t=this.clock.getElapsedTime();if(this.mouse.x+=(this.mouse.targetX-this.mouse.x)*.06,this.mouse.y+=(this.mouse.targetY-this.mouse.y)*.06,this.dragRotation.x+=this.dragRotation.vx,this.dragRotation.y+=this.dragRotation.vy,this.dragRotation.vx*=.92,this.dragRotation.vy*=.92,this.artifactGroup){this.artifactGroup.rotation.y=t*.15+this.mouse.x*.45+this.dragRotation.x,this.artifactGroup.rotation.x=Math.sin(t*.1)*.2+this.mouse.y*.35+this.dragRotation.y,this.artifactGroup.rotation.z=Math.cos(t*.12)*.1;const a=1+Math.sin(t*3.5)*.06;this.coreMesh.scale.set(a,a,a),this.coreWireMesh.scale.set(a,a,a),this.rings.forEach(l=>{l.mesh.rotation.x+=l.speedX,l.mesh.rotation.y+=l.speedY}),this.fieldLines&&(this.fieldLines.rotation.y-=.004),this.cageMesh&&(this.cageMesh.rotation.y+=.002,this.cageMesh.rotation.z+=.001)}this.particleMesh&&(this.particleMesh.rotation.y=t*.035,this.particleMesh.rotation.x=Math.sin(t*.02)*.1);const e=this.scrollProgress;let n=7.5,i=0,s=window.innerWidth>960?1.6:0,o=0;if(e<=.25){const a=e/.25;s=window.innerWidth>960?1.6:0,o=0,n=7.5-a*.5}else if(e<=.55){const a=(e-.25)/.3;s=window.innerWidth>960?2.2:0,o=-.3,n=7-a*1.5,i=-a*.8}else if(e<=.85){const a=(e-.55)/.3;s=window.innerWidth>960?2.6:0,o=.5,n=5.5+a*2,i=-.8+a*.8}else{const a=(e-.85)/.15;s=0,o=-.8,n=7.5+a*2,i=0}this.camera.position.z+=(n-this.camera.position.z)*.05,this.camera.position.y+=(i-this.camera.position.y)*.05,this.camera.lookAt(0,0,0),this.artifactGroup&&(this.artifactGroup.position.x+=(s-this.artifactGroup.position.x)*.05,this.artifactGroup.position.y+=(o-this.artifactGroup.position.y)*.05),this.renderer.render(this.scene,this.camera)}}var af="1.3.26";function Rd(r,t,e){return Math.max(r,Math.min(t,e))}function SM(r,t,e){return(1-e)*r+e*t}function yM(r,t,e,n){return SM(r,t,1-Math.exp(-e*n))}function EM(r,t){return(r%t+t)%t}var TM=class{constructor(){Ct(this,"isRunning",!1);Ct(this,"value",0);Ct(this,"from",0);Ct(this,"to",0);Ct(this,"currentTime",0);Ct(this,"lerp");Ct(this,"duration");Ct(this,"easing");Ct(this,"onUpdate")}advance(r){var e;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Rd(0,this.currentTime/this.duration,1);t=n>=1;const i=t?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=yM(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(e=this.onUpdate)==null||e.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=o}};function bM(r,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(this,n)},t)}}var wM=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){Ct(this,"width",0);Ct(this,"height",0);Ct(this,"scrollHeight",0);Ct(this,"scrollWidth",0);Ct(this,"debouncedResize");Ct(this,"wrapperResizeObserver");Ct(this,"contentResizeObserver");Ct(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Ct(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Ct(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=t,e&&(this.debouncedResize=bM(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,t;(r=this.wrapperResizeObserver)==null||r.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Pd=class{constructor(){Ct(this,"events",{})}emit(r,...t){var n;const e=this.events[r]||[];for(let i=0,s=e.length;i<s;i++)(n=e[i])==null||n.call(e,...t)}on(r,t){return this.events[r]?this.events[r].push(t):this.events[r]=[t],()=>{var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}}off(r,t){var e;this.events[r]=(e=this.events[r])==null?void 0:e.filter(n=>t!==n)}destroy(){this.events={}}};const AM=100/6,Vi={passive:!1};function lf(r,t){return r===1?AM:r===2?t:1}var CM=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){Ct(this,"touchStart",{x:0,y:0});Ct(this,"lastDelta",{x:0,y:0});Ct(this,"window",{width:0,height:0});Ct(this,"emitter",new Pd);Ct(this,"onTouchStart",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});Ct(this,"onTouchMove",r=>{const{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});Ct(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});Ct(this,"onWheel",r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r;const i=lf(n,this.window.width),s=lf(n,this.window.height);t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})});Ct(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Vi),this.element.addEventListener("touchstart",this.onTouchStart,Vi),this.element.addEventListener("touchmove",this.onTouchMove,Vi),this.element.addEventListener("touchend",this.onTouchEnd,Vi)}on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Vi),this.element.removeEventListener("touchstart",this.onTouchStart,Vi),this.element.removeEventListener("touchmove",this.onTouchMove,Vi),this.element.removeEventListener("touchend",this.onTouchEnd,Vi)}};const cf=r=>Math.min(1,1.001-2**(-10*r));var RM=class{constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:u=!1,orientation:d="vertical",gestureOrientation:h=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:p,virtualScroll:m,overscroll:M=!0,autoRaf:v=!1,anchors:S=!1,autoToggle:A=!1,allowNestedScroll:w=!1,__experimental__naiveDimensions:T=!1,naiveDimensions:C=T,stopInertiaOnNavigate:y=!1,respectReducedMotion:x=!0}={}){Ct(this,"_isScrolling",!1);Ct(this,"_isStopped",!1);Ct(this,"_isLocked",!1);Ct(this,"_preventNextNativeScrollEvent",!1);Ct(this,"_resetVelocityTimeout",null);Ct(this,"_rafId",null);Ct(this,"_isDraggingSelection",!1);Ct(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Ct(this,"isTouching");Ct(this,"isIos");Ct(this,"time",0);Ct(this,"userData",{});Ct(this,"lastVelocity",0);Ct(this,"velocity",0);Ct(this,"direction",0);Ct(this,"options");Ct(this,"targetScroll");Ct(this,"animatedScroll");Ct(this,"animate",new TM);Ct(this,"emitter",new Pd);Ct(this,"dimensions");Ct(this,"virtualScroll");Ct(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});Ct(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Ct(this,"onTransitionEnd",r=>{var t;(t=r.propertyName)!=null&&t.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});Ct(this,"onClick",r=>{const t=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){const n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Ct(this,"onPointerDown",r=>{r.button===1&&this.reset()});Ct(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(_=>{var g,p,m,M,v;return _ instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(_))||((g=_.hasAttribute)==null?void 0:g.call(_,"data-lenis-prevent"))||u==="vertical"&&((p=_.hasAttribute)==null?void 0:p.call(_,"data-lenis-prevent-vertical"))||u==="horizontal"&&((m=_.hasAttribute)==null?void 0:m.call(_,"data-lenis-prevent-horizontal"))||i&&((M=_.hasAttribute)==null?void 0:M.call(_,"data-lenis-prevent-touch"))||s&&((v=_.hasAttribute)==null?void 0:v.call(_,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(_,{deltaX:t,deltaY:e}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Ct(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Ct(this,"raf",r=>{const t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=af,window.lenis||(window.lenis={}),window.lenis.version=af,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof a=="number"&&typeof l!="function"?l=cf:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:d,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:p,virtualScroll:m,overscroll:M,autoRaf:v,anchors:S,autoToggle:A,allowNestedScroll:w,naiveDimensions:C,stopInertiaOnNavigate:y,respectReducedMotion:x},this.dimensions=new wM(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new CM(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;const e=r.targetTouches[0]??r.changedTouches[0];if(!e)return!1;const n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-s.right,e.clientY-s.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(s=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,f=t;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let _=null;if(typeof h=="string"?(_=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),_||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(_=h),_){if(this.options.wrapper!==window){const S=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?S.left:S.top}const g=_.getBoundingClientRect(),p=getComputedStyle(_),m=this.isHorizontal?Number.parseFloat(p.scrollMarginLeft):Number.parseFloat(p.scrollMarginTop),M=getComputedStyle(this.rootElement),v=this.isHorizontal?Number.parseFloat(M.scrollPaddingLeft):Number.parseFloat(M.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(m)?0:m)-(Number.isNaN(v)?0:v)}}if(typeof h=="number"){if(h+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const _=h-this.animatedScroll;_>this.limit/2?h-=this.limit:_<-this.limit/2&&(h+=this.limit)}}else h=Rd(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof o=="number"&&typeof a!="function"?a=cf:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,h,{duration:o,easing:a,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(_,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=_-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=_,this.setScroll(this.scroll),i&&(this.targetScroll=_),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:t,deltaY:e}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,o,a,l,c,u,d,h,f,_;if(n-(i.time??0)>2e3){i.time=Date.now();const w=window.getComputedStyle(r);if(i.computedStyle=w,s=["auto","overlay","scroll"].includes(w.overflowX),o=["auto","overlay","scroll"].includes(w.overflowY),c=["auto"].includes(w.overscrollBehaviorX),u=["auto"].includes(w.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=o,!(s||o))return!1;d=r.scrollWidth,h=r.scrollHeight,f=r.clientWidth,_=r.clientHeight,a=d>f,l=h>_,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=h,i.clientWidth=f,i.clientHeight=_,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else a=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,h=i.scrollHeight,f=i.clientWidth,_=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&a||o&&l))return!1;const g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";let p,m,M,v,S,A;if(g==="horizontal")p=Math.round(r.scrollLeft),m=d-f,M=t,v=s,S=a,A=c;else if(g==="vertical")p=Math.round(r.scrollTop),m=h-_,M=e,v=o,S=l,A=u;else return!1;return!A&&(p>=m||p<=0)?!0:(M>0?p<m:p>0)&&v&&S}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?EM(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};function Ti(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Ld(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Hn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},xo={duration:.5,overwrite:!1,delay:0},Ru,Qe,Ae,jn=1e8,Me=1/jn,Vc=Math.PI*2,PM=Vc/4,LM=0,Dd=Math.sqrt,DM=Math.cos,IM=Math.sin,Ke=function(t){return typeof t=="string"},De=function(t){return typeof t=="function"},Ii=function(t){return typeof t=="number"},Pu=function(t){return typeof t>"u"},gi=function(t){return typeof t=="object"},Sn=function(t){return t!==!1},Lu=function(){return typeof window<"u"},la=function(t){return De(t)||Ke(t)},Id=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ln=Array.isArray,UM=/random\([^)]+\)/g,NM=/,\s*/g,uf=/(?:-?\.?\d|\.)+/gi,Ud=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ms=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Yl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Nd=/[+-]=-?[.\d]+/,OM=/[^,'"\[\]\s]+/gi,FM=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Pe,li,Gc,Du,Vn={},Wa={},Od,Fd=function(t){return(Wa=Is(t,Vn))&&wn},Iu=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},Mo=function(t,e){return!e&&console.warn(t)},Bd=function(t,e){return t&&(Vn[t]=e)&&Wa&&(Wa[t]=e)||Vn},So=function(){return 0},BM={suppressEvents:!0,isStart:!0,kill:!1},Aa={suppressEvents:!0,kill:!1},zM={suppressEvents:!0},Uu={},Qi=[],Wc={},zd,In={},ql={},hf=30,Ca=[],Nu="",Ou=function(t){var e=t[0],n,i;if(gi(e)||De(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ca.length;i--&&!Ca[i].targetTest(e););n=Ca[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ap(t[i],n)))||t.splice(i,1);return t},Rr=function(t){return t._gsap||Ou(Zn(t))[0]._gsap},kd=function(t,e,n){return(n=t[e])&&De(n)?t[e]():Pu(n)&&t.getAttribute&&t.getAttribute(e)||n},yn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ie=function(t){return Math.round(t*1e5)/1e5||0},Re=function(t){return Math.round(t*1e7)/1e7||0},Ss=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},kM=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Xa=function(){var t=Qi.length,e=Qi.slice(0),n,i;for(Wc={},Qi.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Fu=function(t){return!!(t._initted||t._startAt||t.add)},Hd=function(t,e,n,i){Qi.length&&!Qe&&Xa(),t.render(e,n,!!(Qe&&e<0&&Fu(t))),Qi.length&&!Qe&&Xa()},Vd=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(OM).length<2?e:Ke(t)?t.trim():t},Gd=function(t){return t},Gn=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},HM=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Is=function(t,e){for(var n in e)t[n]=e[n];return t},ff=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=gi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Ya=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},so=function(t){var e=t.parent||Pe,n=t.keyframes?HM(ln(t.keyframes)):Gn;if(Sn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},VM=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Wd=function(t,e,n,i,s){var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ol=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},rr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Pr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},GM=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Xc=function(t,e,n,i){return t._startAt&&(Qe?t._startAt.revert(Aa):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},WM=function r(t){return!t||t._ts&&r(t.parent)},df=function(t){return t._repeat?Us(t._tTime,t=t.duration()+t._rDelay)*t:0},Us=function(t,e){var n=Math.floor(t=Re(t/e));return t&&n===t?n-1:n},qa=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},al=function(t){return t._end=Re(t._start+(t._tDur/Math.abs(t._ts||t._rts||Me)||0))},ll=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Re(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),al(t),n._dirty||Pr(n,t)),t},Xd=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=qa(t.rawTime(),e),(!e._dur||No(0,e.totalDuration(),n)-e._tTime>Me)&&e.render(n,!0)),Pr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Me}},fi=function(t,e,n,i){return e.parent&&rr(e),e._start=Re((Ii(n)?n:n||t!==Pe?Yn(t,n,e):t._time)+e._delay),e._end=Re(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Wd(t,e,"_first","_last",t._sort?"_start":0),Yc(e)||(t._recent=e),i||Xd(t,e),t._ts<0&&ll(t,t._tTime),t},Yd=function(t,e){return(Vn.ScrollTrigger||Iu("scrollTrigger",e))&&Vn.ScrollTrigger.create(e,t)},qd=function(t,e,n,i,s){if(zu(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!Qe&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&zd!==On.frame)return Qi.push(t),t._lazy=[s,i],1},XM=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Yc=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},YM=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&XM(t)&&!(!t._initted&&Yc(t))||(t._ts<0||t._dp._ts<0)&&!Yc(t))?0:1,a=t._rDelay,l=0,c,u,d;if(a&&t._repeat&&(l=No(0,t._tDur,e),u=Us(l,a),t._yoyo&&u&1&&(o=1-o),u!==Us(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||Qe||i||t._zTime===Me||!e&&t._zTime){if(!t._initted&&qd(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Me:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Xc(t,e,n,!0),t._onUpdate&&!n&&zn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&zn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rr(t,1),!n&&!Qe&&(zn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},qM=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ns=function(t,e,n,i){var s=t._repeat,o=Re(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Re(o*(s+1)+t._rDelay*s):o,a>0&&!i&&ll(t,t._tTime=t._tDur*a),t.parent&&al(t),n||Pr(t.parent,t),t},pf=function(t){return t instanceof xn?Pr(t):Ns(t,t._dur)},$M={_start:0,endTime:So,totalDuration:So},Yn=function r(t,e,n){var i=t.labels,s=t._recent||$M,o=t.duration()>=jn?s.endTime(!1):t._dur,a,l,c;return Ke(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(ln(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},oo=function(t,e,n){var i=Ii(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Sn(l.vars.inherit)&&l.parent;o.immediateRender=Sn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Be(e[0],o,e[s+1])},cr=function(t,e){return t||t===0?e(t):e},No=function(t,e,n){return n<t?t:n>e?e:n},on=function(t,e){return!Ke(t)||!(e=FM.exec(t))?"":e[1]},KM=function(t,e,n){return cr(n,function(i){return No(t,e,i)})},qc=[].slice,$d=function(t,e){return t&&gi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&gi(t[0]))&&!t.nodeType&&t!==li},jM=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ke(i)&&!e||$d(i,1)?(s=n).push.apply(s,Zn(i)):n.push(i)})||n},Zn=function(t,e,n){return Ae&&!e&&Ae.selector?Ae.selector(t):Ke(t)&&!n&&(Gc||!Os())?qc.call((e||Du).querySelectorAll(t),0):ln(t)?jM(t,n):$d(t)?qc.call(t,0):t?[t]:[]},$c=function(t){return t=Zn(t)[0]||Mo("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Zn(e,n.querySelectorAll?n:n===t?Mo("Invalid scope")||Du.createElement("div"):t)}},Kd=function(t){return t.sort(function(){return .5-Math.random()})},jd=function(t){if(De(t))return t;var e=gi(t)?t:{each:t},n=Lr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,d=i;return Ke(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],d=i[1]),function(h,f,_){var g=(_||e).length,p=o[g],m,M,v,S,A,w,T,C,y;if(!p){if(y=e.grid==="auto"?0:(e.grid||[1,jn])[1],!y){for(T=-jn;T<(T=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(p=o[g]=[],m=l?Math.min(y,g)*u-.5:i%y,M=y===jn?0:l?g*d/y-.5:i/y|0,T=0,C=jn,w=0;w<g;w++)v=w%y-m,S=M-(w/y|0),p[w]=A=c?Math.abs(c==="y"?S:v):Dd(v*v+S*S),A>T&&(T=A),A<C&&(C=A);i==="random"&&Kd(p),p.max=T-C,p.min=C,p.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),p.b=g<0?s-g:s,p.u=on(e.amount||e.each)||0,n=n&&g<0?cS(n):n}return g=(p[h]-p.min)/p.max||0,Re(p.b+(n?n(g):g)*p.v)+p.u}},Kc=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Re(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ii(n)?0:on(n))}},Zd=function(t,e){var n=ln(t),i,s;return!n&&gi(t)&&(i=n=t.radius||jn,t.values?(t=Zn(t.values),(s=!Ii(t[0]))&&(i*=i)):t=Kc(t.increment)),cr(e,n?De(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=jn,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-a,f=t[d].y-l,h=h*h+f*f):h=Math.abs(t[d]-a),h<c&&(c=h,u=d);return u=!i||c<=i?t[u]:o,s||u===o||Ii(o)?u:u+on(o)}:Kc(t))},Jd=function(t,e,n,i){return cr(ln(t)?!e:n===!0?!!(n=0):!i,function(){return ln(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},ZM=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},JM=function(t,e){return function(n){return t(parseFloat(n))+(e||on(n))}},QM=function(t,e,n){return tp(t,e,0,1,n)},Qd=function(t,e,n){return cr(n,function(i){return t[~~e(i)]})},tS=function r(t,e,n){var i=e-t;return ln(t)?Qd(t,r(0,t.length),e):cr(n,function(s){return(i+(s-t)%i)%i+t})},eS=function r(t,e,n){var i=e-t,s=i*2;return ln(t)?Qd(t,r(0,t.length-1),e):cr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},yo=function(t){return t.replace(UM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(NM);return Jd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},tp=function(t,e,n,i,s){var o=e-t,a=i-n;return cr(s,function(l){return n+((l-t)/o*a||0)})},nS=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Ke(t),a={},l,c,u,d,h;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(ln(t)&&!ln(e)){for(u=[],d=t.length,h=d-2,c=1;c<d;c++)u.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(h,~~_);return u[g](_-g)},n=e}else i||(t=Is(ln(t)?[]:{},t));if(!u){for(l in e)Bu.call(a,t,l,"get",e[l]);s=function(_){return Vu(_,a)||(o?t.p:t)}}}return cr(n,s)},mf=function(t,e,n){var i=t.labels,s=jn,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},zn=function(t,e,n){var i=t.vars,s=i[e],o=Ae,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Qi.length&&Xa(),a&&(Ae=a),u=l?s.apply(c,l):s.call(c),Ae=o,u},Js=function(t){return rr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Qe),t.progress()<1&&zn(t,"onInterrupt"),t},_s,ep=[],np=function(t){if(t)if(t=!t.name&&t.default||t,Lu()||t.headless){var e=t.name,n=De(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:So,render:Vu,add:Bu,kill:xS,modifier:vS,rawVars:0},o={targetTest:0,get:0,getSetter:Hu,aliases:{},register:0};if(Os(),t!==i){if(In[e])return;Gn(i,Gn(Ya(t,s),o)),Is(i.prototype,Is(s,Ya(t,o))),In[i.prop=e]=i,t.targetTest&&(Ca.push(i),Uu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Bd(e,i),t.register&&t.register(wn,i,En)}else ep.push(t)},xe=255,Qs={aqua:[0,xe,xe],lime:[0,xe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xe],navy:[0,0,128],white:[xe,xe,xe],olive:[128,128,0],yellow:[xe,xe,0],orange:[xe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xe,0,0],pink:[xe,192,203],cyan:[0,xe,xe],transparent:[xe,xe,xe,0]},$l=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*xe+.5|0},ip=function(t,e,n){var i=t?Ii(t)?[t>>16,t>>8&xe,t&xe]:0:Qs.black,s,o,a,l,c,u,d,h,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qs[t])i=Qs[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&xe,i&xe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&xe,t&xe]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(uf),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=$l(l+1/3,s,o),i[1]=$l(l,s,o),i[2]=$l(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Ud),n&&i.length<4&&(i[3]=1),i}else i=t.match(uf)||Qs.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/xe,o=i[1]/xe,a=i[2]/xe,d=Math.max(s,o,a),h=Math.min(s,o,a),u=(d+h)/2,d===h?l=c=0:(f=d-h,c=u>.5?f/(2-d-h):f/(d+h),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},rp=function(t){var e=[],n=[],i=-1;return t.split(tr).forEach(function(s){var o=s.match(ms)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},_f=function(t,e,n){var i="",s=(t+i).match(tr),o=e?"hsla(":"rgba(",a=0,l,c,u,d;if(!s)return t;if(s=s.map(function(h){return(h=ip(h,e,1))&&o+(e?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=rp(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(tr,"1").split(ms),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(tr),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},tr=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qs)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),iS=/hsl[a]?\(/,sp=function(t){var e=t.join(" "),n;if(tr.lastIndex=0,tr.test(e))return n=iS.test(e),t[1]=_f(t[1],n),t[0]=_f(t[0],n,rp(t[1])),!0},Eo,On=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,d,h,f,_=function g(p){var m=r()-i,M=p===!0,v,S,A,w;if((m>t||m<0)&&(n+=m-e),i+=m,A=i-n,v=A-o,(v>0||M)&&(w=++d.frame,h=A-d.time*1e3,d.time=A=A/1e3,o+=v+(v>=s?4:s-v),S=1),M||(l=c(g)),S)for(f=0;f<a.length;f++)a[f](A,h,w,p)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return h/(1e3/(p||60))},wake:function(){Od&&(!Gc&&Lu()&&(li=Gc=window,Du=li.document||{},Vn.gsap=wn,(li.gsapVersions||(li.gsapVersions=[])).push(wn.version),Fd(Wa||li.GreenSockGlobals||!li.gsap&&li||{}),ep.forEach(np)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=u||function(p){return setTimeout(p,o-d.time*1e3+1|0)},Eo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),Eo=0,c=So},lagSmoothing:function(p,m){t=p||1/0,e=Math.min(m||33,t)},fps:function(p){s=1e3/(p||240),o=d.time*1e3+s},add:function(p,m,M){var v=m?function(S,A,w,T){p(S,A,w,T),d.remove(v)}:p;return d.remove(p),a[M?"unshift":"push"](v),Os(),v},remove:function(p,m){~(m=a.indexOf(p))&&a.splice(m,1)&&f>=m&&f--},_listeners:a},d}(),Os=function(){return!Eo&&On.wake()},oe={},rS=/^[\d.\-M][\d.\-,\s]/,sS=/["']/g,oS=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(sS,"").trim():+c,i=l.substr(a+1).trim();return e},aS=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},lS=function(t){var e=(t+"").split("("),n=oe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[oS(e[1])]:aS(t).split(",").map(Vd)):oe._CE&&rS.test(t)?oe._CE("",t):n},cS=function(t){return function(e){return 1-t(1-e)}},Lr=function(t,e){return t&&(De(t)?t:oe[t]||lS(t))||e},Vr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return yn(t,function(a){oe[a]=Vn[a]=s,oe[o=a.toLowerCase()]=n;for(var l in s)oe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=oe[a+"."+l]=s[l]}),s},op=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Kl=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Vc*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*IM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:op(a);return s=Vc/s,l.config=function(c,u){return r(t,c,u)},l},jl=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:op(n);return i.config=function(s){return r(t,s)},i};yn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Vr(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});oe.Linear.easeNone=oe.none=oe.Linear.easeIn;Vr("Elastic",Kl("in"),Kl("out"),Kl());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Vr("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vr("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Vr("Circ",function(r){return-(Dd(1-r*r)-1)});Vr("Sine",function(r){return r===1?1:-DM(r*PM)+1});Vr("Back",jl("in"),jl("out"),jl());oe.SteppedEase=oe.steps=Vn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Me;return function(a){return((i*No(0,o,a)|0)+s)*n}}};xo.ease=oe["quad.out"];yn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Nu+=r+","+r+"Params,"});var ap=function(t,e){this.id=LM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:kd,this.set=e?e.getSetter:Hu},To=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ns(this,+e.duration,1,1),this.data=e.data,Ae&&(this._ctx=Ae,Ae.data.push(this)),Eo||On.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Os(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(ll(this,n),!s._dp||s.parent||Xd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&fi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Me||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Hd(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+df(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+df(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Us(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Me?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?qa(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Me?0:this._rts,this.totalTime(No(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),al(this),GM(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Os(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Me&&(this._tTime-=Me)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Re(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&fi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?qa(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=zM);var i=Qe;return Qe=n,Fu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qe=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,pf(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,pf(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Yn(this,n),Sn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Sn(i)),this._dur||(this._zTime=-Me),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Me:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Me,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Me)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=De(n)?n:Gd,l=function(){var u=i.then;i.then=null,s&&s(),De(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Js(this)},r}();Gn(To.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Me,_prom:0,_ps:!1,_rts:1});var xn=function(r){Ld(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Sn(n.sortChildren),Pe&&fi(n.parent||Pe,Ti(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Yd(Ti(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return oo(0,arguments,this),this},e.from=function(i,s,o){return oo(1,arguments,this),this},e.fromTo=function(i,s,o,a){return oo(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,so(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Be(i,s,Yn(this,o),1),this},e.call=function(i,s,o){return fi(this,Be.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new Be(i,o,Yn(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,so(o).immediateRender=Sn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,d){return a.startAt=o,so(a).immediateRender=Sn(a.immediateRender),this.staggerTo(i,s,a,l,c,u,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Re(i),d=this._zTime<0!=i<0&&(this._initted||!c),h,f,_,g,p,m,M,v,S,A,w,T;if(this!==Pe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||d){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),h=u,S=this._start,v=this._ts,m=!v,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,o);if(h=Re(u%p),u===l?(g=this._repeat,h=c):(A=Re(u/p),g=~~A,g&&g===A&&(h=c,g--),h>c&&(h=c)),A=Us(this._tTime,p),!a&&this._tTime&&A!==g&&this._tTime-A*p-this._dur<=0&&(A=g),w&&g&1&&(h=c-h,T=1),g!==A&&!this._lock){var C=w&&A&1,y=C===(w&&g&1);if(g<A&&(C=!C),a=C?0:u%c?c:u,this._lock=1,this.render(a||(T?0:Re(g*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&zn(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,A=g),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=qM(this,Re(a),Re(h)),M&&(u-=h-(h=M._start))),this._tTime=u,this._time=h,this._act=!!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!A&&(zn(this,"onStart"),this._tTime!==u))return this;if(h>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||h>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,o),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=-Me);break}}f=_}else{f=this._last;for(var x=i<0?i:h;f;){if(_=f._prev,(f._act||x<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(x-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(x-f._start)*f._ts,s,o||Qe&&Fu(f)),h!==this._time||!this._ts&&!m){M=0,_&&(u+=this._zTime=x?-Me:Me);break}}f=_}}if(M&&!s&&(this.pause(),M.render(h>=a?0:-Me)._zTime=h>=a?1:-1,this._ts))return this._start=S,al(this),this.render(i,s,o);this._onUpdate&&!s&&zn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(S===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rr(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(zn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ii(s)||(s=Yn(this,s,i)),!(i instanceof To)){if(ln(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ke(i))return this.addLabel(i,s);if(De(i))i=Be.delayedCall(0,i);else return this}return this!==i?fi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Be?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ke(i)?this.removeLabel(i):De(i)?this.killTweensOf(i):(i.parent===this&&ol(this,i),i===this._recent&&(this._recent=this._last),Pr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Re(On.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Yn(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Be.delayedCall(0,s||So,o);return a.data="isPause",this._hasPause=1,fi(this,a,Yn(this,i))},e.removePause=function(i){var s=this._first;for(i=Yn(this,i);s;)s._start===i&&s.data==="isPause"&&rr(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Yi!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Zn(i),l=this._first,c=Ii(s),u;l;)l instanceof Be?kM(l._targets,a)&&(c?(!Yi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Yn(o,i),l=s,c=l.startAt,u=l.onStart,d=l.onStartParams,h=l.immediateRender,f,_=Be.to(o,Gn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Me,onStart:function(){if(o.pause(),!f){var p=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==p&&Ns(_,p,0,1).render(_._time,!0,!0),f=1}u&&u.apply(_,d||[])}},s));return h?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,Gn({startAt:{time:Yn(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),mf(this,Yn(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),mf(this,Yn(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Me)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Re(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Pr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Pr(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=jn,c,u,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fi(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Re(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ns(o,o===Pe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Pe._ts&&(Hd(Pe,qa(i,Pe)),zd=On.frame),On.frame>=hf){hf+=Hn.autoSleep||120;var s=Pe._first;if((!s||!s._ts)&&Hn.autoSleep&&On._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||On.sleep()}}},t}(To);Gn(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var uS=function(t,e,n,i,s,o,a){var l=new En(this._pt,t,e,0,1,dp,null,s),c=0,u=0,d,h,f,_,g,p,m,M;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=yo(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),h=n.match(Yl)||[];d=Yl.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==h[u++]&&(p=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:p,c:_.charAt(1)==="="?Ss(p,_)-p:parseFloat(_)-p,m:f&&f<4?Math.round:0},c=Yl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Nd.test(i)||m)&&(l.e=0),this._pt=l,l},Bu=function(t,e,n,i,s,o,a,l,c,u){De(i)&&(i=i(s||0,t,o));var d=t[e],h=n!=="get"?n:De(d)?c?t[e.indexOf("set")||!De(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=De(d)?c?mS:hp:ku,_;if(Ke(i)&&(~i.indexOf("random(")&&(i=yo(i)),i.charAt(1)==="="&&(_=Ss(h,i)+(on(h)||0),(_||_===0)&&(i=_))),!u||h!==i||jc)return!isNaN(h*i)&&i!==""?(_=new En(this._pt,t,e,+h||0,i-(h||0),typeof d=="boolean"?gS:fp,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&Iu(e,i),uS.call(this,t,e,h,i,f,l||Hn.stringFilter,c))},hS=function(t,e,n,i,s){if(De(t)&&(t=ao(t,s,e,n,i)),!gi(t)||t.style&&t.nodeType||ln(t)||Id(t))return Ke(t)?ao(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ao(t[a],s,e,n,i);return o},lp=function(t,e,n,i,s,o){var a,l,c,u;if(In[t]&&(a=new In[t]).init(s,a.rawVars?e[t]:hS(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new En(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==_s))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},Yi,jc,zu=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,p=t._targets,m=t.parent,M=m&&m.data==="nested"?m.vars.targets:p,v=t._overwrite==="auto"&&!Ru,S=t.timeline,A=i.easeReverse||d,w,T,C,y,x,P,U,z,q,$,X,V,H;if(S&&(!h||!s)&&(s="none"),t._ease=Lr(s,xo.ease),t._rEase=A&&(Lr(A)||t._ease),t._from=!S&&!!i.runBackwards,t._from&&(t.ratio=1),!S||h&&!i.stagger){if(z=p[0]?Rr(p[0]).harness:0,V=z&&i[z.prop],w=Ya(i,Uu),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!f?g.render(-1,!0):g.revert(u&&_?Aa:BM),g._lazy=0),o){if(rr(t._startAt=Be.set(p,Gn({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!g&&Sn(l),startAt:null,delay:0,onUpdate:c&&function(){return zn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe||!a&&!f)&&t._startAt.revert(Aa),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&_&&!g){if(e&&(a=!1),C=Gn({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Sn(l),immediateRender:a,stagger:0,parent:m},w),V&&(C[z.prop]=V),rr(t._startAt=Be.set(p,C)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Qe?t._startAt.revert(Aa):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Me,Me);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Sn(l)||l&&!_,T=0;T<p.length;T++){if(x=p[T],U=x._gsap||Ou(p)[T]._gsap,t._ptLookup[T]=$={},Wc[U.id]&&Qi.length&&Xa(),X=M===p?T:M.indexOf(x),z&&(q=new z).init(x,V||w,t,X,M)!==!1&&(t._pt=y=new En(t._pt,x,q.name,0,1,q.render,q,0,q.priority),q._props.forEach(function(st){$[st]=y}),q.priority&&(P=1)),!z||V)for(C in w)In[C]&&(q=lp(C,w,t,X,x,M))?q.priority&&(P=1):$[C]=y=Bu.call(t,x,C,"get",w[C],X,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(x,t._op[T]),v&&t._pt&&(Yi=t,Pe.killTweensOf(x,$,t.globalTime(e)),H=!t.parent,Yi=0),t._pt&&l&&(Wc[U.id]=1)}P&&pp(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!H,h&&e<=0&&S.render(jn,!0,!0)},fS=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!c)for(c=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return jc=1,t.vars[e]="+=0",zu(t,a),jc=0,l?Mo(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(f=c.length;f--;)d=c[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,d.e&&(d.e=Ie(n)+on(d.e)),d.b&&(d.b=u.s+on(d.b))},dS=function(t,e){var n=t[0]?Rr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=Is({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},pS=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(ln(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ao=function(t,e,n,i,s){return De(t)?t.call(e,n,i,s):Ke(t)&&~t.indexOf("random(")?yo(t):t},cp=Nu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",up={};yn(cp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return up[r]=1});var Be=function(r){Ld(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:so(i))||this;var l=a.vars,c=l.duration,u=l.delay,d=l.immediateRender,h=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,p=l.scrollTrigger,m=i.parent||Pe,M=(ln(n)||Id(n)?Ii(n[0]):"length"in i)?[n]:Zn(n),v,S,A,w,T,C,y,x;if(a._targets=M.length?Ou(M):Mo("GSAP target "+n+" not found. https://gsap.com",!Hn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||h||la(c)||la(u)){i=a.vars;var P=i.easeReverse||i.yoyoEase;if(v=a.timeline=new xn({data:"nested",defaults:g||{},targets:m&&m.data==="nested"?m.vars.targets:M}),v.kill(),v.parent=v._dp=Ti(a),v._start=0,h||la(c)||la(u)){if(w=M.length,y=h&&jd(h),gi(h))for(T in h)~cp.indexOf(T)&&(x||(x={}),x[T]=h[T]);for(S=0;S<w;S++)A=Ya(i,up),A.stagger=0,P&&(A.easeReverse=P),x&&Is(A,x),C=M[S],A.duration=+ao(c,Ti(a),S,C,M),A.delay=(+ao(u,Ti(a),S,C,M)||0)-a._delay,!h&&w===1&&A.delay&&(a._delay=u=A.delay,a._start+=u,A.delay=0),v.to(C,A,y?y(S,C,M):0),v._ease=oe.none;v.duration()?c=u=0:a.timeline=0}else if(_){so(Gn(v.vars.defaults,{ease:"none"})),v._ease=Lr(_.ease||i.ease||"none");var U=0,z,q,$;if(ln(_))_.forEach(function(X){return v.to(M,X,">")}),v.duration();else{A={};for(T in _)T==="ease"||T==="easeEach"||pS(T,_[T],A,_.easeEach);for(T in A)for(z=A[T].sort(function(X,V){return X.t-V.t}),U=0,S=0;S<z.length;S++)q=z[S],$={ease:q.e,duration:(q.t-(S?z[S-1].t:0))/100*c},$[T]=q.v,v.to(M,$,U),U+=$.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return f===!0&&!Ru&&(Yi=Ti(a),Pe.killTweensOf(M),Yi=0),fi(m,Ti(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===Re(m._time)&&Sn(d)&&WM(Ti(a))&&m.data!=="nested")&&(a._tTime=-Me,a.render(Math.max(0,-u)||0)),p&&Yd(Ti(a),p),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,d=i>l-Me&&!u?l:i<Me?0:i,h,f,_,g,p,m,M,v;if(!c)YM(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(h=Re(d%g),d===l?(_=this._repeat,h=c):(p=Re(d/g),_=~~p,_&&_===p?(h=c,_--):h>c&&(h=c)),m=this._yoyo&&_&1,m&&(h=c-h),p=Us(this._tTime,g),h===a&&!o&&this._initted&&_===p)return this._tTime=d,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&h!==g&&this._initted&&(this._lock=o=1,this.render(Re(g*_),!0).invalidate()._lock=0)}if(!this._initted){if(qd(this,u?i:h,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==p))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._rEase){var S=h<a;if(S!==this._inv){var A=S?a:c-a;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=A?(S?-1:1)/A:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/c);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!s&&!p&&(zn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Xc(this,i,s,o),zn(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!s&&this.parent&&zn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&Xc(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&rr(this,1),!s&&!(u&&!a)&&(d||a||m)&&(zn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){Eo||On.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zu(this,c),u=this._ease(c/this._dur),fS(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(ll(this,0),this.parent||Wd(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Js(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qe),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Yi&&Yi.vars.overwrite!==!0)._first||Js(this),this.parent&&o!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Zn(i):a,c=this._ptLookup,u=this._pt,d,h,f,_,g,p,m;if((!s||s==="all")&&VM(a,l))return s==="all"&&(this._pt=0),Js(this);for(d=this._op=this._op||[],s!=="all"&&(Ke(s)&&(g={},yn(s,function(M){return g[M]=1}),s=g),s=dS(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){h=c[m],s==="all"?(d[m]=s,_=h,f={}):(f=d[m]=d[m]||{},_=s);for(g in _)p=h&&h[g],p&&((!("kill"in p.d)||p.d.kill(g)===!0)&&ol(this,p,"_pt"),delete h[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&u&&Js(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return oo(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return oo(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Pe.killTweensOf(i,s,o)},t}(To);Gn(Be.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});yn("staggerTo,staggerFrom,staggerFromTo",function(r){Be[r]=function(){var t=new xn,e=qc.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var ku=function(t,e,n){return t[e]=n},hp=function(t,e,n){return t[e](n)},mS=function(t,e,n,i){return t[e](i.fp,n)},_S=function(t,e,n){return t.setAttribute(e,n)},Hu=function(t,e){return De(t[e])?hp:Pu(t[e])&&t.setAttribute?_S:ku},fp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},gS=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},dp=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Vu=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vS=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},xS=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ol(this,e,"_pt"):e.dep||(n=1),e=i;return!n},MS=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},pp=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},En=function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||fp,this.d=l||this,this.set=c||ku,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=MS,this.m=n,this.mt=s,this.tween=i},r}();yn(Nu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return Uu[r]=1});Vn.TweenMax=Vn.TweenLite=Be;Vn.TimelineLite=Vn.TimelineMax=xn;Pe=new xn({sortChildren:!1,defaults:xo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Hn.stringFilter=sp;var Dr=[],Ra={},SS=[],gf=0,yS=0,Zl=function(t){return(Ra[t]||SS).map(function(e){return e()})},Zc=function(){var t=Date.now(),e=[];t-gf>2&&(Zl("matchMediaInit"),Dr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=li.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Zl("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),gf=t,Zl("matchMedia"))},mp=function(){function r(e,n){this.selector=n&&$c(n),this.data=[],this._r=[],this.isReverted=!1,this.id=yS++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){De(n)&&(s=i,i=n,n=De);var o=this,a=function(){var c=Ae,u=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=$c(s)),Ae=o,d=i.apply(o,arguments),De(d)&&o._r.push(d),Ae=c,o.selector=u,o.isReverted=!1,d};return o.last=a,n===De?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ae;Ae=null,n(this),Ae=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Be&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,d){return d.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof xn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Be)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Dr.length;o--;)Dr[o].id===this.id&&Dr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),ES=function(){function r(e){this.contexts=[],this.scope=e,Ae&&Ae.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){gi(n)||(n={matches:n});var o=new mp(0,s||this.scope),a=o.conditions={},l,c,u;Ae&&!o.selector&&(o.selector=Ae.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=li.matchMedia(n[c]),l&&(Dr.indexOf(o)<0&&Dr.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Zc):l.addEventListener("change",Zc)));return u&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),$a={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return np(i)})},timeline:function(t){return new xn(t)},getTweensOf:function(t,e){return Pe.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ke(t)&&(t=Zn(t)[0]);var s=Rr(t||{}).get,o=n?Gd:Vd;return n==="native"&&(n=""),t&&(e?o((In[e]&&In[e].get||s)(t,e,n,i)):function(a,l,c){return o((In[a]&&In[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Zn(t),t.length>1){var i=t.map(function(u){return wn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var o=In[e],a=Rr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var d=new o;_s._pt=0,d.init(t,n?u+n:u,_s,0,[t]),d.render(1,d),_s._pt&&Vu(1,_s)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=wn.to(t,Gn((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Pe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Lr(t.ease,xo.ease)),ff(xo,t||{})},config:function(t){return ff(Hn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!In[a]&&!Vn[a]&&Mo(e+" effect requires "+a+" plugin.")}),ql[e]=function(a,l,c){return n(Zn(a),Gn(l||{},s),c)},o&&(xn.prototype[e]=function(a,l,c){return this.add(ql[e](a,gi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){oe[t]=Lr(e)},parseEase:function(t,e){return arguments.length?Lr(t,e):oe},getById:function(t){return Pe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new xn(t),i,s;for(n.smoothChildTiming=Sn(t.smoothChildTiming),Pe.remove(n),n._dp=0,n._time=n._tTime=Pe._time,i=Pe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Be&&i.vars.onComplete===i._targets[0]))&&fi(n,i,i._start-i._delay),i=s;return fi(Pe,n,0),n},context:function(t,e){return t?new mp(t,e):Ae},matchMedia:function(t){return new ES(t)},matchMediaRefresh:function(){return Dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Zc()},addEventListener:function(t,e){var n=Ra[t]||(Ra[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Ra[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:tS,wrapYoyo:eS,distribute:jd,random:Jd,snap:Zd,normalize:QM,getUnit:on,clamp:KM,splitColor:ip,toArray:Zn,selector:$c,mapRange:tp,pipe:ZM,unitize:JM,interpolate:nS,shuffle:Kd},install:Fd,effects:ql,ticker:On,updateRoot:xn.updateRoot,plugins:In,globalTimeline:Pe,core:{PropTween:En,globals:Bd,Tween:Be,Timeline:xn,Animation:To,getCache:Rr,_removeLinkedListItem:ol,reverting:function(){return Qe},context:function(t){return t&&Ae&&(Ae.data.push(t),t._ctx=Ae),Ae},suppressOverwrites:function(t){return Ru=t}}};yn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return $a[r]=Be[r]});On.add(xn.updateRoot);_s=$a.to({},{duration:0});var TS=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},bS=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=TS(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Jl=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ke(s)&&(l={},yn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}bS(a,s)}}}},wn=$a.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Qe?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Jl("roundProps",Kc),Jl("modifiers"),Jl("snap",Zd))||$a;Be.version=xn.version=wn.version="3.15.0";Od=1;Lu()&&Os();oe.Power0;oe.Power1;oe.Power2;oe.Power3;oe.Power4;oe.Linear;oe.Quad;oe.Cubic;oe.Quart;oe.Quint;oe.Strong;oe.Elastic;oe.Back;oe.SteppedEase;oe.Bounce;oe.Sine;oe.Expo;oe.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var vf,qi,ys,Gu,Ar,xf,Wu,wS=function(){return typeof window<"u"},Ui={},Mr=180/Math.PI,Es=Math.PI/180,as=Math.atan2,Mf=1e8,Xu=/([A-Z])/g,AS=/(left|right|width|margin|padding|x)/i,CS=/[\s,\(]\S/,di={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Jc=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},RS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},PS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},LS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},DS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},_p=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},gp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},IS=function(t,e,n){return t.style[e]=n},US=function(t,e,n){return t.style.setProperty(e,n)},NS=function(t,e,n){return t._gsap[e]=n},OS=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},FS=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},BS=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Le="transform",Tn=Le+"Origin",zS=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ui&&s){if(this.tfm=this.tfm||{},t!=="transform")t=di[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=bi(i,a)}):this.tfm[t]=o.x?o[t]:bi(i,t),t===Tn&&(this.tfm.zOrigin=o.zOrigin);else return di.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Le)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Tn,e,"")),t=Le}(s||e)&&this.props.push(t,e,s[t])},vp=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Xu,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Wu(),(!s||!s.isStart)&&!n[Le]&&(vp(n),i.zOrigin&&n[Tn]&&(n[Tn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xp=function(t,e){var n={target:t,props:[],revert:kS,save:zS};return t._gsap||wn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},Mp,Qc=function(t,e){var n=qi.createElementNS?qi.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):qi.createElement(t);return n&&n.style?n:qi.createElement(t)},kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Xu,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Fs(e)||e,1)||""},Sf="O,Moz,ms,Ms,Webkit".split(","),Fs=function(t,e,n){var i=e||Ar,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Sf[o]+t in s););return o<0?null:(o===3?"ms":o>=0?Sf[o]:"")+t},tu=function(){wS()&&window.document&&(vf=window,qi=vf.document,ys=qi.documentElement,Ar=Qc("div")||{style:{}},Qc("div"),Le=Fs(Le),Tn=Le+"Origin",Ar.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mp=!!Fs("perspective"),Wu=wn.core.reverting,Gu=1)},yf=function(t){var e=t.ownerSVGElement,n=Qc("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ys.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ys.removeChild(n),s},Ef=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Sp=function(t){var e,n;try{e=t.getBBox()}catch{e=yf(t),n=1}return e&&(e.width||e.height)||n||(e=yf(t)),e&&!e.width&&!e.x&&!e.y?{x:+Ef(t,["x","cx","x1"])||0,y:+Ef(t,["y","cy","y1"])||0,width:0,height:0}:e},yp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Sp(t))},sr=function(t,e){if(e){var n=t.style,i;e in Ui&&e!==Tn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Xu,"-$1").toLowerCase())):n.removeAttribute(e)}},$i=function(t,e,n,i,s,o){var a=new En(t._pt,e,n,0,1,o?gp:_p);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},Tf={deg:1,rad:1,turn:1},HS={grid:1,flex:1},or=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Ar.style,l=AS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),d=100,h=i==="px",f=i==="%",_,g,p,m;if(i===o||!s||Tf[i]||Tf[o])return s;if(o!=="px"&&!h&&(s=r(t,e,n,"px")),m=t.getCTM&&yp(t),(f||o==="%")&&(Ui[e]||~e.indexOf("adius")))return _=m?t.getBBox()[l?"width":"height"]:t[u],Ie(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(h?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,m&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===qi||!g.appendChild)&&(g=qi.body),p=g._gsap,p&&f&&p.width&&l&&p.time===On.time&&!p.uncache)return Ie(s/p.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,_=t[u],M?t.style[e]=M:sr(t,e)}else(f||o==="%")&&!HS[kn(g,"display")]&&(a.position=kn(t,"position")),g===t&&(a.position="static"),g.appendChild(Ar),_=Ar[u],g.removeChild(Ar),a.position="absolute";return l&&f&&(p=Rr(g),p.time=On.time,p.width=g[u]),Ie(h?_*s/d:_&&s?d/_*s:0)},bi=function(t,e,n,i){var s;return Gu||tu(),e in di&&e!=="transform"&&(e=di[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ui[e]&&e!=="transform"?(s=wo(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:ja(kn(t,Tn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Ka[e]&&Ka[e](t,e,n)||kn(t,e)||kd(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?or(t,e,s,n)+n:s},VS=function(t,e,n,i){if(!n||n==="none"){var s=Fs(e,t,1),o=s&&kn(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=kn(t,"borderTopColor"))}var a=new En(this._pt,t.style,e,0,1,dp),l=0,c=0,u,d,h,f,_,g,p,m,M,v,S,A;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=kn(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=kn(t,e)||i,g?t.style[e]=g:sr(t,e)),u=[n,i],sp(u),n=u[0],i=u[1],h=n.match(ms)||[],A=i.match(ms)||[],A.length){for(;d=ms.exec(i);)p=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),p!==(g=h[c++]||"")&&(f=parseFloat(g)||0,S=g.substr((f+"").length),p.charAt(1)==="="&&(p=Ss(f,p)+S),m=parseFloat(p),v=p.substr((m+"").length),l=ms.lastIndex-v.length,v||(v=v||Hn.units[e]||S,l===i.length&&(i+=v,a.e+=v)),S!==v&&(f=or(t,e,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:m-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?gp:_p;return Nd.test(i)&&(a.e=0),this._pt=a,a},bf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},GS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=bf[n]||n,e[1]=bf[i]||i,e.join(" ")},WS=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ui[a]&&(l=1,a=a==="transformOrigin"?Tn:Le),sr(n,a);l&&(sr(n,Le),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",wo(n,1),o.uncache=1,vp(i)))}},Ka={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new En(t._pt,e,n,0,0,WS);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},bo=[1,0,0,1,0,0],Ep={},Tp=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},wf=function(t){var e=kn(t,Le);return Tp(e)?bo:e.substr(7).match(Ud).map(Ie)},Yu=function(t,e){var n=t._gsap||Rr(t),i=t.style,s=wf(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?bo:s):(s===bo&&!t.offsetParent&&t!==ys&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,ys.appendChild(t)),s=wf(t),l?i.display=l:sr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):ys.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},eu=function(t,e,n,i,s,o){var a=t._gsap,l=s||Yu(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,f=l[0],_=l[1],g=l[2],p=l[3],m=l[4],M=l[5],v=e.split(" "),S=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,T,C,y;n?l!==bo&&(T=f*p-_*g)&&(C=S*(p/T)+A*(-g/T)+(g*M-p*m)/T,y=S*(-_/T)+A*(f/T)-(f*M-_*m)/T,S=C,A=y):(w=Sp(t),S=w.x+(~v[0].indexOf("%")?S/100*w.width:S),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),i||i!==!1&&a.smooth?(m=S-c,M=A-u,a.xOffset=d+(m*f+M*g)-m,a.yOffset=h+(m*_+M*p)-M):a.xOffset=a.yOffset=0,a.xOrigin=S,a.yOrigin=A,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[Tn]="0px 0px",o&&($i(o,a,"xOrigin",c,S),$i(o,a,"yOrigin",u,A),$i(o,a,"xOffset",d,a.xOffset),$i(o,a,"yOffset",h,a.yOffset)),t.setAttribute("data-svg-origin",S+" "+A)},wo=function(t,e){var n=t._gsap||new ap(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=kn(t,Tn)||"0",u,d,h,f,_,g,p,m,M,v,S,A,w,T,C,y,x,P,U,z,q,$,X,V,H,st,L,ct,Nt,qt,K,nt;return u=d=h=g=p=m=M=v=S=0,f=_=1,n.svg=!!(t.getCTM&&yp(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Le]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Le]!=="none"?l[Le]:"")),i.scale=i.rotate=i.translate="none"),T=Yu(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",V=""):V=!e&&t.getAttribute("data-svg-origin"),eu(t,V||c,!!V||n.originIsAbsolute,n.smooth!==!1,T)),A=n.xOrigin||0,w=n.yOrigin||0,T!==bo&&(P=T[0],U=T[1],z=T[2],q=T[3],u=$=T[4],d=X=T[5],T.length===6?(f=Math.sqrt(P*P+U*U),_=Math.sqrt(q*q+z*z),g=P||U?as(U,P)*Mr:0,M=z||q?as(z,q)*Mr+g:0,M&&(_*=Math.abs(Math.cos(M*Es))),n.svg&&(u-=A-(A*P+w*z),d-=w-(A*U+w*q))):(nt=T[6],qt=T[7],L=T[8],ct=T[9],Nt=T[10],K=T[11],u=T[12],d=T[13],h=T[14],C=as(nt,Nt),p=C*Mr,C&&(y=Math.cos(-C),x=Math.sin(-C),V=$*y+L*x,H=X*y+ct*x,st=nt*y+Nt*x,L=$*-x+L*y,ct=X*-x+ct*y,Nt=nt*-x+Nt*y,K=qt*-x+K*y,$=V,X=H,nt=st),C=as(-z,Nt),m=C*Mr,C&&(y=Math.cos(-C),x=Math.sin(-C),V=P*y-L*x,H=U*y-ct*x,st=z*y-Nt*x,K=q*x+K*y,P=V,U=H,z=st),C=as(U,P),g=C*Mr,C&&(y=Math.cos(C),x=Math.sin(C),V=P*y+U*x,H=$*y+X*x,U=U*y-P*x,X=X*y-$*x,P=V,$=H),p&&Math.abs(p)+Math.abs(g)>359.9&&(p=g=0,m=180-m),f=Ie(Math.sqrt(P*P+U*U+z*z)),_=Ie(Math.sqrt(X*X+nt*nt)),C=as($,X),M=Math.abs(C)>2e-4?C*Mr:0,S=K?1/(K<0?-K:K):0),n.svg&&(V=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Tp(kn(t,Le)),V&&t.setAttribute("transform",V))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=h+o,n.scaleX=Ie(f),n.scaleY=Ie(_),n.rotation=Ie(g)+a,n.rotationX=Ie(p)+a,n.rotationY=Ie(m)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=S+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[Tn]=ja(c)),n.xOffset=n.yOffset=0,n.force3D=Hn.force3D,n.renderTransform=n.svg?YS:Mp?bp:XS,n.uncache=0,n},ja=function(t){return(t=t.split(" "))[0]+" "+t[1]},Ql=function(t,e,n){var i=on(e);return Ie(parseFloat(e)+parseFloat(or(t,"x",n+"px",i)))+i},XS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,bp(t,e)},_r="0deg",$s="0px",gr=") ",bp=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,p=n.transformPerspective,m=n.force3D,M=n.target,v=n.zOrigin,S="",A=m==="auto"&&t&&t!==1||m===!0;if(v&&(d!==_r||u!==_r)){var w=parseFloat(u)*Es,T=Math.sin(w),C=Math.cos(w),y;w=parseFloat(d)*Es,y=Math.cos(w),o=Ql(M,o,T*y*-v),a=Ql(M,a,-Math.sin(w)*-v),l=Ql(M,l,C*y*-v+v)}p!==$s&&(S+="perspective("+p+gr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(A||o!==$s||a!==$s||l!==$s)&&(S+=l!==$s||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+gr),c!==_r&&(S+="rotate("+c+gr),u!==_r&&(S+="rotateY("+u+gr),d!==_r&&(S+="rotateX("+d+gr),(h!==_r||f!==_r)&&(S+="skew("+h+", "+f+gr),(_!==1||g!==1)&&(S+="scale("+_+", "+g+gr),M.style[Le]=S||"translate(0, 0)"},YS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,p=n.xOffset,m=n.yOffset,M=n.forceCSS,v=parseFloat(o),S=parseFloat(a),A,w,T,C,y;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Es,c*=Es,A=Math.cos(l)*d,w=Math.sin(l)*d,T=Math.sin(l-c)*-h,C=Math.cos(l-c)*h,c&&(u*=Es,y=Math.tan(c-u),y=Math.sqrt(1+y*y),T*=y,C*=y,u&&(y=Math.tan(u),y=Math.sqrt(1+y*y),A*=y,w*=y)),A=Ie(A),w=Ie(w),T=Ie(T),C=Ie(C)):(A=d,C=h,w=T=0),(v&&!~(o+"").indexOf("px")||S&&!~(a+"").indexOf("px"))&&(v=or(f,"x",o,"px"),S=or(f,"y",a,"px")),(_||g||p||m)&&(v=Ie(v+_-(_*A+g*T)+p),S=Ie(S+g-(_*w+g*C)+m)),(i||s)&&(y=f.getBBox(),v=Ie(v+i/100*y.width),S=Ie(S+s/100*y.height)),y="matrix("+A+","+w+","+T+","+C+","+v+","+S+")",f.setAttribute("transform",y),M&&(f.style[Le]=y)},qS=function(t,e,n,i,s){var o=360,a=Ke(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Mr:1),c=l-i,u=i+c+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*Mf)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*Mf)%o-~~(c/o)*o)),t._pt=h=new En(t._pt,e,n,i,c,RS),h.e=u,h.u="deg",t._props.push(n),h},Af=function(t,e){for(var n in e)t[n]=e[n];return t},$S=function(t,e,n){var i=Af({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,d,h,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Le]=e,a=wo(n,1),sr(n,Le),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Le],o[Le]=e,a=wo(n,1),o[Le]=c);for(l in Ui)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(f=on(c),_=on(u),d=f!==_?or(n,l,c,_):parseFloat(c),h=parseFloat(u),t._pt=new En(t._pt,a,l,d,h-d,Jc),t._pt.u=_||0,t._props.push(l));Af(a,i)};yn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Ka[t>1?"border"+r:r]=function(a,l,c,u,d){var h,f;if(arguments.length<4)return h=o.map(function(_){return bi(a,_,c)}),f=h.join(" "),f.split(h[0]).length===5?h[0]:f;h=(u+"").split(" "),f={},o.forEach(function(_,g){return f[_]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,f,d)}});var wp={name:"css",register:tu,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,d,h,f,_,g,p,m,M,v,S,A,w,T,C,y;Gu||tu(),this.styles=this.styles||xp(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(In[g]&&lp(g,e,n,i,t,s)))){if(f=typeof u,_=Ka[g],f==="function"&&(u=u.call(n,i,t,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=yo(u)),_)_(this,t,g,u,n)&&(T=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",tr.lastIndex=0,tr.test(c)||(p=on(c),m=on(u),m?p!==m&&(c=or(t,g,c,m)+m):p&&(u+=p)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ke(c)&&~c.indexOf("random(")&&(c=yo(c)),on(c+"")||c==="auto"||(c+=Hn.units[g]||on(bi(t,g))||""),(c+"").charAt(1)==="="&&(c=bi(t,g))):c=bi(t,g),h=parseFloat(c),M=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),M&&(u=u.substr(2)),d=parseFloat(u),g in di&&(g==="autoAlpha"&&(h===1&&bi(t,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,a.visibility),$i(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=di[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Ui,v){if(this.styles.save(g),y=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=kn(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var x=t.style.perspective;t.style.perspective=u,u=kn(t,"perspective"),x?t.style.perspective=x:sr(t,"perspective")}d=parseFloat(u)}if(S||(A=t._gsap,A.renderTransform&&!e.parseTransform||wo(t,e.parseTransform),w=e.smoothOrigin!==!1&&A.smooth,S=this._pt=new En(this._pt,a,Le,0,1,A.renderTransform,A,0,-1),S.dep=1),g==="scale")this._pt=new En(this._pt,A,"scaleY",A.scaleY,(M?Ss(A.scaleY,M+d):d)-A.scaleY||0,Jc),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(Tn,0,a[Tn]),u=GS(u),A.svg?eu(t,u,0,w,0,this):(m=parseFloat(u.split(" ")[2])||0,m!==A.zOrigin&&$i(this,A,"zOrigin",A.zOrigin,m),$i(this,a,g,ja(c),ja(u)));continue}else if(g==="svgOrigin"){eu(t,u,1,w,0,this);continue}else if(g in Ep){qS(this,A,g,h,M?Ss(h,M+u):u);continue}else if(g==="smoothOrigin"){$i(this,A,"smooth",A.smooth,u);continue}else if(g==="force3D"){A[g]=u;continue}else if(g==="transform"){$S(this,u,t);continue}}else g in a||(g=Fs(g)||g);if(v||(d||d===0)&&(h||h===0)&&!CS.test(u)&&g in a)p=(c+"").substr((h+"").length),d||(d=0),m=on(u)||(g in Hn.units?Hn.units[g]:p),p!==m&&(h=or(t,g,c,m)),this._pt=new En(this._pt,v?A:a,g,h,(M?Ss(h,M+d):d)-h,!v&&(m==="px"||g==="zIndex")&&e.autoRound!==!1?DS:Jc),this._pt.u=m||0,v&&y!==u?(this._pt.b=c,this._pt.e=y,this._pt.r=LS):p!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=PS);else if(g in a)VS.call(this,t,g,c,M?M+u:u);else if(g in t)this.add(t,g,c||t[g],M?M+u:u,i,s);else if(g!=="parseTransform"){Iu(g,u);continue}v||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),o.push(g)}}T&&pp(this)},render:function(t,e){if(e.tween._time||!Wu())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:bi,aliases:di,getSetter:function(t,e,n){var i=di[e];return i&&i.indexOf(",")<0&&(e=i),e in Ui&&e!==Tn&&(t._gsap.x||bi(t,"x"))?n&&xf===n?e==="scale"?OS:NS:(xf=n||{})&&(e==="scale"?FS:BS):t.style&&!Pu(t.style[e])?IS:~e.indexOf("-")?US:Hu(t,e)},core:{_removeProperty:sr,_getMatrix:Yu}};wn.utils.checkPrefix=Fs;wn.core.getStyleSaver=xp;(function(r,t,e,n){var i=yn(r+","+t+","+e,function(s){Ui[s]=1});yn(t,function(s){Hn.units[s]="deg",Ep[s]=1}),di[i[13]]=r+","+t,yn(n,function(s){var o=s.split(":");di[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");yn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Hn.units[r]="px"});wn.registerPlugin(wp);var Wi=wn.registerPlugin(wp)||wn;Wi.core.Tween;function KS(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function jS(r,t,e){return t&&KS(r.prototype,t),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ze,Pa,Fn,Ki,ji,Ts,Ap,Sr,bs,Cp,Pi,ri,Rp,Pp=function(){return Ze||typeof window<"u"&&(Ze=window.gsap)&&Ze.registerPlugin&&Ze},Lp=1,gs=[],ne=[],mi=[],lo=Date.now,nu=function(t,e){return e},ZS=function(){var t=bs.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ne),i.push.apply(i,mi),ne=n,mi=i,nu=function(o,a){return e[o](a)}},er=function(t,e){return~mi.indexOf(t)&&mi[mi.indexOf(t)+1][e]},co=function(t){return!!~Cp.indexOf(t)},un=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},cn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ca="scrollLeft",ua="scrollTop",iu=function(){return Pi&&Pi.isPressed||ne.cache++},Za=function(t,e){var n=function i(s){if(s||s===0){Lp&&(Fn.history.scrollRestoration="manual");var o=Pi&&Pi.isPressed;s=i.v=Math.round(s)||(Pi&&Pi.iOS?1:0),t(s),i.cacheID=ne.cache,o&&nu("ss",s)}else(e||ne.cache!==i.cacheID||nu("ref"))&&(i.cacheID=ne.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},mn={s:ca,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Za(function(r){return arguments.length?Fn.scrollTo(r,Ve.sc()):Fn.pageXOffset||Ki[ca]||ji[ca]||Ts[ca]||0})},Ve={s:ua,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:mn,sc:Za(function(r){return arguments.length?Fn.scrollTo(mn.sc(),r):Fn.pageYOffset||Ki[ua]||ji[ua]||Ts[ua]||0})},vn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Ze.utils.toArray)(t)[0]||(typeof t=="string"&&Ze.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},JS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},ar=function(t,e){var n=e.s,i=e.sc;co(t)&&(t=Ki.scrollingElement||ji);var s=ne.indexOf(t),o=i===Ve.sc?1:2;!~s&&(s=ne.push(t)-1),ne[s+o]||un(t,"scroll",iu);var a=ne[s+o],l=a||(ne[s+o]=Za(er(t,n),!0)||(co(t)?i:Za(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Ze.getProperty(t,"scrollBehavior")==="smooth"),l},ru=function(t,e,n){var i=t,s=t,o=lo(),a=o,l=e||50,c=Math.max(500,l*3),u=function(_,g){var p=lo();g||p-o>l?(s=i,i=_,a=o,o=p):n?i+=_:i=s+(_-s)/(p-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},h=function(_){var g=a,p=s,m=lo();return(_||_===0)&&_!==i&&u(_),o===a||m-a>c?0:(i+(n?p:-p))/((n?m:o)-g)*1e3};return{update:u,reset:d,getVelocity:h}},Ks=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Cf=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Dp=function(){bs=Ze.core.globals().ScrollTrigger,bs&&bs.core&&ZS()},Ip=function(t){return Ze=t||Pp(),!Pa&&Ze&&typeof document<"u"&&document.body&&(Fn=window,Ki=document,ji=Ki.documentElement,Ts=Ki.body,Cp=[Fn,Ki,ji,Ts],Ze.utils.clamp,Rp=Ze.core.context||function(){},Sr="onpointerenter"in Ts?"pointer":"mouse",Ap=Ue.isTouch=Fn.matchMedia&&Fn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Fn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,ri=Ue.eventTypes=("ontouchstart"in ji?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ji?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Lp=0},500),Pa=1),bs||Dp(),Pa};mn.op=Ve;ne.cache=0;var Ue=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){Pa||Ip(Ze)||console.warn("Please gsap.registerPlugin(Observer)"),bs||Dp();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,d=n.onStop,h=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,p=n.onDragStart,m=n.onDragEnd,M=n.onDrag,v=n.onPress,S=n.onRelease,A=n.onRight,w=n.onLeft,T=n.onUp,C=n.onDown,y=n.onChangeX,x=n.onChangeY,P=n.onChange,U=n.onToggleX,z=n.onToggleY,q=n.onHover,$=n.onHoverEnd,X=n.onMove,V=n.ignoreCheck,H=n.isNormalizer,st=n.onGestureStart,L=n.onGestureEnd,ct=n.onWheel,Nt=n.onEnable,qt=n.onDisable,K=n.onClick,nt=n.scrollSpeed,ht=n.capture,ut=n.allowClicks,bt=n.lockAxis,wt=n.onLockAxis;this.target=a=vn(a)||ji,this.vars=n,f&&(f=Ze.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,nt=nt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Fn.getComputedStyle(Ts).lineHeight)||22);var Vt,$t,D,Lt,Ft,Y,j,I=this,gt=0,Mt=0,R=n.passive||!u&&n.passive!==!1,E=ar(a,mn),W=ar(a,Ve),et=E(),it=W(),J=~o.indexOf("touch")&&!~o.indexOf("pointer")&&ri[0]==="pointerdown",Rt=co(a),ot=a.ownerDocument||Ki,mt=[0,0,0],Bt=[0,0,0],at=0,xt=function(){return at=lo()},It=function(At,ae){return(I.event=At)&&f&&JS(At.target,f)||ae&&J&&At.pointerType!=="touch"||V&&V(At,ae)},kt=function(){I._vx.reset(),I._vy.reset(),$t.pause(),d&&d(I)},vt=function(){var At=I.deltaX=Cf(mt),ae=I.deltaY=Cf(Bt),ft=Math.abs(At)>=i,Gt=Math.abs(ae)>=i;P&&(ft||Gt)&&P(I,At,ae,mt,Bt),ft&&(A&&I.deltaX>0&&A(I),w&&I.deltaX<0&&w(I),y&&y(I),U&&I.deltaX<0!=gt<0&&U(I),gt=I.deltaX,mt[0]=mt[1]=mt[2]=0),Gt&&(C&&I.deltaY>0&&C(I),T&&I.deltaY<0&&T(I),x&&x(I),z&&I.deltaY<0!=Mt<0&&z(I),Mt=I.deltaY,Bt[0]=Bt[1]=Bt[2]=0),(Lt||D)&&(X&&X(I),D&&(p&&D===1&&p(I),M&&M(I),D=0),Lt=!1),Y&&!(Y=!1)&&wt&&wt(I),Ft&&(ct(I),Ft=!1),Vt=0},Ht=function(At,ae,ft){mt[ft]+=At,Bt[ft]+=ae,I._vx.update(At),I._vy.update(ae),c?Vt||(Vt=requestAnimationFrame(vt)):vt()},Xt=function(At,ae){bt&&!j&&(I.axis=j=Math.abs(At)>Math.abs(ae)?"x":"y",Y=!0),j!=="y"&&(mt[2]+=At,I._vx.update(At,!0)),j!=="x"&&(Bt[2]+=ae,I._vy.update(ae,!0)),c?Vt||(Vt=requestAnimationFrame(vt)):vt()},ue=function(At){if(!It(At,1)){At=Ks(At,u);var ae=At.clientX,ft=At.clientY,Gt=ae-I.x,Ut=ft-I.y,Wt=I.isDragging;I.x=ae,I.y=ft,(Wt||(Gt||Ut)&&(Math.abs(I.startX-ae)>=s||Math.abs(I.startY-ft)>=s))&&(D||(D=Wt?2:1),Wt||(I.isDragging=!0),Xt(Gt,Ut))}},F=I.onPress=function(zt){It(zt,1)||zt&&zt.button||(I.axis=j=null,$t.pause(),I.isPressed=!0,zt=Ks(zt),gt=Mt=0,I.startX=I.x=zt.clientX,I.startY=I.y=zt.clientY,I._vx.reset(),I._vy.reset(),un(H?a:ot,ri[1],ue,R,!0),I.deltaX=I.deltaY=0,v&&v(I))},Z=I.onRelease=function(zt){if(!It(zt,1)){cn(H?a:ot,ri[1],ue,!0);var At=!isNaN(I.y-I.startY),ae=I.isDragging,ft=ae&&(Math.abs(I.x-I.startX)>3||Math.abs(I.y-I.startY)>3),Gt=Ks(zt);!ft&&At&&(I._vx.reset(),I._vy.reset(),u&&ut&&Ze.delayedCall(.08,function(){if(lo()-at>300&&!zt.defaultPrevented){if(zt.target.click)zt.target.click();else if(ot.createEvent){var Ut=ot.createEvent("MouseEvents");Ut.initMouseEvent("click",!0,!0,Fn,1,Gt.screenX,Gt.screenY,Gt.clientX,Gt.clientY,!1,!1,!1,!1,0,null),zt.target.dispatchEvent(Ut)}}})),I.isDragging=I.isGesturing=I.isPressed=!1,d&&ae&&!H&&$t.restart(!0),D&&vt(),m&&ae&&m(I),S&&S(I,ft)}},Q=function(At){return At.touches&&At.touches.length>1&&(I.isGesturing=!0)&&st(At,I.isDragging)},tt=function(){return(I.isGesturing=!1)||L(I)},lt=function(At){if(!It(At)){var ae=E(),ft=W();Ht((ae-et)*nt,(ft-it)*nt,1),et=ae,it=ft,d&&$t.restart(!0)}},Pt=function(At){if(!It(At)){At=Ks(At,u),ct&&(Ft=!0);var ae=(At.deltaMode===1?l:At.deltaMode===2?Fn.innerHeight:1)*_;Ht(At.deltaX*ae,At.deltaY*ae,0),d&&!H&&$t.restart(!0)}},Kt=function(At){if(!It(At)){var ae=At.clientX,ft=At.clientY,Gt=ae-I.x,Ut=ft-I.y;I.x=ae,I.y=ft,Lt=!0,d&&$t.restart(!0),(Gt||Ut)&&Xt(Gt,Ut)}},ge=function(At){I.event=At,q(I)},ve=function(At){I.event=At,$(I)},re=function(At){return It(At)||Ks(At,u)&&K(I)};$t=I._dc=Ze.delayedCall(h||.25,kt).pause(),I.deltaX=I.deltaY=0,I._vx=ru(0,50,!0),I._vy=ru(0,50,!0),I.scrollX=E,I.scrollY=W,I.isDragging=I.isGesturing=I.isPressed=!1,Rp(this),I.enable=function(zt){return I.isEnabled||(un(Rt?ot:a,"scroll",iu),o.indexOf("scroll")>=0&&un(Rt?ot:a,"scroll",lt,R,ht),o.indexOf("wheel")>=0&&un(a,"wheel",Pt,R,ht),(o.indexOf("touch")>=0&&Ap||o.indexOf("pointer")>=0)&&(un(a,ri[0],F,R,ht),un(ot,ri[2],Z),un(ot,ri[3],Z),ut&&un(a,"click",xt,!0,!0),K&&un(a,"click",re),st&&un(ot,"gesturestart",Q),L&&un(ot,"gestureend",tt),q&&un(a,Sr+"enter",ge),$&&un(a,Sr+"leave",ve),X&&un(a,Sr+"move",Kt)),I.isEnabled=!0,I.isDragging=I.isGesturing=I.isPressed=Lt=D=!1,I._vx.reset(),I._vy.reset(),et=E(),it=W(),zt&&zt.type&&F(zt),Nt&&Nt(I)),I},I.disable=function(){I.isEnabled&&(gs.filter(function(zt){return zt!==I&&co(zt.target)}).length||cn(Rt?ot:a,"scroll",iu),I.isPressed&&(I._vx.reset(),I._vy.reset(),cn(H?a:ot,ri[1],ue,!0)),cn(Rt?ot:a,"scroll",lt,ht),cn(a,"wheel",Pt,ht),cn(a,ri[0],F,ht),cn(ot,ri[2],Z),cn(ot,ri[3],Z),cn(a,"click",xt,!0),cn(a,"click",re),cn(ot,"gesturestart",Q),cn(ot,"gestureend",tt),cn(a,Sr+"enter",ge),cn(a,Sr+"leave",ve),cn(a,Sr+"move",Kt),I.isEnabled=I.isPressed=I.isDragging=!1,qt&&qt(I))},I.kill=I.revert=function(){I.disable();var zt=gs.indexOf(I);zt>=0&&gs.splice(zt,1),Pi===I&&(Pi=0)},gs.push(I),H&&co(a)&&(Pi=I),I.enable(g)},jS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ue.version="3.15.0";Ue.create=function(r){return new Ue(r)};Ue.register=Ip;Ue.getAll=function(){return gs.slice()};Ue.getById=function(r){return gs.filter(function(t){return t.vars.id===r})[0]};Pp()&&Ze.registerPlugin(Ue);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Et,hs,ee,pe,Nn,fe,qu,Ja,Ao,uo,to,ha,nn,cl,su,dn,Rf,Pf,fs,Up,tc,Np,fn,ou,Op,Fp,Gi,au,$u,ws,Ku,ho,lu,ec,fa=1,rn=Date.now,nc=rn(),Qn=0,eo=0,Lf=function(t,e,n){var i=Dn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Df=function(t,e){return e&&(!Dn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},QS=function r(){return eo&&requestAnimationFrame(r)},If=function(){return cl=1},Uf=function(){return cl=0},ci=function(t){return t},no=function(t){return Math.round(t*1e5)/1e5||0},Bp=function(){return typeof window<"u"},zp=function(){return Et||Bp()&&(Et=window.gsap)&&Et.registerPlugin&&Et},Br=function(t){return!!~qu.indexOf(t)},kp=function(t){return(t==="Height"?Ku:ee["inner"+t])||Nn["client"+t]||fe["client"+t]},Hp=function(t){return er(t,"getBoundingClientRect")||(Br(t)?function(){return Na.width=ee.innerWidth,Na.height=Ku,Na}:function(){return Ai(t)})},ty=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=er(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?kp(s):t["client"+s])||0}},ey=function(t,e){return!e||~mi.indexOf(t)?Hp(t):function(){return Na}},pi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=er(t,n))?o()-Hp(t)()[s]:Br(t)?(Nn[n]||fe[n])-kp(i):t[n]-t["offset"+i])},da=function(t,e){for(var n=0;n<fs.length;n+=3)(!e||~e.indexOf(fs[n+1]))&&t(fs[n],fs[n+1],fs[n+2])},Dn=function(t){return typeof t=="string"},an=function(t){return typeof t=="function"},io=function(t){return typeof t=="number"},yr=function(t){return typeof t=="object"},js=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ls=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},cs=Math.abs,Vp="left",Gp="top",ju="right",Zu="bottom",Ir="width",Ur="height",fo="Right",po="Left",mo="Top",_o="Bottom",Fe="padding",qn="margin",Bs="Width",Ju="Height",He="px",$n=function(t){return ee.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},ny=function(t){var e=$n(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Nf=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Ai=function(t,e){var n=e&&$n(t)[su]!=="matrix(1, 0, 0, 1, 0, 0)"&&Et.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},Qa=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},Wp=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},iy=function(t){return function(e){return Et.utils.snap(Wp(t),e)}},Qu=function(t){var e=Et.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},ry=function(t){return function(e,n){return Qu(Wp(t))(e,n.direction)}},pa=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ye=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ma=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Of={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},_a={toggleActions:"play",anticipatePin:0},tl={top:0,left:0,center:.5,bottom:1,right:1},La=function(t,e){if(Dn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in tl?tl[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},ga=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,d=s.fontSize,h=s.indent,f=s.fontWeight,_=pe.createElement("div"),g=Br(n)||er(n,"pinType")==="fixed",p=t.indexOf("scroller")!==-1,m=g?fe:n.tagName==="IFRAME"?n.contentDocument.body:n,M=t.indexOf("start")!==-1,v=M?c:u,S="border-color:"+v+";font-size:"+d+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return S+="position:"+((p||l)&&g?"fixed;":"absolute;"),(p||l||!g)&&(S+=(i===Ve?ju:Zu)+":"+(o+parseFloat(h))+"px;"),a&&(S+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=S,_.innerText=e||e===0?t+"-"+e:t,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],Da(_,0,i,M),_},Da=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Bs]=1,s["border"+a+Bs]=0,s[n.p]=e+"px",Et.set(t,s)},Jt=[],cu={},Co,Ff=function(){return rn()-Qn>34&&(Co||(Co=requestAnimationFrame(Li)))},us=function(){(!fn||!fn.isPressed||fn.startX>fe.clientWidth)&&(ne.cache++,fn?Co||(Co=requestAnimationFrame(Li)):Li(),Qn||kr("scrollStart"),Qn=rn())},ic=function(){Fp=ee.innerWidth,Op=ee.innerHeight},ro=function(t){ne.cache++,(t===!0||!nn&&!Np&&!pe.fullscreenElement&&!pe.webkitFullscreenElement&&(!ou||Fp!==ee.innerWidth||Math.abs(ee.innerHeight-Op)>ee.innerHeight*.25))&&Ja.restart(!0)},zr={},sy=[],Xp=function r(){return Ye(Qt,"scrollEnd",r)||Cr(!0)},kr=function(t){return zr[t]&&zr[t].map(function(e){return e()})||sy},Ln=[],Yp=function(t){for(var e=0;e<Ln.length;e+=5)(!t||Ln[e+4]&&Ln[e+4].query===t)&&(Ln[e].style.cssText=Ln[e+1],Ln[e].getBBox&&Ln[e].setAttribute("transform",Ln[e+2]||""),Ln[e+3].uncache=1)},qp=function(){return ne.forEach(function(t){return an(t)&&++t.cacheID&&(t.rec=t())})},th=function(t,e){var n;for(dn=0;dn<Jt.length;dn++)n=Jt[dn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));ho=!0,e&&Yp(e),e||kr("revert")},$p=function(t,e){ne.cache++,(e||!pn)&&ne.forEach(function(n){return an(n)&&n.cacheID++&&(n.rec=0)}),Dn(t)&&(ee.history.scrollRestoration=$u=t)},pn,Nr=0,Bf,oy=function(){if(Bf!==Nr){var t=Bf=Nr;requestAnimationFrame(function(){return t===Nr&&Cr(!0)})}},Kp=function(){fe.appendChild(ws),Ku=!fn&&ws.offsetHeight||ee.innerHeight,fe.removeChild(ws)},zf=function(t){return Ao(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},Cr=function(t,e){if(Nn=pe.documentElement,fe=pe.body,qu=[ee,pe,Nn,fe],Qn&&!t&&!ho){qe(Qt,"scrollEnd",Xp);return}Kp(),pn=Qt.isRefreshing=!0,ho||qp();var n=kr("refreshInit");Up&&Qt.sort(),e||th(),ne.forEach(function(i){an(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),Jt.slice(0).forEach(function(i){return i.refresh()}),ho=!1,Jt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),lu=1,zf(!0),Jt.forEach(function(i){var s=pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),zf(!1),lu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ne.forEach(function(i){an(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),$p($u,1),Ja.pause(),Nr++,pn=2,Li(2),Jt.forEach(function(i){return an(i.vars.onRefresh)&&i.vars.onRefresh(i)}),pn=Qt.isRefreshing=!1,kr("refresh")},uu=0,Ia=1,go,Li=function(t){if(t===2||!pn&&!ho){Qt.isUpdating=!0,go&&go.update(0);var e=Jt.length,n=rn(),i=n-nc>=50,s=e&&Jt[0].scroll();if(Ia=uu>s?-1:1,pn||(uu=s),i&&(Qn&&!cl&&n-Qn>200&&(Qn=0,kr("scrollEnd")),to=nc,nc=n),Ia<0){for(dn=e;dn-- >0;)Jt[dn]&&Jt[dn].update(0,i);Ia=1}else for(dn=0;dn<e;dn++)Jt[dn]&&Jt[dn].update(0,i);Qt.isUpdating=!1}Co=0},hu=[Vp,Gp,Zu,ju,qn+_o,qn+fo,qn+mo,qn+po,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ua=hu.concat([Ir,Ur,"boxSizing","max"+Bs,"max"+Ju,"position",qn,Fe,Fe+mo,Fe+fo,Fe+_o,Fe+po]),ay=function(t,e,n){As(n);var i=t._gsap;if(i.spacerIsNative)As(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},rc=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=hu.length,o=e.style,a=t.style,l;s--;)l=hu[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Zu]=a[ju]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ir]=Qa(t,mn)+He,o[Ur]=Qa(t,Ve)+He,o[Fe]=a[qn]=a[Gp]=a[Vp]="0",As(i),a[Ir]=a["max"+Bs]=n[Ir],a[Ur]=a["max"+Ju]=n[Ur],a[Fe]=n[Fe],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},ly=/([A-Z])/g,As=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Et.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(ly,"-$1").toLowerCase())}},va=function(t){for(var e=Ua.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ua[s],n[Ua[s]]);return i.t=t,i},cy=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Na={left:0,top:0},kf=function(t,e,n,i,s,o,a,l,c,u,d,h,f,_){an(t)&&(t=t(l)),Dn(t)&&t.substr(0,3)==="max"&&(t=h+(t.charAt(4)==="="?La("0"+t.substr(3),n):0));var g=f?f.time():0,p,m,M;if(f&&f.seek(0),isNaN(t)||(t=+t),io(t))f&&(t=Et.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,h,t)),a&&Da(a,n,i,!0);else{an(e)&&(e=e(l));var v=(t||"0").split(" "),S,A,w,T;M=vn(e,l)||fe,S=Ai(M)||{},(!S||!S.left&&!S.top)&&$n(M).display==="none"&&(T=M.style.display,M.style.display="block",S=Ai(M),T?M.style.display=T:M.style.removeProperty("display")),A=La(v[0],S[i.d]),w=La(v[1]||"0",n),t=S[i.p]-c[i.p]-u+A+s-w,a&&Da(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var C=t+n,y=o._isStart;p="scroll"+i.d2,Da(o,C,i,y&&C>20||!y&&(d?Math.max(fe[p],Nn[p]):o.parentNode[p])<=C+1),d&&(c=Ai(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+He))}return f&&M&&(p=Ai(M),f.seek(h),m=Ai(M),f._caScrollDist=p[i.p]-m[i.p],t=t/f._caScrollDist*h),f&&f.seek(g),f?t:Math.round(t)},uy=/(webkit|moz|length|cssText|inset)/i,Hf=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===fe){t._stOrig=s.cssText,a=$n(t);for(o in a)!+o&&!uy.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Et.core.getCache(t).uncache=1,e.appendChild(t)}},jp=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},xa=function(t,e,n){var i={};i[e.p]="+="+n,Et.set(t,i)},Vf=function(t,e){var n=ar(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,d){var h=o.tween,f=l.onComplete,_={};c=c||n();var g=jp(n,c,function(){h.kill(),o.tween=0});return d=u&&d||0,u=u||a-c,h&&h.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+u*h.ratio+d*h.ratio*h.ratio)},l.onUpdate=function(){ne.cache++,o.tween&&Li()},l.onComplete=function(){o.tween=0,f&&f.call(h)},h=o.tween=Et.to(t,l),h};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},qe(t,"wheel",n.wheelHandler),Qt.isTouch&&qe(t,"touchmove",n.wheelHandler),s},Qt=function(){function r(e,n){hs||r.register(Et)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),au(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!eo){this.update=this.refresh=this.kill=ci;return}n=Nf(Dn(n)||io(n)||n.nodeType?{trigger:n}:n,_a);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,d=s.scrub,h=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,p=s.anticipatePin,m=s.onScrubComplete,M=s.onSnapComplete,v=s.once,S=s.snap,A=s.pinReparent,w=s.pinSpacer,T=s.containerAnimation,C=s.fastScrollEnd,y=s.preventOverlaps,x=n.horizontal||n.containerAnimation&&n.horizontal!==!1?mn:Ve,P=!d&&d!==0,U=vn(n.scroller||ee),z=Et.core.getCache(U),q=Br(U),$=("pinType"in n?n.pinType:er(U,"pinType")||q&&"fixed")==="fixed",X=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],V=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:_a.markers,st=q?0:parseFloat($n(U)["border"+x.p2+Bs])||0,L=this,ct=n.onRefreshInit&&function(){return n.onRefreshInit(L)},Nt=ty(U,q,x),qt=ey(U,q),K=0,nt=0,ht=0,ut=ar(U,x),bt,wt,Vt,$t,D,Lt,Ft,Y,j,I,gt,Mt,R,E,W,et,it,J,Rt,ot,mt,Bt,at,xt,It,kt,vt,Ht,Xt,ue,F,Z,Q,tt,lt,Pt,Kt,ge,ve;if(L._startClamp=L._endClamp=!1,L._dir=x,p*=45,L.scroller=U,L.scroll=T?T.time.bind(T):ut,$t=ut(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(Up=1,n.refreshPriority===-9999&&(go=L)),z.tweenScroll=z.tweenScroll||{top:Vf(U,Ve),left:Vf(U,mn)},L.tweenTo=bt=z.tweenScroll[x.p],L.scrubDuration=function(ft){Q=io(ft)&&ft,Q?Z?Z.duration(ft):Z=Et.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Q,paused:!0,onComplete:function(){return m&&m(L)}}):(Z&&Z.progress(1).kill(),Z=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(d),ue=0,l||(l=i.vars.id)),S&&((!yr(S)||S.push)&&(S={snapTo:S}),"scrollBehavior"in fe.style&&Et.set(q?[fe,Nn]:U,{scrollBehavior:"auto"}),ne.forEach(function(ft){return an(ft)&&ft.target===(q?pe.scrollingElement||Nn:U)&&(ft.smooth=!1)}),Vt=an(S.snapTo)?S.snapTo:S.snapTo==="labels"?iy(i):S.snapTo==="labelsDirectional"?ry(i):S.directional!==!1?function(ft,Gt){return Qu(S.snapTo)(ft,rn()-nt<500?0:Gt.direction)}:Et.utils.snap(S.snapTo),tt=S.duration||{min:.1,max:2},tt=yr(tt)?uo(tt.min,tt.max):uo(tt,tt),lt=Et.delayedCall(S.delay||Q/2||.1,function(){var ft=ut(),Gt=rn()-nt<500,Ut=bt.tween;if((Gt||Math.abs(L.getVelocity())<10)&&!Ut&&!cl&&K!==ft){var Wt=(ft-Lt)/E,Ce=i&&!P?i.totalProgress():Wt,te=Gt?0:(Ce-F)/(rn()-to)*1e3||0,Se=Et.utils.clamp(-Wt,1-Wt,cs(te/2)*te/.185),ze=Wt+(S.inertia===!1?0:Se),Ee,ye,de=S,An=de.onStart,b=de.onInterrupt,N=de.onComplete;if(Ee=Vt(ze,L),io(Ee)||(Ee=ze),ye=Math.max(0,Math.round(Lt+Ee*E)),ft<=Ft&&ft>=Lt&&ye!==ft){if(Ut&&!Ut._initted&&Ut.data<=cs(ye-ft))return;S.inertia===!1&&(Se=Ee-Wt),bt(ye,{duration:tt(cs(Math.max(cs(ze-Ce),cs(Ee-Ce))*.185/te/.05||0)),ease:S.ease||"power3",data:cs(ye-ft),onInterrupt:function(){return lt.restart(!0)&&b&&ls(L,b)},onComplete:function(){L.update(),K=ut(),i&&!P&&(Z?Z.resetTo("totalProgress",Ee,i._tTime/i._tDur):i.progress(Ee)),ue=F=i&&!P?i.totalProgress():L.progress,M&&M(L),N&&ls(L,N)}},ft,Se*E,ye-ft-Se*E),An&&ls(L,An,bt.tween)}}else L.isActive&&K!==ft&&lt.restart(!0)}).pause()),l&&(cu[l]=L),h=L.trigger=vn(h||f!==!0&&f),ve=h&&h._gsap&&h._gsap.stRevert,ve&&(ve=ve(L)),f=f===!0?h:vn(f),Dn(a)&&(a={targets:h,className:a}),f&&(_===!1||_===qn||(_=!_&&f.parentNode&&f.parentNode.style&&$n(f.parentNode).display==="flex"?!1:Fe),L.pin=f,wt=Et.core.getCache(f),wt.spacer?W=wt.pinState:(w&&(w=vn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),wt.spacerIsNative=!!w,w&&(wt.spacerState=va(w))),wt.spacer=J=w||pe.createElement("div"),J.classList.add("pin-spacer"),l&&J.classList.add("pin-spacer-"+l),wt.pinState=W=va(f)),n.force3D!==!1&&Et.set(f,{force3D:!0}),L.spacer=J=wt.spacer,Xt=$n(f),xt=Xt[_+x.os2],ot=Et.getProperty(f),mt=Et.quickSetter(f,x.a,He),rc(f,J,Xt),it=va(f)),H){Mt=yr(H)?Nf(H,Of):Of,I=ga("scroller-start",l,U,x,Mt,0),gt=ga("scroller-end",l,U,x,Mt,0,I),Rt=I["offset"+x.op.d2];var re=vn(er(U,"content")||U);Y=this.markerStart=ga("start",l,re,x,Mt,Rt,0,T),j=this.markerEnd=ga("end",l,re,x,Mt,Rt,0,T),T&&(ge=Et.quickSetter([Y,j],x.a,He)),!$&&!(mi.length&&er(U,"fixedMarkers")===!0)&&(ny(q?fe:U),Et.set([I,gt],{force3D:!0}),kt=Et.quickSetter(I,x.a,He),Ht=Et.quickSetter(gt,x.a,He))}if(T){var zt=T.vars.onUpdate,At=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){L.update(0,0,1),zt&&zt.apply(T,At||[])})}if(L.previous=function(){return Jt[Jt.indexOf(L)-1]},L.next=function(){return Jt[Jt.indexOf(L)+1]},L.revert=function(ft,Gt){if(!Gt)return L.kill(!0);var Ut=ft!==!1||!L.enabled,Wt=nn;Ut!==L.isReverted&&(Ut&&(Pt=Math.max(ut(),L.scroll.rec||0),ht=L.progress,Kt=i&&i.progress()),Y&&[Y,j,I,gt].forEach(function(Ce){return Ce.style.display=Ut?"none":"block"}),Ut&&(nn=L,L.update(Ut)),f&&(!A||!L.isActive)&&(Ut?ay(f,J,W):rc(f,J,$n(f),It)),Ut||L.update(Ut),nn=Wt,L.isReverted=Ut)},L.refresh=function(ft,Gt,Ut,Wt){if(!((nn||!L.enabled)&&!Gt)){if(f&&ft&&Qn){qe(r,"scrollEnd",Xp);return}!pn&&ct&&ct(L),nn=L,bt.tween&&!Ut&&(bt.tween.kill(),bt.tween=0),Z&&Z.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Tt){return Tt.vars.immediateRender&&Tt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var Ce=Nt(),te=qt(),Se=T?T.duration():pi(U,x),ze=E<=.01||!E,Ee=0,ye=Wt||0,de=yr(Ut)?Ut.end:n.end,An=n.endTrigger||h,b=yr(Ut)?Ut.start:n.start||(n.start===0||!h?0:f?"0 0":"0 100%"),N=L.pinnedContainer=n.pinnedContainer&&vn(n.pinnedContainer,L),G=h&&Math.max(0,Jt.indexOf(L))||0,k=G,B,rt,dt,yt,pt,St,Dt,Ot,le,_e,ce,ke,se;for(H&&yr(Ut)&&(ke=Et.getProperty(I,x.p),se=Et.getProperty(gt,x.p));k-- >0;)St=Jt[k],St.end||St.refresh(0,1)||(nn=L),Dt=St.pin,Dt&&(Dt===h||Dt===f||Dt===N)&&!St.isReverted&&(_e||(_e=[]),_e.unshift(St),St.revert(!0,!0)),St!==Jt[k]&&(G--,k--);for(an(b)&&(b=b(L)),b=Lf(b,"start",L),Lt=kf(b,h,Ce,x,ut(),Y,I,L,te,st,$,Se,T,L._startClamp&&"_startClamp")||(f?-.001:0),an(de)&&(de=de(L)),Dn(de)&&!de.indexOf("+=")&&(~de.indexOf(" ")?de=(Dn(b)?b.split(" ")[0]:"")+de:(Ee=La(de.substr(2),Ce),de=Dn(b)?b:(T?Et.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,Lt):Lt)+Ee,An=h)),de=Lf(de,"end",L),Ft=Math.max(Lt,kf(de||(An?"100% 0":Se),An,Ce,x,ut()+Ee,j,gt,L,te,st,$,Se,T,L._endClamp&&"_endClamp"))||-.001,Ee=0,k=G;k--;)St=Jt[k]||{},Dt=St.pin,Dt&&St.start-St._pinPush<=Lt&&!T&&St.end>0&&(B=St.end-(L._startClamp?Math.max(0,St.start):St.start),(Dt===h&&St.start-St._pinPush<Lt||Dt===N)&&isNaN(b)&&(Ee+=B*(1-St.progress)),Dt===f&&(ye+=B));if(Lt+=Ee,Ft+=Ee,L._startClamp&&(L._startClamp+=Ee),L._endClamp&&!pn&&(L._endClamp=Ft||-.001,Ft=Math.min(Ft,pi(U,x))),E=Ft-Lt||(Lt-=.01)&&.001,ze&&(ht=Et.utils.clamp(0,1,Et.utils.normalize(Lt,Ft,Pt))),L._pinPush=ye,Y&&Ee&&(B={},B[x.a]="+="+Ee,N&&(B[x.p]="-="+ut()),Et.set([Y,j],B)),f&&!(lu&&L.end>=pi(U,x)))B=$n(f),yt=x===Ve,dt=ut(),Bt=parseFloat(ot(x.a))+ye,!Se&&Ft>1&&(ce=(q?pe.scrollingElement||Nn:U).style,ce={style:ce,value:ce["overflow"+x.a.toUpperCase()]},q&&$n(fe)["overflow"+x.a.toUpperCase()]!=="scroll"&&(ce.style["overflow"+x.a.toUpperCase()]="scroll")),rc(f,J,B),it=va(f),rt=Ai(f,!0),Ot=$&&ar(U,yt?mn:Ve)(),_?(It=[_+x.os2,E+ye+He],It.t=J,k=_===Fe?Qa(f,x)+E+ye:0,k&&(It.push(x.d,k+He),J.style.flexBasis!=="auto"&&(J.style.flexBasis=k+He)),As(It),N&&Jt.forEach(function(Tt){Tt.pin===N&&Tt.vars.pinSpacing!==!1&&(Tt._subPinOffset=!0)}),$&&ut(Pt)):(k=Qa(f,x),k&&J.style.flexBasis!=="auto"&&(J.style.flexBasis=k+He)),$&&(pt={top:rt.top+(yt?dt-Lt:Ot)+He,left:rt.left+(yt?Ot:dt-Lt)+He,boxSizing:"border-box",position:"fixed"},pt[Ir]=pt["max"+Bs]=Math.ceil(rt.width)+He,pt[Ur]=pt["max"+Ju]=Math.ceil(rt.height)+He,pt[qn]=pt[qn+mo]=pt[qn+fo]=pt[qn+_o]=pt[qn+po]="0",pt[Fe]=B[Fe],pt[Fe+mo]=B[Fe+mo],pt[Fe+fo]=B[Fe+fo],pt[Fe+_o]=B[Fe+_o],pt[Fe+po]=B[Fe+po],et=cy(W,pt,A),pn&&ut(0)),i?(le=i._initted,tc(1),i.render(i.duration(),!0,!0),at=ot(x.a)-Bt+E+ye,vt=Math.abs(E-at)>1,$&&vt&&et.splice(et.length-2,2),i.render(0,!0,!0),le||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),tc(0)):at=E,ce&&(ce.value?ce.style["overflow"+x.a.toUpperCase()]=ce.value:ce.style.removeProperty("overflow-"+x.a));else if(h&&ut()&&!T)for(rt=h.parentNode;rt&&rt!==fe;)rt._pinOffset&&(Lt-=rt._pinOffset,Ft-=rt._pinOffset),rt=rt.parentNode;_e&&_e.forEach(function(Tt){return Tt.revert(!1,!0)}),L.start=Lt,L.end=Ft,$t=D=pn?Pt:ut(),!T&&!pn&&($t<Pt&&ut(Pt),L.scroll.rec=0),L.revert(!1,!0),nt=rn(),lt&&(K=-1,lt.restart(!0)),nn=0,i&&P&&(i._initted||Kt)&&i.progress()!==Kt&&i.progress(Kt||0,!0).render(i.time(),!0,!0),(ze||ht!==L.progress||T||g||i&&!i._initted)&&(i&&!P&&(i._initted||ht||i.vars.immediateRender!==!1)&&i.totalProgress(T&&Lt<-.001&&!ht?Et.utils.normalize(Lt,Ft,0):ht,!0),L.progress=ze||($t-Lt)/E===ht?0:ht),f&&_&&(J._pinOffset=Math.round(L.progress*at)),Z&&Z.invalidate(),isNaN(ke)||(ke-=Et.getProperty(I,x.p),se-=Et.getProperty(gt,x.p),xa(I,x,ke),xa(Y,x,ke-(Wt||0)),xa(gt,x,se),xa(j,x,se-(Wt||0))),ze&&!pn&&L.update(),u&&!pn&&!R&&(R=!0,u(L),R=!1)}},L.getVelocity=function(){return(ut()-D)/(rn()-to)*1e3||0},L.endAnimation=function(){js(L.callbackAnimation),i&&(Z?Z.progress(1):i.paused()?P||js(i,L.direction<0,1):js(i,i.reversed()))},L.labelToScroll=function(ft){return i&&i.labels&&(Lt||L.refresh()||Lt)+i.labels[ft]/i.duration()*E||0},L.getTrailing=function(ft){var Gt=Jt.indexOf(L),Ut=L.direction>0?Jt.slice(0,Gt).reverse():Jt.slice(Gt+1);return(Dn(ft)?Ut.filter(function(Wt){return Wt.vars.preventOverlaps===ft}):Ut).filter(function(Wt){return L.direction>0?Wt.end<=Lt:Wt.start>=Ft})},L.update=function(ft,Gt,Ut){if(!(T&&!Ut&&!ft)){var Wt=pn===!0?Pt:L.scroll(),Ce=ft?0:(Wt-Lt)/E,te=Ce<0?0:Ce>1?1:Ce||0,Se=L.progress,ze,Ee,ye,de,An,b,N,G;if(Gt&&(D=$t,$t=T?ut():Wt,S&&(F=ue,ue=i&&!P?i.totalProgress():te)),p&&f&&!nn&&!fa&&Qn&&(!te&&Lt<Wt+(Wt-D)/(rn()-to)*p?te=1e-4:te===1&&Ft>Wt+(Wt-D)/(rn()-to)*p&&(te=.9999)),te!==Se&&L.enabled){if(ze=L.isActive=!!te&&te<1,Ee=!!Se&&Se<1,b=ze!==Ee,An=b||!!te!=!!Se,L.direction=te>Se?1:-1,L.progress=te,An&&!nn&&(ye=te&&!Se?0:te===1?1:Se===1?2:3,P&&(de=!b&&V[ye+1]!=="none"&&V[ye+1]||V[ye],G=i&&(de==="complete"||de==="reset"||de in i))),y&&(b||G)&&(G||d||!i)&&(an(y)?y(L):L.getTrailing(y).forEach(function(dt){return dt.endAnimation()})),P||(Z&&!nn&&!fa?(Z._dp._time-Z._start!==Z._time&&Z.render(Z._dp._time-Z._start),Z.resetTo?Z.resetTo("totalProgress",te,i._tTime/i._tDur):(Z.vars.totalProgress=te,Z.invalidate().restart())):i&&i.totalProgress(te,!!(nn&&(nt||ft)))),f){if(ft&&_&&(J.style[_+x.os2]=xt),!$)mt(no(Bt+at*te));else if(An){if(N=!ft&&te>Se&&Ft+1>Wt&&Wt+1>=pi(U,x),A)if(!ft&&(ze||N)){var k=Ai(f,!0),B=Wt-Lt;Hf(f,fe,k.top+(x===Ve?B:0)+He,k.left+(x===Ve?0:B)+He)}else Hf(f,J);As(ze||N?et:it),vt&&te<1&&ze||mt(Bt+(te===1&&!N?at:0))}}S&&!bt.tween&&!nn&&!fa&&lt.restart(!0),a&&(b||v&&te&&(te<1||!ec))&&Ao(a.targets).forEach(function(dt){return dt.classList[ze||v?"add":"remove"](a.className)}),o&&!P&&!ft&&o(L),An&&!nn?(P&&(G&&(de==="complete"?i.pause().totalProgress(1):de==="reset"?i.restart(!0).pause():de==="restart"?i.restart(!0):i[de]()),o&&o(L)),(b||!ec)&&(c&&b&&ls(L,c),X[ye]&&ls(L,X[ye]),v&&(te===1?L.kill(!1,1):X[ye]=0),b||(ye=te===1?1:3,X[ye]&&ls(L,X[ye]))),C&&!ze&&Math.abs(L.getVelocity())>(io(C)?C:2500)&&(js(L.callbackAnimation),Z?Z.progress(1):js(i,de==="reverse"?1:!te,1))):P&&o&&!nn&&o(L)}if(Ht){var rt=T?Wt/T.duration()*(T._caScrollDist||0):Wt;kt(rt+(I._isFlipped?1:0)),Ht(rt)}ge&&ge(-Wt/T.duration()*(T._caScrollDist||0))}},L.enable=function(ft,Gt){L.enabled||(L.enabled=!0,qe(U,"resize",ro),q||qe(U,"scroll",us),ct&&qe(r,"refreshInit",ct),ft!==!1&&(L.progress=ht=0,$t=D=K=ut()),Gt!==!1&&L.refresh())},L.getTween=function(ft){return ft&&bt?bt.tween:Z},L.setPositions=function(ft,Gt,Ut,Wt){if(T){var Ce=T.scrollTrigger,te=T.duration(),Se=Ce.end-Ce.start;ft=Ce.start+Se*ft/te,Gt=Ce.start+Se*Gt/te}L.refresh(!1,!1,{start:Df(ft,Ut&&!!L._startClamp),end:Df(Gt,Ut&&!!L._endClamp)},Wt),L.update()},L.adjustPinSpacing=function(ft){if(It&&ft){var Gt=It.indexOf(x.d)+1;It[Gt]=parseFloat(It[Gt])+ft+He,It[1]=parseFloat(It[1])+ft+He,As(It)}},L.disable=function(ft,Gt){if(ft!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,Gt||Z&&Z.pause(),Pt=0,wt&&(wt.uncache=1),ct&&Ye(r,"refreshInit",ct),lt&&(lt.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!q)){for(var Ut=Jt.length;Ut--;)if(Jt[Ut].scroller===U&&Jt[Ut]!==L)return;Ye(U,"resize",ro),q||Ye(U,"scroll",us)}},L.kill=function(ft,Gt){L.disable(ft,Gt),Z&&!Gt&&Z.kill(),l&&delete cu[l];var Ut=Jt.indexOf(L);Ut>=0&&Jt.splice(Ut,1),Ut===dn&&Ia>0&&dn--,Ut=0,Jt.forEach(function(Wt){return Wt.scroller===L.scroller&&(Ut=1)}),Ut||pn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,ft&&i.revert({kill:!1}),Gt||i.kill()),Y&&[Y,j,I,gt].forEach(function(Wt){return Wt.parentNode&&Wt.parentNode.removeChild(Wt)}),go===L&&(go=0),f&&(wt&&(wt.uncache=1),Ut=0,Jt.forEach(function(Wt){return Wt.pin===f&&Ut++}),Ut||(wt.spacer=0)),n.onKill&&n.onKill(L)},Jt.push(L),L.enable(!1,!1),ve&&ve(L),i&&i.add&&!E){var ae=L.update;L.update=function(){L.update=ae,ne.cache++,Lt||Ft||L.refresh()},Et.delayedCall(.01,L.update),E=.01,Lt=Ft=0}else L.refresh();f&&oy()},r.register=function(n){return hs||(Et=n||zp(),Bp()&&window.document&&r.enable(),hs=eo),hs},r.defaults=function(n){if(n)for(var i in n)_a[i]=n[i];return _a},r.disable=function(n,i){eo=0,Jt.forEach(function(o){return o[i?"kill":"disable"](n)}),Ye(ee,"wheel",us),Ye(pe,"scroll",us),clearInterval(ha),Ye(pe,"touchcancel",ci),Ye(fe,"touchstart",ci),pa(Ye,pe,"pointerdown,touchstart,mousedown",If),pa(Ye,pe,"pointerup,touchend,mouseup",Uf),Ja.kill(),da(Ye);for(var s=0;s<ne.length;s+=3)ma(Ye,ne[s],ne[s+1]),ma(Ye,ne[s],ne[s+2])},r.enable=function(){if(ee=window,pe=document,Nn=pe.documentElement,fe=pe.body,Et){if(Ao=Et.utils.toArray,uo=Et.utils.clamp,au=Et.core.context||ci,tc=Et.core.suppressOverwrites||ci,$u=ee.history.scrollRestoration||"auto",uu=ee.pageYOffset||0,Et.core.globals("ScrollTrigger",r),fe){eo=1,ws=document.createElement("div"),ws.style.height="100vh",ws.style.position="absolute",Kp(),QS(),Ue.register(Et),r.isTouch=Ue.isTouch,Gi=Ue.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),ou=Ue.isTouch===1,qe(ee,"wheel",us),qu=[ee,pe,Nn,fe],Et.matchMedia?(r.matchMedia=function(u){var d=Et.matchMedia(),h;for(h in u)d.add(h,u[h]);return d},Et.addEventListener("matchMediaInit",function(){qp(),th()}),Et.addEventListener("matchMediaRevert",function(){return Yp()}),Et.addEventListener("matchMedia",function(){Cr(0,1),kr("matchMedia")}),Et.matchMedia().add("(orientation: portrait)",function(){return ic(),ic})):console.warn("Requires GSAP 3.11.0 or later"),ic(),qe(pe,"scroll",us);var n=fe.hasAttribute("style"),i=fe.style,s=i.borderTopStyle,o=Et.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ai(fe),Ve.m=Math.round(a.top+Ve.sc())||0,mn.m=Math.round(a.left+mn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(fe.setAttribute("style",""),fe.removeAttribute("style")),ha=setInterval(Ff,250),Et.delayedCall(.5,function(){return fa=0}),qe(pe,"touchcancel",ci),qe(fe,"touchstart",ci),pa(qe,pe,"pointerdown,touchstart,mousedown",If),pa(qe,pe,"pointerup,touchend,mouseup",Uf),su=Et.utils.checkPrefix("transform"),Ua.push(su),hs=rn(),Ja=Et.delayedCall(.2,Cr).pause(),fs=[pe,"visibilitychange",function(){var u=ee.innerWidth,d=ee.innerHeight;pe.hidden?(Rf=u,Pf=d):(Rf!==u||Pf!==d)&&ro()},pe,"DOMContentLoaded",Cr,ee,"load",Cr,ee,"resize",ro],da(qe),Jt.forEach(function(u){return u.enable(0,1)}),l=0;l<ne.length;l+=3)ma(Ye,ne[l],ne[l+1]),ma(Ye,ne[l],ne[l+2])}else if(pe){var c=function u(){r.enable(),pe.removeEventListener("DOMContentLoaded",u)};pe.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(ec=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ha)||(ha=i)&&setInterval(Ff,i),"ignoreMobileResize"in n&&(ou=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(da(Ye)||da(qe,n.autoRefreshEvents||"none"),Np=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=vn(n),o=ne.indexOf(s),a=Br(s);~o&&ne.splice(o,a?6:2),i&&(a?mi.unshift(ee,i,fe,i,Nn,i):mi.unshift(s,i))},r.clearMatchMedia=function(n){Jt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Dn(n)?vn(n):n).getBoundingClientRect(),a=o[s?Ir:Ur]*i||0;return s?o.right-a>0&&o.left+a<ee.innerWidth:o.bottom-a>0&&o.top+a<ee.innerHeight},r.positionInViewport=function(n,i,s){Dn(n)&&(n=vn(n));var o=n.getBoundingClientRect(),a=o[s?Ir:Ur],l=i==null?a/2:i in tl?tl[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ee.innerWidth:(o.top+l)/ee.innerHeight},r.killAll=function(n){if(Jt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=zr.killAll||[];zr={},i.forEach(function(s){return s()})}},r}();Qt.version="3.15.0";Qt.saveStyles=function(r){return r?Ao(r).forEach(function(t){if(t&&t.style){var e=Ln.indexOf(t);e>=0&&Ln.splice(e,5),Ln.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Et.core.getCache(t),au())}}):Ln};Qt.revert=function(r,t){return th(!r,t)};Qt.create=function(r,t){return new Qt(r,t)};Qt.refresh=function(r){return r?ro(!0):(hs||Qt.register())&&Cr(!0)};Qt.update=function(r){return++ne.cache&&Li(r===!0?2:0)};Qt.clearScrollMemory=$p;Qt.maxScroll=function(r,t){return pi(r,t?mn:Ve)};Qt.getScrollFunc=function(r,t){return ar(vn(r),t?mn:Ve)};Qt.getById=function(r){return cu[r]};Qt.getAll=function(){return Jt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Qt.isScrolling=function(){return!!Qn};Qt.snapDirectional=Qu;Qt.addEventListener=function(r,t){var e=zr[r]||(zr[r]=[]);~e.indexOf(t)||e.push(t)};Qt.removeEventListener=function(r,t){var e=zr[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Qt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var d=[],h=[],f=Et.delayedCall(i,function(){u(d,h),d=[],h=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),h.push(_),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&an(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return an(s)&&(s=s(),qe(Qt,"refresh",function(){return s=t.batchMax()})),Ao(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Qt.create(c))}),e};var Gf=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},sc=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ue.isTouch?" pinch-zoom":""):"none",t===Nn&&r(fe,e)},Ma={auto:1,scroll:1},hy=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Et.core.getCache(s),a=rn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==fe&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ma[(l=$n(s)).overflowY]||Ma[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Br(s)&&(Ma[(l=$n(s)).overflowY]||Ma[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},Zp=function(t,e,n,i){return Ue.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hy,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&qe(pe,Ue.eventTypes[0],Xf,!1,!0)},onDisable:function(){return Ye(pe,Ue.eventTypes[0],Xf,!0)}})},fy=/(input|label|select|textarea)/i,Wf,Xf=function(t){var e=fy.test(t.target.tagName);(e||Wf)&&(t._gsapAllow=!0,Wf=e)},dy=function(t){yr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=vn(t.target)||Nn,u=Et.core.globals().ScrollSmoother,d=u&&u.get(),h=Gi&&(t.content&&vn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ar(c,Ve),_=ar(c,mn),g=1,p=(Ue.isTouch&&ee.visualViewport?ee.visualViewport.scale*ee.visualViewport.width:ee.outerWidth)/ee.innerWidth,m=0,M=an(i)?function(){return i(a)}:function(){return i||2.8},v,S,A=Zp(c,t.type,!0,s),w=function(){return S=!1},T=ci,C=ci,y=function(){l=pi(c,Ve),C=uo(Gi?1:0,l),n&&(T=uo(0,pi(c,mn))),v=Nr},x=function(){h._gsap.y=no(parseFloat(h._gsap.y)+f.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(S){requestAnimationFrame(w);var H=no(a.deltaY/2),st=C(f.v-H);if(h&&st!==f.v+f.offset){f.offset=st-f.v;var L=no((parseFloat(h&&h._gsap.y)||0)-f.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",f.cacheID=ne.cache,Li()}return!0}f.offset&&x(),S=!0},U,z,q,$,X=function(){y(),U.isActive()&&U.vars.scrollY>l&&(f()>l?U.progress(1)&&f(l):U.resetTo("scrollY",l))};return h&&Et.set(h,{y:"+=0"}),t.ignoreCheck=function(V){return Gi&&V.type==="touchmove"&&P()||g>1.05&&V.type!=="touchstart"||a.isGesturing||V.touches&&V.touches.length>1},t.onPress=function(){S=!1;var V=g;g=no((ee.visualViewport&&ee.visualViewport.scale||1)/p),U.pause(),V!==g&&sc(c,g>1.01?!0:n?!1:"x"),z=_(),q=f(),y(),v=Nr},t.onRelease=t.onGestureStart=function(V,H){if(f.offset&&x(),!H)$.restart(!0);else{ne.cache++;var st=M(),L,ct;n&&(L=_(),ct=L+st*.05*-V.velocityX/.227,st*=Gf(_,L,ct,pi(c,mn)),U.vars.scrollX=T(ct)),L=f(),ct=L+st*.05*-V.velocityY/.227,st*=Gf(f,L,ct,pi(c,Ve)),U.vars.scrollY=C(ct),U.invalidate().duration(st).play(.01),(Gi&&U.vars.scrollY>=l||L>=l-1)&&Et.to({},{onUpdate:X,duration:st})}o&&o(V)},t.onWheel=function(){U._ts&&U.pause(),rn()-m>1e3&&(v=0,m=rn())},t.onChange=function(V,H,st,L,ct){if(Nr!==v&&y(),H&&n&&_(T(L[2]===H?z+(V.startX-V.x):_()+H-L[1])),st){f.offset&&x();var Nt=ct[2]===st,qt=Nt?q+V.startY-V.y:f()+st-ct[1],K=C(qt);Nt&&qt!==K&&(q+=K-qt),f(K)}(st||H)&&Li()},t.onEnable=function(){sc(c,n?!1:"x"),Qt.addEventListener("refresh",X),qe(ee,"resize",X),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),A.enable()},t.onDisable=function(){sc(c,!0),Ye(ee,"resize",X),Qt.removeEventListener("refresh",X),A.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ue(t),a.iOS=Gi,Gi&&!f()&&f(1),Gi&&Et.ticker.add(ci),$=a._dc,U=Et.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:jp(f,f(),function(){return U.pause()})},onUpdate:Li,onComplete:$.vars.onComplete}),a};Qt.sort=function(r){if(an(r))return Jt.sort(r);var t=ee.pageYOffset||0;return Qt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ee.innerHeight}),Jt.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};Qt.observe=function(r){return new Ue(r)};Qt.normalizeScroll=function(r){if(typeof r>"u")return fn;if(r===!0&&fn)return fn.enable();if(r===!1){fn&&fn.kill(),fn=r;return}var t=r instanceof Ue?r:dy(r);return fn&&fn.target===t.target&&fn.kill(),Br(t.target)&&(fn=t),t};Qt.core={_getVelocityProp:ru,_inputObserver:Zp,_scrollers:ne,_proxies:mi,bridge:{ss:function(){Qn||kr("scrollStart"),Qn=rn()},ref:function(){return nn}}};zp()&&Et.registerPlugin(Qt);Wi.registerPlugin(Qt);document.addEventListener("DOMContentLoaded",()=>{const r=document.getElementById("webgl-canvas");let t=null;r&&(t=new MM(r));const e=new RM({duration:1.2,easing:Y=>Math.min(1,1.001-Math.pow(2,-10*Y)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,touchMultiplier:1.5});e.on("scroll",Qt.update),Wi.ticker.add(Y=>{e.raf(Y*1e3)}),Wi.ticker.lagSmoothing(0),Qt.create({trigger:document.body,start:"top top",end:"bottom bottom",onUpdate:Y=>{t&&t.updateScrollProgress(Y.progress)}}),Wi.utils.toArray(".line-mask").forEach(Y=>{const j=Y.querySelector(".line-text");j&&Wi.fromTo(j,{yPercent:110,opacity:0},{yPercent:0,opacity:1,duration:1.15,ease:"power4.out",scrollTrigger:{trigger:Y,start:"top 92%",toggleActions:"play none none none"}})}),Wi.utils.toArray(".stat-number").forEach(Y=>{const j=parseFloat(Y.getAttribute("data-target")),I=Y.getAttribute("data-prefix")||"",gt=Y.getAttribute("data-suffix")||"";if(!isNaN(j)){const Mt={val:0};Wi.to(Mt,{val:j,duration:2,ease:"power3.out",scrollTrigger:{trigger:Y,start:"top 90%",toggleActions:"play none none none"},onUpdate:()=>{Y.innerText=`${I}${Math.round(Mt.val)}${gt}`}})}});let n=null,i=!1;const s=()=>{if(!n){const Y=window.AudioContext||window.webkitAudioContext;Y&&(n=new Y)}n&&n.state==="suspended"&&n.resume()},o=(Y=440,j="sine",I=.04,gt=.04)=>{if(!(!i||!n))try{const Mt=n.createOscillator(),R=n.createGain();Mt.type=j,Mt.frequency.setValueAtTime(Y,n.currentTime),R.gain.setValueAtTime(gt,n.currentTime),R.gain.exponentialRampToValueAtTime(1e-4,n.currentTime+I),Mt.connect(R),R.connect(n.destination),Mt.start(),Mt.stop(n.currentTime+I)}catch{}},a=document.getElementById("sfx-toggle"),l=document.getElementById("sfx-status-text");a&&a.addEventListener("click",()=>{s(),i=!i,a.classList.toggle("sfx-active",i),l&&(l.textContent=i?"SFX: ON":"SFX: OFF"),i&&o(660,"sine",.08,.06)});const c=document.querySelectorAll(".mode-btn");let u="hardware";const d=Y=>{u=Y,document.documentElement.setAttribute("data-mode",Y),c.forEach(j=>{const I=j.getAttribute("data-mode")===Y;j.classList.toggle("active",I),j.setAttribute("aria-checked",I?"true":"false")}),t&&t.setThemeMode(Y),i&&o(Y==="hardware"?520:740,"triangle",.06,.05)};c.forEach(Y=>{Y.addEventListener("click",()=>{s();const j=Y.getAttribute("data-mode");j&&j!==u&&d(j)})});const h="7484a04b4155780c4ac5b1b3a0520388c302165943dea9206a330fc8e43c57c4",f=`https://gravatar.com/${h}.json`,_={displayName:"Himavara Sagar",jobTitle:"Electronics & Communication Engineer",location:"Hyderabad, India",pronouns:"he/him",bio:"NIT Calicut graduate. Building thoughtful digital experiences, antenna arrays, and multi-agent systems.",languages:"Telugu (Native), Hindi, English",avatarUrl:`https://2.gravatar.com/avatar/${h}?s=400`,verifiedAccounts:[{name:"GitHub",url:"https://himavarasagar.link/github"},{name:"LinkedIn",url:"https://himavarasagar.link/linkedin"},{name:"Spotify",url:"https://himavarasagar.link/spotify"}]},g=(Y,j=!1)=>{const I=document.getElementById("gravatar-avatar-img"),gt=document.getElementById("gravatar-name"),Mt=document.getElementById("gravatar-job"),R=document.getElementById("gravatar-bio"),E=document.getElementById("gravatar-loc"),W=document.getElementById("gravatar-langs"),et=document.getElementById("gravatar-pronouns"),it=document.getElementById("gravatar-status-text");I&&Y.avatarUrl&&(I.src=Y.avatarUrl),gt&&Y.displayName&&(gt.textContent=Y.displayName),Mt&&Y.jobTitle&&(Mt.textContent=Y.jobTitle),R&&Y.bio&&(R.textContent=Y.bio),E&&Y.location&&(E.textContent=`📍 ${Y.location}`),W&&Y.languages&&(W.textContent=`🌐 ${Y.languages}`),et&&Y.pronouns&&(et.textContent=Y.pronouns),it&&j&&(it.textContent="GRAVATAR V3 SYNCED [200 OK]")};g(_,!1),fetch(f,{mode:"cors"}).then(Y=>{if(!Y.ok)throw new Error("Gravatar network response not ok");return Y.json()}).then(Y=>{var I,gt;const j=(I=Y==null?void 0:Y.entry)==null?void 0:I[0];if(j){const Mt={displayName:j.displayName||((gt=j.name)==null?void 0:gt.formatted)||_.displayName,jobTitle:j.job_title||_.jobTitle,location:j.currentLocation||_.location,pronouns:j.pronouns||_.pronouns,bio:j.aboutMe||_.bio,languages:_.languages,avatarUrl:j.thumbnailUrl||_.avatarUrl};g(Mt,!0)}}).catch(()=>{const Y=document.getElementById("gravatar-status-text");Y&&(Y.textContent="GRAVATAR VERIFIED IDENTITY [CACHED]")});const p=document.querySelectorAll(".filter-pill"),m=document.querySelectorAll(".project-cockpit-card"),M=Y=>{m.forEach(j=>{const I=j.getAttribute("data-category");Y==="all"||I===Y?j.classList.remove("filtered-out"):j.classList.add("filtered-out")})};p.forEach(Y=>{Y.addEventListener("click",()=>{s(),o(540,"sine",.03,.03);const j=Y.getAttribute("data-filter");p.forEach(I=>{I.classList.remove("active"),I.setAttribute("aria-selected","false")}),Y.classList.add("active"),Y.setAttribute("aria-selected","true"),M(j)})}),m.forEach(Y=>{Y.addEventListener("mousemove",j=>{const I=Y.getBoundingClientRect(),gt=j.clientX-I.left,Mt=j.clientY-I.top,R=gt/I.width*100,E=Mt/I.height*100;Y.style.setProperty("--mouse-x",`${R}%`),Y.style.setProperty("--mouse-y",`${E}%`)})});const v=document.getElementById("tech-drawer-modal"),S=document.getElementById("drawer-close-btn"),A=document.getElementById("drawer-backdrop"),w=document.getElementById("drawer-num"),T=document.getElementById("drawer-category"),C=document.getElementById("drawer-project-title"),y=document.getElementById("drawer-project-summary"),x=document.getElementById("drawer-stats-container"),P=document.getElementById("drawer-deep-content"),U=document.getElementById("drawer-figures-container"),z=document.getElementById("drawer-pills-container"),q={"01":{num:"01",tag:"RF / SUB-TERAHERTZ SIMULATION",title:"Tunable Terahertz MIMO Antenna",summary:"Numerical modeling and analysis of a reconfigurable graphene antenna in CST Studio Suite for high-bandwidth 6G wireless communication.",stats:[{val:">20 dB",label:"Port Isolation"},{val:"THz Reg",label:"Sub-Terahertz"},{val:"Electronic",label:"Beam Steering"}],deepContent:`
        <p><strong>CST Microwave Studio Modeling:</strong> The antenna structure utilizes a circular graphene patch on an electrostatic gating substrate. By modulating the chemical potential of the graphene layer from 0.0 eV to 0.8 eV, the surface conductivity tensor shifts dynamically, causing the resonance frequency to modulate across the terahertz spectrum without changing physical dimensions.</p>
        <p><strong>MIMO Array Isolation:</strong> Extended into a 2-element MIMO configuration. Optimization of the separation distance and ground-plane electromagnetic bandgap (EBG) structures achieved greater than 20 dB mutual port isolation, preventing signal cross-talk in dense array configurations.</p>
      `,figures:[{src:"./assets/research/architecture_comparison_overall.png",caption:"Electromagnetic Field Directivity"},{src:"./assets/research/symbol_heatmap.png",caption:"S-Parameter Isolation Matrix"}],pills:["CST Studio Suite","S-Parameters","Surface Conductivity","Graphene Chemical Potential","MIMO Isolation","Sub-THz Waves"]},"02":{num:"02",tag:"SOFTWARE / MULTI-AGENT RUNTIME",title:"Multi-Agent Workflow Engine",summary:"Autonomous orchestration framework built with Google Agent Development Kit featuring modular reasoning, dynamic tool use, and stateful graph recovery.",stats:[{val:"Google ADK",label:"Agent Toolkit"},{val:"Python 3.11",label:"Core Runtime"},{val:"Self-Healing",label:"Exception Handling"}],deepContent:`
        <p><strong>Planner-Executor Architecture:</strong> Built on top of Google ADK in Python. The system utilizes a root decomposition agent that transforms abstract user commands into structured execution trees. Individual sub-agents specialize in sandboxed code execution, file manipulation, and web retrieval.</p>
        <p><strong>State & Memory Management:</strong> Implements a resilient memory graph where tool outputs are validated against schema boundaries before mutating global state. If a tool invocation encounters an exception or timeout, the engine dynamically recalibrates its plan.</p>
      `,figures:[{src:"./assets/research/architecture_comparison_categories.png",caption:"Agent Execution Latency Distribution"},{src:"./assets/research/precision_comparison_overall.png",caption:"Task Precision vs Baseline"}],pills:["Google ADK","Python 3.11","Multi-Agent Systems","Tool Invocation","Directed Graphs","State Preservation"]},"03":{num:"03",tag:"NETWORK PROTOCOLS / ZERO-DEP",title:"Semantic Communication Pipeline",summary:"A protocol for conveying intent rather than raw characters over lossy socket channels, achieving 68% payload compression using Python stdlib.",stats:[{val:"68%",label:"Payload Reduction"},{val:"Zero-Dep",label:"Python Stdlib"},{val:"SIU Schema",label:"Semantic Units"}],deepContent:`
        <p><strong>Semantic Information Units (SIU):</strong> Instead of transmitting plain text strings or serialized JSON, natural language statements are parsed into minimal intent tokens and semantic tuples (Subject-Predicate-Object). This achieves high structural compression prior to dictionary encoding.</p>
        <p><strong>Lossy Socket Transmission:</strong> Messages are compressed with zlib and transmitted over raw TCP/UDP sockets with simulated burst packet loss and random bit-flips. The receiver uses rule-based semantic inference to reconstruct meaning even with packet corruption.</p>
      `,figures:[{src:"./assets/research/meaning_vs_symbol.png",caption:"Empirical Meaning vs Symbol Transmission"},{src:"./assets/research/bandwidth_by_category.png",caption:"Bandwidth Reduction Across Categories"}],pills:["Python Stdlib","Raw Sockets","zlib Compression","Lossy Channels","SIU Schema","Error Recovery"]},"04":{num:"04",tag:"CERTIFICATION / BENCHMARK",title:"Multi-Agent Systems Capstone",summary:"Capstone certification with Kaggle and Google ADK validating robust multi-agent orchestration, delegation chaining, and automated evaluation.",stats:[{val:"Kaggle",label:"Verified Capstone"},{val:"ADK 2.0",label:"Google Suite"},{val:"100%",label:"Benchmark Score"}],deepContent:`
        <p><strong>Adversarial Benchmark Testing:</strong> Tested multi-agent orchestration patterns against challenging test cases involving circular delegation, failing API endpoints, and ambiguous tool parameters. The system demonstrated 100% resolution rate across automated grading rubrics.</p>
        <p><strong>Delegation Chaining:</strong> Implemented strict scope boundaries between primary planners and specialized worker agents to eliminate hallucination loops and ensure verifiable audit trails.</p>
      `,figures:[{src:"./assets/research/precision_comparison_categories.png",caption:"Category Precision Benchmark Score"},{src:"./assets/research/symbol_heatmap.png",caption:"State Alignment Heatmap"}],pills:["Google ADK","Kaggle Capstone","Delegation Patterns","Adversarial Testing","Evaluation Rubrics"]}},$=Y=>{const j=q[Y];j&&(w&&(w.textContent=j.num),T&&(T.textContent=j.tag),C&&(C.textContent=j.title),y&&(y.textContent=j.summary),P&&(P.innerHTML=j.deepContent),x&&(x.innerHTML=j.stats.map(I=>`
        <div class="metric-cell">
          <span class="m-number">${I.val}</span>
          <span class="m-tag">${I.label}</span>
        </div>
      `).join("")),U&&j.figures&&(U.innerHTML=j.figures.map(I=>`
        <div class="figure-item">
          <img src="${I.src}" alt="${I.caption}" class="drawer-plot-img" loading="lazy" />
          <span class="m-tag" style="display:block; margin-top:0.3rem;">${I.caption}</span>
        </div>
      `).join("")),z&&(z.innerHTML=j.pills.map(I=>`
        <span class="tpill">${I}</span>
      `).join("")),v.classList.add("active"),v.setAttribute("aria-hidden","false"),e.stop(),i&&o(700,"sine",.05,.04))},X=()=>{v.classList.remove("active"),v.setAttribute("aria-hidden","true"),e.start(),i&&o(400,"sine",.04,.03)};document.querySelectorAll(".inspect-drawer-trigger, .project-cockpit-card").forEach(Y=>{Y.addEventListener("click",j=>{if(j.target.closest("a"))return;s();const I=Y.getAttribute("data-inspect")||Y.getAttribute("data-id");I&&$(I)})}),S&&S.addEventListener("click",X),A&&A.addEventListener("click",X),window.addEventListener("keydown",Y=>{Y.key==="Escape"&&v.classList.contains("active")&&X()});const V=document.getElementById("custom-cursor"),H=document.getElementById("cursor-label");let st=window.innerWidth/2,L=window.innerHeight/2,ct=st,Nt=L;window.addEventListener("mousemove",Y=>{st=Y.clientX,L=Y.clientY},{passive:!0}),document.querySelectorAll(".magnetic-target, a, button, .project-cockpit-card").forEach(Y=>{Y.addEventListener("mouseenter",()=>{if(!V)return;V.classList.add("is-hovering");const j=Y.getAttribute("data-cursor")||"VIEW";H&&(H.textContent=j)}),Y.addEventListener("mouseleave",()=>{V&&(V.classList.remove("is-hovering"),H&&(H.textContent=""),Y.style.transform="")}),Y.addEventListener("mousemove",j=>{const I=Y.getBoundingClientRect(),gt=I.left+I.width/2,Mt=I.top+I.height/2,R=(j.clientX-gt)*.12,E=(j.clientY-Mt)*.12;(Y.classList.contains("btn")||Y.classList.contains("mode-btn")||Y.classList.contains("hud-link"))&&(Y.style.transform=`translate(${R}px, ${E}px)`)})});const K=()=>{ct+=(st-ct)*.18,Nt+=(L-Nt)*.18,V&&(V.style.transform=`translate3d(${ct}px, ${Nt}px, 0)`),requestAnimationFrame(K)};K();const nt=document.getElementById("live-ist-clock"),ht=()=>{if(!nt)return;const Y=new Date,j={timeZone:"Asia/Kolkata",hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"};nt.textContent=`${Y.toLocaleTimeString("en-GB",j)} IST`};setInterval(ht,1e3),ht();const ut=document.querySelectorAll(".lab-telemetry-row"),bt=document.getElementById("scope-freq-readout"),wt=document.getElementById("oscilloscope-path"),Vt={"3.450 kHz":"M0 16 Q17.5 4 35 16 T70 16 T105 16 T140 16","2.450 GHz":"M0 16 Q8.75 0 17.5 16 T35 16 T52.5 16 T70 16 T87.5 16 T105 16 T122.5 16 T140 16","10.50 MHz":"M0 16 Q11.6 2 23.3 16 T46.6 16 T70 16 T93.3 16 T116.6 16 T140 16","50.00 kHz":"M0 16 Q23.3 0 46.6 16 T93.3 16 T140 16","0.340 THz":"M0 16 Q5 0 10 16 T20 16 T30 16 T40 16 T50 16 T60 16 T70 16 T80 16 T90 16 T100 16 T110 16 T120 16 T130 16 T140 16"};ut.forEach(Y=>{Y.addEventListener("mouseenter",()=>{const j=Y.getAttribute("data-freq");bt&&(bt.textContent=`FREQ: ${j}`),wt&&Vt[j]&&wt.setAttribute("d",Vt[j]),i&&o(320,"sawtooth",.03,.02)}),Y.addEventListener("mouseleave",()=>{bt&&(bt.textContent="FREQ: 1.000 kHz"),wt&&wt.setAttribute("d","M0 16 Q17.5 0 35 16 T70 16 T105 16 T140 16")})});const $t=document.getElementById("copy-email-btn"),D=document.getElementById("hud-toast");let Lt=null;const Ft=Y=>{if(!D)return;const j=D.querySelector(".toast-text");j&&(j.textContent=Y),D.classList.add("active"),clearTimeout(Lt),Lt=setTimeout(()=>{D.classList.remove("active")},3200)};$t&&$t.addEventListener("click",()=>{s();const Y="himavarasagar6675@gmail.com";navigator.clipboard?navigator.clipboard.writeText(Y).then(()=>{Ft(`Copied ${Y} to clipboard!`),i&&o(880,"sine",.08,.05)}).catch(()=>{window.location.href=`mailto:${Y}`}):window.location.href=`mailto:${Y}`}),document.querySelectorAll('a[href^="#"]').forEach(Y=>{Y.addEventListener("click",j=>{const I=Y.getAttribute("href");if(!I||I==="#")return;const gt=document.querySelector(I);gt&&(j.preventDefault(),s(),i&&o(480,"sine",.03,.03),e.scrollTo(gt,{offset:-60,duration:1.2}))})})});
