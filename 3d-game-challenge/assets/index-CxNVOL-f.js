(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const Hh="181",Sx=0,$d=1,Tx=2,mm=1,xm=2,fi=3,Ti=0,dn=1,en=2,Mi=0,lr=1,vc=2,Kd=3,jd=4,Ex=5,ys=100,Ax=101,wx=102,Cx=103,Rx=104,Px=200,Ix=201,Lx=202,Dx=203,hu=204,du=205,Nx=206,Ux=207,Fx=208,Ox=209,Bx=210,kx=211,zx=212,Hx=213,Vx=214,fu=0,pu=1,mu=2,gr=3,xu=4,gu=5,_u=6,vu=7,gm=0,Gx=1,Wx=2,qi=0,Xx=1,Yx=2,qx=3,$x=4,Kx=5,jx=6,Jx=7,Jd="attached",Zx="detached",_m=300,_r=301,vr=302,yu=303,Mu=304,Wc=306,es=1e3,Kn=1001,yc=1002,nn=1003,vm=1004,aa=1005,tn=1006,ic=1007,_i=1008,Jn=1009,ym=1010,Mm=1011,La=1012,Vh=1013,Cs=1014,On=1015,Ir=1016,Gh=1017,Wh=1018,Da=1020,bm=35902,Sm=35899,Tm=1021,Em=1022,An=1023,Na=1026,Ua=1027,Xh=1028,Yh=1029,qh=1030,$h=1031,Kh=1033,sc=33776,rc=33777,ac=33778,oc=33779,bu=35840,Su=35841,Tu=35842,Eu=35843,Au=36196,wu=37492,Cu=37496,Ru=37808,Pu=37809,Iu=37810,Lu=37811,Du=37812,Nu=37813,Uu=37814,Fu=37815,Ou=37816,Bu=37817,ku=37818,zu=37819,Hu=37820,Vu=37821,Gu=36492,Wu=36494,Xu=36495,Yu=36283,qu=36284,$u=36285,Ku=36286,jh=2200,Qx=2201,eg=2202,Fa=2300,Oa=2301,pl=2302,ir=2400,sr=2401,Mc=2402,Jh=2500,tg=2501,ng=0,Am=1,ju=2,ig=3200,sg=3201,wm=0,rg=1,ki="",Nt="srgb",an="srgb-linear",bc="linear",mt="srgb",Us=7680,Zd=519,ag=512,og=513,cg=514,Cm=515,lg=516,ug=517,hg=518,dg=519,Ju=35044,Qd="300 es",jn=2e3,Sc=2001;function Rm(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ba(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fg(){const i=Ba("canvas");return i.style.display="block",i}const ef={};function Tc(...i){const e="THREE."+i.shift();console.log(e,...i)}function be(...i){const e="THREE."+i.shift();console.warn(e,...i)}function Ke(...i){const e="THREE."+i.shift();console.error(e,...i)}function ka(...i){const e=i.join(" ");e in ef||(ef[e]=!0,be(...i))}function pg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tf=1234567;const ha=Math.PI/180,yr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[t&63|128]+Yt[t>>8&255]+"-"+Yt[t>>16&255]+Yt[t>>24&255]+Yt[n&255]+Yt[n>>8&255]+Yt[n>>16&255]+Yt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Zh(i,e){return(i%e+e)%e}function mg(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xg(i,e,t){return i!==e?(t-i)/(e-i):0}function da(i,e,t){return(1-t)*i+t*e}function gg(i,e,t,n){return da(i,e,1-Math.exp(-t*n))}function _g(i,e=1){return e-Math.abs(Zh(i,e*2)-e)}function vg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function yg(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Mg(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bg(i,e){return i+Math.random()*(e-i)}function Sg(i){return i*(.5-Math.random())}function Tg(i){i!==void 0&&(tf=i);let e=tf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Eg(i){return i*ha}function Ag(i){return i*yr}function wg(i){return(i&i-1)===0&&i!==0}function Cg(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Rg(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Pg(i,e,t,n,s){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),d=a((e-n)/2),f=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*u,o*l);break;default:be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Zu={DEG2RAD:ha,RAD2DEG:yr,generateUUID:wn,clamp:$e,euclideanModulo:Zh,mapLinear:mg,inverseLerp:xg,lerp:da,damp:gg,pingpong:_g,smoothstep:vg,smootherstep:yg,randInt:Mg,randFloat:bg,randFloatSpread:Sg,seededRandom:Tg,degToRad:Eg,radToDeg:Ag,isPowerOfTwo:wg,ceilPowerOfTwo:Cg,floorPowerOfTwo:Rg,setQuaternionFromProperEuler:Pg,normalize:ht,denormalize:Fn};class de{constructor(e=0,t=0){de.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],g=r[a+3];if(o<=0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(h!==g||c!==d||l!==f||u!==m){let x=c*d+l*f+u*m+h*g;x<0&&(d=-d,f=-f,m=-m,g=-g,x=-x);let p=1-o;if(x<.9995){const M=Math.acos(x),v=Math.sin(M);p=Math.sin(p*M)/v,o=Math.sin(o*M)/v,c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+g*o}else{c=c*p+d*o,l=l*p+f*o,u=u*p+m*o,h=h*p+g*o;const M=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=M,l*=M,u*=M,h*=M}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return e[t]=o*m+u*h+c*f-l*d,e[t+1]=c*m+u*d+l*h-o*f,e[t+2]=l*m+u*f+o*d-c*h,e[t+3]=u*m-o*h-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,t=Math.sin(t*l)/u,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),u=2*(o*t-r*s),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ml.copy(this).projectOnVector(e),this.sub(ml)}reflect(e){return this.sub(ml.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ml=new C,nf=new vn;class We{constructor(e,t,n,s,r,a,o,c,l){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],g=s[0],x=s[3],p=s[6],M=s[1],v=s[4],S=s[7],w=s[2],E=s[5],I=s[8];return r[0]=a*g+o*M+c*w,r[3]=a*x+o*v+c*E,r[6]=a*p+o*S+c*I,r[1]=l*g+u*M+h*w,r[4]=l*x+u*v+h*E,r[7]=l*p+u*S+h*I,r[2]=d*g+f*M+m*w,r[5]=d*x+f*v+m*E,r[8]=d*p+f*S+m*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,m=t*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=h*g,e[1]=(s*l-u*n)*g,e[2]=(o*n-s*a)*g,e[3]=d*g,e[4]=(u*t-s*c)*g,e[5]=(s*r-o*t)*g,e[6]=f*g,e[7]=(n*c-l*t)*g,e[8]=(a*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new We,sf=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rf=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ig(){const i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===mt&&(s.r=bi(s.r),s.g=bi(s.g),s.b=bi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(s.r=ur(s.r),s.g=ur(s.g),s.b=ur(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ki?bc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:e,whitePoint:n,transfer:bc,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:mt,toXYZ:sf,fromXYZ:rf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}const it=Ig();function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ur(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Fs;class Lg{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fs===void 0&&(Fs=Ba("canvas")),Fs.width=e.width,Fs.height=e.height;const s=Fs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ba("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(bi(t[n]/255)*255):t[n]=bi(t[n]);return{data:t,width:e.width,height:e.height}}else return be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Dg=0;class Qh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(gl(s[a].image)):r.push(gl(s[a]))}else r=gl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function gl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(be("Texture: Unable to serialize Texture."),{})}let Ng=0;const _l=new C;class Ft extends Ls{constructor(e=Ft.DEFAULT_IMAGE,t=Ft.DEFAULT_MAPPING,n=Kn,s=Kn,r=tn,a=_i,o=An,c=Jn,l=Ft.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ng++}),this.uuid=wn(),this.name="",this.source=new Qh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(_l).x}get height(){return this.source.getSize(_l).y}get depth(){return this.source.getSize(_l).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_m)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ft.DEFAULT_IMAGE=null;Ft.DEFAULT_MAPPING=_m;Ft.DEFAULT_ANISOTROPY=1;class lt{constructor(e=0,t=0,n=0,s=1){lt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],g=c[2],x=c[6],p=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-g)<.01&&Math.abs(m-x)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+g)<.1&&Math.abs(m+x)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(l+1)/2,S=(f+1)/2,w=(p+1)/2,E=(u+d)/4,I=(h+g)/4,F=(m+x)/4;return v>S&&v>w?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=I/n):S>w?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=F/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=I/r,s=F/r),this.set(n,s,r,t),this}let M=Math.sqrt((x-m)*(x-m)+(h-g)*(h-g)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(x-m)/M,this.y=(h-g)/M,this.z=(d-u)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ug extends Ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new lt(0,0,e,t),this.scissorTest=!1,this.viewport=new lt(0,0,e,t);const s={width:e,height:t,depth:n.depth},r=new Ft(s);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Qh(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rs extends Ug{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Pm extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Fg extends Ft{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=nn,this.minFilter=nn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(r,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),po.copy(n.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hr),mo.subVectors(this.max,Hr),Os.subVectors(e.a,Hr),Bs.subVectors(e.b,Hr),ks.subVectors(e.c,Hr),Ci.subVectors(Bs,Os),Ri.subVectors(ks,Bs),ds.subVectors(Os,ks);let t=[0,-Ci.z,Ci.y,0,-Ri.z,Ri.y,0,-ds.z,ds.y,Ci.z,0,-Ci.x,Ri.z,0,-Ri.x,ds.z,0,-ds.x,-Ci.y,Ci.x,0,-Ri.y,Ri.x,0,-ds.y,ds.x,0];return!vl(t,Os,Bs,ks,mo)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Os,Bs,ks,mo))?!1:(xo.crossVectors(Ci,Ri),t=[xo.x,xo.y,xo.z],vl(t,Os,Bs,ks,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new C,new C,new C,new C,new C,new C,new C,new C],Ln=new C,po=new Cn,Os=new C,Bs=new C,ks=new C,Ci=new C,Ri=new C,ds=new C,Hr=new C,mo=new C,xo=new C,fs=new C;function vl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fs.fromArray(i,r);const o=s.x*Math.abs(fs.x)+s.y*Math.abs(fs.y)+s.z*Math.abs(fs.z),c=e.dot(fs),l=t.dot(fs),u=n.dot(fs);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Og=new Cn,Vr=new C,yl=new C;class ei{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Og.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vr.subVectors(e,this.center);const t=Vr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vr.copy(e.center).add(yl)),this.expandByPoint(Vr.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ri=new C,Ml=new C,go=new C,Pi=new C,bl=new C,_o=new C,Sl=new C;class Xc{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ml.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),Pi.copy(this.origin).sub(Ml);const r=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=Pi.dot(this.direction),c=-Pi.dot(go),l=Pi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){const g=1/u;h*=g,d*=g,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Ml).addScaledVector(go,d),f}intersectSphere(e,t){ri.subVectors(e.center,this.origin);const n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){bl.subVectors(t,e),_o.subVectors(n,e),Sl.crossVectors(bl,_o);let a=this.direction.dot(Sl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,e);const c=o*this.direction.dot(_o.crossVectors(Pi,_o));if(c<0)return null;const l=o*this.direction.dot(bl.cross(Pi));if(l<0||c+l>a)return null;const u=-o*Pi.dot(Sl);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ge{constructor(e,t,n,s,r,a,o,c,l,u,h,d,f,m,g,x){Ge.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,u,h,d,f,m,g,x)}set(e,t,n,s,r,a,o,c,l,u,h,d,f,m,g,x){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ge().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/zs.setFromMatrixColumn(e,0).length(),r=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=f+m*l,t[5]=d-g*l,t[9]=-o*c,t[2]=g-d*l,t[6]=m+f*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*u,f=c*h,m=l*u,g=l*h;t[0]=d+g*o,t[4]=m*o-f,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=g+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*u,f=c*h,m=l*u,g=l*h;t[0]=d-g*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=g-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,g=o*h;t[0]=c*u,t[4]=m*l-f,t[8]=d*l+g,t[1]=c*h,t[5]=g*l+d,t[9]=f*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=g-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=f*h+m,t[10]=d-g*h}else if(e.order==="XZY"){const d=a*c,f=a*l,m=o*c,g=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+g,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=g*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Bg,e,kg)}lookAt(e,t,n){const s=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ii.crossVectors(n,xn),Ii.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ii.crossVectors(n,xn)),Ii.normalize(),vo.crossVectors(xn,Ii),s[0]=Ii.x,s[4]=vo.x,s[8]=xn.x,s[1]=Ii.y,s[5]=vo.y,s[9]=xn.y,s[2]=Ii.z,s[6]=vo.z,s[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],g=n[6],x=n[10],p=n[14],M=n[3],v=n[7],S=n[11],w=n[15],E=s[0],I=s[4],F=s[8],T=s[12],b=s[1],L=s[5],k=s[9],H=s[13],X=s[2],J=s[6],$=s[10],re=s[14],W=s[3],se=s[7],ce=s[11],we=s[15];return r[0]=a*E+o*b+c*X+l*W,r[4]=a*I+o*L+c*J+l*se,r[8]=a*F+o*k+c*$+l*ce,r[12]=a*T+o*H+c*re+l*we,r[1]=u*E+h*b+d*X+f*W,r[5]=u*I+h*L+d*J+f*se,r[9]=u*F+h*k+d*$+f*ce,r[13]=u*T+h*H+d*re+f*we,r[2]=m*E+g*b+x*X+p*W,r[6]=m*I+g*L+x*J+p*se,r[10]=m*F+g*k+x*$+p*ce,r[14]=m*T+g*H+x*re+p*we,r[3]=M*E+v*b+S*X+w*W,r[7]=M*I+v*L+S*J+w*se,r[11]=M*F+v*k+S*$+w*ce,r[15]=M*T+v*H+S*re+w*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],g=e[7],x=e[11],p=e[15];return m*(+r*c*h-s*l*h-r*o*d+n*l*d+s*o*f-n*c*f)+g*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*u-r*c*u)+x*(+t*l*h-t*o*f-r*a*h+n*a*f+r*o*u-n*l*u)+p*(-s*o*u-t*c*h+t*o*d+s*a*h-n*a*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],g=e[13],x=e[14],p=e[15],M=h*x*l-g*d*l+g*c*f-o*x*f-h*c*p+o*d*p,v=m*d*l-u*x*l-m*c*f+a*x*f+u*c*p-a*d*p,S=u*g*l-m*h*l+m*o*f-a*g*f-u*o*p+a*h*p,w=m*h*c-u*g*c-m*o*d+a*g*d+u*o*x-a*h*x,E=t*M+n*v+s*S+r*w;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/E;return e[0]=M*I,e[1]=(g*d*r-h*x*r-g*s*f+n*x*f+h*s*p-n*d*p)*I,e[2]=(o*x*r-g*c*r+g*s*l-n*x*l-o*s*p+n*c*p)*I,e[3]=(h*c*r-o*d*r-h*s*l+n*d*l+o*s*f-n*c*f)*I,e[4]=v*I,e[5]=(u*x*r-m*d*r+m*s*f-t*x*f-u*s*p+t*d*p)*I,e[6]=(m*c*r-a*x*r-m*s*l+t*x*l+a*s*p-t*c*p)*I,e[7]=(a*d*r-u*c*r+u*s*l-t*d*l-a*s*f+t*c*f)*I,e[8]=S*I,e[9]=(m*h*r-u*g*r-m*n*f+t*g*f+u*n*p-t*h*p)*I,e[10]=(a*g*r-m*o*r+m*n*l-t*g*l-a*n*p+t*o*p)*I,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*f-t*o*f)*I,e[12]=w*I,e[13]=(u*g*s-m*h*s+m*n*d-t*g*d-u*n*x+t*h*x)*I,e[14]=(m*o*s-a*g*s-m*n*c+t*g*c+a*n*x-t*o*x)*I,e[15]=(a*h*s-u*o*s+u*n*c-t*h*c-a*n*d+t*o*d)*I,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,m=r*h,g=a*u,x=a*h,p=o*h,M=c*l,v=c*u,S=c*h,w=n.x,E=n.y,I=n.z;return s[0]=(1-(g+p))*w,s[1]=(f+S)*w,s[2]=(m-v)*w,s[3]=0,s[4]=(f-S)*E,s[5]=(1-(d+p))*E,s[6]=(x+M)*E,s[7]=0,s[8]=(m+v)*I,s[9]=(x-M)*I,s[10]=(1-(d+g))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=zs.set(s[0],s[1],s[2]).length();const a=zs.set(s[4],s[5],s[6]).length(),o=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Dn.copy(this);const l=1/r,u=1/a,h=1/o;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,t.setFromRotationMatrix(Dn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=jn,c=!1){const l=this.elements,u=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s);let m,g;if(c)m=r/(a-r),g=a*r/(a-r);else if(o===jn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Sc)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=jn,c=!1){const l=this.elements,u=2/(t-e),h=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s);let m,g;if(c)m=1/(a-r),g=a/(a-r);else if(o===jn)m=-2/(a-r),g=-(a+r)/(a-r);else if(o===Sc)m=-1/(a-r),g=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new C,Dn=new Ge,Bg=new C(0,0,0),kg=new C(1,1,1),Ii=new C,vo=new C,xn=new C,af=new Ge,of=new vn;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-$e(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin($e(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return af.makeRotationFromQuaternion(e),this.setFromRotationMatrix(af,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return of.setFromEuler(this),this.setFromQuaternion(of,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class Im{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let zg=0;const cf=new C,Hs=new vn,ai=new Ge,yo=new C,Gr=new C,Hg=new C,Vg=new vn,lf=new C(1,0,0),uf=new C(0,1,0),hf=new C(0,0,1),df={type:"added"},Gg={type:"removed"},Vs={type:"childadded",child:null},Tl={type:"childremoved",child:null};class bt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zg++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bt.DEFAULT_UP.clone();const e=new C,t=new zn,n=new vn,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ge},normalMatrix:{value:new We}}),this.matrix=new Ge,this.matrixWorld=new Ge,this.matrixAutoUpdate=bt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Im,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(lf,e)}rotateY(e){return this.rotateOnAxis(uf,e)}rotateZ(e){return this.rotateOnAxis(hf,e)}translateOnAxis(e,t){return cf.copy(e).applyQuaternion(this.quaternion),this.position.add(cf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lf,e)}translateY(e){return this.translateOnAxis(uf,e)}translateZ(e){return this.translateOnAxis(hf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ai.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?yo.copy(e):yo.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ai.lookAt(Gr,yo,this.up):ai.lookAt(yo,Gr,this.up),this.quaternion.setFromRotationMatrix(ai),s&&(ai.extractRotation(s.matrixWorld),Hs.setFromRotationMatrix(ai),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(df),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Gg),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ai.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ai.multiply(e.parent.matrixWorld)),e.applyMatrix4(ai),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(df),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,e,Hg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gr,Vg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}bt.DEFAULT_UP=new C(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Nn=new C,oi=new C,El=new C,ci=new C,Gs=new C,Ws=new C,ff=new C,Al=new C,wl=new C,Cl=new C,Rl=new lt,Pl=new lt,Il=new lt;class Tn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Nn.subVectors(e,t),s.cross(Nn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Nn.subVectors(s,t),oi.subVectors(n,t),El.subVectors(e,t);const a=Nn.dot(Nn),o=Nn.dot(oi),c=Nn.dot(El),l=oi.dot(oi),u=oi.dot(El),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,ci)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ci.x),c.addScaledVector(a,ci.y),c.addScaledVector(o,ci.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rl.setScalar(0),Pl.setScalar(0),Il.setScalar(0),Rl.fromBufferAttribute(e,t),Pl.fromBufferAttribute(e,n),Il.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rl,r.x),a.addScaledVector(Pl,r.y),a.addScaledVector(Il,r.z),a}static isFrontFacing(e,t,n,s){return Nn.subVectors(n,t),oi.subVectors(e,t),Nn.cross(oi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Nn.subVectors(this.c,this.b),oi.subVectors(this.a,this.b),Nn.cross(oi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Tn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Tn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;Gs.subVectors(s,n),Ws.subVectors(r,n),Al.subVectors(e,n);const c=Gs.dot(Al),l=Ws.dot(Al);if(c<=0&&l<=0)return t.copy(n);wl.subVectors(e,s);const u=Gs.dot(wl),h=Ws.dot(wl);if(u>=0&&h<=u)return t.copy(s);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Gs,a);Cl.subVectors(e,r);const f=Gs.dot(Cl),m=Ws.dot(Cl);if(m>=0&&f<=m)return t.copy(r);const g=f*l-c*m;if(g<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(Ws,o);const x=u*m-f*h;if(x<=0&&h-u>=0&&f-m>=0)return ff.subVectors(r,s),o=(h-u)/(h-u+(f-m)),t.copy(s).addScaledVector(ff,o);const p=1/(x+g+d);return a=g*p,o=d*p,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Lm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Ll(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=it.workingColorSpace){return this.r=e,this.g=t,this.b=n,it.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=it.workingColorSpace){if(e=Zh(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Ll(a,r,e+1/3),this.g=Ll(a,r,e),this.b=Ll(a,r,e-1/3)}return it.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=Lm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return it.workingToColorSpace(qt.copy(this),e),Math.round($e(qt.r*255,0,255))*65536+Math.round($e(qt.g*255,0,255))*256+Math.round($e(qt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=it.workingColorSpace){it.workingToColorSpace(qt.copy(this),t);const n=qt.r,s=qt.g,r=qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=it.workingColorSpace){return it.workingToColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Nt){it.workingToColorSpace(qt.copy(this),e);const t=qt.r,n=qt.g,s=qt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Mo);const n=da(Li.h,Mo.h,t),s=da(Li.s,Mo.s,t),r=da(Li.l,Mo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Oe;Oe.NAMES=Lm;let Wg=0;class Bn extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Wg++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=lr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hu,this.blendDst=du,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==lr&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hu&&(n.blendSrc=this.blendSrc),this.blendDst!==du&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Kt extends Bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=gm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Dt=new C,bo=new de;let Xg=0;class sn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Xg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ju,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ju&&(e.usage=this.usage),e}}class Dm extends sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nm extends sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Lt extends sn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Yg=0;const bn=new Ge,Dl=new bt,Xs=new C,gn=new Cn,Wr=new Cn,Ht=new C;class jt extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rm(e)?Nm:Dm)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xs).negate(),this.translate(Xs.x,Xs.y,Xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Wr.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(gn.min,Wr.min),gn.expandByPoint(Ht),Ht.addVectors(gn.max,Wr.max),gn.expandByPoint(Ht)):(gn.expandByPoint(Wr.min),gn.expandByPoint(Wr.max))}gn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Ht.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ht));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Ht.fromBufferAttribute(o,l),c&&(Xs.fromBufferAttribute(e,l),Ht.add(Xs)),s=Math.max(s,n.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new C,c[F]=new C;const l=new C,u=new C,h=new C,d=new de,f=new de,m=new de,g=new C,x=new C;function p(F,T,b){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,T),h.fromBufferAttribute(n,b),d.fromBufferAttribute(r,F),f.fromBufferAttribute(r,T),m.fromBufferAttribute(r,b),u.sub(l),h.sub(l),f.sub(d),m.sub(d);const L=1/(f.x*m.y-m.x*f.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(L),x.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(L),o[F].add(g),o[T].add(g),o[b].add(g),c[F].add(x),c[T].add(x),c[b].add(x))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let F=0,T=M.length;F<T;++F){const b=M[F],L=b.start,k=b.count;for(let H=L,X=L+k;H<X;H+=3)p(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new C,S=new C,w=new C,E=new C;function I(F){w.fromBufferAttribute(s,F),E.copy(w);const T=o[F];v.copy(T),v.sub(w.multiplyScalar(w.dot(T))).normalize(),S.crossVectors(E,T);const L=S.dot(c[F])<0?-1:1;a.setXYZW(F,v.x,v.y,v.z,L)}for(let F=0,T=M.length;F<T;++F){const b=M[F],L=b.start,k=b.count;for(let H=L,X=L+k;H<X;H+=3)I(e.getX(H+0)),I(e.getX(H+1)),I(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new C,r=new C,a=new C,o=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),x=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ht.fromBufferAttribute(e,t),Ht.normalize(),e.setXYZ(t,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u);let f=0,m=0;for(let g=0,x=c.length;g<x;g++){o.isInterleavedBufferAttribute?f=c[g]*o.data.stride+o.offset:f=c[g]*u;for(let p=0;p<u;p++)d[m++]=l[f++]}return new sn(d,u,h)}if(this.index===null)return be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const d=l[u],f=e(d,n);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const f=l[h];u.push(f.toJSON(e.data))}u.length>0&&(s[c]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const l in s){const u=s[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pf=new Ge,ps=new Xc,So=new ei,mf=new C,To=new C,Eo=new C,Ao=new C,Nl=new C,wo=new C,xf=new C,Co=new C;class Bt extends bt{constructor(e=new jt,t=new Kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){wo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Nl.fromBufferAttribute(h,e),a?wo.addScaledVector(Nl,u):wo.addScaledVector(Nl.sub(t),u))}t.add(wo)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(r),ps.copy(e.ray).recast(e.near),!(So.containsPoint(ps.origin)===!1&&(ps.intersectSphere(So,mf)===null||ps.origin.distanceToSquared(mf)>(e.far-e.near)**2))&&(pf.copy(r).invert(),ps.copy(e.ray).applyMatrix4(pf),!(n.boundingBox!==null&&ps.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ps)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],M=Math.max(x.start,f.start),v=Math.min(o.count,Math.min(x.start+x.count,f.start+f.count));for(let S=M,w=v;S<w;S+=3){const E=o.getX(S),I=o.getX(S+1),F=o.getX(S+2);s=Ro(this,p,e,n,l,u,h,E,I,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(o.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const M=o.getX(x),v=o.getX(x+1),S=o.getX(x+2);s=Ro(this,a,e,n,l,u,h,M,v,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,g=d.length;m<g;m++){const x=d[m],p=a[x.materialIndex],M=Math.max(x.start,f.start),v=Math.min(c.count,Math.min(x.start+x.count,f.start+f.count));for(let S=M,w=v;S<w;S+=3){const E=S,I=S+1,F=S+2;s=Ro(this,p,e,n,l,u,h,E,I,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(c.count,f.start+f.count);for(let x=m,p=g;x<p;x+=3){const M=x,v=x+1,S=x+2;s=Ro(this,a,e,n,l,u,h,M,v,S),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function qg(i,e,t,n,s,r,a,o){let c;if(e.side===dn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Ti,o),c===null)return null;Co.copy(o),Co.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Co);return l<t.near||l>t.far?null:{distance:l,point:Co.clone(),object:i}}function Ro(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,To),i.getVertexPosition(c,Eo),i.getVertexPosition(l,Ao);const u=qg(i,e,t,n,To,Eo,Ao,xf);if(u){const h=new C;Tn.getBarycoord(xf,To,Eo,Ao,h),s&&(u.uv=Tn.getInterpolatedAttribute(s,o,c,l,h,new de)),r&&(u.uv1=Tn.getInterpolatedAttribute(r,o,c,l,h,new de)),a&&(u.normal=Tn.getInterpolatedAttribute(a,o,c,l,h,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new C,materialIndex:0};Tn.getNormal(To,Eo,Ao,d.normal),u.face=d,u.barycoord=h}return u}class Ja extends jt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Lt(l,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(h,2));function m(g,x,p,M,v,S,w,E,I,F,T){const b=S/I,L=w/F,k=S/2,H=w/2,X=E/2,J=I+1,$=F+1;let re=0,W=0;const se=new C;for(let ce=0;ce<$;ce++){const we=ce*L-H;for(let nt=0;nt<J;nt++){const dt=nt*b-k;se[g]=dt*M,se[x]=we*v,se[p]=X,l.push(se.x,se.y,se.z),se[g]=0,se[x]=0,se[p]=E>0?1:-1,u.push(se.x,se.y,se.z),h.push(nt/I),h.push(1-ce/F),re+=1}}for(let ce=0;ce<F;ce++)for(let we=0;we<I;we++){const nt=d+we+J*ce,dt=d+we+J*(ce+1),_t=d+(we+1)+J*(ce+1),vt=d+(we+1)+J*ce;c.push(nt,dt,vt),c.push(dt,_t,vt),W+=6}o.addGroup(f,W,T),f+=W,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Mr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=Mr(i[t]);for(const s in n)e[s]=n[s]}return e}function $g(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Um(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Kg={clone:Mr,merge:Qt};var jg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ei extends Bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jg,this.fragmentShader=Jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=$g(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Fm extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ge,this.projectionMatrix=new Ge,this.projectionMatrixInverse=new Ge,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Di=new C,gf=new de,_f=new de;class ln extends Fm{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yr*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Di.x,Di.y).multiplyScalar(-e/Di.z),Di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Di.x,Di.y).multiplyScalar(-e/Di.z)}getViewSize(e,t){return this.getViewBounds(e,gf,_f),t.subVectors(_f,gf)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ha*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ys=-90,qs=1;class Zg extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ln(Ys,qs,e,t);s.layers=this.layers,this.add(s);const r=new ln(Ys,qs,e,t);r.layers=this.layers,this.add(r);const a=new ln(Ys,qs,e,t);a.layers=this.layers,this.add(a);const o=new ln(Ys,qs,e,t);o.layers=this.layers,this.add(o);const c=new ln(Ys,qs,e,t);c.layers=this.layers,this.add(c);const l=new ln(Ys,qs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Sc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Om extends Ft{constructor(e=[],t=_r,n,s,r,a,o,c,l,u){super(e,t,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qg extends Rs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Om(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ja(5,5,5),r=new Ei({name:"CubemapFromEquirect",uniforms:Mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Mi});r.uniforms.tEquirect.value=t;const a=new Bt(s,r),o=t.minFilter;return t.minFilter===_i&&(t.minFilter=tn),new Zg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}class un extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const e_={type:"move"};class Ul{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const g of e.hand.values()){const x=t.getJointPose(g,n),p=this._getHandJoint(l,g);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(e_)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class t_ extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ju,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new C;class za{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyMatrix4(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.applyNormalMatrix(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Zt.fromBufferAttribute(this,t),Zt.transformDirection(e),this.setXYZ(t,Zt.x,Zt.y,Zt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ht(t,this.array),n=ht(n,this.array),s=ht(s,this.array),r=ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Tc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new sn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new za(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Tc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class km extends Bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let $s;const Xr=new C,Ks=new C,js=new C,Js=new de,Yr=new de,zm=new Ge,Po=new C,qr=new C,Io=new C,vf=new de,Fl=new de,yf=new de;class n_ extends bt{constructor(e=new km){if(super(),this.isSprite=!0,this.type="Sprite",$s===void 0){$s=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Bm(t,5);$s.setIndex([0,1,2,0,2,3]),$s.setAttribute("position",new za(n,3,0,!1)),$s.setAttribute("uv",new za(n,2,3,!1))}this.geometry=$s,this.material=e,this.center=new de(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Ke('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ks.setFromMatrixScale(this.matrixWorld),zm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ks.multiplyScalar(-js.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Lo(Po.set(-.5,-.5,0),js,a,Ks,s,r),Lo(qr.set(.5,-.5,0),js,a,Ks,s,r),Lo(Io.set(.5,.5,0),js,a,Ks,s,r),vf.set(0,0),Fl.set(1,0),yf.set(1,1);let o=e.ray.intersectTriangle(Po,qr,Io,!1,Xr);if(o===null&&(Lo(qr.set(-.5,.5,0),js,a,Ks,s,r),Fl.set(0,1),o=e.ray.intersectTriangle(Po,Io,qr,!1,Xr),o===null))return;const c=e.ray.origin.distanceTo(Xr);c<e.near||c>e.far||t.push({distance:c,point:Xr.clone(),uv:Tn.getInterpolation(Xr,Po,qr,Io,vf,Fl,yf,new de),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Lo(i,e,t,n,s,r){Js.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Yr.x=r*Js.x-s*Js.y,Yr.y=s*Js.x+r*Js.y):Yr.copy(Js),i.copy(e),i.x+=Yr.x,i.y+=Yr.y,i.applyMatrix4(zm)}const Mf=new C,bf=new lt,Sf=new lt,i_=new C,Tf=new Ge,Do=new C,Ol=new ei,Ef=new Ge,Bl=new Xc;class s_ extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Jd,this.bindMatrix=new Ge,this.bindMatrixInverse=new Ge,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Cn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingBox.expandByPoint(Do)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new ei),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Do),this.boundingSphere.expandByPoint(Do)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ol.copy(this.boundingSphere),Ol.applyMatrix4(s),e.ray.intersectsSphere(Ol)!==!1&&(Ef.copy(s).invert(),Bl.copy(e.ray).applyMatrix4(Ef),!(this.boundingBox!==null&&Bl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Bl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Jd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Zx?this.bindMatrixInverse.copy(this.bindMatrix).invert():be("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;bf.fromBufferAttribute(s.attributes.skinIndex,e),Sf.fromBufferAttribute(s.attributes.skinWeight,e),Mf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Sf.getComponent(r);if(a!==0){const o=bf.getComponent(r);Tf.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(i_.copy(Mf).applyMatrix4(Tf),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Hm extends bt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class ed extends Ft{constructor(e=null,t=1,n=1,s,r,a,o,c,l=nn,u=nn,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Af=new Ge,r_=new Ge;class td{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){be("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ge)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ge;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:r_;Af.multiplyMatrices(o,t[r]),Af.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new td(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new ed(t,e,e,An,On);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let a=t[r];a===void 0&&(be("Skeleton: No bone found with UUID:",r),a=new Hm),this.bones.push(a),this.boneInverses.push(new Ge().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const a=t[s];e.bones.push(a.uuid);const o=n[s];e.boneInverses.push(o.toArray())}return e}}class Qu extends sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zs=new Ge,wf=new Ge,No=[],Cf=new Cn,a_=new Ge,$r=new Bt,Kr=new ei;class o_ extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Qu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,a_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Cn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Cf.copy(e.boundingBox).applyMatrix4(Zs),this.boundingBox.union(Cf)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new ei),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Zs),Kr.copy(e.boundingSphere).applyMatrix4(Zs),this.boundingSphere.union(Kr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if($r.geometry=this.geometry,$r.material=this.material,$r.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Kr.copy(this.boundingSphere),Kr.applyMatrix4(n),e.ray.intersectsSphere(Kr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zs),wf.multiplyMatrices(n,Zs),$r.matrixWorld=wf,$r.raycast(e,No);for(let a=0,o=No.length;a<o;a++){const c=No[a];c.instanceId=r,c.object=this,t.push(c)}No.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Qu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ed(new Float32Array(s*this.count),s,this.count,Xh,On));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const kl=new C,c_=new C,l_=new We;class vs{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=kl.subVectors(n,t).cross(c_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||l_.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ms=new ei,u_=new de(.5,.5),Uo=new C;class nd{constructor(e=new vs,t=new vs,n=new vs,s=new vs,r=new vs,a=new vs){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],g=r[9],x=r[10],p=r[11],M=r[12],v=r[13],S=r[14],w=r[15];if(s[0].setComponents(l-a,f-u,p-m,w-M).normalize(),s[1].setComponents(l+a,f+u,p+m,w+M).normalize(),s[2].setComponents(l+o,f+h,p+g,w+v).normalize(),s[3].setComponents(l-o,f-h,p-g,w-v).normalize(),n)s[4].setComponents(c,d,x,S).normalize(),s[5].setComponents(l-c,f-d,p-x,w-S).normalize();else if(s[4].setComponents(l-c,f-d,p-x,w-S).normalize(),t===jn)s[5].setComponents(l+c,f+d,p+x,w+S).normalize();else if(t===Sc)s[5].setComponents(c,d,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ms)}intersectsSprite(e){ms.center.set(0,0,0);const t=u_.distanceTo(e.center);return ms.radius=.7071067811865476+t,ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(ms)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Uo.x=s.normal.x>0?e.max.x:e.min.x,Uo.y=s.normal.y>0?e.max.y:e.min.y,Uo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Uo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vm extends Bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ec=new C,Ac=new C,Rf=new Ge,jr=new Xc,Fo=new ei,zl=new C,Pf=new C;class id extends bt{constructor(e=new jt,t=new Vm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ec.fromBufferAttribute(t,s-1),Ac.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ec.distanceTo(Ac);e.setAttribute("lineDistance",new Lt(n,1))}else be("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(s),Fo.radius+=r,e.ray.intersectsSphere(Fo)===!1)return;Rf.copy(s).invert(),jr.copy(e.ray).applyMatrix4(Rf);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=u.getX(g),M=u.getX(g+1),v=Oo(this,e,jr,c,p,M,g);v&&t.push(v)}if(this.isLineLoop){const g=u.getX(m-1),x=u.getX(f),p=Oo(this,e,jr,c,g,x,m-1);p&&t.push(p)}}else{const f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=f,x=m-1;g<x;g+=l){const p=Oo(this,e,jr,c,g,g+1,g);p&&t.push(p)}if(this.isLineLoop){const g=Oo(this,e,jr,c,m-1,f,m-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Oo(i,e,t,n,s,r,a){const o=i.geometry.attributes.position;if(Ec.fromBufferAttribute(o,s),Ac.fromBufferAttribute(o,r),t.distanceSqToSegment(Ec,Ac,zl,Pf)>n)return;zl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zl);if(!(l<e.near||l>e.far))return{distance:l,point:Pf.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const If=new C,Lf=new C;class h_ extends id{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)If.fromBufferAttribute(t,s),Lf.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+If.distanceTo(Lf);e.setAttribute("lineDistance",new Lt(n,1))}else be("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class d_ extends id{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Gm extends Bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Df=new Ge,eh=new Xc,Bo=new ei,ko=new C;class f_ extends bt{constructor(e=new jt,t=new Gm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(s),Bo.radius+=r,e.ray.intersectsSphere(Bo)===!1)return;Df.copy(s).invert(),eh.copy(e.ray).applyMatrix4(Df);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,g=f;m<g;m++){const x=l.getX(m);ko.fromBufferAttribute(h,x),Nf(ko,x,c,s,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,g=f;m<g;m++)ko.fromBufferAttribute(h,m),Nf(ko,m,c,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Nf(i,e,t,n,s,r,a){const o=eh.distanceSqToPoint(i);if(o<t){const c=new C;eh.closestPointToPoint(i,c),c.applyMatrix4(n);const l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class p_ extends Ft{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wm extends Ft{constructor(e,t,n=Cs,s,r,a,o=nn,c=nn,l,u=Na,h=1){if(u!==Na&&u!==Ua)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xm extends Ft{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class sd extends jt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],a=[],o=[],c=[],l=new C,u=new de;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Lt(a,3)),this.setAttribute("normal",new Lt(o,3)),this.setAttribute("uv",new Lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ti{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){be("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let s=0;const r=n.length;let a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const u=n[s],d=n[s+1]-u,f=(a-u)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new C);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new C,s=[],r=[],a=[],o=new C,c=new Ge;for(let f=0;f<=e;f++){const m=f/e;s[f]=this.getTangentAt(m,new C)}r[0]=new C,a[0]=new C;let l=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();const m=Math.acos($e(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,m))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos($e(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rd extends ti{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){const n=t,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+e*r;let c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*u-f*h+this.aX,l=d*h+f*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class m_ extends rd{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ad(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,u,h){let d=(a-r)/l-(o-r)/(l+u)+(o-a)/u,f=(o-a)/u-(c-a)/(u+h)+(c-o)/h;d*=u,f*=u,s(a,o,d,f)},calc:function(r){const a=r*r,o=a*r;return i+e*r+t*a+n*o}}}const zo=new C,Hl=new ad,Vl=new ad,Gl=new ad;class x_ extends ti{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){const n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,u;this.closed||o>0?l=s[(o-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),l=zo);const h=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=zo),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(h),f),g=Math.pow(h.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f);g<1e-4&&(g=1),m<1e-4&&(m=g),x<1e-4&&(x=g),Hl.initNonuniformCatmullRom(l.x,h.x,d.x,u.x,m,g,x),Vl.initNonuniformCatmullRom(l.y,h.y,d.y,u.y,m,g,x),Gl.initNonuniformCatmullRom(l.z,h.z,d.z,u.z,m,g,x)}else this.curveType==="catmullrom"&&(Hl.initCatmullRom(l.x,h.x,d.x,u.x,this.tension),Vl.initCatmullRom(l.y,h.y,d.y,u.y,this.tension),Gl.initCatmullRom(l.z,h.z,d.z,u.z,this.tension));return n.set(Hl.calc(c),Vl.calc(c),Gl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Uf(i,e,t,n,s){const r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function g_(i,e){const t=1-i;return t*t*e}function __(i,e){return 2*(1-i)*i*e}function v_(i,e){return i*i*e}function fa(i,e,t,n){return g_(i,e)+__(i,t)+v_(i,n)}function y_(i,e){const t=1-i;return t*t*t*e}function M_(i,e){const t=1-i;return 3*t*t*i*e}function b_(i,e){return 3*(1-i)*i*i*e}function S_(i,e){return i*i*i*e}function pa(i,e,t,n,s){return y_(i,e)+M_(i,t)+b_(i,n)+S_(i,s)}class Ym extends ti{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class T_ extends ti{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(pa(e,s.x,r.x,a.x,o.x),pa(e,s.y,r.y,a.y,o.y),pa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class qm extends ti{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class E_ extends ti{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $m extends ti{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A_ extends ti{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){const n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(fa(e,s.x,r.x,a.x),fa(e,s.y,r.y,a.y),fa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Km extends ti{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){const n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],u=s[a>s.length-2?s.length-1:a+1],h=s[a>s.length-3?s.length-1:a+2];return n.set(Uf(o,c.x,l.x,u.x,h.x),Uf(o,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new de().fromArray(s))}return this}}var Ff=Object.freeze({__proto__:null,ArcCurve:m_,CatmullRomCurve3:x_,CubicBezierCurve:Ym,CubicBezierCurve3:T_,EllipseCurve:rd,LineCurve:qm,LineCurve3:E_,QuadraticBezierCurve:$m,QuadraticBezierCurve3:A_,SplineCurve:Km});class w_ extends ti{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ff[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){const u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new Ff[s.type]().fromJSON(s))}return this}}class Of extends w_{constructor(e){super(),this.type="Path",this.currentPoint=new de,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new qm(this.currentPoint.clone(),new de(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const r=new $m(this.currentPoint.clone(),new de(e,t),new de(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){const o=new Ym(this.currentPoint.clone(),new de(e,t),new de(n,s),new de(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Km(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,c){const l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,s,r,a,o,c),this}absellipse(e,t,n,s,r,a,o,c){const l=new rd(e,t,n,s,r,a,o,c);if(this.curves.length>0){const h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);const u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jm extends Of{constructor(e){super(e),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const s=e.holes[t];this.holes.push(new Of().fromJSON(s))}return this}}function C_(i,e,t=2){const n=e&&e.length,s=n?e[0]*t:i.length;let r=Jm(i,0,s,t,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=D_(i,e,r,t)),i.length>80*t){o=i[0],c=i[1];let u=o,h=c;for(let d=t;d<s;d+=t){const f=i[d],m=i[d+1];f<o&&(o=f),m<c&&(c=m),f>u&&(u=f),m>h&&(h=m)}l=Math.max(u-o,h-c),l=l!==0?32767/l:0}return Ha(r,a,t,o,c,l,0),a}function Jm(i,e,t,n,s){let r;if(s===W_(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Bf(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Bf(a/n|0,i[a],i[a+1],r);return r&&br(r,r.next)&&(Ga(r),r=r.next),r}function Ps(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(br(t,t.next)||wt(t.prev,t,t.next)===0)){if(Ga(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ha(i,e,t,n,s,r,a){if(!i)return;!a&&r&&B_(i,n,s,r);let o=i;for(;i.prev!==i.next;){const c=i.prev,l=i.next;if(r?P_(i,n,s,r):R_(i)){e.push(c.i,i.i,l.i),Ga(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=I_(Ps(i),e),Ha(i,e,t,n,s,r,2)):a===2&&L_(i,e,t,n,s,r):Ha(Ps(i),e,t,n,s,r,1);break}}}function R_(i){const e=i.prev,t=i,n=i.next;if(wt(e,t,n)>=0)return!1;const s=e.x,r=t.x,a=n.x,o=e.y,c=t.y,l=n.y,u=Math.min(s,r,a),h=Math.min(o,c,l),d=Math.max(s,r,a),f=Math.max(o,c,l);let m=n.next;for(;m!==e;){if(m.x>=u&&m.x<=d&&m.y>=h&&m.y<=f&&oa(s,o,r,c,a,l,m.x,m.y)&&wt(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function P_(i,e,t,n){const s=i.prev,r=i,a=i.next;if(wt(s,r,a)>=0)return!1;const o=s.x,c=r.x,l=a.x,u=s.y,h=r.y,d=a.y,f=Math.min(o,c,l),m=Math.min(u,h,d),g=Math.max(o,c,l),x=Math.max(u,h,d),p=th(f,m,e,t,n),M=th(g,x,e,t,n);let v=i.prevZ,S=i.nextZ;for(;v&&v.z>=p&&S&&S.z<=M;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=x&&v!==s&&v!==a&&oa(o,u,c,h,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0||(v=v.prevZ,S.x>=f&&S.x<=g&&S.y>=m&&S.y<=x&&S!==s&&S!==a&&oa(o,u,c,h,l,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=g&&v.y>=m&&v.y<=x&&v!==s&&v!==a&&oa(o,u,c,h,l,d,v.x,v.y)&&wt(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;S&&S.z<=M;){if(S.x>=f&&S.x<=g&&S.y>=m&&S.y<=x&&S!==s&&S!==a&&oa(o,u,c,h,l,d,S.x,S.y)&&wt(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function I_(i,e){let t=i;do{const n=t.prev,s=t.next.next;!br(n,s)&&Qm(n,t,t.next,s)&&Va(n,s)&&Va(s,n)&&(e.push(n.i,t.i,s.i),Ga(t),Ga(t.next),t=i=s),t=t.next}while(t!==i);return Ps(t)}function L_(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&H_(a,o)){let c=e0(a,o);a=Ps(a,a.next),c=Ps(c,c.next),Ha(a,e,t,n,s,r,0),Ha(c,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function D_(i,e,t,n){const s=[];for(let r=0,a=e.length;r<a;r++){const o=e[r]*n,c=r<a-1?e[r+1]*n:i.length,l=Jm(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(z_(l))}s.sort(N_);for(let r=0;r<s.length;r++)t=U_(s[r],t);return t}function N_(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function U_(i,e){const t=F_(i,e);if(!t)return e;const n=e0(t,i);return Ps(n,n.next),Ps(t,t.next)}function F_(i,e){let t=e;const n=i.x,s=i.y;let r=-1/0,a;if(br(i,t))return t;do{if(br(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const h=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=n&&h>r&&(r=h,a=t.x<t.next.x?t:t.next,h===n))return a}t=t.next}while(t!==e);if(!a)return null;const o=a,c=a.x,l=a.y;let u=1/0;t=a;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Zm(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){const h=Math.abs(s-t.y)/(n-t.x);Va(t,i)&&(h<u||h===u&&(t.x>a.x||t.x===a.x&&O_(a,t)))&&(a=t,u=h)}t=t.next}while(t!==o);return a}function O_(i,e){return wt(i.prev,i,e.prev)<0&&wt(e.next,i,i.next)<0}function B_(i,e,t,n){let s=i;do s.z===0&&(s.z=th(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,k_(s)}function k_(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function th(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function z_(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Zm(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function oa(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Zm(i,e,t,n,s,r,a,o)}function H_(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!V_(i,e)&&(Va(i,e)&&Va(e,i)&&G_(i,e)&&(wt(i.prev,i,e.prev)||wt(i,e.prev,e))||br(i,e)&&wt(i.prev,i,i.next)>0&&wt(e.prev,e,e.next)>0)}function wt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function br(i,e){return i.x===e.x&&i.y===e.y}function Qm(i,e,t,n){const s=Vo(wt(i,e,t)),r=Vo(wt(i,e,n)),a=Vo(wt(t,n,i)),o=Vo(wt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ho(i,t,e)||r===0&&Ho(i,n,e)||a===0&&Ho(t,i,n)||o===0&&Ho(t,e,n))}function Ho(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Vo(i){return i>0?1:i<0?-1:0}function V_(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Qm(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Va(i,e){return wt(i.prev,i,i.next)<0?wt(i,e,i.next)>=0&&wt(i,i.prev,e)>=0:wt(i,e,i.prev)<0||wt(i,i.next,e)<0}function G_(i,e){let t=i,n=!1;const s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function e0(i,e){const t=nh(i.i,i.x,i.y),n=nh(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Bf(i,e,t,n){const s=nh(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ga(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nh(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function W_(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class X_{static triangulate(e,t,n=2){return C_(e,t,n)}}class ma{static area(e){const t=e.length;let n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return ma.area(e)<0}static triangulateShape(e,t){const n=[],s=[],r=[];kf(e),zf(n,e);let a=e.length;t.forEach(kf);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,zf(n,t[c]);const o=X_.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function kf(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function zf(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class os extends jt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=e/o,d=t/c,f=[],m=[],g=[],x=[];for(let p=0;p<u;p++){const M=p*d-a;for(let v=0;v<l;v++){const S=v*h-r;m.push(S,-M,0),g.push(0,0,1),x.push(v/o),x.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const v=M+l*p,S=M+l*(p+1),w=M+1+l*(p+1),E=M+1+l*p;f.push(v,S,E),f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(g,3)),this.setAttribute("uv",new Lt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new os(e.width,e.height,e.widthSegments,e.heightSegments)}}class Za extends jt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],c=[],l=[],u=[];let h=e;const d=(t-e)/s,f=new C,m=new de;for(let g=0;g<=s;g++){for(let x=0;x<=n;x++){const p=r+x/n*a;f.x=h*Math.cos(p),f.y=h*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/t+1)/2,m.y=(f.y/t+1)/2,u.push(m.x,m.y)}h+=d}for(let g=0;g<s;g++){const x=g*(n+1);for(let p=0;p<n;p++){const M=p+x,v=M,S=M+n+1,w=M+n+2,E=M+1;o.push(v,S,E),o.push(S,w,E)}}this.setIndex(o),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(l,3)),this.setAttribute("uv",new Lt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class od extends jt{constructor(e=new jm([new de(0,.5),new de(-.5,-.5),new de(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],s=[],r=[],a=[];let o=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let u=0;u<e.length;u++)l(e[u]),this.addGroup(o,c,u),o+=c,c=0;this.setIndex(n),this.setAttribute("position",new Lt(s,3)),this.setAttribute("normal",new Lt(r,3)),this.setAttribute("uv",new Lt(a,2));function l(u){const h=s.length/3,d=u.extractPoints(t);let f=d.shape;const m=d.holes;ma.isClockWise(f)===!1&&(f=f.reverse());for(let x=0,p=m.length;x<p;x++){const M=m[x];ma.isClockWise(M)===!0&&(m[x]=M.reverse())}const g=ma.triangulateShape(f,m);for(let x=0,p=m.length;x<p;x++){const M=m[x];f=f.concat(M)}for(let x=0,p=f.length;x<p;x++){const M=f[x];s.push(M.x,M.y,0),r.push(0,0,1),a.push(M.x,M.y)}for(let x=0,p=g.length;x<p;x++){const M=g[x],v=M[0]+h,S=M[1]+h,w=M[2]+h;n.push(v,S,w),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Y_(t,e)}static fromJSON(e,t){const n=[];for(let s=0,r=e.shapes.length;s<r;s++){const a=t[e.shapes[s]];n.push(a)}return new od(n,e.curveSegments)}}function Y_(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}class cd extends jt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new C,d=new C,f=[],m=[],g=[],x=[];for(let p=0;p<=n;p++){const M=[],v=p/n;let S=0;p===0&&a===0?S=.5/t:p===n&&c===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const E=w/t;h.x=-e*Math.cos(s+E*r)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(s+E*r)*Math.sin(a+v*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),g.push(d.x,d.y,d.z),x.push(E+S,1-v),M.push(l++)}u.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const v=u[p][M+1],S=u[p][M],w=u[p+1][M],E=u[p+1][M+1];(p!==0||a>0)&&f.push(v,S,E),(p!==n-1||c<Math.PI)&&f.push(S,w,E)}this.setIndex(f),this.setAttribute("position",new Lt(m,3)),this.setAttribute("normal",new Lt(g,3)),this.setAttribute("uv",new Lt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qa extends Bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=wm,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ni extends Qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Oe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Oe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Oe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class q_ extends Bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ig,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class $_ extends Bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Go(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function K_(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function j_(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Hf(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function t0(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}class eo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break t}a=t.length;break n}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class J_ extends eo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sr:r=e,o=2*t-n;break;case Mc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sr:a=e,c=2*n-t;break;case Mc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),g=m*m,x=g*m,p=-d*x+2*d*g-d*m,M=(1+d)*x+(-1.5-2*d)*g+(-.5+d)*m+1,v=(-1-f)*x+(1.5+f)*g+.5*m,S=f*x-f*g;for(let w=0;w!==o;++w)r[w]=p*a[u+w]+M*a[l+w]+v*a[c+w]+S*a[h+w];return r}}class n0 extends eo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(s-t),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}}class Z_ extends eo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Z_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new n0(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new J_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fa:t=this.InterpolantFactoryMethodDiscrete;break;case Oa:t=this.InterpolantFactoryMethodLinear;break;case pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return be("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fa;case this.InterpolantFactoryMethodLinear:return Oa;case this.InterpolantFactoryMethodSmooth:return pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){Ke("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ke("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&K_(s))for(let o=0,c=s.length;o!==c;++o){const l=s[o];if(isNaN(l)){Ke("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(s)c=!0;else{const h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){const g=t[h+m];if(g!==t[d+m]||g!==t[f+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Hn.prototype.ValueTypeName="";Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=Oa;class Lr extends Hn{constructor(e,t,n){super(e,t,n)}}Lr.prototype.ValueTypeName="bool";Lr.prototype.ValueBufferType=Array;Lr.prototype.DefaultInterpolation=Fa;Lr.prototype.InterpolantFactoryMethodLinear=void 0;Lr.prototype.InterpolantFactoryMethodSmooth=void 0;class i0 extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}i0.prototype.ValueTypeName="color";class Sr extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Sr.prototype.ValueTypeName="number";class Q_ extends eo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t);let l=e*o;for(let u=l+o;l!==u;l+=4)vn.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Tr extends Hn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Q_(this.times,this.values,this.getValueSize(),e)}}Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class Dr extends Hn{constructor(e,t,n){super(e,t,n)}}Dr.prototype.ValueTypeName="string";Dr.prototype.ValueBufferType=Array;Dr.prototype.DefaultInterpolation=Fa;Dr.prototype.InterpolantFactoryMethodLinear=void 0;Dr.prototype.InterpolantFactoryMethodSmooth=void 0;class Er extends Hn{constructor(e,t,n,s){super(e,t,n,s)}}Er.prototype.ValueTypeName="vector";class ih{constructor(e="",t=-1,n=[],s=Jh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(tv(n[a]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(Hn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=j_(c);c=Hf(c,1,u),l=Hf(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Sr(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=s[h];d||(s[h]=d=[]),d.push(l)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}static parseAnimation(e,t){if(be("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ke("AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,m,g){if(f.length!==0){const x=[],p=[];t0(f,x,p,m),x.length!==0&&g.push(new h(d,x,p))}},s=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const x=[],p=[];for(let M=0;M!==d[m].morphTargets.length;++M){const v=d[m];x.push(v.time),p.push(v.morphTarget===g?1:0)}s.push(new Sr(".morphTargetInfluence["+g+"]",x,p))}c=f.length*a}else{const f=".bones["+t[h].name+"]";n(Er,f+".position",d,"pos",s),n(Tr,f+".quaternion",d,"rot",s),n(Er,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,c,s,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function ev(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Sr;case"vector":case"vector2":case"vector3":case"vector4":return Er;case"color":return i0;case"quaternion":return Tr;case"bool":case"boolean":return Lr;case"string":return Dr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function tv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ev(i.type);if(i.times===void 0){const t=[],n=[];t0(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class nv{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const iv=new nv;class Nr{constructor(e){this.manager=e!==void 0?e:iv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Nr.DEFAULT_MATERIAL_NAME="__DEFAULT";const li={};class sv extends Error{constructor(e,t){super(e),this.response=t}}class s0 extends Nr{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(li[e]!==void 0){li[e].push({onLoad:t,onProgress:n,onError:s});return}li[e]=[],li[e].push({onLoad:t,onProgress:n,onError:s});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&be("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=li[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0;let g=0;const x=new ReadableStream({start(p){M();function M(){h.read().then(({done:v,value:S})=>{if(v)p.close();else{g+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let E=0,I=u.length;E<I;E++){const F=u[E];F.onProgress&&F.onProgress(w)}p.enqueue(S),M()}},v=>{p.error(v)})}}});return new Response(x)}else throw new sv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{vi.add(`file:${e}`,l);const u=li[e];delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{const u=li[e];if(u===void 0)throw this.manager.itemError(e),l;delete li[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Qs=new WeakMap;class rv extends Nr{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let h=Qs.get(a);h===void 0&&(h=[],Qs.set(a,h)),h.push({onLoad:t,onError:s})}return a}const o=Ba("img");function c(){u(),t&&t(this);const h=Qs.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Qs.delete(this),r.manager.itemEnd(e)}function l(h){u(),s&&s(h),vi.remove(`image:${e}`);const d=Qs.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Qs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),vi.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class r0 extends Nr{constructor(e){super(e)}load(e,t,n,s){const r=new Ft,a=new rv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Yc extends bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Wl=new Ge,Vf=new C,Gf=new C;class ld{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=Jn,this.map=null,this.mapPass=null,this.matrix=new Ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nd,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Vf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vf),Gf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gf),t.updateMatrixWorld(),Wl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wl,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Wl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class av extends ld{constructor(){super(new ln(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=yr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ov extends Yc{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new av}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wf=new Ge,Jr=new C,Xl=new C;class cv extends ld{constructor(){super(new ln(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new de(4,2),this._viewportCount=6,this._viewports=[new lt(2,1,1,1),new lt(0,1,1,1),new lt(3,1,1,1),new lt(1,1,1,1),new lt(3,0,1,1),new lt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Jr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Jr),Xl.copy(n.position),Xl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Xl),n.updateMatrixWorld(),s.makeTranslation(-Jr.x,-Jr.y,-Jr.z),Wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf,n.coordinateSystem,n.reversedDepth)}}class lv extends Yc{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new cv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class qc extends Fm{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class uv extends ld{constructor(){super(new qc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends Yc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new uv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class hv extends Yc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class xa{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Yl=new WeakMap;class dv extends Nr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&be("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&be("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=vi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{if(Yl.has(a)===!0)s&&s(Yl.get(a)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(l),r.manager.itemEnd(e),l});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return vi.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Yl.set(c,l),vi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});vi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class fv extends ln{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class pv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class mv{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,a;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const c=t*this._origIndex;this._mixBufferRegion(n,s,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){o.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,a=s;r!==a;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)e[t+a]=e[n+a]}_slerp(e,t,n,s){vn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const a=this._workIndex*r;vn.multiplyQuaternionsFlat(e,a,e,t,e,n),vn.slerpFlat(e,t,e,t,e,a,s)}_lerp(e,t,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const c=t+o;e[c]=e[c]*a+e[n+o]*s}}_lerpAdditive(e,t,n,s,r){for(let a=0;a!==r;++a){const o=t+a;e[o]=e[o]+e[n+a]*s}}}const ud="\\[\\]\\.:\\/",xv=new RegExp("["+ud+"]","g"),hd="[^"+ud+"]",gv="[^"+ud.replace("\\.","")+"]",_v=/((?:WC+[\/:])*)/.source.replace("WC",hd),vv=/(WCOD+)?/.source.replace("WCOD",gv),yv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hd),Mv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hd),bv=new RegExp("^"+_v+vv+yv+Mv+"$"),Sv=["material","materials","bones","map"];class Tv{constructor(e,t,n){const s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class ut{constructor(e,t,n){this.path=t,this.parsedPath=n||ut.parseTrackName(t),this.node=ut.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new ut.Composite(e,t,n):new ut(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xv,"")}static parseTrackName(e){const t=bv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);Sv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=ut.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){be("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[s];if(a===void 0){const l=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ut.Composite=Tv;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Ev{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ir,endingEnd:ir};for(let l=0;l!==a;++l){const u=r[l].createInterpolant(null);o[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Qx,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){const s=this._clip.duration,r=e._clip.duration,a=r/s,o=s/r;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/a,l[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case tg:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulateAdditive(o);break;case Jh:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(a),l[u].accumulate(s,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const a=n===eg;if(e===0)return r===-1?s:a&&(r&1)===1?t-s:s;if(n===jh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=t||s<0){const o=Math.floor(s/t);s-=t*o,r+=Math.abs(o);const c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){const l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=sr,s.endingEnd=sr):(e?s.endingStart=this.zeroSlopeAtStart?sr:ir:s.endingStart=Mc,t?s.endingEnd=this.zeroSlopeAtEnd?sr:ir:s.endingEnd=Mc)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=n,this}}const Av=new Float32Array(1);class o0 extends Ls{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,a=e._propertyBindings,o=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName;let u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){const d=s[h],f=d.name;let m=u[f];if(m!==void 0)++m.referenceCount,a[h]=m;else{if(m=a[h],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,c,f));continue}const g=t&&t._propertyBindings[h].binding.parsedPath;m=new mv(ut.create(n,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,c,f),a[h]=m}o[h].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=s.length,s.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[t];a===void 0&&(a={},s[t]=a),a[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new n0(new Float32Array(2),new Float32Array(2),1,Av),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let a=typeof e=="string"?ih.findByName(s,e):e;const o=a!==null?a.uuid:e,c=this._actionsByClip[o];let l=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jh),c!==void 0){const h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;const u=new Ev(this,a,t,n);return this._bindAction(u,l),this._addInactiveAction(u,o,r),u}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?ih.findByName(n,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(s,e,r,a);const o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){const l=a[o];this._deactivateAction(l);const u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}function Xf(i,e,t,n){const s=wv(n);switch(t){case Tm:return i*e;case Xh:return i*e/s.components*s.byteLength;case Yh:return i*e/s.components*s.byteLength;case qh:return i*e*2/s.components*s.byteLength;case $h:return i*e*2/s.components*s.byteLength;case Em:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case Kh:return i*e*4/s.components*s.byteLength;case sc:case rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ac:case oc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Su:case Eu:return Math.max(i,16)*Math.max(e,8)/4;case bu:case Tu:return Math.max(i,8)*Math.max(e,8)/2;case Au:case wu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ru:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Lu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Du:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ou:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ku:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case zu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Gu:case Wu:case Xu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Yu:case qu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $u:case Ku:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wv(i){switch(i){case Jn:case ym:return{byteLength:1,components:1};case La:case Mm:case Ir:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case Cs:case Vh:case On:return{byteLength:4,components:1};case bm:case Sm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hh}}));typeof window<"u"&&(window.__THREE__?be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hh);function c0(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Cv(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],g=h[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,h[d]=g)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const g=h[f];i.bufferSubData(l,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Rv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pv=`#ifdef USE_ALPHAHASH
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
#endif`,Iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
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
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
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
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vv=`#ifdef USE_IRIDESCENCE
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
#endif`,Gv=`#ifdef USE_BUMPMAP
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
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Zv=`#define PI 3.141592653589793
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
} // validated`,Qv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ey=`vec3 transformedNormal = objectNormal;
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
#endif`,ty=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ny=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,iy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ry="gl_FragColor = linearToOutputTexel( gl_FragColor );",ay=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,oy=`#ifdef USE_ENVMAP
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
#endif`,cy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ly=`#ifdef USE_ENVMAP
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
#endif`,uy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hy=`#ifdef USE_ENVMAP
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
#endif`,dy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,py=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,my=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xy=`#ifdef USE_GRADIENTMAP
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
}`,gy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_y=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yy=`uniform bool receiveShadow;
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
#endif`,My=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,by=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ty=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ay=`PhysicalMaterial material;
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
#endif`,wy=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
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
}`,Cy=`
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
#endif`,Ry=`#if defined( RE_IndirectDiffuse )
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
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Iy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ly=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ny=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Uy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Oy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,By=`#if defined( USE_POINTS_UV )
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
#endif`,ky=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wy=`#ifdef USE_MORPHTARGETS
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
#endif`,Xy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$y=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jy=`#ifdef USE_NORMALMAP
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
#endif`,Zy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,sM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,lM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
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
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fM=`float getShadowMask() {
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,SM=`#ifdef USE_TRANSMISSION
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RM=`uniform sampler2D t2D;
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NM=`#include <common>
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
}`,UM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,FM=`#define DISTANCE
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
}`,OM=`#define DISTANCE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`uniform float scale;
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
}`,HM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#define LAMBERT
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
}`,XM=`#define LAMBERT
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
}`,YM=`#define MATCAP
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
}`,qM=`#define MATCAP
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
}`,$M=`#define NORMAL
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
}`,KM=`#define NORMAL
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
}`,jM=`#define PHONG
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
}`,JM=`#define PHONG
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
}`,ZM=`#define STANDARD
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
}`,QM=`#define STANDARD
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
}`,eb=`#define TOON
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
}`,tb=`#define TOON
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
}`,nb=`uniform float size;
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
}`,ib=`uniform vec3 diffuse;
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
}`,sb=`#include <common>
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
}`,rb=`uniform vec3 color;
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
}`,ab=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,ob=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Rv,alphahash_pars_fragment:Pv,alphamap_fragment:Iv,alphamap_pars_fragment:Lv,alphatest_fragment:Dv,alphatest_pars_fragment:Nv,aomap_fragment:Uv,aomap_pars_fragment:Fv,batching_pars_vertex:Ov,batching_vertex:Bv,begin_vertex:kv,beginnormal_vertex:zv,bsdfs:Hv,iridescence_fragment:Vv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:qv,color_fragment:$v,color_pars_fragment:Kv,color_pars_vertex:jv,color_vertex:Jv,common:Zv,cube_uv_reflection_fragment:Qv,defaultnormal_vertex:ey,displacementmap_pars_vertex:ty,displacementmap_vertex:ny,emissivemap_fragment:iy,emissivemap_pars_fragment:sy,colorspace_fragment:ry,colorspace_pars_fragment:ay,envmap_fragment:oy,envmap_common_pars_fragment:cy,envmap_pars_fragment:ly,envmap_pars_vertex:uy,envmap_physical_pars_fragment:My,envmap_vertex:hy,fog_vertex:dy,fog_pars_vertex:fy,fog_fragment:py,fog_pars_fragment:my,gradientmap_pars_fragment:xy,lightmap_pars_fragment:gy,lights_lambert_fragment:_y,lights_lambert_pars_fragment:vy,lights_pars_begin:yy,lights_toon_fragment:by,lights_toon_pars_fragment:Sy,lights_phong_fragment:Ty,lights_phong_pars_fragment:Ey,lights_physical_fragment:Ay,lights_physical_pars_fragment:wy,lights_fragment_begin:Cy,lights_fragment_maps:Ry,lights_fragment_end:Py,logdepthbuf_fragment:Iy,logdepthbuf_pars_fragment:Ly,logdepthbuf_pars_vertex:Dy,logdepthbuf_vertex:Ny,map_fragment:Uy,map_pars_fragment:Fy,map_particle_fragment:Oy,map_particle_pars_fragment:By,metalnessmap_fragment:ky,metalnessmap_pars_fragment:zy,morphinstance_vertex:Hy,morphcolor_vertex:Vy,morphnormal_vertex:Gy,morphtarget_pars_vertex:Wy,morphtarget_vertex:Xy,normal_fragment_begin:Yy,normal_fragment_maps:qy,normal_pars_fragment:$y,normal_pars_vertex:Ky,normal_vertex:jy,normalmap_pars_fragment:Jy,clearcoat_normal_fragment_begin:Zy,clearcoat_normal_fragment_maps:Qy,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:sM,project_vertex:rM,dithering_fragment:aM,dithering_pars_fragment:oM,roughnessmap_fragment:cM,roughnessmap_pars_fragment:lM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:hM,shadowmap_vertex:dM,shadowmask_pars_fragment:fM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:xM,skinnormal_vertex:gM,specularmap_fragment:_M,specularmap_pars_fragment:vM,tonemapping_fragment:yM,tonemapping_pars_fragment:MM,transmission_fragment:bM,transmission_pars_fragment:SM,uv_pars_fragment:TM,uv_pars_vertex:EM,uv_vertex:AM,worldpos_vertex:wM,background_vert:CM,background_frag:RM,backgroundCube_vert:PM,backgroundCube_frag:IM,cube_vert:LM,cube_frag:DM,depth_vert:NM,depth_frag:UM,distanceRGBA_vert:FM,distanceRGBA_frag:OM,equirect_vert:BM,equirect_frag:kM,linedashed_vert:zM,linedashed_frag:HM,meshbasic_vert:VM,meshbasic_frag:GM,meshlambert_vert:WM,meshlambert_frag:XM,meshmatcap_vert:YM,meshmatcap_frag:qM,meshnormal_vert:$M,meshnormal_frag:KM,meshphong_vert:jM,meshphong_frag:JM,meshphysical_vert:ZM,meshphysical_frag:QM,meshtoon_vert:eb,meshtoon_frag:tb,points_vert:nb,points_frag:ib,shadow_vert:sb,shadow_frag:rb,sprite_vert:ab,sprite_frag:ob},le={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},qn={basic:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:Qt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:Qt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:Qt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Oe(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:Qt([le.points,le.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:Qt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:Qt([le.common,le.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:Qt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:Qt([le.sprite,le.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distanceRGBA:{uniforms:Qt([le.common,le.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distanceRGBA_vert,fragmentShader:Xe.distanceRGBA_frag},shadow:{uniforms:Qt([le.lights,le.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};qn.physical={uniforms:Qt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Wo={r:0,b:0,g:0},xs=new zn,cb=new Ge;function lb(i,e,t,n,s,r,a){const o=new Oe(0);let c=r===!0?0:1,l,u,h=null,d=0,f=null;function m(v){let S=v.isScene===!0?v.background:null;return S&&S.isTexture&&(S=(v.backgroundBlurriness>0?t:e).get(S)),S}function g(v){let S=!1;const w=m(v);w===null?p(o,c):w&&w.isColor&&(p(w,1),S=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,S){const w=m(S);w&&(w.isCubeTexture||w.mapping===Wc)?(u===void 0&&(u=new Bt(new Ja(1,1,1),new Ei({name:"BackgroundCubeMaterial",uniforms:Mr(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,I,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),xs.copy(S.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(cb.makeRotationFromEuler(xs)),u.material.toneMapped=it.getTransfer(w.colorSpace)!==mt,(h!==w||d!==w.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new Bt(new os(2,2),new Ei({name:"BackgroundMaterial",uniforms:Mr(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=it.getTransfer(w.colorSpace)!==mt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=w,d=w.version,f=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Wo,Um(i)),n.buffers.color.setClear(Wo.r,Wo.g,Wo.b,S,a)}function M(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),c=S,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,p(o,c)},render:g,addToRenderList:x,dispose:M}}function ub(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(b,L,k,H,X){let J=!1;const $=h(H,k,L);r!==$&&(r=$,l(r.object)),J=f(b,H,k,X),J&&m(b,H,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,S(b,L,k,H),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(b){return i.bindVertexArray(b)}function u(b){return i.deleteVertexArray(b)}function h(b,L,k){const H=k.wireframe===!0;let X=n[b.id];X===void 0&&(X={},n[b.id]=X);let J=X[L.id];J===void 0&&(J={},X[L.id]=J);let $=J[H];return $===void 0&&($=d(c()),J[H]=$),$}function d(b){const L=[],k=[],H=[];for(let X=0;X<t;X++)L[X]=0,k[X]=0,H[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:H,object:b,attributes:{},index:null}}function f(b,L,k,H){const X=r.attributes,J=L.attributes;let $=0;const re=k.getAttributes();for(const W in re)if(re[W].location>=0){const ce=X[W];let we=J[W];if(we===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(we=b.instanceColor)),ce===void 0||ce.attribute!==we||we&&ce.data!==we.data)return!0;$++}return r.attributesNum!==$||r.index!==H}function m(b,L,k,H){const X={},J=L.attributes;let $=0;const re=k.getAttributes();for(const W in re)if(re[W].location>=0){let ce=J[W];ce===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(ce=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(ce=b.instanceColor));const we={};we.attribute=ce,ce&&ce.data&&(we.data=ce.data),X[W]=we,$++}r.attributes=X,r.attributesNum=$,r.index=H}function g(){const b=r.newAttributes;for(let L=0,k=b.length;L<k;L++)b[L]=0}function x(b){p(b,0)}function p(b,L){const k=r.newAttributes,H=r.enabledAttributes,X=r.attributeDivisors;k[b]=1,H[b]===0&&(i.enableVertexAttribArray(b),H[b]=1),X[b]!==L&&(i.vertexAttribDivisor(b,L),X[b]=L)}function M(){const b=r.newAttributes,L=r.enabledAttributes;for(let k=0,H=L.length;k<H;k++)L[k]!==b[k]&&(i.disableVertexAttribArray(k),L[k]=0)}function v(b,L,k,H,X,J,$){$===!0?i.vertexAttribIPointer(b,L,k,X,J):i.vertexAttribPointer(b,L,k,H,X,J)}function S(b,L,k,H){g();const X=H.attributes,J=k.getAttributes(),$=L.defaultAttributeValues;for(const re in J){const W=J[re];if(W.location>=0){let se=X[re];if(se===void 0&&(re==="instanceMatrix"&&b.instanceMatrix&&(se=b.instanceMatrix),re==="instanceColor"&&b.instanceColor&&(se=b.instanceColor)),se!==void 0){const ce=se.normalized,we=se.itemSize,nt=e.get(se);if(nt===void 0)continue;const dt=nt.buffer,_t=nt.type,vt=nt.bytesPerElement,q=_t===i.INT||_t===i.UNSIGNED_INT||se.gpuType===Vh;if(se.isInterleavedBufferAttribute){const Q=se.data,xe=Q.stride,He=se.offset;if(Q.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)p(W.location+Se,Q.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<W.locationSize;Se++)x(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Se=0;Se<W.locationSize;Se++)v(W.location+Se,we/W.locationSize,_t,ce,xe*vt,(He+we/W.locationSize*Se)*vt,q)}else{if(se.isInstancedBufferAttribute){for(let Q=0;Q<W.locationSize;Q++)p(W.location+Q,se.meshPerAttribute);b.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Q=0;Q<W.locationSize;Q++)x(W.location+Q);i.bindBuffer(i.ARRAY_BUFFER,dt);for(let Q=0;Q<W.locationSize;Q++)v(W.location+Q,we/W.locationSize,_t,ce,we*vt,we/W.locationSize*Q*vt,q)}}else if($!==void 0){const ce=$[re];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(W.location,ce);break;case 3:i.vertexAttrib3fv(W.location,ce);break;case 4:i.vertexAttrib4fv(W.location,ce);break;default:i.vertexAttrib1fv(W.location,ce)}}}}M()}function w(){F();for(const b in n){const L=n[b];for(const k in L){const H=L[k];for(const X in H)u(H[X].object),delete H[X];delete L[k]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const L=n[b.id];for(const k in L){const H=L[k];for(const X in H)u(H[X].object),delete H[X];delete L[k]}delete n[b.id]}function I(b){for(const L in n){const k=n[L];if(k[b.id]===void 0)continue;const H=k[b.id];for(const X in H)u(H[X].object),delete H[X];delete k[b.id]}}function F(){T(),a=!0,r!==s&&(r=s,l(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:T,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfProgram:I,initAttributes:g,enableAttribute:x,disableUnusedAttributes:M}}function hb(i,e,t){let n;function s(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(i.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function c(l,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)a(l[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*d[g];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function db(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==An&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){const F=I===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Jn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==On&&!F)}function c(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(be("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:w,maxSamples:E}}function fb(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new vs,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,g=h.clipIntersection,x=h.clipShadows,p=i.get(h);if(!s||m===null||m.length===0||r&&!x)r?u(null):l();else{const M=r?0:n,v=M*4;let S=p.clippingState||null;c.value=S,S=u(m,d,v,f);for(let w=0;w!==v;++w)S[w]=t[w];p.clippingState=S,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const g=h!==null?h.length:0;let x=null;if(g!==0){if(x=c.value,m!==!0||x===null){const p=f+g*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(x===null||x.length<p)&&(x=new Float32Array(p));for(let v=0,S=f;v!==g;++v,S+=4)a.copy(h[v]).applyMatrix4(M,o),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}}function pb(i){let e=new WeakMap;function t(a,o){return o===yu?a.mapping=_r:o===Mu&&(a.mapping=vr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===yu||o===Mu)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Qg(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const Hi=4,Yf=[.125,.215,.35,.446,.526,.582],Ms=20,mb=256,Zr=new qc,qf=new Oe;let ql=null,$l=0,Kl=0,jl=!1;const xb=new C;class $f{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=xb}=r;ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,$l,Kl),this._renderer.xr.enabled=jl,e.scissorTest=!1,er(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_r||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Ir,format:An,colorSpace:an,depthBuffer:!1},s=Kf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kf(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=gb(r)),this._blurMaterial=vb(r,e,t),this._ggxMaterial=_b(r,e,t)}return s}_compileMaterial(e){const t=new Bt(new jt,e);this._renderer.compile(t,Zr)}_sceneToCubeUV(e,t,n,s,r){const c=new ln(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(qf),h.toneMapping=qi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bt(new Ja,new Kt({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,x=g.material;let p=!1;const M=e.background;M?M.isColor&&(x.color.copy(M),e.background=null,p=!0):(x.color.copy(qf),p=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[v],r.y,r.z)):S===1?(c.up.set(0,0,l[v]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[v],r.z)):(c.up.set(0,l[v],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[v]));const w=this._cubeSize;er(s,S*w,v>2?w:0,w,w),h.setRenderTarget(s),p&&h.render(g,c),h.render(e,c)}h.toneMapping=f,h.autoClear=d,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===_r||e.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jf());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;er(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=.05+l*.95,f=h*d,{_lodMax:m}=this,g=this._sizeLods[n],x=3*g*(n>m-Hi?n-m+Hi:0),p=4*(this._cubeSize-g);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=m-t,er(r,x,p,3*g,2*g),s.setRenderTarget(r),s.render(o,Zr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,er(e,x,p,3*g,2*g),s.setRenderTarget(e),s.render(o,Zr)}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ke("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[s];h.material=l;const d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ms-1),g=r/m,x=isFinite(r)?1+Math.floor(u*g):Ms;x>Ms&&be(`sigmaRadians, ${r}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ms}`);const p=[];let M=0;for(let I=0;I<Ms;++I){const F=I/g,T=Math.exp(-F*F/2);p.push(T),I===0?M+=T:I<x&&(M+=2*T)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const S=this._sizeLods[s],w=3*S*(s>v-Hi?s-v+Hi:0),E=4*(this._cubeSize-S);er(t,w,E,3*S,2*S),c.setRenderTarget(t),c.render(h,Zr)}}function gb(i){const e=[],t=[],n=[];let s=i;const r=i-Hi+1+Yf.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Hi?c=Yf[a-i+Hi-1]:a===0&&(c=0),t.push(c);const l=1/(o-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,g=3,x=2,p=1,M=new Float32Array(g*m*f),v=new Float32Array(x*m*f),S=new Float32Array(p*m*f);for(let E=0;E<f;E++){const I=E%3*2/3-1,F=E>2?0:-1,T=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];M.set(T,g*m*E),v.set(d,x*m*E);const b=[E,E,E,E,E,E];S.set(b,p*m*E)}const w=new jt;w.setAttribute("position",new sn(M,g)),w.setAttribute("uv",new sn(v,x)),w.setAttribute("faceIndex",new sn(S,p)),n.push(new Bt(w,null)),s>Hi&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Kf(i,e,t){const n=new Rs(i,e,t);return n.texture.mapping=Wc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function er(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function _b(i,e,t){return new Ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$c(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function vb(i,e,t){const n=new Float32Array(Ms),s=new C(0,1,0);return new Ei({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function jf(){return new Ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$c(),fragmentShader:`

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
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Jf(){return new Ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$c(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function $c(){return`

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
	`}function yb(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===yu||c===Mu,u=c===_r||c===vr;if(l||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new $f(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return l&&f&&f.height>0||u&&f&&s(f)?(t===null&&(t=new $f(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function s(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ka("WebGLRenderer: "+n+" extension not supported."),s}}}function bb(i,e,t,n){const s={},r=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const f in d)e.update(d[f],i.ARRAY_BUFFER)}function l(h){const d=[],f=h.index,m=h.attributes.position;let g=0;if(f!==null){const M=f.array;g=f.version;for(let v=0,S=M.length;v<S;v+=3){const w=M[v+0],E=M[v+1],I=M[v+2];d.push(w,E,E,I,I,w)}}else if(m!==void 0){const M=m.array;g=m.version;for(let v=0,S=M.length/3-1;v<S;v+=3){const w=v+0,E=v+1,I=v+2;d.push(w,E,E,I,I,w)}}else return;const x=new(Rm(d)?Nm:Dm)(d,1);x.version=g;const p=r.get(h);p&&e.remove(p),r.set(h,x)}function u(h){const d=r.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Sb(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*a),t.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}function h(d,f,m,g){if(m===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],g[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*g[M];t.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Tb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Eb(i,e,t){const n=new WeakMap,s=new lt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let T=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let v=0;f===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let S=o.attributes.position.count*v,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const E=new Float32Array(S*w*4*h),I=new Pm(E,S,w,h);I.type=On,I.needsUpdate=!0;const F=v*4;for(let b=0;b<h;b++){const L=x[b],k=p[b],H=M[b],X=S*w*4*b;for(let J=0;J<L.count;J++){const $=J*F;f===!0&&(s.fromBufferAttribute(L,J),E[X+$+0]=s.x,E[X+$+1]=s.y,E[X+$+2]=s.z,E[X+$+3]=0),m===!0&&(s.fromBufferAttribute(k,J),E[X+$+4]=s.x,E[X+$+5]=s.y,E[X+$+6]=s.z,E[X+$+7]=0),g===!0&&(s.fromBufferAttribute(H,J),E[X+$+8]=s.x,E[X+$+9]=s.y,E[X+$+10]=s.z,E[X+$+11]=H.itemSize===4?s.w:1)}}d={count:h,texture:I,size:new de(S,w)},n.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let g=0;g<l.length;g++)f+=l[g];const m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Ab(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(s.get(h)!==l&&(e.update(h),s.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return h}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}const l0=new Ft,Zf=new Wm(1,1),u0=new Pm,h0=new Fg,d0=new Om,Qf=[],ep=[],tp=new Float32Array(16),np=new Float32Array(9),ip=new Float32Array(4);function Ur(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Qf[s];if(r===void 0&&(r=new Float32Array(s),Qf[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Kc(i,e){let t=ep[e];t===void 0&&(t=new Int32Array(e),ep[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function wb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function Ib(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;ip.set(n),i.uniformMatrix2fv(this.addr,!1,ip),zt(t,n)}}function Lb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;np.set(n),i.uniformMatrix3fv(this.addr,!1,np),zt(t,n)}}function Db(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(kt(t,n))return;tp.set(n),i.uniformMatrix4fv(this.addr,!1,tp),zt(t,n)}}function Nb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ub(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Fb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Ob(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function Bb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function zb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function Hb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function Vb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zf.compareFunction=Cm,r=Zf):r=l0,t.setTexture2D(e||r,s)}function Gb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||h0,s)}function Wb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||d0,s)}function Xb(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||u0,s)}function Yb(i){switch(i){case 5126:return wb;case 35664:return Cb;case 35665:return Rb;case 35666:return Pb;case 35674:return Ib;case 35675:return Lb;case 35676:return Db;case 5124:case 35670:return Nb;case 35667:case 35671:return Ub;case 35668:case 35672:return Fb;case 35669:case 35673:return Ob;case 5125:return Bb;case 36294:return kb;case 36295:return zb;case 36296:return Hb;case 35678:case 36198:case 36298:case 36306:case 35682:return Vb;case 35679:case 36299:case 36307:return Gb;case 35680:case 36300:case 36308:case 36293:return Wb;case 36289:case 36303:case 36311:case 36292:return Xb}}function qb(i,e){i.uniform1fv(this.addr,e)}function $b(i,e){const t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Kb(i,e){const t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function jb(i,e){const t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Jb(i,e){const t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zb(i,e){const t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Qb(i,e){const t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function eS(i,e){i.uniform1iv(this.addr,e)}function tS(i,e){i.uniform2iv(this.addr,e)}function nS(i,e){i.uniform3iv(this.addr,e)}function iS(i,e){i.uniform4iv(this.addr,e)}function sS(i,e){i.uniform1uiv(this.addr,e)}function rS(i,e){i.uniform2uiv(this.addr,e)}function aS(i,e){i.uniform3uiv(this.addr,e)}function oS(i,e){i.uniform4uiv(this.addr,e)}function cS(i,e,t){const n=this.cache,s=e.length,r=Kc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||l0,r[a])}function lS(i,e,t){const n=this.cache,s=e.length,r=Kc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||h0,r[a])}function uS(i,e,t){const n=this.cache,s=e.length,r=Kc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||d0,r[a])}function hS(i,e,t){const n=this.cache,s=e.length,r=Kc(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||u0,r[a])}function dS(i){switch(i){case 5126:return qb;case 35664:return $b;case 35665:return Kb;case 35666:return jb;case 35674:return Jb;case 35675:return Zb;case 35676:return Qb;case 5124:case 35670:return eS;case 35667:case 35671:return tS;case 35668:case 35672:return nS;case 35669:case 35673:return iS;case 5125:return sS;case 36294:return rS;case 36295:return aS;case 36296:return oS;case 35678:case 36198:case 36298:case 36306:case 35682:return cS;case 35679:case 36299:case 36307:return lS;case 35680:case 36300:case 36308:case 36293:return uS;case 36289:case 36303:case 36311:case 36292:return hS}}class fS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yb(t.type)}}class pS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dS(t.type)}}class mS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Jl=/(\w+)(\])?(\[|\.)?/g;function sp(i,e){i.seq.push(e),i.map[e.id]=e}function xS(i,e,t){const n=i.name,s=n.length;for(Jl.lastIndex=0;;){const r=Jl.exec(n),a=Jl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sp(t,l===void 0?new fS(o,i,e):new pS(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new mS(o),sp(t,h)),t=h}}}class cc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);xS(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function rp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gS=37297;let _S=0;function vS(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ap=new We;function yS(i){it._getMatrix(ap,it.workingColorSpace,i);const e=`mat3( ${ap.elements.map(t=>t.toFixed(4))} )`;switch(it.getTransfer(i)){case bc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function op(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+vS(i.getShaderSource(e),o)}else return r}function MS(i,e){const t=yS(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bS(i,e){let t;switch(e){case Xx:t="Linear";break;case Yx:t="Reinhard";break;case qx:t="Cineon";break;case $x:t="ACESFilmic";break;case jx:t="AgX";break;case Jx:t="Neutral";break;case Kx:t="Custom";break;default:be("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Xo=new C;function SS(){it.getLuminanceCoefficients(Xo);const i=Xo.x.toFixed(4),e=Xo.y.toFixed(4),t=Xo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function ES(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ca(i){return i!==""}function cp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function lp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const wS=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(wS,RS)}const CS=new Map;function RS(i,e){let t=Xe[e];if(t===void 0){const n=CS.get(e);if(n!==void 0)t=Xe[n],be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}const PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function up(i){return i.replace(PS,IS)}function IS(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function LS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===mm?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===xm?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function DS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _r:case vr:e="ENVMAP_TYPE_CUBE";break;case Wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function NS(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===vr&&(e="ENVMAP_MODE_REFRACTION"),e}function US(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case gm:e="ENVMAP_BLENDING_MULTIPLY";break;case Gx:e="ENVMAP_BLENDING_MIX";break;case Wx:e="ENVMAP_BLENDING_ADD";break}return e}function FS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function OS(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=LS(t),l=DS(t),u=NS(t),h=US(t),d=FS(t),f=TS(t),m=ES(r),g=s.createProgram();let x,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(x=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[hp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?Xe.tonemapping_pars_fragment:"",t.toneMapping!==qi?bS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,MS("linearToOutputTexel",t.outputColorSpace),SS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ca).join(`
`)),a=sh(a),a=cp(a,t),a=lp(a,t),o=sh(o),o=cp(o,t),o=lp(o,t),a=up(a),o=up(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",t.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=M+x+a,S=M+p+o,w=rp(s,s.VERTEX_SHADER,v),E=rp(s,s.FRAGMENT_SHADER,S);s.attachShader(g,w),s.attachShader(g,E),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function I(L){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(g)||"",H=s.getShaderInfoLog(w)||"",X=s.getShaderInfoLog(E)||"",J=k.trim(),$=H.trim(),re=X.trim();let W=!0,se=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,w,E);else{const ce=op(s,w,"vertex"),we=op(s,E,"fragment");Ke("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+J+`
`+ce+`
`+we)}else J!==""?be("WebGLProgram: Program Info Log:",J):($===""||re==="")&&(se=!1);se&&(L.diagnostics={runnable:W,programLog:J,vertexShader:{log:$,prefix:x},fragmentShader:{log:re,prefix:p}})}s.deleteShader(w),s.deleteShader(E),F=new cc(s,g),T=AS(s,g)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let T;this.getAttributes=function(){return T===void 0&&I(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(g,gS)),b},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=E,this}let BS=0;class kS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new zS(e),t.set(e,n)),n}}class zS{constructor(e){this.id=BS++,this.code=e,this.usedTimes=0}}function HS(i,e,t,n,s,r,a){const o=new Im,c=new kS,l=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return l.add(T),T===0?"uv":`uv${T}`}function x(T,b,L,k,H){const X=k.fog,J=H.geometry,$=T.isMeshStandardMaterial?k.environment:null,re=(T.isMeshStandardMaterial?t:e).get(T.envMap||$),W=re&&re.mapping===Wc?re.image.height:null,se=m[T.type];T.precision!==null&&(f=s.getMaxPrecision(T.precision),f!==T.precision&&be("WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ce=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,we=ce!==void 0?ce.length:0;let nt=0;J.morphAttributes.position!==void 0&&(nt=1),J.morphAttributes.normal!==void 0&&(nt=2),J.morphAttributes.color!==void 0&&(nt=3);let dt,_t,vt,q;if(se){const ft=qn[se];dt=ft.vertexShader,_t=ft.fragmentShader}else dt=T.vertexShader,_t=T.fragmentShader,c.update(T),vt=c.getVertexShaderID(T),q=c.getFragmentShaderID(T);const Q=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),He=H.isInstancedMesh===!0,Se=H.isBatchedMesh===!0,Ze=!!T.map,Wt=!!T.matcap,je=!!re,St=!!T.aoMap,R=!!T.lightMap,Qe=!!T.bumpMap,et=!!T.normalMap,yt=!!T.displacementMap,ve=!!T.emissiveMap,Tt=!!T.metalnessMap,Ee=!!T.roughnessMap,ze=T.anisotropy>0,A=T.clearcoat>0,_=T.dispersion>0,U=T.iridescence>0,Y=T.sheen>0,Z=T.transmission>0,z=ze&&!!T.anisotropyMap,Me=A&&!!T.clearcoatMap,ue=A&&!!T.clearcoatNormalMap,Ce=A&&!!T.clearcoatRoughnessMap,ye=U&&!!T.iridescenceMap,ee=U&&!!T.iridescenceThicknessMap,ie=Y&&!!T.sheenColorMap,Le=Y&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,pe=!!T.specularColorMap,Ne=!!T.specularIntensityMap,P=Z&&!!T.transmissionMap,he=Z&&!!T.thicknessMap,ae=!!T.gradientMap,oe=!!T.alphaMap,te=T.alphaTest>0,K=!!T.alphaHash,ge=!!T.extensions;let Be=qi;T.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Be=i.toneMapping);const Mt={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:dt,fragmentShader:_t,defines:T.defines,customVertexShaderID:vt,customFragmentShaderID:q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:Se,batchingColor:Se&&H._colorsTexture!==null,instancing:He,instancingColor:He&&H.instanceColor!==null,instancingMorph:He&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Q===null?i.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:an,alphaToCoverage:!!T.alphaToCoverage,map:Ze,matcap:Wt,envMap:je,envMapMode:je&&re.mapping,envMapCubeUVHeight:W,aoMap:St,lightMap:R,bumpMap:Qe,normalMap:et,displacementMap:d&&yt,emissiveMap:ve,normalMapObjectSpace:et&&T.normalMapType===rg,normalMapTangentSpace:et&&T.normalMapType===wm,metalnessMap:Tt,roughnessMap:Ee,anisotropy:ze,anisotropyMap:z,clearcoat:A,clearcoatMap:Me,clearcoatNormalMap:ue,clearcoatRoughnessMap:Ce,dispersion:_,iridescence:U,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:Y,sheenColorMap:ie,sheenRoughnessMap:Le,specularMap:Pe,specularColorMap:pe,specularIntensityMap:Ne,transmission:Z,transmissionMap:P,thicknessMap:he,gradientMap:ae,opaque:T.transparent===!1&&T.blending===lr&&T.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:K,combine:T.combine,mapUv:Ze&&g(T.map.channel),aoMapUv:St&&g(T.aoMap.channel),lightMapUv:R&&g(T.lightMap.channel),bumpMapUv:Qe&&g(T.bumpMap.channel),normalMapUv:et&&g(T.normalMap.channel),displacementMapUv:yt&&g(T.displacementMap.channel),emissiveMapUv:ve&&g(T.emissiveMap.channel),metalnessMapUv:Tt&&g(T.metalnessMap.channel),roughnessMapUv:Ee&&g(T.roughnessMap.channel),anisotropyMapUv:z&&g(T.anisotropyMap.channel),clearcoatMapUv:Me&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:Le&&g(T.sheenRoughnessMap.channel),specularMapUv:Pe&&g(T.specularMap.channel),specularColorMapUv:pe&&g(T.specularColorMap.channel),specularIntensityMapUv:Ne&&g(T.specularIntensityMap.channel),transmissionMapUv:P&&g(T.transmissionMap.channel),thicknessMapUv:he&&g(T.thicknessMap.channel),alphaMapUv:oe&&g(T.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(et||ze),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Ze||oe),fog:!!X,useFog:T.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:T.flatShading===!0&&T.wireframe===!1,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:xe,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:nt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:Ze&&T.map.isVideoTexture===!0&&it.getTransfer(T.map.colorSpace)===mt,decodeVideoTextureEmissive:ve&&T.emissiveMap.isVideoTexture===!0&&it.getTransfer(T.emissiveMap.colorSpace)===mt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===en,flipSided:T.side===dn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ge&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ge&&T.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Mt.vertexUv1s=l.has(1),Mt.vertexUv2s=l.has(2),Mt.vertexUv3s=l.has(3),l.clear(),Mt}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const L in T.defines)b.push(L),b.push(T.defines[L]);return T.isRawShaderMaterial===!1&&(M(b,T),v(b,T),b.push(i.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function M(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function v(T,b){o.disableAll(),b.supportsVertexTextures&&o.enable(0),b.instancing&&o.enable(1),b.instancingColor&&o.enable(2),b.instancingMorph&&o.enable(3),b.matcap&&o.enable(4),b.envMap&&o.enable(5),b.normalMapObjectSpace&&o.enable(6),b.normalMapTangentSpace&&o.enable(7),b.clearcoat&&o.enable(8),b.iridescence&&o.enable(9),b.alphaTest&&o.enable(10),b.vertexColors&&o.enable(11),b.vertexAlphas&&o.enable(12),b.vertexUv1s&&o.enable(13),b.vertexUv2s&&o.enable(14),b.vertexUv3s&&o.enable(15),b.vertexTangents&&o.enable(16),b.anisotropy&&o.enable(17),b.alphaHash&&o.enable(18),b.batching&&o.enable(19),b.dispersion&&o.enable(20),b.batchingColor&&o.enable(21),b.gradientMap&&o.enable(22),T.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),T.push(o.mask)}function S(T){const b=m[T.type];let L;if(b){const k=qn[b];L=Kg.clone(k.uniforms)}else L=T.uniforms;return L}function w(T,b){let L;for(let k=0,H=u.length;k<H;k++){const X=u[k];if(X.cacheKey===b){L=X,++L.usedTimes;break}}return L===void 0&&(L=new OS(i,b,T,r),u.push(L)),L}function E(T){if(--T.usedTimes===0){const b=u.indexOf(T);u[b]=u[u.length-1],u.pop(),T.destroy()}}function I(T){c.remove(T)}function F(){c.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:S,acquireProgram:w,releaseProgram:E,releaseShaderCache:I,programs:u,dispose:F}}function VS(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function GS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function dp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function fp(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(h,d,f,m,g,x){let p=i[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:f,groupOrder:m,renderOrder:h.renderOrder,z:g,group:x},i[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=x),e++,p}function o(h,d,f,m,g,x){const p=a(h,d,f,m,g,x);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(h,d,f,m,g,x){const p=a(h,d,f,m,g,x);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(h,d){t.length>1&&t.sort(h||GS),n.length>1&&n.sort(d||dp),s.length>1&&s.sort(d||dp)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:u,sort:l}}function WS(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new fp,i.set(n,[a])):s>=r.length?(a=new fp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function XS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Oe};break;case"SpotLight":t={position:new C,direction:new C,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function YS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qS=0;function $S(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function KS(i){const e=new XS,t=YS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new C);const s=new C,r=new Ge,a=new Ge;function o(l){let u=0,h=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,m=0,g=0,x=0,p=0,M=0,v=0,S=0,w=0,E=0,I=0;l.sort($S);for(let T=0,b=l.length;T<b;T++){const L=l[T],k=L.color,H=L.intensity,X=L.distance,J=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=k.r*H,h+=k.g*H,d+=k.b*H;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],H);I++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const re=L.shadow,W=t.get(L);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=L.shadow.matrix,M++}n.directional[f]=$,f++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(k).multiplyScalar(H),$.distance=X,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[g]=$;const re=L.shadow;if(L.map&&(n.spotLightMap[w]=L.map,w++,re.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=re.matrix,L.castShadow){const W=t.get(L);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,n.spotShadow[g]=W,n.spotShadowMap[g]=J,S++}g++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(k).multiplyScalar(H),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[x]=$,x++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const re=L.shadow,W=t.get(L);W.shadowIntensity=re.intensity,W.shadowBias=re.bias,W.shadowNormalBias=re.normalBias,W.shadowRadius=re.radius,W.shadowMapSize=re.mapSize,W.shadowCameraNear=re.camera.near,W.shadowCameraFar=re.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=$,m++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(H),$.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[p]=$,p++}}x>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==f||F.pointLength!==m||F.spotLength!==g||F.rectAreaLength!==x||F.hemiLength!==p||F.numDirectionalShadows!==M||F.numPointShadows!==v||F.numSpotShadows!==S||F.numSpotMaps!==w||F.numLightProbes!==I)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=x,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=S+w-E,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=I,F.directionalLength=f,F.pointLength=m,F.spotLength=g,F.rectAreaLength=x,F.hemiLength=p,F.numDirectionalShadows=M,F.numPointShadows=v,F.numSpotShadows=S,F.numSpotMaps=w,F.numLightProbes=I,n.version=qS++)}function c(l,u){let h=0,d=0,f=0,m=0,g=0;const x=u.matrixWorldInverse;for(let p=0,M=l.length;p<M;p++){const v=l[p];if(v.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),h++}else if(v.isSpotLight){const S=n.spot[f];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(x),f++}else if(v.isRectAreaLight){const S=n.rectArea[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),a.identity(),r.copy(v.matrixWorld),r.premultiply(x),a.extractRotation(r),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){const S=n.hemi[g];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(x),g++}}}return{setup:o,setupView:c,state:n}}function pp(i){const e=new KS(i),t=[],n=[];function s(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function jS(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new pp(i),e.set(s,[o])):r>=a.length?(o=new pp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const JS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ZS=`uniform sampler2D shadow_pass;
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
}`;function QS(i,e,t){let n=new nd;const s=new de,r=new de,a=new lt,o=new q_({depthPacking:sg}),c=new $_,l={},u=t.maxTextureSize,h={[Ti]:dn,[dn]:Ti,[en]:en},d=new Ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:JS,fragmentShader:ZS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new jt;m.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Bt(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mm;let p=this.type;this.render=function(E,I,F){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;const T=i.getRenderTarget(),b=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Mi),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=p!==fi&&this.type===fi,X=p===fi&&this.type!==fi;for(let J=0,$=E.length;J<$;J++){const re=E[J],W=re.shadow;if(W===void 0){be("WebGLShadowMap:",re,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const se=W.getFrameExtents();if(s.multiply(se),r.copy(W.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/se.x),s.x=r.x*se.x,W.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/se.y),s.y=r.y*se.y,W.mapSize.y=r.y)),W.map===null||H===!0||X===!0){const we=this.type!==fi?{minFilter:nn,magFilter:nn}:{};W.map!==null&&W.map.dispose(),W.map=new Rs(s.x,s.y,we),W.map.texture.name=re.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ce=W.getViewportCount();for(let we=0;we<ce;we++){const nt=W.getViewport(we);a.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),k.viewport(a),W.updateMatrices(re,we),n=W.getFrustum(),S(I,F,W.camera,re,this.type)}W.isPointLightShadow!==!0&&this.type===fi&&M(W,F),W.needsUpdate=!1}p=this.type,x.needsUpdate=!1,i.setRenderTarget(T,b,L)};function M(E,I){const F=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Rs(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(I,null,F,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(I,null,F,f,g,null)}function v(E,I,F,T){let b=null;const L=F.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=F.isPointLight===!0?c:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const k=b.uuid,H=I.uuid;let X=l[k];X===void 0&&(X={},l[k]=X);let J=X[H];J===void 0&&(J=b.clone(),X[H]=J,I.addEventListener("dispose",w)),b=J}if(b.visible=I.visible,b.wireframe=I.wireframe,T===fi?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:h[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,F.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=i.properties.get(b);k.light=F}return b}function S(E,I,F,T,b){if(E.visible===!1)return;if(E.layers.test(I.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===fi)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);const H=e.update(E),X=E.material;if(Array.isArray(X)){const J=H.groups;for(let $=0,re=J.length;$<re;$++){const W=J[$],se=X[W.materialIndex];if(se&&se.visible){const ce=v(E,se,T,b);E.onBeforeShadow(i,E,I,F,H,ce,W),i.renderBufferDirect(F,null,H,ce,E,W),E.onAfterShadow(i,E,I,F,H,ce,W)}}}else if(X.visible){const J=v(E,X,T,b);E.onBeforeShadow(i,E,I,F,H,J,null),i.renderBufferDirect(F,null,H,J,E,null),E.onAfterShadow(i,E,I,F,H,J,null)}}const k=E.children;for(let H=0,X=k.length;H<X;H++)S(k[H],I,F,T,b)}function w(E){E.target.removeEventListener("dispose",w);for(const F in l){const T=l[F],b=E.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const eT={[fu]:pu,[mu]:_u,[xu]:vu,[gr]:gu,[pu]:fu,[_u]:mu,[vu]:xu,[gu]:gr};function tT(i,e){function t(){let P=!1;const he=new lt;let ae=null;const oe=new lt(0,0,0,0);return{setMask:function(te){ae!==te&&!P&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){P=te},setClear:function(te,K,ge,Be,Mt){Mt===!0&&(te*=Be,K*=Be,ge*=Be),he.set(te,K,ge,Be),oe.equals(he)===!1&&(i.clearColor(te,K,ge,Be),oe.copy(he))},reset:function(){P=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let P=!1,he=!1,ae=null,oe=null,te=null;return{setReversed:function(K){if(he!==K){const ge=e.get("EXT_clip_control");K?ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.ZERO_TO_ONE_EXT):ge.clipControlEXT(ge.LOWER_LEFT_EXT,ge.NEGATIVE_ONE_TO_ONE_EXT),he=K;const Be=te;te=null,this.setClear(Be)}},getReversed:function(){return he},setTest:function(K){K?Q(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(K){ae!==K&&!P&&(i.depthMask(K),ae=K)},setFunc:function(K){if(he&&(K=eT[K]),oe!==K){switch(K){case fu:i.depthFunc(i.NEVER);break;case pu:i.depthFunc(i.ALWAYS);break;case mu:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case xu:i.depthFunc(i.EQUAL);break;case gu:i.depthFunc(i.GEQUAL);break;case _u:i.depthFunc(i.GREATER);break;case vu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=K}},setLocked:function(K){P=K},setClear:function(K){te!==K&&(he&&(K=1-K),i.clearDepth(K),te=K)},reset:function(){P=!1,ae=null,oe=null,te=null,he=!1}}}function s(){let P=!1,he=null,ae=null,oe=null,te=null,K=null,ge=null,Be=null,Mt=null;return{setTest:function(ft){P||(ft?Q(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(ft){he!==ft&&!P&&(i.stencilMask(ft),he=ft)},setFunc:function(ft,Gn,In){(ae!==ft||oe!==Gn||te!==In)&&(i.stencilFunc(ft,Gn,In),ae=ft,oe=Gn,te=In)},setOp:function(ft,Gn,In){(K!==ft||ge!==Gn||Be!==In)&&(i.stencilOp(ft,Gn,In),K=ft,ge=Gn,Be=In)},setLocked:function(ft){P=ft},setClear:function(ft){Mt!==ft&&(i.clearStencil(ft),Mt=ft)},reset:function(){P=!1,he=null,ae=null,oe=null,te=null,K=null,ge=null,Be=null,Mt=null}}}const r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,M=null,v=null,S=null,w=null,E=null,I=new Oe(0,0,0),F=0,T=!1,b=null,L=null,k=null,H=null,X=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,re=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(W)[1]),$=re>=1):W.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),$=re>=2);let se=null,ce={};const we=i.getParameter(i.SCISSOR_BOX),nt=i.getParameter(i.VIEWPORT),dt=new lt().fromArray(we),_t=new lt().fromArray(nt);function vt(P,he,ae,oe){const te=new Uint8Array(4),K=i.createTexture();i.bindTexture(P,K),i.texParameteri(P,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(P,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ge=0;ge<ae;ge++)P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(he+ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return K}const q={};q[i.TEXTURE_2D]=vt(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=vt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=vt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=vt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Q(i.DEPTH_TEST),a.setFunc(gr),Qe(!1),et($d),Q(i.CULL_FACE),St(Mi);function Q(P){u[P]!==!0&&(i.enable(P),u[P]=!0)}function xe(P){u[P]!==!1&&(i.disable(P),u[P]=!1)}function He(P,he){return h[P]!==he?(i.bindFramebuffer(P,he),h[P]=he,P===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=he),P===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Se(P,he){let ae=f,oe=!1;if(P){ae=d.get(he),ae===void 0&&(ae=[],d.set(he,ae));const te=P.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let K=0,ge=te.length;K<ge;K++)ae[K]=i.COLOR_ATTACHMENT0+K;ae.length=te.length,oe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,oe=!0);oe&&i.drawBuffers(ae)}function Ze(P){return m!==P?(i.useProgram(P),m=P,!0):!1}const Wt={[ys]:i.FUNC_ADD,[Ax]:i.FUNC_SUBTRACT,[wx]:i.FUNC_REVERSE_SUBTRACT};Wt[Cx]=i.MIN,Wt[Rx]=i.MAX;const je={[Px]:i.ZERO,[Ix]:i.ONE,[Lx]:i.SRC_COLOR,[hu]:i.SRC_ALPHA,[Bx]:i.SRC_ALPHA_SATURATE,[Fx]:i.DST_COLOR,[Nx]:i.DST_ALPHA,[Dx]:i.ONE_MINUS_SRC_COLOR,[du]:i.ONE_MINUS_SRC_ALPHA,[Ox]:i.ONE_MINUS_DST_COLOR,[Ux]:i.ONE_MINUS_DST_ALPHA,[kx]:i.CONSTANT_COLOR,[zx]:i.ONE_MINUS_CONSTANT_COLOR,[Hx]:i.CONSTANT_ALPHA,[Vx]:i.ONE_MINUS_CONSTANT_ALPHA};function St(P,he,ae,oe,te,K,ge,Be,Mt,ft){if(P===Mi){g===!0&&(xe(i.BLEND),g=!1);return}if(g===!1&&(Q(i.BLEND),g=!0),P!==Ex){if(P!==x||ft!==T){if((p!==ys||S!==ys)&&(i.blendEquation(i.FUNC_ADD),p=ys,S=ys),ft)switch(P){case lr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFunc(i.ONE,i.ONE);break;case Kd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",P);break}else switch(P){case lr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Kd:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jd:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",P);break}M=null,v=null,w=null,E=null,I.set(0,0,0),F=0,x=P,T=ft}return}te=te||he,K=K||ae,ge=ge||oe,(he!==p||te!==S)&&(i.blendEquationSeparate(Wt[he],Wt[te]),p=he,S=te),(ae!==M||oe!==v||K!==w||ge!==E)&&(i.blendFuncSeparate(je[ae],je[oe],je[K],je[ge]),M=ae,v=oe,w=K,E=ge),(Be.equals(I)===!1||Mt!==F)&&(i.blendColor(Be.r,Be.g,Be.b,Mt),I.copy(Be),F=Mt),x=P,T=!1}function R(P,he){P.side===en?xe(i.CULL_FACE):Q(i.CULL_FACE);let ae=P.side===dn;he&&(ae=!ae),Qe(ae),P.blending===lr&&P.transparent===!1?St(Mi):St(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),r.setMask(P.colorWrite);const oe=P.stencilWrite;o.setTest(oe),oe&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ve(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Q(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Qe(P){b!==P&&(P?i.frontFace(i.CW):i.frontFace(i.CCW),b=P)}function et(P){P!==Sx?(Q(i.CULL_FACE),P!==L&&(P===$d?i.cullFace(i.BACK):P===Tx?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),L=P}function yt(P){P!==k&&($&&i.lineWidth(P),k=P)}function ve(P,he,ae){P?(Q(i.POLYGON_OFFSET_FILL),(H!==he||X!==ae)&&(i.polygonOffset(he,ae),H=he,X=ae)):xe(i.POLYGON_OFFSET_FILL)}function Tt(P){P?Q(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function Ee(P){P===void 0&&(P=i.TEXTURE0+J-1),se!==P&&(i.activeTexture(P),se=P)}function ze(P,he,ae){ae===void 0&&(se===null?ae=i.TEXTURE0+J-1:ae=se);let oe=ce[ae];oe===void 0&&(oe={type:void 0,texture:void 0},ce[ae]=oe),(oe.type!==P||oe.texture!==he)&&(se!==ae&&(i.activeTexture(ae),se=ae),i.bindTexture(P,he||q[P]),oe.type=P,oe.texture=he)}function A(){const P=ce[se];P!==void 0&&P.type!==void 0&&(i.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function U(){try{i.compressedTexImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function Y(){try{i.texSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Z(){try{i.texSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function z(){try{i.compressedTexSubImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ue(){try{i.texStorage2D(...arguments)}catch(P){P("WebGLState:",P)}}function Ce(){try{i.texStorage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ye(){try{i.texImage2D(...arguments)}catch(P){P("WebGLState:",P)}}function ee(){try{i.texImage3D(...arguments)}catch(P){P("WebGLState:",P)}}function ie(P){dt.equals(P)===!1&&(i.scissor(P.x,P.y,P.z,P.w),dt.copy(P))}function Le(P){_t.equals(P)===!1&&(i.viewport(P.x,P.y,P.z,P.w),_t.copy(P))}function Pe(P,he){let ae=l.get(he);ae===void 0&&(ae=new WeakMap,l.set(he,ae));let oe=ae.get(P);oe===void 0&&(oe=i.getUniformBlockIndex(he,P.name),ae.set(P,oe))}function pe(P,he){const oe=l.get(he).get(P);c.get(he)!==oe&&(i.uniformBlockBinding(he,oe,P.__bindingPointIndex),c.set(he,oe))}function Ne(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},se=null,ce={},h={},d=new WeakMap,f=[],m=null,g=!1,x=null,p=null,M=null,v=null,S=null,w=null,E=null,I=new Oe(0,0,0),F=0,T=!1,b=null,L=null,k=null,H=null,X=null,dt.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:Q,disable:xe,bindFramebuffer:He,drawBuffers:Se,useProgram:Ze,setBlending:St,setMaterial:R,setFlipSided:Qe,setCullFace:et,setLineWidth:yt,setPolygonOffset:ve,setScissorTest:Tt,activeTexture:Ee,bindTexture:ze,unbindTexture:A,compressedTexImage2D:_,compressedTexImage3D:U,texImage2D:ye,texImage3D:ee,updateUBOMapping:Pe,uniformBlockBinding:pe,texStorage2D:ue,texStorage3D:Ce,texSubImage2D:Y,texSubImage3D:Z,compressedTexSubImage2D:z,compressedTexSubImage3D:Me,scissor:ie,viewport:Le,reset:Ne}}function nT(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,_){return f?new OffscreenCanvas(A,_):Ba("canvas")}function g(A,_,U){let Y=1;const Z=ze(A);if((Z.width>U||Z.height>U)&&(Y=U/Math.max(Z.width,Z.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const z=Math.floor(Y*Z.width),Me=Math.floor(Y*Z.height);h===void 0&&(h=m(z,Me));const ue=_?m(z,Me):h;return ue.width=z,ue.height=Me,ue.getContext("2d").drawImage(A,0,0,z,Me),be("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+z+"x"+Me+")."),ue}else return"data"in A&&be("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function x(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function v(A,_,U,Y,Z=!1){if(A!==null){if(i[A]!==void 0)return i[A];be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let z=_;if(_===i.RED&&(U===i.FLOAT&&(z=i.R32F),U===i.HALF_FLOAT&&(z=i.R16F),U===i.UNSIGNED_BYTE&&(z=i.R8)),_===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.R8UI),U===i.UNSIGNED_SHORT&&(z=i.R16UI),U===i.UNSIGNED_INT&&(z=i.R32UI),U===i.BYTE&&(z=i.R8I),U===i.SHORT&&(z=i.R16I),U===i.INT&&(z=i.R32I)),_===i.RG&&(U===i.FLOAT&&(z=i.RG32F),U===i.HALF_FLOAT&&(z=i.RG16F),U===i.UNSIGNED_BYTE&&(z=i.RG8)),_===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RG8UI),U===i.UNSIGNED_SHORT&&(z=i.RG16UI),U===i.UNSIGNED_INT&&(z=i.RG32UI),U===i.BYTE&&(z=i.RG8I),U===i.SHORT&&(z=i.RG16I),U===i.INT&&(z=i.RG32I)),_===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(z=i.RGB16UI),U===i.UNSIGNED_INT&&(z=i.RGB32UI),U===i.BYTE&&(z=i.RGB8I),U===i.SHORT&&(z=i.RGB16I),U===i.INT&&(z=i.RGB32I)),_===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(z=i.RGBA16UI),U===i.UNSIGNED_INT&&(z=i.RGBA32UI),U===i.BYTE&&(z=i.RGBA8I),U===i.SHORT&&(z=i.RGBA16I),U===i.INT&&(z=i.RGBA32I)),_===i.RGB&&(U===i.UNSIGNED_INT_5_9_9_9_REV&&(z=i.RGB9_E5),U===i.UNSIGNED_INT_10F_11F_11F_REV&&(z=i.R11F_G11F_B10F)),_===i.RGBA){const Me=Z?bc:it.getTransfer(Y);U===i.FLOAT&&(z=i.RGBA32F),U===i.HALF_FLOAT&&(z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(z=Me===mt?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(z=i.RGB5_A1)}return(z===i.R16F||z===i.R32F||z===i.RG16F||z===i.RG32F||z===i.RGBA16F||z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),z}function S(A,_){let U;return A?_===null||_===Cs||_===Da?U=i.DEPTH24_STENCIL8:_===On?U=i.DEPTH32F_STENCIL8:_===La&&(U=i.DEPTH24_STENCIL8,be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Cs||_===Da?U=i.DEPTH_COMPONENT24:_===On?U=i.DEPTH_COMPONENT32F:_===La&&(U=i.DEPTH_COMPONENT16),U}function w(A,_){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==nn&&A.minFilter!==tn?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function E(A){const _=A.target;_.removeEventListener("dispose",E),F(_),_.isVideoTexture&&u.delete(_)}function I(A){const _=A.target;_.removeEventListener("dispose",I),b(_)}function F(A){const _=n.get(A);if(_.__webglInit===void 0)return;const U=A.source,Y=d.get(U);if(Y){const Z=Y[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys(Y).length===0&&d.delete(U)}n.remove(A)}function T(A){const _=n.get(A);i.deleteTexture(_.__webglTexture);const U=A.source,Y=d.get(U);delete Y[_.__cacheKey],a.memory.textures--}function b(A){const _=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let Z=0;Z<_.__webglFramebuffer[Y].length;Z++)i.deleteFramebuffer(_.__webglFramebuffer[Y][Z]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,Z=U.length;Y<Z;Y++){const z=n.get(U[Y]);z.__webglTexture&&(i.deleteTexture(z.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(A)}let L=0;function k(){L=0}function H(){const A=L;return A>=s.maxTextures&&be("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),L+=1,A}function X(A){const _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function J(A,_){const U=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)be("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)be("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,A,_);return}}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+_)}function $(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){q(U,A,_);return}else A.isExternalTexture&&(U.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+_)}function re(A,_){const U=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){q(U,A,_);return}t.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+_)}function W(A,_){const U=n.get(A);if(A.version>0&&U.__version!==A.version){Q(U,A,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+_)}const se={[es]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[yc]:i.MIRRORED_REPEAT},ce={[nn]:i.NEAREST,[vm]:i.NEAREST_MIPMAP_NEAREST,[aa]:i.NEAREST_MIPMAP_LINEAR,[tn]:i.LINEAR,[ic]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},we={[ag]:i.NEVER,[dg]:i.ALWAYS,[og]:i.LESS,[Cm]:i.LEQUAL,[cg]:i.EQUAL,[hg]:i.GEQUAL,[lg]:i.GREATER,[ug]:i.NOTEQUAL};function nt(A,_){if(_.type===On&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===tn||_.magFilter===ic||_.magFilter===aa||_.magFilter===_i||_.minFilter===tn||_.minFilter===ic||_.minFilter===aa||_.minFilter===_i)&&be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,se[_.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,se[_.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,se[_.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ce[_.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ce[_.minFilter]),_.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,we[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===nn||_.minFilter!==aa&&_.minFilter!==_i||_.type===On&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function dt(A,_){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",E));const Y=_.source;let Z=d.get(Y);Z===void 0&&(Z={},d.set(Y,Z));const z=X(_);if(z!==A.__cacheKey){Z[z]===void 0&&(Z[z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),Z[z].usedTimes++;const Me=Z[A.__cacheKey];Me!==void 0&&(Z[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(_)),A.__cacheKey=z,A.__webglTexture=Z[z].texture}return U}function _t(A,_,U){return Math.floor(Math.floor(A/U)/_)}function vt(A,_,U,Y){const z=A.updateRanges;if(z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,U,Y,_.data);else{z.sort((ee,ie)=>ee.start-ie.start);let Me=0;for(let ee=1;ee<z.length;ee++){const ie=z[Me],Le=z[ee],Pe=ie.start+ie.count,pe=_t(Le.start,_.width,4),Ne=_t(ie.start,_.width,4);Le.start<=Pe+1&&pe===Ne&&_t(Le.start+Le.count-1,_.width,4)===pe?ie.count=Math.max(ie.count,Le.start+Le.count-ie.start):(++Me,z[Me]=Le)}z.length=Me+1;const ue=i.getParameter(i.UNPACK_ROW_LENGTH),Ce=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ee=0,ie=z.length;ee<ie;ee++){const Le=z[ee],Pe=Math.floor(Le.start/4),pe=Math.ceil(Le.count/4),Ne=Pe%_.width,P=Math.floor(Pe/_.width),he=pe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ne),i.pixelStorei(i.UNPACK_SKIP_ROWS,P),t.texSubImage2D(i.TEXTURE_2D,0,Ne,P,he,ae,U,Y,_.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ue),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ce),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function q(A,_,U){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);const Z=dt(A,_),z=_.source;t.bindTexture(Y,A.__webglTexture,i.TEXTURE0+U);const Me=n.get(z);if(z.version!==Me.__version||Z===!0){t.activeTexture(i.TEXTURE0+U);const ue=it.getPrimaries(it.workingColorSpace),Ce=_.colorSpace===ki?null:it.getPrimaries(_.colorSpace),ye=_.colorSpace===ki||ue===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=g(_.image,!1,s.maxTextureSize);ee=Ee(_,ee);const ie=r.convert(_.format,_.colorSpace),Le=r.convert(_.type);let Pe=v(_.internalFormat,ie,Le,_.colorSpace,_.isVideoTexture);nt(Y,_);let pe;const Ne=_.mipmaps,P=_.isVideoTexture!==!0,he=Me.__version===void 0||Z===!0,ae=z.dataReady,oe=w(_,ee);if(_.isDepthTexture)Pe=S(_.format===Ua,_.type),he&&(P?t.texStorage2D(i.TEXTURE_2D,1,Pe,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ie,Le,null));else if(_.isDataTexture)if(Ne.length>0){P&&he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Ne[0].width,Ne[0].height);for(let te=0,K=Ne.length;te<K;te++)pe=Ne[te],P?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,Le,pe.data):t.texImage2D(i.TEXTURE_2D,te,Pe,pe.width,pe.height,0,ie,Le,pe.data);_.generateMipmaps=!1}else P?(he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,ee.width,ee.height),ae&&vt(_,ee,ie,Le)):t.texImage2D(i.TEXTURE_2D,0,Pe,ee.width,ee.height,0,ie,Le,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){P&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ne[0].width,Ne[0].height,ee.depth);for(let te=0,K=Ne.length;te<K;te++)if(pe=Ne[te],_.format!==An)if(ie!==null)if(P){if(ae)if(_.layerUpdates.size>0){const ge=Xf(pe.width,pe.height,_.format,_.type);for(const Be of _.layerUpdates){const Mt=pe.data.subarray(Be*ge/pe.data.BYTES_PER_ELEMENT,(Be+1)*ge/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Be,pe.width,pe.height,1,ie,Mt)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,Pe,pe.width,pe.height,ee.depth,0,pe.data,0,0);else be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else P?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,pe.width,pe.height,ee.depth,ie,Le,pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,Pe,pe.width,pe.height,ee.depth,0,ie,Le,pe.data)}else{P&&he&&t.texStorage2D(i.TEXTURE_2D,oe,Pe,Ne[0].width,Ne[0].height);for(let te=0,K=Ne.length;te<K;te++)pe=Ne[te],_.format!==An?ie!==null?P?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,pe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,Pe,pe.width,pe.height,0,pe.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,pe.width,pe.height,ie,Le,pe.data):t.texImage2D(i.TEXTURE_2D,te,Pe,pe.width,pe.height,0,ie,Le,pe.data)}else if(_.isDataArrayTexture)if(P){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,Pe,ee.width,ee.height,ee.depth),ae)if(_.layerUpdates.size>0){const te=Xf(ee.width,ee.height,_.format,_.type);for(const K of _.layerUpdates){const ge=ee.data.subarray(K*te/ee.data.BYTES_PER_ELEMENT,(K+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,ee.width,ee.height,1,ie,Le,ge)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ie,Le,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,ee.width,ee.height,ee.depth,0,ie,Le,ee.data);else if(_.isData3DTexture)P?(he&&t.texStorage3D(i.TEXTURE_3D,oe,Pe,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ie,Le,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,ee.width,ee.height,ee.depth,0,ie,Le,ee.data);else if(_.isFramebufferTexture){if(he)if(P)t.texStorage2D(i.TEXTURE_2D,oe,Pe,ee.width,ee.height);else{let te=ee.width,K=ee.height;for(let ge=0;ge<oe;ge++)t.texImage2D(i.TEXTURE_2D,ge,Pe,te,K,0,ie,Le,null),te>>=1,K>>=1}}else if(Ne.length>0){if(P&&he){const te=ze(Ne[0]);t.texStorage2D(i.TEXTURE_2D,oe,Pe,te.width,te.height)}for(let te=0,K=Ne.length;te<K;te++)pe=Ne[te],P?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,ie,Le,pe):t.texImage2D(i.TEXTURE_2D,te,Pe,ie,Le,pe);_.generateMipmaps=!1}else if(P){if(he){const te=ze(ee);t.texStorage2D(i.TEXTURE_2D,oe,Pe,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ie,Le,ee)}else t.texImage2D(i.TEXTURE_2D,0,Pe,ie,Le,ee);x(_)&&p(Y),Me.__version=z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Q(A,_,U){if(_.image.length!==6)return;const Y=dt(A,_),Z=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const z=n.get(Z);if(Z.version!==z.__version||Y===!0){t.activeTexture(i.TEXTURE0+U);const Me=it.getPrimaries(it.workingColorSpace),ue=_.colorSpace===ki?null:it.getPrimaries(_.colorSpace),Ce=_.colorSpace===ki||Me===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);const ye=_.isCompressedTexture||_.image[0].isCompressedTexture,ee=_.image[0]&&_.image[0].isDataTexture,ie=[];for(let K=0;K<6;K++)!ye&&!ee?ie[K]=g(_.image[K],!0,s.maxCubemapSize):ie[K]=ee?_.image[K].image:_.image[K],ie[K]=Ee(_,ie[K]);const Le=ie[0],Pe=r.convert(_.format,_.colorSpace),pe=r.convert(_.type),Ne=v(_.internalFormat,Pe,pe,_.colorSpace),P=_.isVideoTexture!==!0,he=z.__version===void 0||Y===!0,ae=Z.dataReady;let oe=w(_,Le);nt(i.TEXTURE_CUBE_MAP,_);let te;if(ye){P&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ne,Le.width,Le.height);for(let K=0;K<6;K++){te=ie[K].mipmaps;for(let ge=0;ge<te.length;ge++){const Be=te[ge];_.format!==An?Pe!==null?P?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Be.width,Be.height,Pe,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ne,Be.width,Be.height,0,Be.data):be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,0,0,Be.width,Be.height,Pe,pe,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge,Ne,Be.width,Be.height,0,Pe,pe,Be.data)}}}else{if(te=_.mipmaps,P&&he){te.length>0&&oe++;const K=ze(ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Ne,K.width,K.height)}for(let K=0;K<6;K++)if(ee){P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ie[K].width,ie[K].height,Pe,pe,ie[K].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,ie[K].width,ie[K].height,0,Pe,pe,ie[K].data);for(let ge=0;ge<te.length;ge++){const Mt=te[ge].image[K].image;P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Mt.width,Mt.height,Pe,pe,Mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ne,Mt.width,Mt.height,0,Pe,pe,Mt.data)}}else{P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Pe,pe,ie[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ne,Pe,pe,ie[K]);for(let ge=0;ge<te.length;ge++){const Be=te[ge];P?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,0,0,Pe,pe,Be.image[K]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ge+1,Ne,Pe,pe,Be.image[K])}}}x(_)&&p(i.TEXTURE_CUBE_MAP),z.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xe(A,_,U,Y,Z,z){const Me=r.convert(U.format,U.colorSpace),ue=r.convert(U.type),Ce=v(U.internalFormat,Me,ue,U.colorSpace),ye=n.get(_),ee=n.get(U);if(ee.__renderTarget=_,!ye.__hasExternalTextures){const ie=Math.max(1,_.width>>z),Le=Math.max(1,_.height>>z);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?t.texImage3D(Z,z,Ce,ie,Le,_.depth,0,Me,ue,null):t.texImage2D(Z,z,Ce,ie,Le,0,Me,ue,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,0,yt(_)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,Z,ee.__webglTexture,z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(A,_,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),_.depthBuffer){const Y=_.depthTexture,Z=Y&&Y.isDepthTexture?Y.type:null,z=S(_.stencilBuffer,Z),Me=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=yt(_);ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ue,z,_.width,_.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ue,z,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,z,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,A)}else{const Y=_.textures;for(let Z=0;Z<Y.length;Z++){const z=Y[Z],Me=r.convert(z.format,z.colorSpace),ue=r.convert(z.type),Ce=v(z.internalFormat,Me,ue,z.colorSpace),ye=yt(_);U&&ve(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Ce,_.width,_.height):ve(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Ce,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,Ce,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Se(A,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Y=n.get(_.depthTexture);Y.__renderTarget=_,(!Y.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const Z=Y.__webglTexture,z=yt(_);if(_.depthTexture.format===Na)ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(_.depthTexture.format===Ua)ve(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ze(A){const _=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",Z)};Y.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=Y}if(A.depthTexture&&!_.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");const Y=A.texture.mipmaps;Y&&Y.length>0?Se(_.__webglFramebuffer[0],A):Se(_.__webglFramebuffer,A)}else if(U){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),He(_.__webglDepthbuffer[Y],A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,z)}}else{const Y=A.texture.mipmaps;if(Y&&Y.length>0?t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),He(_.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,z=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,z),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(A,_,U){const Y=n.get(A);_!==void 0&&xe(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&Ze(A)}function je(A){const _=A.texture,U=n.get(A),Y=n.get(_);A.addEventListener("dispose",I);const Z=A.textures,z=A.isWebGLCubeRenderTarget===!0,Me=Z.length>1;if(Me||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),z){U.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer[ue]=[];for(let Ce=0;Ce<_.mipmaps.length;Ce++)U.__webglFramebuffer[ue][Ce]=i.createFramebuffer()}else U.__webglFramebuffer[ue]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){U.__webglFramebuffer=[];for(let ue=0;ue<_.mipmaps.length;ue++)U.__webglFramebuffer[ue]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Me)for(let ue=0,Ce=Z.length;ue<Ce;ue++){const ye=n.get(Z[ue]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&ve(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ue=0;ue<Z.length;ue++){const Ce=Z[ue];U.__webglColorRenderbuffer[ue]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ue]);const ye=r.convert(Ce.format,Ce.colorSpace),ee=r.convert(Ce.type),ie=v(Ce.internalFormat,ye,ee,Ce.colorSpace,A.isXRRenderTarget===!0),Le=yt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,ie,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,U.__webglColorRenderbuffer[ue])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),He(U.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(z){t.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),nt(i.TEXTURE_CUBE_MAP,_);for(let ue=0;ue<6;ue++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)xe(U.__webglFramebuffer[ue][Ce],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ce);else xe(U.__webglFramebuffer[ue],A,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ue=0,Ce=Z.length;ue<Ce;ue++){const ye=Z[ue],ee=n.get(ye);let ie=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ie=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ie,ee.__webglTexture),nt(ie,ye),xe(U.__webglFramebuffer,A,ye,i.COLOR_ATTACHMENT0+ue,ie,0),x(ye)&&p(ie)}t.unbindTexture()}else{let ue=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ue=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ue,Y.__webglTexture),nt(ue,_),_.mipmaps&&_.mipmaps.length>0)for(let Ce=0;Ce<_.mipmaps.length;Ce++)xe(U.__webglFramebuffer[Ce],A,_,i.COLOR_ATTACHMENT0,ue,Ce);else xe(U.__webglFramebuffer,A,_,i.COLOR_ATTACHMENT0,ue,0);x(_)&&p(ue),t.unbindTexture()}A.depthBuffer&&Ze(A)}function St(A){const _=A.textures;for(let U=0,Y=_.length;U<Y;U++){const Z=_[U];if(x(Z)){const z=M(A),Me=n.get(Z).__webglTexture;t.bindTexture(z,Me),p(z),t.unbindTexture()}}}const R=[],Qe=[];function et(A){if(A.samples>0){if(ve(A)===!1){const _=A.textures,U=A.width,Y=A.height;let Z=i.COLOR_BUFFER_BIT;const z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(A),ue=_.length>1;if(ue)for(let ye=0;ye<_.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ce=A.texture.mipmaps;Ce&&Ce.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<_.length;ye++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),ue){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ee=n.get(_[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,Z,i.NEAREST),c===!0&&(R.length=0,Qe.length=0,R.push(i.COLOR_ATTACHMENT0+ye),A.depthBuffer&&A.resolveDepthBuffer===!1&&(R.push(z),Qe.push(z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Qe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,R))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ue)for(let ye=0;ye<_.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ee=n.get(_[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const _=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function yt(A){return Math.min(s.maxSamples,A.samples)}function ve(A){const _=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Tt(A){const _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Ee(A,_){const U=A.colorSpace,Y=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==an&&U!==ki&&(it.getTransfer(U)===mt?(Y!==An||Z!==Jn)&&be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",U)),_}function ze(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=re,this.setTextureCube=W,this.rebindTextures=Wt,this.setupRenderTarget=je,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ze,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=ve}function iT(i,e){function t(n,s=ki){let r;const a=it.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Gh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bm)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sm)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===ym)return i.BYTE;if(n===Mm)return i.SHORT;if(n===La)return i.UNSIGNED_SHORT;if(n===Vh)return i.INT;if(n===Cs)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===Ir)return i.HALF_FLOAT;if(n===Tm)return i.ALPHA;if(n===Em)return i.RGB;if(n===An)return i.RGBA;if(n===Na)return i.DEPTH_COMPONENT;if(n===Ua)return i.DEPTH_STENCIL;if(n===Xh)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===$h)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===sc||n===rc||n===ac||n===oc)if(a===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bu||n===Su||n===Tu||n===Eu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Su)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tu)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Eu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Au||n===wu||n===Cu)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Au||n===wu)return a===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Cu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ru||n===Pu||n===Iu||n===Lu||n===Du||n===Nu||n===Uu||n===Fu||n===Ou||n===Bu||n===ku||n===zu||n===Hu||n===Vu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ru)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Pu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Iu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Lu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Du)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Uu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ou)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ku)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===zu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vu)return a===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gu||n===Wu||n===Xu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gu)return a===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yu||n===qu||n===$u||n===Ku)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Yu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$u)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ku)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Da?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const sT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rT=`
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

}`;class aT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Ei({vertexShader:sT,fragmentShader:rT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bt(new os(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oT extends Ls{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null;const g=typeof XRWebGLBinding<"u",x=new aT,p={},M=t.getContextAttributes();let v=null,S=null;const w=[],E=[],I=new de;let F=null;const T=new ln;T.viewport=new lt;const b=new ln;b.viewport=new lt;const L=[T,b],k=new fv;let H=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Q=w[q];return Q===void 0&&(Q=new Ul,w[q]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(q){let Q=w[q];return Q===void 0&&(Q=new Ul,w[q]=Q),Q.getGripSpace()},this.getHand=function(q){let Q=w[q];return Q===void 0&&(Q=new Ul,w[q]=Q),Q.getHandSpace()};function J(q){const Q=E.indexOf(q.inputSource);if(Q===-1)return;const xe=w[Q];xe!==void 0&&(xe.update(q.inputSource,q.frame,l||a),xe.dispatchEvent({type:q.type,data:q.inputSource}))}function $(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",re);for(let q=0;q<w.length;q++){const Q=E[q];Q!==null&&(E[q]=null,w[q].disconnect(Q))}H=null,X=null,x.reset();for(const q in p)delete p[q];e.setRenderTarget(v),f=null,d=null,h=null,s=null,S=null,vt.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(s,t)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(v=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",$),s.addEventListener("inputsourceschange",re),M.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(I),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,He=null,Se=null;M.depth&&(Se=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=M.stencil?Ua:Na,He=M.stencil?Da:Cs);const Ze={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(Ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Rs(d.textureWidth,d.textureHeight,{format:An,type:Jn,depthTexture:new Wm(d.textureWidth,d.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,xe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Rs(f.framebufferWidth,f.framebufferHeight,{format:An,type:Jn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),vt.setContext(s),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function re(q){for(let Q=0;Q<q.removed.length;Q++){const xe=q.removed[Q],He=E.indexOf(xe);He>=0&&(E[He]=null,w[He].disconnect(xe))}for(let Q=0;Q<q.added.length;Q++){const xe=q.added[Q];let He=E.indexOf(xe);if(He===-1){for(let Ze=0;Ze<w.length;Ze++)if(Ze>=E.length){E.push(xe),He=Ze;break}else if(E[Ze]===null){E[Ze]=xe,He=Ze;break}if(He===-1)break}const Se=w[He];Se&&Se.connect(xe)}}const W=new C,se=new C;function ce(q,Q,xe){W.setFromMatrixPosition(Q.matrixWorld),se.setFromMatrixPosition(xe.matrixWorld);const He=W.distanceTo(se),Se=Q.projectionMatrix.elements,Ze=xe.projectionMatrix.elements,Wt=Se[14]/(Se[10]-1),je=Se[14]/(Se[10]+1),St=(Se[9]+1)/Se[5],R=(Se[9]-1)/Se[5],Qe=(Se[8]-1)/Se[0],et=(Ze[8]+1)/Ze[0],yt=Wt*Qe,ve=Wt*et,Tt=He/(-Qe+et),Ee=Tt*-Qe;if(Q.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ee),q.translateZ(Tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Se[10]===-1)q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const ze=Wt+Tt,A=je+Tt,_=yt-Ee,U=ve+(He-Ee),Y=St*je/A*ze,Z=R*je/A*ze;q.projectionMatrix.makePerspective(_,U,Y,Z,ze,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function we(q,Q){Q===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Q.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let Q=q.near,xe=q.far;x.texture!==null&&(x.depthNear>0&&(Q=x.depthNear),x.depthFar>0&&(xe=x.depthFar)),k.near=b.near=T.near=Q,k.far=b.far=T.far=xe,(H!==k.near||X!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,X=k.far),k.layers.mask=q.layers.mask|6,T.layers.mask=k.layers.mask&3,b.layers.mask=k.layers.mask&5;const He=q.parent,Se=k.cameras;we(k,He);for(let Ze=0;Ze<Se.length;Ze++)we(Se[Ze],He);Se.length===2?ce(k,T,b):k.projectionMatrix.copy(T.projectionMatrix),nt(q,k,He)};function nt(q,Q,xe){xe===null?q.matrix.copy(Q.matrixWorld):(q.matrix.copy(xe.matrixWorld),q.matrix.invert(),q.matrix.multiply(Q.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Q.projectionMatrix),q.projectionMatrixInverse.copy(Q.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=yr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(k)},this.getCameraTexture=function(q){return p[q]};let dt=null;function _t(q,Q){if(u=Q.getViewerPose(l||a),m=Q,u!==null){const xe=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let He=!1;xe.length!==k.cameras.length&&(k.cameras.length=0,He=!0);for(let je=0;je<xe.length;je++){const St=xe[je];let R=null;if(f!==null)R=f.getViewport(St);else{const et=h.getViewSubImage(d,St);R=et.viewport,je===0&&(e.setRenderTargetTextures(S,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(S))}let Qe=L[je];Qe===void 0&&(Qe=new ln,Qe.layers.enable(je),Qe.viewport=new lt,L[je]=Qe),Qe.matrix.fromArray(St.transform.matrix),Qe.matrix.decompose(Qe.position,Qe.quaternion,Qe.scale),Qe.projectionMatrix.fromArray(St.projectionMatrix),Qe.projectionMatrixInverse.copy(Qe.projectionMatrix).invert(),Qe.viewport.set(R.x,R.y,R.width,R.height),je===0&&(k.matrix.copy(Qe.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),He===!0&&k.cameras.push(Qe)}const Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&g){h=n.getBinding();const je=h.getDepthInformation(xe[0]);je&&je.isValid&&je.texture&&x.init(je,s.renderState)}if(Se&&Se.includes("camera-access")&&g){e.state.unbindTexture(),h=n.getBinding();for(let je=0;je<xe.length;je++){const St=xe[je].camera;if(St){let R=p[St];R||(R=new Xm,p[St]=R);const Qe=h.getCameraImage(St);R.sourceTexture=Qe}}}}for(let xe=0;xe<w.length;xe++){const He=E[xe],Se=w[xe];He!==null&&Se!==void 0&&Se.update(He,Q,l||a)}dt&&dt(q,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const vt=new c0;vt.setAnimationLoop(_t),this.setAnimationLoop=function(q){dt=q},this.dispose=function(){}}}const gs=new zn,cT=new Ge;function lT(i,e){function t(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,Um(i)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function s(x,p,M,v,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(x,p):p.isMeshToonMaterial?(r(x,p),h(x,p)):p.isMeshPhongMaterial?(r(x,p),u(x,p)):p.isMeshStandardMaterial?(r(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,S)):p.isMeshMatcapMaterial?(r(x,p),m(x,p)):p.isMeshDepthMaterial?r(x,p):p.isMeshDistanceMaterial?(r(x,p),g(x,p)):p.isMeshNormalMaterial?r(x,p):p.isLineBasicMaterial?(a(x,p),p.isLineDashedMaterial&&o(x,p)):p.isPointsMaterial?c(x,p,M,v):p.isSpriteMaterial?l(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,t(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===dn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,t(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===dn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,t(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,t(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);const M=e.get(p),v=M.envMap,S=M.envMapRotation;v&&(x.envMap.value=v,gs.copy(S),gs.x*=-1,gs.y*=-1,gs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),x.envMapRotation.value.setFromMatrix4(cT.makeRotationFromEuler(gs)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,x.aoMapTransform))}function a(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform))}function o(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function c(x,p,M,v){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*M,x.scale.value=v*.5,p.map&&(x.map.value=p.map,t(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function l(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,t(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,t(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function u(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function h(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,M){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===dn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=M.texture,x.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,p){p.matcap&&(x.matcap.value=p.matcap)}function g(x,p){const M=e.get(p).light;x.referencePosition.value.setFromMatrixPosition(M.matrixWorld),x.nearDistance.value=M.shadow.camera.near,x.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function uT(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,v){const S=v.program;n.uniformBlockBinding(M,S)}function l(M,v){let S=s[M.id];S===void 0&&(m(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",x));const w=v.program;n.updateUBOMapping(M,w);const E=e.render.frame;r[M.id]!==E&&(d(M),r[M.id]=E)}function u(M){const v=h();M.__bindingPointIndex=v;const S=i.createBuffer(),w=M.__size,E=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,w,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,S),S}function h(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const v=s[M.id],S=M.uniforms,w=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,I=S.length;E<I;E++){const F=Array.isArray(S[E])?S[E]:[S[E]];for(let T=0,b=F.length;T<b;T++){const L=F[T];if(f(L,E,T,w)===!0){const k=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let J=0;J<H.length;J++){const $=H[J],re=g($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,k+X,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,X),X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(M,v,S,w){const E=M.value,I=v+"_"+S;if(w[I]===void 0)return typeof E=="number"||typeof E=="boolean"?w[I]=E:w[I]=E.clone(),!0;{const F=w[I];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return w[I]=E,!0}else if(F.equals(E)===!1)return F.copy(E),!0}return!1}function m(M){const v=M.uniforms;let S=0;const w=16;for(let I=0,F=v.length;I<F;I++){const T=Array.isArray(v[I])?v[I]:[v[I]];for(let b=0,L=T.length;b<L;b++){const k=T[b],H=Array.isArray(k.value)?k.value:[k.value];for(let X=0,J=H.length;X<J;X++){const $=H[X],re=g($),W=S%w,se=W%re.boundary,ce=W+se;S+=se,ce!==0&&w-ce<re.storage&&(S+=w-ce),k.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=re.storage}}}const E=S%w;return E>0&&(S+=w-E),M.__size=S,M.__cache={},this}function g(M){const v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):be("WebGLRenderer: Unsupported uniform value type.",M),v}function x(M){const v=M.target;v.removeEventListener("dispose",x);const S=a.indexOf(v.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}const hT=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ui=null;function dT(){return ui===null&&(ui=new ed(hT,32,32,qh,Ir),ui.minFilter=tn,ui.magFilter=tn,ui.wrapS=Kn,ui.wrapT=Kn,ui.generateMipmaps=!1,ui.needsUpdate=!0),ui}class fT{constructor(e={}){const{canvas:t=fg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const m=new Set([Kh,$h,Yh]),g=new Set([Jn,Cs,La,Da,Gh,Wh]),x=new Uint32Array(4),p=new Int32Array(4);let M=null,v=null;const S=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let I=!1;this._outputColorSpace=Nt;let F=0,T=0,b=null,L=-1,k=null;const H=new lt,X=new lt;let J=null;const $=new Oe(0);let re=0,W=t.width,se=t.height,ce=1,we=null,nt=null;const dt=new lt(0,0,W,se),_t=new lt(0,0,W,se);let vt=!1;const q=new nd;let Q=!1,xe=!1;const He=new Ge,Se=new C,Ze=new lt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function St(){return b===null?ce:1}let R=n;function Qe(y,D){return t.getContext(y,D)}try{const y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hh}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",K,!1),t.addEventListener("webglcontextcreationerror",ge,!1),R===null){const D="webgl2";if(R=Qe(D,y),R===null)throw Qe(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw y("WebGLRenderer: "+y.message),y}let et,yt,ve,Tt,Ee,ze,A,_,U,Y,Z,z,Me,ue,Ce,ye,ee,ie,Le,Pe,pe,Ne,P,he;function ae(){et=new Mb(R),et.init(),Ne=new iT(R,et),yt=new db(R,et,e,Ne),ve=new tT(R,et),yt.reversedDepthBuffer&&d&&ve.buffers.depth.setReversed(!0),Tt=new Tb(R),Ee=new VS,ze=new nT(R,et,ve,Ee,yt,Ne,Tt),A=new pb(E),_=new yb(E),U=new Cv(R),P=new ub(R,U),Y=new bb(R,U,Tt,P),Z=new Ab(R,Y,U,Tt),Le=new Eb(R,yt,ze),ye=new fb(Ee),z=new HS(E,A,_,et,yt,P,ye),Me=new lT(E,Ee),ue=new WS,Ce=new jS(et),ie=new lb(E,A,_,ve,Z,f,c),ee=new QS(E,Z,yt),he=new uT(R,Tt,yt,ve),Pe=new hb(R,et,Tt),pe=new Sb(R,et,Tt),Tt.programs=z.programs,E.capabilities=yt,E.extensions=et,E.properties=Ee,E.renderLists=ue,E.shadowMap=ee,E.state=ve,E.info=Tt}ae();const oe=new oT(E,R);this.xr=oe,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const y=et.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=et.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(y){y!==void 0&&(ce=y,this.setSize(W,se,!1))},this.getSize=function(y){return y.set(W,se)},this.setSize=function(y,D,O=!0){if(oe.isPresenting){be("WebGLRenderer: Can't change size while VR device is presenting.");return}W=y,se=D,t.width=Math.floor(y*ce),t.height=Math.floor(D*ce),O===!0&&(t.style.width=y+"px",t.style.height=D+"px"),this.setViewport(0,0,y,D)},this.getDrawingBufferSize=function(y){return y.set(W*ce,se*ce).floor()},this.setDrawingBufferSize=function(y,D,O){W=y,se=D,ce=O,t.width=Math.floor(y*O),t.height=Math.floor(D*O),this.setViewport(0,0,y,D)},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(dt)},this.setViewport=function(y,D,O,B){y.isVector4?dt.set(y.x,y.y,y.z,y.w):dt.set(y,D,O,B),ve.viewport(H.copy(dt).multiplyScalar(ce).round())},this.getScissor=function(y){return y.copy(_t)},this.setScissor=function(y,D,O,B){y.isVector4?_t.set(y.x,y.y,y.z,y.w):_t.set(y,D,O,B),ve.scissor(X.copy(_t).multiplyScalar(ce).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(y){ve.setScissorTest(vt=y)},this.setOpaqueSort=function(y){we=y},this.setTransparentSort=function(y){nt=y},this.getClearColor=function(y){return y.copy(ie.getClearColor())},this.setClearColor=function(){ie.setClearColor(...arguments)},this.getClearAlpha=function(){return ie.getClearAlpha()},this.setClearAlpha=function(){ie.setClearAlpha(...arguments)},this.clear=function(y=!0,D=!0,O=!0){let B=0;if(y){let N=!1;if(b!==null){const ne=b.texture.format;N=m.has(ne)}if(N){const ne=b.texture.type,fe=g.has(ne),_e=ie.getClearColor(),me=ie.getClearAlpha(),Ie=_e.r,De=_e.g,Te=_e.b;fe?(x[0]=Ie,x[1]=De,x[2]=Te,x[3]=me,R.clearBufferuiv(R.COLOR,0,x)):(p[0]=Ie,p[1]=De,p[2]=Te,p[3]=me,R.clearBufferiv(R.COLOR,0,p))}else B|=R.COLOR_BUFFER_BIT}D&&(B|=R.DEPTH_BUFFER_BIT),O&&(B|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",K,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ie.dispose(),ue.dispose(),Ce.dispose(),Ee.dispose(),A.dispose(),_.dispose(),Z.dispose(),P.dispose(),he.dispose(),z.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Hd),oe.removeEventListener("sessionend",Vd),us.stop()};function te(y){y.preventDefault(),Tc("WebGLRenderer: Context Lost."),I=!0}function K(){Tc("WebGLRenderer: Context Restored."),I=!1;const y=Tt.autoReset,D=ee.enabled,O=ee.autoUpdate,B=ee.needsUpdate,N=ee.type;ae(),Tt.autoReset=y,ee.enabled=D,ee.autoUpdate=O,ee.needsUpdate=B,ee.type=N}function ge(y){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Be(y){const D=y.target;D.removeEventListener("dispose",Be),Mt(D)}function Mt(y){ft(y),Ee.remove(y)}function ft(y){const D=Ee.get(y).programs;D!==void 0&&(D.forEach(function(O){z.releaseProgram(O)}),y.isShaderMaterial&&z.releaseShaderCache(y))}this.renderBufferDirect=function(y,D,O,B,N,ne){D===null&&(D=Wt);const fe=N.isMesh&&N.matrixWorld.determinant()<0,_e=gx(y,D,O,B,N);ve.setMaterial(B,fe);let me=O.index,Ie=1;if(B.wireframe===!0){if(me=Y.getWireframeAttribute(O),me===void 0)return;Ie=2}const De=O.drawRange,Te=O.attributes.position;let tt=De.start*Ie,pt=(De.start+De.count)*Ie;ne!==null&&(tt=Math.max(tt,ne.start*Ie),pt=Math.min(pt,(ne.start+ne.count)*Ie)),me!==null?(tt=Math.max(tt,0),pt=Math.min(pt,me.count)):Te!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,Te.count));const Ct=pt-tt;if(Ct<0||Ct===1/0)return;P.setup(N,B,_e,O,me);let Rt,xt=Pe;if(me!==null&&(Rt=U.get(me),xt=pe,xt.setIndex(Rt)),N.isMesh)B.wireframe===!0?(ve.setLineWidth(B.wireframeLinewidth*St()),xt.setMode(R.LINES)):xt.setMode(R.TRIANGLES);else if(N.isLine){let Re=B.linewidth;Re===void 0&&(Re=1),ve.setLineWidth(Re*St()),N.isLineSegments?xt.setMode(R.LINES):N.isLineLoop?xt.setMode(R.LINE_LOOP):xt.setMode(R.LINE_STRIP)}else N.isPoints?xt.setMode(R.POINTS):N.isSprite&&xt.setMode(R.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),xt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))xt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Re=N._multiDrawStarts,Et=N._multiDrawCounts,rt=N._multiDrawCount,pn=me?U.get(me).bytesPerElement:1,Ns=Ee.get(B).currentProgram.getUniforms();for(let mn=0;mn<rt;mn++)Ns.setValue(R,"_gl_DrawID",mn),xt.render(Re[mn]/pn,Et[mn])}else if(N.isInstancedMesh)xt.renderInstances(tt,Ct,N.count);else if(O.isInstancedBufferGeometry){const Re=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Et=Math.min(O.instanceCount,Re);xt.renderInstances(tt,Ct,Et)}else xt.render(tt,Ct)};function Gn(y,D,O){y.transparent===!0&&y.side===en&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,fo(y,D,O),y.side=Ti,y.needsUpdate=!0,fo(y,D,O),y.side=en):fo(y,D,O)}this.compile=function(y,D,O=null){O===null&&(O=y),v=Ce.get(O),v.init(D),w.push(v),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(v.pushLight(N),N.castShadow&&v.pushShadow(N))}),y!==O&&y.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(v.pushLight(N),N.castShadow&&v.pushShadow(N))}),v.setupLights();const B=new Set;return y.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ne=N.material;if(ne)if(Array.isArray(ne))for(let fe=0;fe<ne.length;fe++){const _e=ne[fe];Gn(_e,O,N),B.add(_e)}else Gn(ne,O,N),B.add(ne)}),v=w.pop(),B},this.compileAsync=function(y,D,O=null){const B=this.compile(y,D,O);return new Promise(N=>{function ne(){if(B.forEach(function(fe){Ee.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){N(y);return}setTimeout(ne,10)}et.get("KHR_parallel_shader_compile")!==null?ne():setTimeout(ne,10)})};let In=null;function xx(y){In&&In(y)}function Hd(){us.stop()}function Vd(){us.start()}const us=new c0;us.setAnimationLoop(xx),typeof self<"u"&&us.setContext(self),this.setAnimationLoop=function(y){In=y,oe.setAnimationLoop(y),y===null?us.stop():us.start()},oe.addEventListener("sessionstart",Hd),oe.addEventListener("sessionend",Vd),this.render=function(y,D){if(D!==void 0&&D.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(D),D=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(E,y,D,b),v=Ce.get(y,w.length),v.init(D),w.push(v),He.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(He,jn,D.reversedDepth),xe=this.localClippingEnabled,Q=ye.init(this.clippingPlanes,xe),M=ue.get(y,S.length),M.init(),S.push(M),oe.enabled===!0&&oe.isPresenting===!0){const ne=E.xr.getDepthSensingMesh();ne!==null&&dl(ne,D,-1/0,E.sortObjects)}dl(y,D,0,E.sortObjects),M.finish(),E.sortObjects===!0&&M.sort(we,nt),je=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,je&&ie.addToRenderList(M,y),this.info.render.frame++,Q===!0&&ye.beginShadows();const O=v.state.shadowsArray;ee.render(O,y,D),Q===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=M.opaque,N=M.transmissive;if(v.setupLights(),D.isArrayCamera){const ne=D.cameras;if(N.length>0)for(let fe=0,_e=ne.length;fe<_e;fe++){const me=ne[fe];Wd(B,N,y,me)}je&&ie.render(y);for(let fe=0,_e=ne.length;fe<_e;fe++){const me=ne[fe];Gd(M,y,me,me.viewport)}}else N.length>0&&Wd(B,N,y,D),je&&ie.render(y),Gd(M,y,D);b!==null&&T===0&&(ze.updateMultisampleRenderTarget(b),ze.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(E,y,D),P.resetDefaultState(),L=-1,k=null,w.pop(),w.length>0?(v=w[w.length-1],Q===!0&&ye.setGlobalState(E.clippingPlanes,v.state.camera)):v=null,S.pop(),S.length>0?M=S[S.length-1]:M=null};function dl(y,D,O,B){if(y.visible===!1)return;if(y.layers.test(D.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(D);else if(y.isLight)v.pushLight(y),y.castShadow&&v.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||q.intersectsSprite(y)){B&&Ze.setFromMatrixPosition(y.matrixWorld).applyMatrix4(He);const fe=Z.update(y),_e=y.material;_e.visible&&M.push(y,fe,_e,O,Ze.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||q.intersectsObject(y))){const fe=Z.update(y),_e=y.material;if(B&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Ze.copy(y.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Ze.copy(fe.boundingSphere.center)),Ze.applyMatrix4(y.matrixWorld).applyMatrix4(He)),Array.isArray(_e)){const me=fe.groups;for(let Ie=0,De=me.length;Ie<De;Ie++){const Te=me[Ie],tt=_e[Te.materialIndex];tt&&tt.visible&&M.push(y,fe,tt,O,Ze.z,Te)}}else _e.visible&&M.push(y,fe,_e,O,Ze.z,null)}}const ne=y.children;for(let fe=0,_e=ne.length;fe<_e;fe++)dl(ne[fe],D,O,B)}function Gd(y,D,O,B){const{opaque:N,transmissive:ne,transparent:fe}=y;v.setupLightsView(O),Q===!0&&ye.setGlobalState(E.clippingPlanes,O),B&&ve.viewport(H.copy(B)),N.length>0&&ho(N,D,O),ne.length>0&&ho(ne,D,O),fe.length>0&&ho(fe,D,O),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function Wd(y,D,O,B){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[B.id]===void 0&&(v.state.transmissionRenderTarget[B.id]=new Rs(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?Ir:Jn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:it.workingColorSpace}));const ne=v.state.transmissionRenderTarget[B.id],fe=B.viewport||H;ne.setSize(fe.z*E.transmissionResolutionScale,fe.w*E.transmissionResolutionScale);const _e=E.getRenderTarget(),me=E.getActiveCubeFace(),Ie=E.getActiveMipmapLevel();E.setRenderTarget(ne),E.getClearColor($),re=E.getClearAlpha(),re<1&&E.setClearColor(16777215,.5),E.clear(),je&&ie.render(O);const De=E.toneMapping;E.toneMapping=qi;const Te=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),v.setupLightsView(B),Q===!0&&ye.setGlobalState(E.clippingPlanes,B),ho(y,O,B),ze.updateMultisampleRenderTarget(ne),ze.updateRenderTargetMipmap(ne),et.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let pt=0,Ct=D.length;pt<Ct;pt++){const Rt=D[pt],{object:xt,geometry:Re,material:Et,group:rt}=Rt;if(Et.side===en&&xt.layers.test(B.layers)){const pn=Et.side;Et.side=dn,Et.needsUpdate=!0,Xd(xt,O,B,Re,Et,rt),Et.side=pn,Et.needsUpdate=!0,tt=!0}}tt===!0&&(ze.updateMultisampleRenderTarget(ne),ze.updateRenderTargetMipmap(ne))}E.setRenderTarget(_e,me,Ie),E.setClearColor($,re),Te!==void 0&&(B.viewport=Te),E.toneMapping=De}function ho(y,D,O){const B=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ne=y.length;N<ne;N++){const fe=y[N],{object:_e,geometry:me,group:Ie}=fe;let De=fe.material;De.allowOverride===!0&&B!==null&&(De=B),_e.layers.test(O.layers)&&Xd(_e,D,O,me,De,Ie)}}function Xd(y,D,O,B,N,ne){y.onBeforeRender(E,D,O,B,N,ne),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),N.onBeforeRender(E,D,O,B,y,ne),N.transparent===!0&&N.side===en&&N.forceSinglePass===!1?(N.side=dn,N.needsUpdate=!0,E.renderBufferDirect(O,D,B,N,y,ne),N.side=Ti,N.needsUpdate=!0,E.renderBufferDirect(O,D,B,N,y,ne),N.side=en):E.renderBufferDirect(O,D,B,N,y,ne),y.onAfterRender(E,D,O,B,N,ne)}function fo(y,D,O){D.isScene!==!0&&(D=Wt);const B=Ee.get(y),N=v.state.lights,ne=v.state.shadowsArray,fe=N.state.version,_e=z.getParameters(y,N.state,ne,D,O),me=z.getProgramCacheKey(_e);let Ie=B.programs;B.environment=y.isMeshStandardMaterial?D.environment:null,B.fog=D.fog,B.envMap=(y.isMeshStandardMaterial?_:A).get(y.envMap||B.environment),B.envMapRotation=B.environment!==null&&y.envMap===null?D.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",Be),Ie=new Map,B.programs=Ie);let De=Ie.get(me);if(De!==void 0){if(B.currentProgram===De&&B.lightsStateVersion===fe)return qd(y,_e),De}else _e.uniforms=z.getUniforms(y),y.onBeforeCompile(_e,E),De=z.acquireProgram(_e,me),Ie.set(me,De),B.uniforms=_e.uniforms;const Te=B.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=ye.uniform),qd(y,_e),B.needsLights=vx(y),B.lightsStateVersion=fe,B.needsLights&&(Te.ambientLightColor.value=N.state.ambient,Te.lightProbe.value=N.state.probe,Te.directionalLights.value=N.state.directional,Te.directionalLightShadows.value=N.state.directionalShadow,Te.spotLights.value=N.state.spot,Te.spotLightShadows.value=N.state.spotShadow,Te.rectAreaLights.value=N.state.rectArea,Te.ltc_1.value=N.state.rectAreaLTC1,Te.ltc_2.value=N.state.rectAreaLTC2,Te.pointLights.value=N.state.point,Te.pointLightShadows.value=N.state.pointShadow,Te.hemisphereLights.value=N.state.hemi,Te.directionalShadowMap.value=N.state.directionalShadowMap,Te.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Te.spotShadowMap.value=N.state.spotShadowMap,Te.spotLightMatrix.value=N.state.spotLightMatrix,Te.spotLightMap.value=N.state.spotLightMap,Te.pointShadowMap.value=N.state.pointShadowMap,Te.pointShadowMatrix.value=N.state.pointShadowMatrix),B.currentProgram=De,B.uniformsList=null,De}function Yd(y){if(y.uniformsList===null){const D=y.currentProgram.getUniforms();y.uniformsList=cc.seqWithValue(D.seq,y.uniforms)}return y.uniformsList}function qd(y,D){const O=Ee.get(y);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function gx(y,D,O,B,N){D.isScene!==!0&&(D=Wt),ze.resetTextureUnits();const ne=D.fog,fe=B.isMeshStandardMaterial?D.environment:null,_e=b===null?E.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:an,me=(B.isMeshStandardMaterial?_:A).get(B.envMap||fe),Ie=B.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Te=!!O.morphAttributes.position,tt=!!O.morphAttributes.normal,pt=!!O.morphAttributes.color;let Ct=qi;B.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Ct=E.toneMapping);const Rt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,xt=Rt!==void 0?Rt.length:0,Re=Ee.get(B),Et=v.state.lights;if(Q===!0&&(xe===!0||y!==k)){const Jt=y===k&&B.id===L;ye.setState(B,y,Jt)}let rt=!1;B.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Et.state.version||Re.outputColorSpace!==_e||N.isBatchedMesh&&Re.batching===!1||!N.isBatchedMesh&&Re.batching===!0||N.isBatchedMesh&&Re.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Re.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Re.instancing===!1||!N.isInstancedMesh&&Re.instancing===!0||N.isSkinnedMesh&&Re.skinning===!1||!N.isSkinnedMesh&&Re.skinning===!0||N.isInstancedMesh&&Re.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Re.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Re.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Re.instancingMorph===!1&&N.morphTexture!==null||Re.envMap!==me||B.fog===!0&&Re.fog!==ne||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==ye.numPlanes||Re.numIntersection!==ye.numIntersection)||Re.vertexAlphas!==Ie||Re.vertexTangents!==De||Re.morphTargets!==Te||Re.morphNormals!==tt||Re.morphColors!==pt||Re.toneMapping!==Ct||Re.morphTargetsCount!==xt)&&(rt=!0):(rt=!0,Re.__version=B.version);let pn=Re.currentProgram;rt===!0&&(pn=fo(B,D,N));let Ns=!1,mn=!1,zr=!1;const At=pn.getUniforms(),on=Re.uniforms;if(ve.useProgram(pn.program)&&(Ns=!0,mn=!0,zr=!0),B.id!==L&&(L=B.id,mn=!0),Ns||k!==y){ve.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),At.setValue(R,"projectionMatrix",y.projectionMatrix),At.setValue(R,"viewMatrix",y.matrixWorldInverse);const cn=At.map.cameraPosition;cn!==void 0&&cn.setValue(R,Se.setFromMatrixPosition(y.matrixWorld)),yt.logarithmicDepthBuffer&&At.setValue(R,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&At.setValue(R,"isOrthographic",y.isOrthographicCamera===!0),k!==y&&(k=y,mn=!0,zr=!0)}if(N.isSkinnedMesh){At.setOptional(R,N,"bindMatrix"),At.setOptional(R,N,"bindMatrixInverse");const Jt=N.skeleton;Jt&&(Jt.boneTexture===null&&Jt.computeBoneTexture(),At.setValue(R,"boneTexture",Jt.boneTexture,ze))}N.isBatchedMesh&&(At.setOptional(R,N,"batchingTexture"),At.setValue(R,"batchingTexture",N._matricesTexture,ze),At.setOptional(R,N,"batchingIdTexture"),At.setValue(R,"batchingIdTexture",N._indirectTexture,ze),At.setOptional(R,N,"batchingColorTexture"),N._colorsTexture!==null&&At.setValue(R,"batchingColorTexture",N._colorsTexture,ze));const Mn=O.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&Le.update(N,O,pn),(mn||Re.receiveShadow!==N.receiveShadow)&&(Re.receiveShadow=N.receiveShadow,At.setValue(R,"receiveShadow",N.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(on.envMap.value=me,on.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&D.environment!==null&&(on.envMapIntensity.value=D.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=dT()),mn&&(At.setValue(R,"toneMappingExposure",E.toneMappingExposure),Re.needsLights&&_x(on,zr),ne&&B.fog===!0&&Me.refreshFogUniforms(on,ne),Me.refreshMaterialUniforms(on,B,ce,se,v.state.transmissionRenderTarget[y.id]),cc.upload(R,Yd(Re),on,ze)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(cc.upload(R,Yd(Re),on,ze),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&At.setValue(R,"center",N.center),At.setValue(R,"modelViewMatrix",N.modelViewMatrix),At.setValue(R,"normalMatrix",N.normalMatrix),At.setValue(R,"modelMatrix",N.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Jt=B.uniformsGroups;for(let cn=0,fl=Jt.length;cn<fl;cn++){const hs=Jt[cn];he.update(hs,pn),he.bind(hs,pn)}}return pn}function _x(y,D){y.ambientLightColor.needsUpdate=D,y.lightProbe.needsUpdate=D,y.directionalLights.needsUpdate=D,y.directionalLightShadows.needsUpdate=D,y.pointLights.needsUpdate=D,y.pointLightShadows.needsUpdate=D,y.spotLights.needsUpdate=D,y.spotLightShadows.needsUpdate=D,y.rectAreaLights.needsUpdate=D,y.hemisphereLights.needsUpdate=D}function vx(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,D,O){const B=Ee.get(y);B.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),Ee.get(y.texture).__webglTexture=D,Ee.get(y.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:O,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,D){const O=Ee.get(y);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0};const yx=R.createFramebuffer();this.setRenderTarget=function(y,D=0,O=0){b=y,F=D,T=O;let B=!0,N=null,ne=!1,fe=!1;if(y){const me=Ee.get(y);if(me.__useDefaultFramebuffer!==void 0)ve.bindFramebuffer(R.FRAMEBUFFER,null),B=!1;else if(me.__webglFramebuffer===void 0)ze.setupRenderTarget(y);else if(me.__hasExternalTextures)ze.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Te=y.depthTexture;if(me.__boundDepthTexture!==Te){if(Te!==null&&Ee.has(Te)&&(y.width!==Te.image.width||y.height!==Te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ze.setupDepthRenderbuffer(y)}}const Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(fe=!0);const De=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[D])?N=De[D][O]:N=De[D],ne=!0):y.samples>0&&ze.useMultisampledRTT(y)===!1?N=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[O]:N=De,H.copy(y.viewport),X.copy(y.scissor),J=y.scissorTest}else H.copy(dt).multiplyScalar(ce).floor(),X.copy(_t).multiplyScalar(ce).floor(),J=vt;if(O!==0&&(N=yx),ve.bindFramebuffer(R.FRAMEBUFFER,N)&&B&&ve.drawBuffers(y,N),ve.viewport(H),ve.scissor(X),ve.setScissorTest(J),ne){const me=Ee.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,O)}else if(fe){const me=D;for(let Ie=0;Ie<y.textures.length;Ie++){const De=Ee.get(y.textures[Ie]);R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0+Ie,De.__webglTexture,O,me)}}else if(y!==null&&O!==0){const me=Ee.get(y.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,me.__webglTexture,O)}L=-1},this.readRenderTargetPixels=function(y,D,O,B,N,ne,fe,_e=0){if(!(y&&y.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me){ve.bindFramebuffer(R.FRAMEBUFFER,me);try{const Ie=y.textures[_e],De=Ie.format,Te=Ie.type;if(!yt.textureFormatReadable(De)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(Te)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=y.width-B&&O>=0&&O<=y.height-N&&(y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(D,O,B,N,Ne.convert(De),Ne.convert(Te),ne))}finally{const Ie=b!==null?Ee.get(b).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(y,D,O,B,N,ne,fe,_e=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&fe!==void 0&&(me=me[fe]),me)if(D>=0&&D<=y.width-B&&O>=0&&O<=y.height-N){ve.bindFramebuffer(R.FRAMEBUFFER,me);const Ie=y.textures[_e],De=Ie.format,Te=Ie.type;if(!yt.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(Te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.bufferData(R.PIXEL_PACK_BUFFER,ne.byteLength,R.STREAM_READ),y.textures.length>1&&R.readBuffer(R.COLOR_ATTACHMENT0+_e),R.readPixels(D,O,B,N,Ne.convert(De),Ne.convert(Te),0);const pt=b!==null?Ee.get(b).__webglFramebuffer:null;ve.bindFramebuffer(R.FRAMEBUFFER,pt);const Ct=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await pg(R,Ct,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,tt),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,ne),R.deleteBuffer(tt),R.deleteSync(Ct),ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,D=null,O=0){const B=Math.pow(2,-O),N=Math.floor(y.image.width*B),ne=Math.floor(y.image.height*B),fe=D!==null?D.x:0,_e=D!==null?D.y:0;ze.setTexture2D(y,0),R.copyTexSubImage2D(R.TEXTURE_2D,O,0,0,fe,_e,N,ne),ve.unbindTexture()};const Mx=R.createFramebuffer(),bx=R.createFramebuffer();this.copyTextureToTexture=function(y,D,O=null,B=null,N=0,ne=null){ne===null&&(N!==0?(ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ne=N,N=0):ne=0);let fe,_e,me,Ie,De,Te,tt,pt,Ct;const Rt=y.isCompressedTexture?y.mipmaps[ne]:y.image;if(O!==null)fe=O.max.x-O.min.x,_e=O.max.y-O.min.y,me=O.isBox3?O.max.z-O.min.z:1,Ie=O.min.x,De=O.min.y,Te=O.isBox3?O.min.z:0;else{const Mn=Math.pow(2,-N);fe=Math.floor(Rt.width*Mn),_e=Math.floor(Rt.height*Mn),y.isDataArrayTexture?me=Rt.depth:y.isData3DTexture?me=Math.floor(Rt.depth*Mn):me=1,Ie=0,De=0,Te=0}B!==null?(tt=B.x,pt=B.y,Ct=B.z):(tt=0,pt=0,Ct=0);const xt=Ne.convert(D.format),Re=Ne.convert(D.type);let Et;D.isData3DTexture?(ze.setTexture3D(D,0),Et=R.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(ze.setTexture2DArray(D,0),Et=R.TEXTURE_2D_ARRAY):(ze.setTexture2D(D,0),Et=R.TEXTURE_2D),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,D.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,D.unpackAlignment);const rt=R.getParameter(R.UNPACK_ROW_LENGTH),pn=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Ns=R.getParameter(R.UNPACK_SKIP_PIXELS),mn=R.getParameter(R.UNPACK_SKIP_ROWS),zr=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,Rt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Rt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ie),R.pixelStorei(R.UNPACK_SKIP_ROWS,De),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Te);const At=y.isDataArrayTexture||y.isData3DTexture,on=D.isDataArrayTexture||D.isData3DTexture;if(y.isDepthTexture){const Mn=Ee.get(y),Jt=Ee.get(D),cn=Ee.get(Mn.__renderTarget),fl=Ee.get(Jt.__renderTarget);ve.bindFramebuffer(R.READ_FRAMEBUFFER,cn.__webglFramebuffer),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,fl.__webglFramebuffer);for(let hs=0;hs<me;hs++)At&&(R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(y).__webglTexture,N,Te+hs),R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Ee.get(D).__webglTexture,ne,Ct+hs)),R.blitFramebuffer(Ie,De,fe,_e,tt,pt,fe,_e,R.DEPTH_BUFFER_BIT,R.NEAREST);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else if(N!==0||y.isRenderTargetTexture||Ee.has(y)){const Mn=Ee.get(y),Jt=Ee.get(D);ve.bindFramebuffer(R.READ_FRAMEBUFFER,Mx),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,bx);for(let cn=0;cn<me;cn++)At?R.framebufferTextureLayer(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Mn.__webglTexture,N,Te+cn):R.framebufferTexture2D(R.READ_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Mn.__webglTexture,N),on?R.framebufferTextureLayer(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,Jt.__webglTexture,ne,Ct+cn):R.framebufferTexture2D(R.DRAW_FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_2D,Jt.__webglTexture,ne),N!==0?R.blitFramebuffer(Ie,De,fe,_e,tt,pt,fe,_e,R.COLOR_BUFFER_BIT,R.NEAREST):on?R.copyTexSubImage3D(Et,ne,tt,pt,Ct+cn,Ie,De,fe,_e):R.copyTexSubImage2D(Et,ne,tt,pt,Ie,De,fe,_e);ve.bindFramebuffer(R.READ_FRAMEBUFFER,null),ve.bindFramebuffer(R.DRAW_FRAMEBUFFER,null)}else on?y.isDataTexture||y.isData3DTexture?R.texSubImage3D(Et,ne,tt,pt,Ct,fe,_e,me,xt,Re,Rt.data):D.isCompressedArrayTexture?R.compressedTexSubImage3D(Et,ne,tt,pt,Ct,fe,_e,me,xt,Rt.data):R.texSubImage3D(Et,ne,tt,pt,Ct,fe,_e,me,xt,Re,Rt):y.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,ne,tt,pt,fe,_e,xt,Re,Rt.data):y.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,ne,tt,pt,Rt.width,Rt.height,xt,Rt.data):R.texSubImage2D(R.TEXTURE_2D,ne,tt,pt,fe,_e,xt,Re,Rt);R.pixelStorei(R.UNPACK_ROW_LENGTH,rt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,pn),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Ns),R.pixelStorei(R.UNPACK_SKIP_ROWS,mn),R.pixelStorei(R.UNPACK_SKIP_IMAGES,zr),ne===0&&D.generateMipmaps&&R.generateMipmap(Et),ve.unbindTexture()},this.initRenderTarget=function(y){Ee.get(y).__webglFramebuffer===void 0&&ze.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?ze.setTextureCube(y,0):y.isData3DTexture?ze.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?ze.setTexture2DArray(y,0):ze.setTexture2D(y,0),ve.unbindTexture()},this.resetState=function(){F=0,T=0,b=null,ve.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),t.unpackColorSpace=it._getUnpackColorSpace()}}const It={width:87.48,depth:58.32,floorTile:3,wallThickness:2,backdropSize:4e3,backdropZ:-1,backdropColor:859922},dd=[{x:49.74,y:0},{x:-49.74,y:0},{x:0,y:35.16},{x:0,y:-35.16},{x:49.74,y:35.16},{x:-49.74,y:35.16},{x:49.74,y:-35.16},{x:-49.74,y:-35.16}],Zn={azimuthDeg:-45,tiltDeg:45,height:38,viewWidth:40,followOffsetMax:4,near:.1,far:4e3},kn={ambientColor:9417727,ambientIntensity:.45,dirColor:12571903,dirIntensity:.955,dirPosition:{x:15,y:-20,z:30},shadowHalfX:76,shadowHalfY:61,shadowNear:1,shadowFar:120},Ar={menuRotationSpeed:.12,toastLife:3500,toastFade:300,vignetteStrength:1,vignetteColor:"3, 10, 18",resetConfirm:3e3},at={pines:["rfnxJv0Rqa","igSu0cPoBz","79gmlLnweB","Zt62gceKXZ"],twisted:["9aWlx82xUf","GVTsMmuzv7","7PDBpElkQr"],pineHeightMin:3.2,pineHeightMax:4.2,twistedHeightMin:2.5,twistedHeightMax:3.6,heightJitterMin:.85,heightJitterMax:1.15,ringStart:.2,ringDepth:12,ringAttempts:6e3,ringCount:800,minSpacing:.7,scatterAttempts:1e3,scatterCount:160,scatterSpacing:3,houseClearance:5.5,spawnLaneClearance:3.5,centerClearance:6,arenaMargin:3,fadeOpacity:.5,fadeDuration:.25,fadeCheckRadius:10,fadeLateral:1.6},Vi={houses:[{asset:"053kskrV4U_",x:-31.68,y:18.72},{asset:"oJJIRwv6Bo",x:31.68,y:18.72},{asset:"L7h0SjZX2K",x:-31.68,y:-18.72},{asset:"vZ1CLbWmSx",x:31.68,y:-18.72},{asset:"wxi3kAu5ey",x:-9.9,y:6.3}],houseHeight:4.95,houseFadeRadius:12,houseFadeLateral:4.5,houseMaxFootprint:6.3},ct={baseHearts:5,maxHearts:7,targetHeight:1,baseSpeed:4,hopDistance:1.6,hopHeight:1.1,baseFireCooldown:.6,baseDamage:1,baseProjectiles:1,basePierce:0,baseRange:14,baseIFrames:1,iframeFlashOpacity:.3,deathAnimDuration:1.2,leanPerSpeed:.06,leanMax:.5},lc={deadzone:4,tapMaxMovePx:10,doubleTap:350,doubleTapMaxDist:50},Rn={padding:.05,playerRadiusMul:.8,enemyRadiusMul:1,bossRadiusMul:1,houseRadiusMul:.8,projectileRadiusMul:.9},ke={maxAlive:200,baseSpeed:3.2,baseDropChance:.01,HealthyDropChance:.1,stunDuration:2,knockbackDistance:2.5,hitFlashDuration:.08,deathLinger:.9,deathFade:.7,growthPerMinute:.1,growthSpeedCap:1.5,growthAttackPerMinute:.1,doomScore:25e3,spawnJitter:1.5,silhouetteColor:657930,silhouetteBlend:.25,rangedStandoff:12,rangedBand:2,rangedFireInterval:2.5,rangedAimLead:.8,rangedAimError:1.5,speederDashOn:.5,speederDashOff:.3,speederZigzagDeg:30,speederZigzagHz:2.5},qe={speedMul:.7,contactDamage:2,chargeTime:1.5,orbCount:24,phaseAChase:3,dashTelegraph:.7,dashDuration:.55,dashSpeed:20,dashDamage:4,phaseBChase:1.5,heartDropsMin:1,heartDropsMax:2,knockbackDistance:2.5,deathFade:1.2,powerupDropChance:1,attacks:["volley","shockwave","spiral","summon","dash"],waveColor:12872703,waveArcDeg:90,waveMaxRadius:22,waveSpeed:20,waveSlowMul:.75,waveSlowDuration:1,spiralDuration:1.8,spiralInterval:.12,spiralOrbs:2,spiralStepDeg:24,spiralSpeedMul:.7,summonCount:3,summonTypes:["speeder","tank"],summonRadius:1.5,hpRageFloor:.15},st={colors:{player:16769357,minion:8257492,enemy:16734810,boss:12872703},playerSpeed:15,minionSpeedMul:2,playerRadius:.35,playerLifetime:1.733,enemySpeed:4,enemyRadius:.3,enemyLifetime:6,bossOrbSpeed:15,bossOrbRadius:.35,bossOrbLifetime:5,multiShotSpreadDeg:8,aimLeadFactor:.8,damage:1},bs={magnetRadius:2.2,collectRadius:.8,pulseAmplitude:.18,pulseHz:1.6,heal:1,lifetime:30,powerupLifetime:10},rn={color:5100287,damageBase:3,damagePerHeart:2,tickInterval:1,tint:5100287,tintIntensity:.35,bossTintIntensity:.18},to={cardsShown:3,reshuffleAllowed:1,maxCards:12,inputLock:400},ts={masterVolumeDefault:.5,lowPassHz:1200,crossfadeSnappy:.15,crossfadeLong:1,trackLength:9,bossStep3Length:19,sfxPanMax:.4},Ue={pushCooldown:1,pushShield:.6,pushReflectRadius:7,pushShockwaveRadius:7,pushShockwaveBaseDamage:5,pushStun:ke.stunDuration,pushReflectDamage:5,pushKnockback:3,pushGlowRadius:3,pushImpactDuration:.03,pushRingDuration:.1,pushFailDuration:.15,dashCooldown:1,dashDistance:15,dashExtraIFrames:.5,dashCloneCount:4,dashCloneLife:.35,trailBaseDuration:1,trailPerHeart:.5,trailWidth:2,minionCount:2,minionOrbitRadius:1.7,minionOrbitSpeed:1.3,minionHeight:1.2,minionDamage:1,minionInterval:.4444,minionRateJitter:.15,minionRangeMul:1.5};function Fr(i,e,t){return Math.min(t,Math.max(e,i))}function f0(i,e,t,n,s,r){const a=s-t,o=r-n,c=a*a+o*o,l=c>0?Fr(((i-t)*a+(e-n)*o)/c,0,1):0;return Math.hypot(i-(t+a*l),e-(n+o*l))}const pT=4/3,mT=16/9,xT=700,gT=560;let uc=1,Ni={left:0,top:0,width:0,height:0};function p0(){const i=window.innerWidth,e=window.innerHeight;uc=Fr(i/e,pT,mT);let t=i,n=t/uc;n>e&&(n=e,t=n*uc),Ni={left:(i-t)/2,top:(e-n)/2,width:t,height:n};const s=document.documentElement.style;s.setProperty("--game-left",`${Ni.left}px`),s.setProperty("--game-top",`${Ni.top}px`),s.setProperty("--game-width",`${Ni.width}px`),s.setProperty("--game-height",`${Ni.height}px`);const r=Math.max(.05,Math.min(1,Ni.width/xT,Ni.height/gT));return s.setProperty("--ui-scale",`${r}`),Ni}function m0(){return uc}p0();const Gi=Zn.viewWidth,mp=m0(),Gt=new qc(-Gi/2,Gi/2,Gi/mp/2,-Gi/mp/2,Zn.near,Zn.far),xp=Zn.azimuthDeg*Math.PI/180,_T=Zn.tiltDeg*Math.PI/180,gp=Zn.height/Math.tan(_T);Gt.position.set(gp*Math.cos(xp),gp*Math.sin(xp),Zn.height);Gt.up.set(0,0,1);Gt.lookAt(0,0,0);Gt.updateProjectionMatrix();const zi=Gt.position.clone(),pi=new C;function vT(){const i=m0();Gt.left=-Gi/2,Gt.right=Gi/2,Gt.top=Gi/i/2,Gt.bottom=-Gi/i/2,Gt.updateProjectionMatrix()}function yT(i,e,t){const n=t.x,s=t.y;if(e){const c=e.x-n,l=e.y-s,u=Math.hypot(c,l);if(u>Zn.followOffsetMax){const h=Zn.followOffsetMax/u;pi.x=n+c*h,pi.y=s+l*h}else pi.x=n+c,pi.y=s+l}else pi.x=n,pi.y=s;const r=1-Math.exp(-1*i),a=Gt.position.x-zi.x,o=Gt.position.y-zi.y;Gt.position.set(a+(pi.x-a)*r+zi.x,o+(pi.y-o)*r+zi.y,zi.z)}function MT(i){pi.set(i.x,i.y,0),Gt.position.set(i.x+zi.x,i.y+zi.y,zi.z)}const bT=document.querySelector("canvas.game"),Ai=new fT({canvas:bT,alpha:!0,antialias:!0});Ai.shadowMap.enabled=!0;Ai.shadowMap.type=xm;function jc(){const i=p0();Ai.setPixelRatio(Math.min(window.devicePixelRatio,2)),Ai.setSize(i.width,i.height,!1),vT()}jc();window.addEventListener("resize",jc);window.addEventListener("orientationchange",jc);window.visualViewport?.addEventListener("resize",jc);const Jc=.1,$i=1e-6,cs=new Map;function Zc(i,e,t){const n={position:e,shape:"circle",radius:t};return cs.set(i,n),n}function x0(i,e,t,n,s={}){const r={position:e,shape:"box",halfWidth:t,halfDepth:n,boundary:!!s.boundary};return cs.set(i,r),r}function Qc(i){cs.delete(i)}function no(i){return cs.get(i)}function wc(i,e,t,n){if(n.shape==="box"){const s=Math.max(Math.abs(i-n.position.x)-n.halfWidth,0),r=Math.max(Math.abs(e-n.position.y)-n.halfDepth,0);return Math.max(0,t+Rn.padding-Math.hypot(s,r))}return Math.max(0,t+n.radius+Rn.padding-Math.hypot(i-n.position.x,e-n.position.y))}function g0(i,e,t,n,s,r){return t+r+Rn.padding-Math.hypot(n-i,s-e)>$i}function Ot(i,e,t,n=!1){for(const s of cs.values()){if(s===i||s.shape!=="box"||n&&s.boundary)continue;const r=wc(e,t,i.radius,s);if(r<=$i)continue;const a=wc(i.position.x,i.position.y,i.radius,s);if(a<=$i||r>a+$i)return!1}return!0}function ST(i,e,t,n=!1){for(const s of cs.values())if(s.shape==="box"&&!(n&&s.boundary)&&wc(i,e,t,s)>$i)return!1;return!0}function fd(i,e,t,n,s,r=!1){const a=t-i,o=n-e;for(const c of cs.values()){if(c.shape!=="box"||r&&c.boundary)continue;const l=c.position.x-c.halfWidth-s,u=c.position.x+c.halfWidth+s,h=c.position.y-c.halfDepth-s,d=c.position.y+c.halfDepth+s;let f=0,m=1;if(Math.abs(a)<$i){if(i<l||i>u)continue}else{let g=(l-i)/a,x=(u-i)/a;if(g>x&&([g,x]=[x,g]),f=Math.max(f,g),m=Math.min(m,x),f>m)continue}if(Math.abs(o)<$i){if(e<h||e>d)continue}else{let g=(h-e)/o,x=(d-e)/o;if(g>x&&([g,x]=[x,g]),f=Math.max(f,g),m=Math.min(m,x),f>m)continue}return!1}return!0}function pd(i,e,t){for(const n of cs.values())if(wc(i,e,t,n)>$i)return!1;return!0}function _p(i){i.updateMatrixWorld(!0);let e=0,t=1/0;const n=new C(1/0,1/0,1/0),s=new C(-1/0,-1/0,-1/0),r=new C;return i.traverse(a=>{if(!a.isMesh)return;const o=a.geometry.attributes.position;for(let c=0;c<o.count;c++)a.getVertexPosition(c,r).applyMatrix4(a.matrixWorld),e=Math.max(e,Math.hypot(r.x,r.y)),t=Math.min(t,r.z),n.min(r),s.max(r)}),Number.isFinite(t)||(t=0,n.set(0,0,0),s.set(0,0,0)),{radius:e,groundOffset:-t,size:{x:s.x-n.x,y:s.y-n.y,z:s.z-n.z}}}function vp(i,e){if(e===ng)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===ju||e===Am){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===ju)for(let a=1;a<=n;a++)s.push(t.getX(0)),s.push(t.getX(a)),s.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(s.push(t.getX(a)),s.push(t.getX(a+1)),s.push(t.getX(a+2))):(s.push(t.getX(a+2)),s.push(t.getX(a+1)),s.push(t.getX(a)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class TT extends Nr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new RT(t)}),this.register(function(t){return new PT(t)}),this.register(function(t){return new kT(t)}),this.register(function(t){return new zT(t)}),this.register(function(t){return new HT(t)}),this.register(function(t){return new LT(t)}),this.register(function(t){return new DT(t)}),this.register(function(t){return new NT(t)}),this.register(function(t){return new UT(t)}),this.register(function(t){return new CT(t)}),this.register(function(t){return new FT(t)}),this.register(function(t){return new IT(t)}),this.register(function(t){return new BT(t)}),this.register(function(t){return new OT(t)}),this.register(function(t){return new AT(t)}),this.register(function(t){return new VT(t)}),this.register(function(t){return new GT(t)})}load(e,t,n,s){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=xa.extractUrlBase(e);a=xa.resolveURL(l,this.path)}else a=xa.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new s0(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===_0){try{a[Je.KHR_BINARY_GLTF]=new WT(e)}catch(h){s&&s(h);return}r=JSON.parse(a[Je.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new iE(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case Je.KHR_MATERIALS_UNLIT:a[h]=new wT;break;case Je.KHR_DRACO_MESH_COMPRESSION:a[h]=new XT(r,this.dracoLoader);break;case Je.KHR_TEXTURE_TRANSFORM:a[h]=new YT;break;case Je.KHR_MESH_QUANTIZATION:a[h]=new qT;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function ET(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class AT{constructor(e){this.parser=e,this.name=Je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Oe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new a0(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new lv(u),l.distance=h;break;case"spot":l=new ov(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Xn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class wT{constructor(){this.name=Je.KHR_MATERIALS_UNLIT}getMaterialType(){return Kt}extendParams(e,t,n){const s=[];e.color=new Oe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],an),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Nt))}return Promise.all(s)}}class CT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class RT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(o,o)}return Promise.all(r)}}class PT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class IT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class LT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Oe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=s.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],an)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Nt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class DT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class NT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Oe().setRGB(o[0],o[1],o[2],an),Promise.all(r)}}class UT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class FT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Oe().setRGB(o[0],o[1],o[2],an),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Nt)),Promise.all(r)}}class OT{constructor(e){this.parser=e,this.name=Je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class BT{constructor(e){this.parser=e,this.name=Je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ni}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],a=s.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class kT{constructor(e){this.parser=e,this.name=Je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class zT{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class HT{constructor(e){this.parser=e,this.name=Je.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=s.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}}class VT{constructor(e){this.name=Je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){const f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}}class GT{constructor(e){this.name=Je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const l of s.primitives)if(l.mode!==Sn.TRIANGLES&&l.mode!==Sn.TRIANGLE_STRIP&&l.mode!==Sn.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(const m of h){const g=new Ge,x=new C,p=new vn,M=new C(1,1,1),v=new o_(m.geometry,m.material,d);for(let S=0;S<d;S++)c.TRANSLATION&&x.fromBufferAttribute(c.TRANSLATION,S),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,S),c.SCALE&&M.fromBufferAttribute(c.SCALE,S),v.setMatrixAt(S,g.compose(x,p,M));for(const S in c)if(S==="_COLOR_0"){const w=c[S];v.instanceColor=new Qu(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&m.geometry.setAttribute(S,c[S]);bt.prototype.copy.call(v,m),this.parser.assignFinalMaterial(v),f.push(v)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}}const _0="glTF",Qr=12,yp={JSON:1313821514,BIN:5130562};class WT{constructor(e){this.name=Je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==_0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-Qr,r=new DataView(e,Qr);let a=0;for(;a<s;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===yp.JSON){const l=new Uint8Array(e,Qr+a,o);this.content=n.decode(l)}else if(c===yp.BIN){const l=Qr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class XT{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=rh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=rh[u]||u.toLowerCase();if(a[u]!==void 0){const d=n.accessors[e.attributes[u]],f=hr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(const m in f.attributes){const g=f.attributes[m],x=c[m];x!==void 0&&(g.normalized=x)}h(f)},o,l,an,d)})})}}class YT{constructor(){this.name=Je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class qT{constructor(){this.name=Je.KHR_MESH_QUANTIZATION}}class v0 extends eo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-t,h=(n-t)/u,d=h*h,f=d*h,m=e*l,g=m-l,x=-2*f+3*d,p=f-d,M=1-x,v=p-d+h;for(let S=0;S!==o;S++){const w=a[g+S+o],E=a[g+S+c]*u,I=a[m+S+o],F=a[m+S]*u;r[S]=M*w+v*E+x*I+p*F}return r}}const $T=new vn;class KT extends v0{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return $T.fromArray(r).normalize().toArray(r),r}}const Sn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mp={9728:nn,9729:tn,9984:vm,9985:ic,9986:aa,9987:_i},bp={33071:Kn,33648:yc,10497:es},Zl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ui={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},jT={CUBICSPLINE:void 0,LINEAR:Oa,STEP:Fa},Ql={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function JT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qa({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ti})),i.DefaultMaterial}function _s(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Xn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function ZT(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function QT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function eE(i){let e;const t=i.extensions&&i.extensions[Je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+eu(t.attributes):e=i.indices+":"+eu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+eu(i.targets[n]);return e}function eu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function ah(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function tE(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const nE=new Ge;class iE{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new ET,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new r0(this.options.manager):this.textureLoader=new dv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new s0(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return _s(r,o,s),Xn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,a){n.load(xa.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const a=Zl[s.type],o=hr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new sn(l,a,c))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Zl[s.type],l=hr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let g,x;if(f&&f!==h){const p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let v=t.cache.get(M);v||(g=new l(o,p*f,s.count*f/u),v=new Bm(g,f/u),t.cache.add(M,v)),x=new za(v,c,d%f/u,m)}else o===null?g=new l(s.count*c):g=new l(o,d,s.count*c),x=new sn(g,c,m);if(s.sparse!==void 0){const p=Zl.SCALAR,M=hr[s.sparse.indices.componentType],v=s.sparse.indices.byteOffset||0,S=s.sparse.values.byteOffset||0,w=new M(a[1],v,s.sparse.count*p),E=new l(a[2],S,s.sparse.count*c);o!==null&&(x=new sn(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let I=0,F=w.length;I<F;I++){const T=w[I];if(x.setX(T,E[I*c]),c>=2&&x.setY(T,E[I*c+1]),c>=3&&x.setZ(T,E[I*c+2]),c>=4&&x.setW(T,E[I*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=m}return x})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Mp[d.magFilter]||tn,u.minFilter=Mp[d.minFilter]||_i,u.wrapS=bp[d.wrapS]||es,u.wrapT=bp[d.wrapT]||es,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==nn&&u.minFilter!==tn,s.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=s.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const x=new Ft(g);x.needsUpdate=!0,d(x)}),t.load(xa.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),Xn(h,a),h.userData.mimeType=a.mimeType||tE(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[Je.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Je.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[Je.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Gm,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Vm,Bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qa}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[Je.KHR_MATERIALS_UNLIT]){const h=s[Je.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Oe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Nt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=en);const u=r.alphaMode||Ql.OPAQUE;if(u===Ql.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Ql.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Kt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Kt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Kt){const h=r.emissiveFactor;o.emissive=new Oe().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==Kt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Nt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),Xn(h,r),t.associations.set(h,{materials:e}),r.extensions&&_s(s,h,r),h})}createUniqueName(e){const t=ut.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[Je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Sp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=eE(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[Je.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Sp(new jt,l,t),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?JT(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){const g=u[f],x=a[f];let p;const M=l[f];if(x.mode===Sn.TRIANGLES||x.mode===Sn.TRIANGLE_STRIP||x.mode===Sn.TRIANGLE_FAN||x.mode===void 0)p=r.isSkinnedMesh===!0?new s_(g,M):new Bt(g,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),x.mode===Sn.TRIANGLE_STRIP?p.geometry=vp(p.geometry,Am):x.mode===Sn.TRIANGLE_FAN&&(p.geometry=vp(p.geometry,ju));else if(x.mode===Sn.LINES)p=new h_(g,M);else if(x.mode===Sn.LINE_STRIP)p=new id(g,M);else if(x.mode===Sn.LINE_LOOP)p=new d_(g,M);else if(x.mode===Sn.POINTS)p=new f_(g,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(p.geometry.morphAttributes).length>0&&QT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Xn(p,r),x.extensions&&_s(s,p,x),t.assignFinalMaterial(p),h.push(p)}for(let f=0,m=h.length;f<m;f++)t.associations.set(h[f],{meshes:e,primitives:f});if(h.length===1)return r.extensions&&_s(s,h[0],r),h[0];const d=new un;r.extensions&&_s(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new ln(Zu.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new qc(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Xn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const d=new Ge;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new td(o,c)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){const f=s.channels[h],m=s.samplers[f.sampler],g=f.target,x=g.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,M=s.parameters!==void 0?s.parameters[m.output]:m.output;g.node!==void 0&&(a.push(this.getDependency("node",x)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(m),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],f=h[1],m=h[2],g=h[3],x=h[4],p=[];for(let v=0,S=d.length;v<S;v++){const w=d[v],E=f[v],I=m[v],F=g[v],T=x[v];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const b=n._createAnimationTracks(w,E,I,F,T);if(b)for(let L=0;L<b.length;L++)p.push(b[L])}const M=new ih(r,void 0,p);return Xn(M,s),M})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,nE)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Hm:l.length>1?u=new un:l.length===1?u=l[0]:u=new bt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),Xn(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){const h=new Ge;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){const h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new un;n.name&&(r.name=s.createUniqueName(n.name)),Xn(r,n),n.extensions&&_s(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,f]of s.associations)(d instanceof Bn||d instanceof Ft)&&h.set(d,f);return u.traverse(d=>{const f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){const a=[],o=e.name?e.name:e.uuid,c=[];Ui[r.path]===Ui.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o);let l;switch(Ui[r.path]){case Ui.weights:l=Sr;break;case Ui.rotation:l=Tr;break;case Ui.translation:case Ui.scale:l=Er;break;default:n.itemSize===1?l=Sr:l=Er;break}const u=s.interpolation!==void 0?jT[s.interpolation]:Oa,h=this._getArrayFromAccessor(n);for(let d=0,f=c.length;d<f;d++){const m=new l(c[d]+"."+Ui[r.path],t.array,h,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),a.push(m)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ah(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Tr?KT:v0;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function sE(i,e,t){const n=e.attributes,s=new Cn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),o.normalized){const u=ah(hr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new C,c=new C;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=ah(hr[d.componentType]);c.multiplyScalar(g)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;const a=new ei;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Sp(i,e,t){const n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(const a in n){const o=rh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return it.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${it.workingColorSpace}" not supported.`),Xn(i,e),sE(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?ZT(i,e.targets,t):i})}function rE(i){const e=new Map,t=new Map,n=i.clone();return y0(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function y0(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)y0(i.children[n],e.children[n],t)}const aE=new TT;function el(i){return"./"+i.replace(/^\/+/,"")}function io(i){return new Promise((e,t)=>{aE.load(el(i),e,void 0,t)})}function Or(i){if(i.userData.__skinned===void 0){let e=!1;i.traverse(t=>{t.isSkinnedMesh&&(e=!0)}),i.userData.__skinned=e}return i.userData.__skinned?rE(i):i.clone()}function wr(i,{targetHeight:e,yaw:t=0}={}){i.rotation.x=Math.PI/2,i.rotation.y=t,i.scale.setScalar(1);const n=_p(i),s=e&&n.size.z>0?e/n.size.z:1;i.scale.setScalar(s);const r=_p(i);return i.position.z+=r.groundOffset,{radius:r.radius,groundOffset:r.groundOffset,size:r.size,scale:s}}function so(i){i.traverse(e=>{e.isMesh&&(e.castShadow=!0)})}function ro(i){const e=[];return i.traverse(t=>{t.isMesh&&(Array.isArray(t.material)?(t.material=t.material.map(n=>n.clone()),e.push(...t.material)):t.material&&(t.material=t.material.clone(),e.push(t.material)))}),e}function M0(i,e){const t=e<1;for(const n of i)n.transparent!==t&&(n.transparent=t,n.needsUpdate=!0),n.opacity=e}const Wi=new un;function oE(){const i=new r0().load(el("/assets/PlaneMesh.png"));i.wrapS=es,i.wrapT=es,i.repeat.set(It.width/It.floorTile,It.depth/It.floorTile),i.colorSpace=Nt,i.anisotropy=Ai.capabilities.getMaxAnisotropy();const e=new Bt(new os(It.width,It.depth),new Qa({map:i,roughness:1,metalness:0}));return e.receiveShadow=!0,e}function cE(){const i=new Bt(new os(It.backdropSize,It.backdropSize),new Qa({color:It.backdropColor,roughness:1,metalness:0}));return i.position.z=It.backdropZ,i.receiveShadow=!0,i}function lE(){const i=It.width/2,e=It.depth/2,t=It.wallThickness,n=[[0,e+t/2,i+t,t/2],[0,-e-t/2,i+t,t/2],[-i-t/2,0,t/2,e+t],[i+t/2,0,t/2,e+t]];for(const[s,r,a,o]of n){const c=new bt;x0(c,new C(s,r,0),a,o,{boundary:!0})}}function uE(i){return Wi.add(cE()),Wi.add(oE()),lE(),i.add(Wi),Wi}function hE(i){Wi.rotation.z+=Ar.menuRotationSpeed*i}function dE(){Wi.rotation.z=0}const b0=Zn.azimuthDeg*Math.PI/180,S0=-Math.cos(b0),T0=-Math.sin(b0),fE=T0,pE=-S0;function E0(i,e,t,{radius:n,lateral:s,targetOpacity:r,duration:a}){if(i.length===0)return;const o=n*n,c=e/a;for(const l of i){const u=l.object.position.x-t.x,h=l.object.position.y-t.y;let d=1;if(u*u+h*h<=o&&u*S0+h*T0<0&&Math.abs(u*fE+h*pE)<=s&&(d=r),l.opacity===d)continue;l.opacity=d<l.opacity?Math.max(d,l.opacity-c):Math.min(d,l.opacity+c);const f=l.opacity<1;for(const m of l.materials)m.transparent!==f&&(m.transparent=f,m.needsUpdate=!0),m.opacity=l.opacity}}const A0=[];async function mE(i,e){const n=(await io(`/assets/${i.asset}.glb`)).scene,s=Math.atan2(-i.y,-i.x),r=Math.round(s/(Math.PI/2))*(Math.PI/2),a=Or(n);so(a);const o=new Set;a.traverse(M=>{if(M.isMesh)if(Array.isArray(M.material))for(const v of M.material)o.add(v);else M.material&&o.add(M.material)}),wr(a,{targetHeight:Vi.houseHeight,yaw:r});const c=new un;c.add(a),c.updateMatrixWorld(!0);const u=new Cn().setFromObject(c).getSize(new C),h=Math.max(u.x,u.y);if(h>Vi.houseMaxFootprint){const M=Vi.houseMaxFootprint/h;wr(a,{targetHeight:Vi.houseHeight*M,yaw:r})}c.updateMatrixWorld(!0);const d=new Cn().setFromObject(c),f=d.getSize(new C),m=d.getCenter(new C),g=new un;a.position.x-=m.x,a.position.y-=m.y,g.add(a),g.position.set(i.x,i.y,0),e.add(g);const x=f.x/2*Rn.houseRadiusMul,p=f.y/2*Rn.houseRadiusMul;x0(g,g.position,x,p),A0.push({object:g,materials:o,opacity:1})}function xE(){return Vi.houses.map(i=>({x:i.x,y:i.y}))}async function gE(i){for(const e of Vi.houses)try{await mE(e,i)}catch(t){console.error(`Failed to load house model ${e.asset}.glb`,t)}}function _E(i,e){E0(A0,i,e,{radius:Vi.houseFadeRadius,lateral:Vi.houseFadeLateral,targetOpacity:at.fadeOpacity,duration:at.fadeDuration})}const w0=[],oh=new Map;async function vE(){const i=[...at.pines,...at.twisted],e=await Promise.all(i.map(async t=>{try{return[t,(await io(`/assets/${t}.glb`)).scene]}catch(n){return console.error(`Failed to load tree model ${t}.glb`,n),[t,null]}}));for(const[t,n]of e)n&&oh.set(t,n)}function Tp(i,e,t,n,s,r){const a=e.filter(m=>oh.has(m));if(a.length===0)return null;const o=a[Math.floor(Math.random()*a.length)],c=Or(oh.get(o)),l=at.heightJitterMin+Math.random()*(at.heightJitterMax-at.heightJitterMin),u=(t+Math.random()*(n-t))*l,h=Math.random()*Math.PI*2,{groundOffset:d}=wr(c,{targetHeight:u,yaw:h});c.position.set(s,r,d);const f=ro(c);return so(c),c.traverse(m=>{m.isMesh&&(m.receiveShadow=!0)}),i.add(c),w0.push({object:c,materials:f,opacity:1}),c}function yE(){const i=It.width/2+It.wallThickness,e=It.depth/2+It.wallThickness,t=i+at.ringDepth,n=e+at.ringDepth,s=i+at.ringStart,r=e+at.ringStart,a=(Math.random()*2-1)*t,o=(Math.random()*2-1)*n;return Math.abs(a)<=s&&Math.abs(o)<=r?null:{x:a,y:o}}function ME(){const i=(Math.random()*2-1)*(It.width/2-at.arenaMargin),e=(Math.random()*2-1)*(It.depth/2-at.arenaMargin);if(Math.hypot(i,e)<at.centerClearance)return null;for(const t of xE())if(Math.hypot(i-t.x,e-t.y)<at.houseClearance)return null;for(const t of dd)if(f0(i,e,t.x,t.y,0,0)<at.spawnLaneClearance)return null;return{x:i,y:e}}function Ep(i,e,t){const n=t*t;for(const s of e){const r=i.x-s.x,a=i.y-s.y;if(r*r+a*a<n)return!1}return!0}async function bE(i){await vE();const e=[];let t=0;for(let s=0;s<at.ringAttempts&&t<at.ringCount;s++){const r=yE();if(!r||!Ep(r,e,at.minSpacing))continue;if(!Tp(i,at.pines,at.pineHeightMin,at.pineHeightMax,r.x,r.y))break;e.push(r),t++}let n=0;for(let s=0;s<at.scatterAttempts&&n<at.scatterCount;s++){const r=ME();if(!r||!Ep(r,e,at.scatterSpacing))continue;if(!Tp(i,at.twisted,at.twistedHeightMin,at.twistedHeightMax,r.x,r.y))break;e.push(r),n++}}function SE(i,e){E0(w0,i,e,{radius:at.fadeCheckRadius,lateral:at.fadeLateral,targetOpacity:at.fadeOpacity,duration:at.fadeDuration})}const Fe={MAIN_MENU:"MAIN_MENU",CHARACTER_SELECTION:"CHARACTER_SELECTION",WAVE_PLAYING:"WAVE_PLAYING",POWERUP_DRAFT:"POWERUP_DRAFT",PAUSE_MENU:"PAUSE_MENU",GAME_OVER:"GAME_OVER"};let hc=Fe.MAIN_MENU;const dc=[];function ls(i){return dc.push(i),()=>{const e=dc.indexOf(i);e!==-1&&dc.splice(e,1)}}function wi(){return hc}function hn(i){if(i===hc)return;const e=hc;hc=i;for(const t of dc)t(i,e)}const la=new de;let ga=!1;const Yo=new C,Ap=new C,ea=new C,tr=new C;let ta=!1,wp=0,Cp=0,fc=0,C0=0,R0=0,qo=!1;const P0=[];let Rp=!1;function TE(){if(Rp)return;Rp=!0;const i=t=>t.target===Ai.domElement,e=t=>{const n=Ai.domElement.getBoundingClientRect();la.set((t.clientX-n.left)/n.width*2-1,-((t.clientY-n.top)/n.height)*2+1),ga=!0};window.addEventListener("pointermove",t=>{i(t)&&e(t)}),window.addEventListener("pointerdown",t=>{if(!i(t)){ta=!1;return}e(t),ta=!0,wp=t.clientX,Cp=t.clientY,qo=!1;const n=performance.now(),s=Math.hypot(t.clientX-C0,t.clientY-R0);if(fc&&n-fc<=lc.doubleTap&&s<=lc.doubleTapMaxDist){fc=0,qo=!0;for(const r of P0)r()}}),window.addEventListener("pointerup",t=>{if(!ta)return;ta=!1,Math.hypot(t.clientX-wp,t.clientY-Cp)<=lc.tapMaxMovePx&&!qo&&AE(t),qo=!1,t.pointerType==="touch"&&(ga=!1)}),window.addEventListener("pointercancel",t=>{ta=!1,t.pointerType==="touch"&&(ga=!1)})}function EE(i){P0.push(i)}function AE(i){fc=performance.now(),C0=i.clientX,R0=i.clientY}function I0(i){if(!ga||!L0(Yo))return null;const e=Yo.x-i.x,t=Yo.y-i.y;return Math.hypot(e,t)<=lc.deadzone?null:Yo}function wE(){return ga&&L0(Ap)?Ap:null}function L0(i){if(Gt.updateWorldMatrix(!0,!1),ea.set(la.x,la.y,-1).unproject(Gt),tr.set(la.x,la.y,1).unproject(Gt),tr.sub(ea),Math.abs(tr.z)<1e-9)return null;const e=-ea.z/tr.z;return i.set(ea.x+tr.x*e,ea.y+tr.y*e,0),i}const tl=[{id:"pusher",name:"Pusher",icon:"🛡️",hearts:ct.baseHearts,description:[`Double click/tap: ${Ue.pushShield}s shield that blocks physical damage`,`Reflects projectiles within ${Ue.pushReflectRadius} units for ${Ue.pushReflectDamage} damage`,`On a block: shockwave (${Ue.pushShockwaveRadius} units) for ${Ue.pushShockwaveBaseDamage} + HP, stuns ${Ue.pushStun} s, shoves enemies ${Ue.pushKnockback} units (not Tanks)`,`${Ue.pushCooldown} s cooldown`],ability:{cooldown:Ue.pushCooldown,shield:Ue.pushShield,reflectRadius:Ue.pushReflectRadius,reflectDamage:Ue.pushReflectDamage,shockwaveRadius:Ue.pushShockwaveRadius,shockwaveBaseDamage:Ue.pushShockwaveBaseDamage,stun:Ue.pushStun,knockback:Ue.pushKnockback}},{id:"dasher",name:"Dasher",icon:"⚡",hearts:ct.baseHearts,description:[`Double click/tap: dash ${Ue.dashDistance} units, +${Ue.dashExtraIFrames}s extra i-frames, ${Ue.dashCloneCount} shadow clones`,`Leaves a damaging trail: ${Ue.trailBaseDuration} s + ${Ue.trailPerHeart}s per heart`,`Trail tick: ${rn.damageBase} + ${rn.damagePerHeart}/heart damage`,`${Ue.dashCooldown}s cooldown`],ability:{cooldown:Ue.dashCooldown,distance:Ue.dashDistance,extraIFrames:Ue.dashExtraIFrames,cloneCount:Ue.dashCloneCount,cloneLife:Ue.dashCloneLife,trailBaseDuration:Ue.trailBaseDuration,trailPerHeart:Ue.trailPerHeart,trailWidth:Ue.trailWidth}},{id:"anchor",name:"Anchor",icon:"🤖",hearts:ct.baseHearts-2,description:[`Passive: ${Ue.minionCount} orbiting minions with extra vision that copy your power-ups`,`${Ue.minionDamage} damage every ${Ue.minionInterval}s`],ability:{minionCount:Ue.minionCount,orbitRadius:Ue.minionOrbitRadius,orbitSpeed:Ue.minionOrbitSpeed,orbitHeight:Ue.minionHeight,minionDamage:Ue.minionDamage,minionInterval:Ue.minionInterval,minionRateJitter:Ue.minionRateJitter,rangeMul:Ue.minionRangeMul}}];function md(i){return tl.find(e=>e.id===i)}const D0={fighter:{id:"fighter",model:"/assets/42djT5zJnx.glb",hp:3,speedMul:1.3,score:20,targetHeight:1.3,yawOffset:Math.PI/2,behavior:"chase",moveClip:"Fast_Flying",attackClip:"Headbutt",hitClip:"HitReact",deathClip:"Death"},ranged:{id:"ranged",model:"/assets/kzpT6fNmM5.glb",hp:1,speedMul:.8,score:30,targetHeight:1.54,yawOffset:Math.PI/2,behavior:"ranged",moveClip:"Fast_Flying",attackClip:"Headbutt",hitClip:"HitReact",deathClip:"Death"},speeder:{id:"speeder",model:"/assets/54QyRcsogk.glb",hp:2,speedMul:2.3,score:25,targetHeight:1.1,yawOffset:Math.PI/2,behavior:"speeder",moveClip:"Flying_Idle",attackClip:"Headbutt",hitClip:"HitReact",deathClip:"Death"},tank:{id:"tank",model:"/assets/GcttdvsqsQ.glb",hp:10,speedMul:.6,score:80,targetHeight:2,yawOffset:Math.PI/2,behavior:"tank",moveClip:"Flying_Idle",attackClip:"Headbutt",hitClip:"HitReact",deathClip:"Death"}},Yn={model:"/assets/9NGlBTpDEr.glb",targetHeight:3.5,score:1e3,yawOffset:Math.PI/2,moveClip:"Walk",idleClip:"Dance",attackClip:"Jump",volleyClip:"Bite_Front",hitClip:"HitRecieve",deathClip:"Death"},CE=new os(1,1),Ki=[];let ch=null;function RE(i,e,t,n,s,r){if(!ch)return;const a=t-i,o=n-e,c=Math.hypot(a,o);if(c<1e-4)return;const l=new Kt({color:rn.color,transparent:!0,opacity:.35,depthWrite:!1,side:en}),u=new Bt(CE,l);u.position.set((i+t)/2,(e+n)/2,.06),u.scale.set(c,r,1),u.rotation.z=Math.atan2(o,a),ch.add(u),Ki.push({mesh:u,x1:i,y1:e,x2:t,y2:n,ttl:s,duration:s,width:r})}function PE(i){for(let e=Ki.length-1;e>=0;e--){const t=Ki[e];if(t.ttl-=i,t.ttl<=0){Ki.splice(e,1),t.mesh.parent&&t.mesh.parent.remove(t.mesh);continue}t.mesh.material.opacity=.35*(t.ttl/t.duration)}}function xd(i,e){for(const t of Ki)if(f0(i,e,t.x1,t.y1,t.x2,t.y2)<=t.width/2)return!0;return!1}function IE(){for(let i=Ki.length-1;i>=0;i--){const e=Ki[i];Ki.splice(i,1),e.mesh.parent&&e.mesh.parent.remove(e.mesh)}}function LE(i){ch=i}function DE(){const i=new jm,e=0,t=0;return i.moveTo(e,t+.5),i.bezierCurveTo(e,t+.8,e-.6,t+.8,e-.6,t+.3),i.bezierCurveTo(e-.6,t-.1,e,t-.3,e,t-.6),i.bezierCurveTo(e,t-.3,e+.6,t-.1,e+.6,t+.3),i.bezierCurveTo(e+.6,t+.8,e,t+.8,e,t+.5),i}const NE=new od(DE()),UE=new Kt({color:16731501,side:en}),FE=new os(.55,.55),OE=new Kt({color:10185727,side:en}),ns=[];let lh=null,Pp=0;function N0(i,e){U0("heart",NE,UE,i,e)}function BE(i,e){U0("powerup",FE,OE,i,e)}function U0(i,e,t,n,s){if(!lh)return;const r=new Bt(e,t);r.scale.setScalar(.6),r.position.set(n,s,.15),r.rotation.z=Math.random()*Math.PI*2+(i==="powerup"?Math.PI/4:0),lh.add(r),ns.push({mesh:r,kind:i,age:0,t:Math.random()*Math.PI*2})}function kE(i,e,t,n){Pp+=i;const s={hearts:0,powerups:0};for(let r=ns.length-1;r>=0;r--){const a=ns[r];a.age+=i;const o=e-a.mesh.position.x,c=t-a.mesh.position.y,l=Math.hypot(o,c);if(l<=bs.collectRadius){s[a.kind==="powerup"?"powerups":"hearts"]++,_a(r);continue}if(xd(a.mesh.position.x,a.mesh.position.y)){s[a.kind==="powerup"?"powerups":"hearts"]++,_a(r);continue}if(l<=n&&l>1e-6){const d=Math.min(l,8*i);a.mesh.position.x+=o/l*d,a.mesh.position.y+=c/l*d}const u=1+bs.pulseAmplitude*Math.sin(Pp*bs.pulseHz*Math.PI*2+a.t);a.mesh.scale.setScalar(.6*u),a.mesh.rotation.z+=i*.8;const h=a.kind==="powerup"?bs.powerupLifetime:bs.lifetime;a.age>=h&&_a(r)}return s}function zE(i,e,t){const n={hearts:0,powerups:0};for(let s=ns.length-1;s>=0;s--){const r=ns[s],a=r.mesh.position.x-i,o=r.mesh.position.y-e;Math.hypot(a,o)>t||(n[r.kind==="powerup"?"powerups":"hearts"]++,_a(s))}return n}function _a(i){const e=ns[i];ns.splice(i,1),e.mesh.parent&&e.mesh.parent.remove(e.mesh)}function HE(){for(let i=ns.length-1;i>=0;i--)_a(i)}function VE(i){lh=i}const GE=new cd(1,8,6),F0={player:new Kt({color:st.colors.player}),minion:new Kt({color:st.colors.minion}),enemy:new Kt({color:st.colors.enemy}),boss:new Kt({color:st.colors.boss})},is=[];let uh=null;function nl({owner:i,x:e,y:t,z:n,dirX:s,dirY:r,speed:a,damage:o,radius:c,life:l,pierce:u=0,sender:h=null,source:d=null}){if(!uh)return null;const f=new Bt(GE,F0[i]);f.position.set(e,t,n),f.scale.setScalar(c),uh.add(f);const m={mesh:f,owner:i,damage:o,hitRadius:c*Rn.projectileRadiusMul,speedX:s*a,speedY:r*a,life:l,pierce:u,hitSet:new Set,sender:h,source:d};return is.push(m),m}function WE(i,e,t,n,{damage:s,speed:r,radiusMul:a=1}){return nl({owner:"player",x:i,y:e,z:.7,dirX:t,dirY:n,speed:r,damage:s,radius:st.playerRadius*a,life:st.playerLifetime,source:"shot"})}function XE(i,e,t,n,{damage:s,speed:r,radiusMul:a=1}){return nl({owner:"minion",x:i,y:e,z:.7,dirX:t,dirY:n,speed:r,damage:s,radius:st.playerRadius*a,life:st.playerLifetime,source:"minion"})}function YE(i,e,t,n,s=null,r=1){return nl({owner:"enemy",x:i,y:e,z:.7,dirX:t,dirY:n,speed:st.enemySpeed*r,damage:st.damage,radius:st.enemyRadius,life:st.enemyLifetime,sender:s})}function O0(i,e,t,n,s=1,r=null){return nl({owner:"boss",x:i,y:e,z:.7,dirX:t,dirY:n,speed:st.bossOrbSpeed*s,damage:st.damage,radius:st.bossOrbRadius,life:st.bossOrbLifetime,sender:r})}function qE(i,e,t,n){let s=0;for(const r of is){if(r.owner!=="enemy"&&r.owner!=="boss")continue;const a=r.mesh.position.x-i,o=r.mesh.position.y-e;if(Math.hypot(a,o)>t+r.hitRadius)continue;const c=Math.hypot(r.speedX,r.speedY);if(c<1e-6)continue;let l=-r.speedX/c,u=-r.speedY/c;if(r.sender&&!r.sender.userData.dying){const h=r.sender.position.x-r.mesh.position.x,d=r.sender.position.y-r.mesh.position.y,f=Math.hypot(h,d);f>1e-6&&(l=h/f,u=d/f)}r.owner="player",r.damage=n,r.pierce=0,r.hitSet.clear(),r.speedX=l*st.playerSpeed,r.speedY=u*st.playerSpeed,r.life=st.playerLifetime,r.source="reflect",r.mesh.material=F0.player,s++}return s}function $E(i){for(const e of is)(e.owner==="player"||e.owner==="minion")&&(e.pierce+=i)}function KE(i,e,t){const n={enemyHits:[],playerHits:[]};for(let s=is.length-1;s>=0;s--){const r=is[s],a=r.speedX*i,o=r.speedY*i,c=Math.hypot(a,o),l=Math.max(1,Math.ceil(c/Jc));let u=!1;for(let h=0;h<l&&!u;h++){if(r.mesh.position.x+=a/l,r.mesh.position.y+=o/l,!ST(r.mesh.position.x,r.mesh.position.y,r.hitRadius,!0)){u=!0;break}if(r.owner==="player"||r.owner==="minion")for(let d=0;d<e.length;d++){const f=e[d];if(!f.userData.collider||f.userData.dying||r.hitSet.has(f))continue;const m=f.position.x-r.mesh.position.x,g=f.position.y-r.mesh.position.y,x=f.userData.collider.radius+r.hitRadius;if(!(m*m+g*g>x*x)){r.hitSet.add(f),n.enemyHits.push({bullet:r,enemy:f}),f.userData.blocksShots?u=!0:r.pierce>0?r.pierce--:u=!0;break}}else if(t){const d=t.x-r.mesh.position.x,f=t.y-r.mesh.position.y,m=t.radius+r.hitRadius;d*d+f*f<=m*m&&(n.playerHits.push(r),u=!0)}}r.life-=i,r.life<=0&&(u=!0),u&&B0(s)}return n}function B0(i){const e=is[i];is.splice(i,1),e.mesh.parent&&e.mesh.parent.remove(e.mesh)}function jE(){for(let i=is.length-1;i>=0;i--)B0(i)}function JE(i){uh=i}const yn={bestScore:"tode3d.bestScore",achievements:"tode3d.achievements",volume:"tode3d.volume",counters:"tode3d.counters",collection:"tode3d.collection"};function k0(i,e){try{const t=window.localStorage.getItem(i);if(t===null)return e;const n=Number(t);return Number.isFinite(n)?n:e}catch{return e}}function gd(i,e){try{window.localStorage.setItem(i,String(e))}catch{}}function _d(i,e){try{const t=window.localStorage.getItem(i);return t===null?e:JSON.parse(t)}catch{return e}}function ao(i,e){try{window.localStorage.setItem(i,JSON.stringify(e))}catch{}}const vd={main_step1:"bgm_main_step1.wav",main_step2:"bgm_main_step2.wav",main_step3:"bgm_main_step3.wav",boss_step1:"bgm_boss_step1.wav",boss_step2:"bgm_boss_step2.wav",boss_step3:"bgm_boss_step3.wav"},ZE=["jump","shoot","parry","parry_failed","dash","minion_shot","hit","hurt","boss_spawn","heart","card","defeat"];function z0(i){return i==="boss_step3"?ts.bossStep3Length:ts.trackLength}let ot=null,Ss=null,va=null,Cc=null,Ts=null,ya=k0(yn.volume,ts.masterVolumeDefault);const tu=new Map;let $n=null,Ip=0,dr={wave:0,bossAlive:!1};const Lp=["pointerdown","keydown","pointerup","touchend"];function QE(){if(ls(Dp),eA(),!ot)return;let i=!1;const e=()=>{if(!i){i=!0;for(const n of Lp)window.removeEventListener(n,t,!0);Dp(wi()),tA()}},t=()=>{ot.resume().then(()=>{ot.state==="running"&&e()}).catch(()=>{})};if(ot.state==="running"?e():ot.resume().then(()=>{ot.state==="running"&&e()}).catch(()=>{}),!i)for(const n of Lp)window.addEventListener(n,t,!0)}function eA(){if(ot)return;const i=window.AudioContext||window.webkitAudioContext;if(i){ot=new i,Ss=ot.createGain(),Ss.gain.value=ya,Ss.connect(ot.destination),va=ot.createGain(),va.connect(Ss),Ts=ot.createBiquadFilter(),Ts.type="lowpass",Ts.frequency.value=22050,Ts.connect(Ss),Cc=ot.createGain(),Cc.connect(Ts);for(const e of ZE)Wa(`sfx_${e}.wav`).catch(()=>{});Wa(vd.main_step1).catch(()=>{})}}function tA(){for(const i of Object.values(vd))Wa(i).catch(()=>{})}function Wa(i){if(!ot)return Promise.reject(new Error("audio not started"));if(tu.has(i))return tu.get(i);const e=fetch(el(`/assets/${i}`)).then(t=>{if(!t.ok)throw new Error(`HTTP ${t.status}`);return t.arrayBuffer()}).then(t=>ot.decodeAudioData(t));return tu.set(i,e),e}function fn(i,e={}){!ot||ot.state!=="running"||!va||Wa(`sfx_${i}.wav`).then(t=>{if(!t||ot.state!=="running")return;const n=ot.createBufferSource();n.buffer=t;const s=nA(e.pan||0);if(s!==0&&typeof ot.createStereoPanner=="function"){const r=ot.createStereoPanner();r.pan.value=s,n.connect(r),r.connect(va)}else n.connect(va);n.start()}).catch(()=>{})}function yd(i,e,t,n,s){const r=e-n,a=t-s,o=Math.hypot(r,a);if(o<1e-4){fn(i);return}const c=(r+a)*Math.SQRT1_2/o*ts.sfxPanMax;fn(i,{pan:c})}function nA(i){return Number.isFinite(i)?Fr(i,-.4,ts.sfxPanMax):0}function iA(){if(!$n)return 0;const i=ot.currentTime-$n.startedAt;return($n.offset+i)%z0($n.id)}function hh(i){const e=++Ip;if(!ot||ot.state!=="running"||!Cc||$n&&$n.id===i)return;const n=i==="boss_step3"||$n&&$n.id==="boss_step3"?ts.crossfadeLong:ts.crossfadeSnappy,s=iA()%z0(i);Wa(vd[i]).then(r=>{if(!r||ot.state!=="running"||e!==Ip)return;const a=ot.createBufferSource();a.buffer=r,a.loop=!0;const o=ot.createGain(),c=ot.currentTime;o.gain.setValueAtTime(0,c),o.gain.linearRampToValueAtTime(1,c+n),a.connect(o),o.connect(Cc),a.start(0,s);const l=$n;if(l){l.gain.gain.cancelScheduledValues(c),l.gain.gain.setValueAtTime(l.gain.gain.value,c),l.gain.gain.linearRampToValueAtTime(0,c+n);try{l.source.stop(c+n+.05)}catch{}}$n={id:i,source:a,gain:o,startedAt:c,offset:s}}).catch(()=>{})}function nu(i){if(!Ts)return;const e=i?ts.lowPassHz:22050;Ts.frequency.setTargetAtTime(e,ot.currentTime,.03)}function H0(i){ya=Fr(i,0,1),gd(yn.volume,ya),Ss&&ot&&Ss.gain.setTargetAtTime(ya,ot.currentTime,.02)}function dh(){return ya}function fh(i,e){dr={wave:i,bossAlive:e},wi()===Fe.WAVE_PLAYING&&V0()}function V0(){let i;dr.wave===3?i="boss_step2":dr.wave===5?i=dr.bossAlive?"boss_step3":"main_step3":i="main_step2",hh(i)}function Dp(i){if(ot){if(i===Fe.POWERUP_DRAFT||i===Fe.PAUSE_MENU){nu(!0);return}if(i===Fe.GAME_OVER){nu(!0),fn("defeat"),(dr.wave===3||dr.wave===4)&&hh("boss_step1");return}nu(!1),i===Fe.WAVE_PLAYING?V0():(i===Fe.MAIN_MENU||i===Fe.CHARACTER_SELECTION)&&hh("main_step1")}}const gt={marathonSeconds:300,the50kScore:5e4,sharpshooterKills:300,arenaChampionBosses:5,deckedOutCards:to.maxCards,bulwarkBlocks:25,powerShovePushes:50,blinkDashes:100,ghostTrailKills:15,swarmMinionKills:100,worldTourClasses:tl.length},sA=[{id:"helloPond",name:"Hello to the bugged world",icon:"🐸",description:"Clear Wave 1."},{id:"pigeonProblem",name:"Pigeon Problem",icon:"🐦",description:"Defeat the Arena Lord in Wave 3."},{id:"crowdedPond",name:"Crowded Bug",icon:"🐛",description:"Clear Wave 4."},{id:"endlessFrog",name:"Endless Frog",icon:"🌊",description:"Reach Wave 5."},{id:"marathonFrog",name:"Marathon Frog",icon:"⏱️",description:`Survive ${gt.marathonSeconds/60} minutes in Wave 5.`},{id:"the50kPusher",name:`The ${gt.the50kScore/1e3}K: Pusher`,icon:"🛡️",description:`Reach ${gt.the50kScore.toLocaleString()} score in a single run with the Pusher.`},{id:"the50kDasher",name:`The ${gt.the50kScore/1e3}K: Dasher`,icon:"⚡",description:`Reach ${gt.the50kScore.toLocaleString()} score in a single run with the Dasher.`},{id:"the50kAnchor",name:`The ${gt.the50kScore/1e3}K: Anchor`,icon:"🤖",description:`Reach ${gt.the50kScore.toLocaleString()} score in a single run with the Anchor.`},{id:"untouchable",name:"Untouchable",icon:"✨",description:"Clear any wave without taking damage."},{id:"fullHearts",name:"Full Hearts",icon:"💖",description:`Reach the maximum of ${ct.maxHearts} hearts.`},{id:"newRecord",name:"New Record",icon:"🏆",description:"Beat your own best score."},{id:"sharpshooter",name:"Sharpshooter",icon:"🎯",description:`Defeat ${gt.sharpshooterKills} enemies in total.`},{id:"arenaChampion",name:"Arena Champion",icon:"👑",description:`Defeat ${gt.arenaChampionBosses} Arena Lords in total.`},{id:"closeCall",name:"Close Call",icon:"🍃",description:"Survive until the doom with 1 heart."},{id:"worldTour",name:"World Tour",icon:"🌍",description:`Play a run with each of the ${gt.worldTourClasses} classes.`},{id:"deckedOut",name:"Decked Out",icon:"🃏",description:`Collect ${gt.deckedOutCards} power-ups in a single run.`},{id:"bulwark",name:"Bulwark",icon:"🛡️",description:`Block ${gt.bulwarkBlocks} hits with the Pusher shield in total.`},{id:"powerShove",name:"Power Shove",icon:"💨",description:`Push ${gt.powerShovePushes} enemies with the Pusher shockwave in a single run.`},{id:"blink",name:"Blink",icon:"⚡",description:`Dash ${gt.blinkDashes} times in total.`},{id:"ghostTrail",name:"Ghost Trail",icon:"🌀",description:`Defeat ${gt.ghostTrailKills} enemies with the trail in a single run.`},{id:"swarm",name:"Swarm",icon:"🐝",description:`Defeat ${gt.swarmMinionKills} enemies with Minions in total.`}],G0=sA.map(i=>({...i}));let Ma=new Set(_d(yn.achievements,[])),il=[];const W0=new Set;let sl=!1,ph=0,mh=0,xh=0,X0=null,$t=_d(yn.counters,{});function Md(){ao(yn.counters,$t)}function fr(i,e=1){$t[i]=($t[i]||0)+e,Md()}function Y0(i){return G0.find(e=>e.id===i)}function rA(){return G0.map(i=>({...i,unlocked:Ma.has(i.id)}))}function aA(i){W0.add(i)}function Ut(i){if(Ma.has(i))return!1;const e=Y0(i);if(!e)return!1;Ma.add(i),il.push(i),ao(yn.achievements,[...Ma]);for(const t of[...W0])try{t(e)}catch(n){console.error("Achievement unlock listener failed:",n)}return!0}function oA(){Ma=new Set,il=[],$t={},ao(yn.achievements,[]),Md()}function q0(i,e=!1){fr("kills"),$t.kills>=gt.sharpshooterKills&&Ut("sharpshooter"),e&&(fr("bossKills"),$t.bossKills>=gt.arenaChampionBosses&&Ut("arenaChampion")),i==="trail"&&(mh++,mh>=gt.ghostTrailKills&&Ut("ghostTrail")),i==="minion"&&(fr("minionKills"),$t.minionKills>=gt.swarmMinionKills&&Ut("swarm"))}function Np(){fr("pushes"),xh++,xh>=gt.powerShovePushes&&Ut("powerShove")}function cA(){fr("dashes"),$t.dashes>=gt.blinkDashes&&Ut("blink")}function lA(){fr("shieldBlocks"),$t.shieldBlocks>=gt.bulwarkBlocks&&Ut("bulwark")}function uA(i){X0=i,$t.classesPlayed||($t.classesPlayed=[]),$t.classesPlayed.includes(i)||($t.classesPlayed.push(i),Md()),$t.classesPlayed.length>=gt.worldTourClasses&&Ut("worldTour")}function hA(){return $t.classesPlayed?$t.classesPlayed.slice():[]}function dA(i){i>=gt.deckedOutCards&&Ut("deckedOut")}const fA={pusher:"the50kPusher",dasher:"the50kDasher",anchor:"the50kAnchor"};function pA(i){if(i<gt.the50kScore)return;const e=fA[X0];e&&Ut(e)}function mA(){return il.slice()}function xA(){il=[],sl=!1,ph=0,mh=0,xh=0}function gA(i,e){sl=!1,i>=5&&(Ut("endlessFrog"),e===1&&Ut("closeCall"))}function _A(i){i===1&&Ut("helloPond"),i===4&&Ut("crowdedPond"),sl||Ut("untouchable")}function vA(i){i===3&&Ut("pigeonProblem")}function $0(){sl=!0}function yA(i){ph=i,ph>=gt.marathonSeconds&&Ut("marathonFrog")}function MA(i){i.isRecord&&i.previousBest>0&&Ut("newRecord")}let As=0,rr=k0(yn.bestScore,0);function bA(){As=0}function bd(i){As+=Math.round(i),pA(As)}function pc(){return As}function Rc(){return rr}function SA(){rr=0,gd(yn.bestScore,0)}function TA(){const i=rr,e=As>rr;return e&&(rr=As,gd(yn.bestScore,rr)),{isRecord:e,previousBest:i,finalScore:As}}const $o=.5,Up=5,EA=.9,AA=1.5,wA=.01,CA=.15,RA=.6,gh=.15,Pn=[];let _h=null,Sd=!1;const Pc={};let Td=1,Ed=1,Ic=1,Xa=1,rl=1;function PA(i,e){Xa=i,rl=e}function ss(){return Xa}function IA(){return rl}const LA=new Oe(ke.silhouetteColor);function Cr(i,e){return Math.abs(i)>It.width/2||Math.abs(e)>It.depth/2}async function DA(i){_h=i;const e=Object.values(D0),t=await Promise.all(e.map(n=>io(n.model)));e.forEach((n,s)=>{const r=t[s],a=r.scene;so(a);const o=Or(a),c=wr(o,{targetHeight:n.targetHeight}),l={move:Ko(r.animations,n.moveClip),attack:Ko(r.animations,n.attackClip),hit:Ko(r.animations,n.hitClip),death:Ko(r.animations,n.deathClip)},u=Object.entries(l).filter(([,h])=>!h).map(([h])=>h);u.length>0&&console.warn(`Enemy "${n.id}": no clip for [${u.join(", ")}].`,"Available:",r.animations.map(h=>h.name)),Pc[n.id]={template:a,scale:c.scale,groundOffset:c.groundOffset,radius:c.radius*Rn.enemyRadiusMul,clips:l}}),Sd=!0}function Ko(i,e){if(!e||i.length===0)return null;const t=a=>{const o=a.lastIndexOf("|");return o>=0?a.slice(o+1):a},n=i.find(a=>a.name===e||t(a.name)===e);if(n)return n;const s=e.toLowerCase(),r=i.find(a=>t(a.name).toLowerCase()===s);return r||i.find(a=>{const o=t(a.name).toLowerCase();return o.includes(s)||s.includes(o)})||null}function NA(i){return Pc[i]?Pc[i].radius:1}function K0(i,e,t){Td=i,Ed=e,Ic=t}function j0(i,e){if(!Sd||!_h)return null;const t=D0[i],n=Pc[i];if(!t||!n||!pd(e.x,e.y,n.radius))return null;const s=Or(n.template);s.rotation.x=Math.PI/2,s.scale.setScalar(n.scale),s.position.z+=n.groundOffset;const r=ro(s),a=r.map(d=>({material:d,emissive:d.emissive?d.emissive.clone():null,intensity:d.emissiveIntensity!==void 0?d.emissiveIntensity:null,color:d.color?d.color.clone():null})),o=new un;o.position.set(e.x,e.y,0),o.add(s),_h.add(o);const c=new o0(s),l=(d,f)=>{if(!d)return null;const m=c.clipAction(d);return f&&(m.setLoop(jh,1),m.clampWhenFinished=!0),m},u={move:l(n.clips.move,!1),attack:l(n.clips.attack,!0),hit:l(n.clips.hit,!0),death:l(n.clips.death,!0)};u.move&&u.move.play();const h=o.userData;return h.typeConfig=t,h.maxHp=Math.ceil(t.hp*Td*rl),h.hp=h.maxHp,h.collider=Zc(o,o.position,n.radius),h.touchingPlayer=!1,h.stuckTimer=0,h.escapeWaypoint=null,h.dying=!1,h.dyingTimer=0,h.fading=!1,h.materials=r,h.stunTimer=0,h.flashTimer=0,h.flashOriginals=a,h.mixer=c,h.actions=u,h.currentAction=u.move,h.oneShotRemaining=0,h.contactAnimTimer=0,h.velocity={x:0,y:0},h.travelClock=0,h.blocksShots=t.behavior==="tank",h.fireTimer=Math.random()*ke.rangedFireInterval,h.speederTimer=Math.random()*(ke.speederDashOn+ke.speederDashOff),h.silhouette=0,h.silhouetteDirty=!1,h.trailTickTimer=Math.random()*rn.tickInterval,h.slowFactor=1,h.slowTimer=0,h.lastHitSource="shot",Pn.push(o),o}function al(i,e,t={}){return!i||i.userData.dying?!1:(i.userData.hp-=e,i.userData.lastHitSource=t.source||"shot",t.silent||(BA(i),yd("hit",i.position.x,i.position.y,j.position.x,j.position.y)),t.knockback>0&&ol(i,t.knockbackX||0,t.knockbackY||0,t.knockback),i.userData.hp<=0?(OA(i),!0):(t.silent||vh(i,i.userData.actions.hit),!1))}function UA(i,e,t){if(!i||i.userData.dying)return;const n=i.userData;n.slowFactor=Math.min(n.slowTimer>0?n.slowFactor:1,e),n.slowTimer=Math.max(n.slowTimer,t)}function ol(i,e,t,n){if(!i||i.userData.dying||i.userData.typeConfig.behavior==="tank")return;const s=i.userData.collider,r=Math.hypot(e,t);if(!s||r<1e-6)return;const a=e/r,o=t/r;let c=n;for(;c>0;){const l=Math.min(CA,c),u=i.position.x+a*l,h=i.position.y+o*l;if(!Ot(s,u,h,!0))break;i.position.x=u,i.position.y=h,c-=l}}function FA(i,e){!i||i.userData.dying||(i.userData.stunTimer=Math.max(i.userData.stunTimer,e))}function OA(i){const e=i.userData;e.dying=!0,e.touchingPlayer=!1,e.velocity.x=0,e.velocity.y=0,Qc(i),e.collider=null;const t=e.actions.death;if(t){t.reset(),t.setEffectiveWeight(1),t.play(),e.currentAction=t;const n=t.getClip().duration;e.dyingTimer=Fr(n,ke.deathLinger,1.8)}else e.dyingTimer=ke.deathLinger;bd(e.typeConfig.score),q0(e.lastHitSource,!1),Math.random()<Vn().dropChance&&N0(i.position.x,i.position.y)}function BA(i){const e=i.userData;e.flashTimer=ke.hitFlashDuration;for(const t of e.flashOriginals)t.emissive&&(t.material.emissive.setHex(16777215),t.intensity!==null&&(t.material.emissiveIntensity=1))}function kA(i){for(const e of i.userData.flashOriginals)e.emissive&&(e.material.emissive.copy(e.emissive),e.intensity!==null&&(e.material.emissiveIntensity=e.intensity))}function zA(i,e){const t=i.userData,n=Cr(i.position.x,i.position.y)?1:0;if(t.silhouette===n&&!t.silhouetteDirty)return;const s=e/ke.silhouetteBlend;t.silhouette=n>t.silhouette?Math.min(n,t.silhouette+s):Math.max(n,t.silhouette-s);for(const r of t.flashOriginals)r.color&&r.material.color.copy(r.color).lerp(LA,t.silhouette);t.silhouetteDirty=t.silhouette>0}function HA(i,e){const t=i.userData;if(!(t.flashTimer>0)&&!(!e&&!t.trailTinted)){t.trailTinted=e;for(const n of t.flashOriginals)n.emissive&&(e?(n.material.emissive.setHex(rn.tint),n.intensity!==null&&(n.material.emissiveIntensity=rn.tintIntensity)):(n.material.emissive.copy(n.emissive),n.intensity!==null&&(n.material.emissiveIntensity=n.intensity)))}}function vh(i,e){const t=i.userData;if(!e)return;const n=t.currentAction;e.reset(),e.setEffectiveWeight(1),e.play(),n&&n!==e&&n.crossFadeTo(e,gh,!1),t.currentAction=e,t.oneShotRemaining=Math.max(e.getClip().duration-gh,.05)}function VA(i){if(!Sd)return;const e=no(j),t=co();for(let n=Pn.length-1;n>=0;n--){const s=Pn[n],r=s.userData;if(r.isBoss)continue;const a=r.collider;if(r.mixer.update(i),r.flashTimer>0&&(r.flashTimer-=i,r.flashTimer<=0&&kA(s)),zA(s,i),r.dying){r.dyingTimer-=i,!r.fading&&r.dyingTimer<=ke.deathFade&&(r.fading=!0,s.traverse(M=>{M.isMesh&&(M.castShadow=!1)})),r.fading&&M0(r.materials,Math.max(0,r.dyingTimer/ke.deathFade)),r.dyingTimer<=0&&Z0(s);continue}if(r.oneShotRemaining>0&&(r.oneShotRemaining-=i,r.oneShotRemaining<=0&&r.actions.move&&r.currentAction!==r.actions.move)){const M=r.actions.move;M.reset(),M.setEffectiveWeight(1),M.play(),r.currentAction.crossFadeTo(M,gh,!1),r.currentAction=M}r.slowTimer>0&&(r.slowTimer-=i,r.slowTimer<=0&&(r.slowFactor=1));const o=xd(s.position.x,s.position.y);if(o&&(r.trailTickTimer-=i,r.trailTickTimer<=0)){r.trailTickTimer=rn.tickInterval;const M=Vn();let v=(rn.damageBase+M.hearts*rn.damagePerHeart)*M.trailDamageMul;if(M.critChance>0&&Math.random()<M.critChance&&(v*=2),al(s,v,{silent:!0,source:"trail"}),r.dying)continue}if(HA(s,o),r.stunTimer>0){r.stunTimer-=i,r.touchingPlayer=!1,r.velocity.x=0,r.velocity.y=0;continue}const c=j.position.x-s.position.x,l=j.position.y-s.position.y,u=Math.hypot(c,l),h=r.typeConfig.behavior;let d=0,f=0;if(h==="chase"||h==="tank")u>1e-6&&(d=c/u,f=l/u);else if(h==="ranged"){const M=ke.rangedStandoff-ke.rangedBand,v=ke.rangedStandoff+ke.rangedBand;if(u>v)d=c/u,f=l/u;else if(u<M&&u>1e-6)d=-c/u,f=-l/u;else if(u>1e-6){const S=r.orbitSide||(r.orbitSide=Math.random()<.5?1:-1);d=-l/u*S*.5,f=c/u*S*.5}}else if(h==="speeder"){r.speederTimer-=i;const M=ke.speederDashOn+ke.speederDashOff;if(r.speederTimer<=0&&(r.speederTimer+=M),r.speederTimer>ke.speederDashOff&&u>1e-6){const S=Math.sin(r.travelClock*ke.speederZigzagHz*Math.PI*2)*(ke.speederZigzagDeg*Math.PI)/180,w=Math.atan2(l,c)+S;d=Math.cos(w),f=Math.sin(w)}}if(a&&r.escapeWaypoint)if(s.position.distanceTo(r.escapeWaypoint)<=EA||GA(a,s.position,j.position))r.escapeWaypoint=null,r.stuckTimer=0;else{const v=r.escapeWaypoint.x-s.position.x,S=r.escapeWaypoint.y-s.position.y,w=Math.hypot(v,S);w>1e-6&&(d=v/w,f=S/w)}const m=d!==0||f!==0,g=s.position.x,x=s.position.y;if(a&&m){const v=ke.baseSpeed*r.typeConfig.speedMul*Ed*r.slowFactor*i,S=Math.max(1,Math.ceil(v/Jc)),w=d*v/S,E=f*v/S;for(let F=0;F<S;F++){const T=s.position.x+w,b=s.position.y+E;if(Ot(a,T,b,!0)){s.position.x=T,s.position.y=b;continue}if(Ot(a,T,s.position.y,!0)){s.position.x=T;continue}if(Ot(a,s.position.x,b,!0)){s.position.y=b;continue}break}Math.hypot(s.position.x-g,s.position.y-x)>wA?r.stuckTimer=0:(r.stuckTimer+=i,WA(a,s))}r.velocity.x=(s.position.x-g)/Math.max(i,1e-6),r.velocity.y=(s.position.y-x)/Math.max(i,1e-6),r.travelClock+=i;const p=s.userData.model||(s.userData.model=s.children[0]);if(p&&m&&(p.rotation.y=Math.atan2(f,d)+r.typeConfig.yawOffset),r.touchingPlayer=!!a&&!!e&&g0(s.position.x,s.position.y,a.radius,t.x,t.y,e.radius),r.contactAnimTimer-=i,r.touchingPlayer&&r.contactAnimTimer<=0&&r.actions.attack&&(r.contactAnimTimer=RA,vh(s,r.actions.attack)),h==="ranged"&&(r.fireTimer-=i,r.fireTimer<=0)){r.fireTimer=ke.rangedFireInterval/(Ic*Xa);const M=Cr(s.position.x,s.position.y),v=u<=ke.rangedStandoff*1.6,S=!M&&fd(s.position.x,s.position.y,j.position.x,j.position.y,st.enemyRadius*Rn.projectileRadiusMul);if(v&&S){const w=u/st.enemySpeed,E=j.userData.velocity||{x:0,y:0};let I=j.position.x+E.x*w*ke.rangedAimLead,F=j.position.y+E.y*w*ke.rangedAimLead;const T=Math.random()*Math.PI*2,b=Math.sqrt(Math.random())*ke.rangedAimError;I+=Math.cos(T)*b,F+=Math.sin(T)*b;const L=I-s.position.x,k=F-s.position.y,H=Math.max(Math.hypot(L,k),1e-6);YE(s.position.x,s.position.y,L/H,k/H,s,Ic*Xa),r.currentAction!==r.actions.attack&&vh(s,r.actions.attack)}}}}function GA(i,e,t){const n=t.x-e.x,s=t.y-e.y,r=Math.max(1,Math.ceil(Math.hypot(n,s)/AA));for(let a=1;a<=r;a++){const o=a/r;if(!Ot(i,e.x+n*o,e.y+s*o,!0))return!1}return!0}function Fp(i,e,t){const n=j.position.x-e.position.x,s=j.position.y-e.position.y,r=Math.hypot(n,s);if(r<1e-6)return null;const a=-s/r*Up,o=n/r*Up,c=new C(e.position.x+a,e.position.y+o,0),l=new C(e.position.x-a,e.position.y-o,0),u=[];return Ot(i,c.x,c.y,!0)&&u.push(c),Ot(i,l.x,l.y,!0)&&u.push(l),u.length===0?null:u.length===1?u[0]:t?(t.x-e.position.x)*a+(t.y-e.position.y)*o>0?l:c:Math.random()<.5?c:l}function WA(i,e){const t=e.userData;if(t.escapeWaypoint){if(t.stuckTimer<$o*2)return;t.escapeWaypoint=Fp(i,e,t.escapeWaypoint)??t.escapeWaypoint,t.stuckTimer=$o;return}t.stuckTimer<$o||(t.escapeWaypoint=Fp(i,e,null),t.stuckTimer=t.escapeWaypoint?$o:0)}function oo(){return Pn}function J0(){let i=0;for(const e of Pn)!e.userData.dying&&!e.userData.isBoss&&i++;return i}function XA(i){Pn.includes(i)||Pn.push(i)}function YA(i){const e=Pn.indexOf(i);e!==-1&&Pn.splice(e,1)}function Z0(i){const e=Pn.indexOf(i);return e===-1?!1:(Pn.splice(e,1),Qc(i),i.parent&&i.parent.remove(i),!0)}function qA(){for(const i of Pn.slice())Z0(i);Td=1,Ed=1,Ic=1,Xa=1,rl=1}let Q0=null,jo=null;const Ya=[];let yh=0;const Op=st.playerSpeed*st.minionSpeedMul;let Mh=0;function $A(){return jo||(jo=new Promise((i,e)=>{const t=new Image;t.src=el("/assets/tode.svg"),t.onload=()=>{const n=document.createElement("canvas");n.width=128,n.height=128,n.getContext("2d").drawImage(t,0,0,128,128);const r=new p_(n);r.colorSpace=Nt,Q0=r,i(r)},t.onerror=e}),jo)}async function KA(i,e){cl();const t=Mh;try{await $A()}catch(s){console.error("Failed to load minion sprite (tode.svg)",s);return}if(t!==Mh)return;const n=e.minionCount;for(let s=0;s<n;s++){const r=new km({map:Q0,transparent:!0,opacity:.8,depthWrite:!1}),a=new n_(r);a.scale.setScalar(.9);const o=new un;o.add(a),i.add(o),Ya.push({group:o,timer:Math.random()*e.minionInterval,rateMul:1+(Math.random()*2-1)*e.minionRateJitter,angleOffset:s/n*Math.PI*2})}}function jA(i,e,t,n){if(Ya.length===0)return;yh+=i;const s=ct.baseFireCooldown/Math.max(t.fireCooldown,.05),r=n.minionInterval/s,a=t.range*n.rangeMul,o=oo();for(const c of Ya){const l=yh*n.orbitSpeed+c.angleOffset;c.group.position.set(e.x+Math.cos(l)*n.orbitRadius,e.y+Math.sin(l)*n.orbitRadius,n.orbitHeight);const u=r*c.rateMul;if(c.timer+=i,c.timer<u)continue;c.timer-=u;const h=JA(o,c.group.position,a);h&&(ZA(c.group.position,h,t,n),fn("minion_shot"))}}function JA(i,e,t){let n=null,s=t*t;for(const r of i){if(r.userData.dying)continue;const a=r.position.x-e.x,o=r.position.y-e.y,c=a*a+o*o;c>=s||fd(e.x,e.y,r.position.x,r.position.y,st.playerRadius*Rn.projectileRadiusMul,!0)&&(s=c,n=r)}return n}function ZA(i,e,t,n){const s=n.minionDamage+(t.damage-ct.baseDamage),r=Math.max(1,t.projectiles),a=e.position.x-i.x,o=e.position.y-i.y,l=Math.max(Math.hypot(a,o),1e-4)/Op,u=e.userData.velocity||{x:0,y:0},h=e.position.x+u.x*l*st.aimLeadFactor,d=e.position.y+u.y*l*st.aimLeadFactor,f=Math.atan2(d-i.y,h-i.x),m=(r-1)/2*(st.multiShotSpreadDeg*Math.PI)/180;for(let g=0;g<r;g++){const x=f-m+g*(st.multiShotSpreadDeg*Math.PI)/180,p=XE(i.x,i.y,Math.cos(x),Math.sin(x),{damage:s,speed:Op,radiusMul:t.bulletRadiusMul});p&&(p.pierce=t.pierce)}}function cl(){for(const i of Ya)i.group.remove(...i.group.children),i.group.parent&&i.group.parent.remove(i.group);Ya.length=0,yh=0,Mh++}let ba=new Set(_d(yn.collection,[]));function QA(i){ba.has(i)||(ba.add(i),ao(yn.collection,[...ba]))}function e1(i){return ba.has(i)}function t1(){ba=new Set,ao(yn.collection,[])}const bh=Math.PI/2,Jo=.1,Bp=.45,j=new un;let Lc=null,Pt=null,qa=[],Ad=0,Sa=Zc(j,j.position,.6);const n1=i1();async function i1(){const e=(await io("/assets/tode.glb")).scene;so(e),Pt=e,wr(Pt,{targetHeight:ct.targetHeight}),Ad=Pt.position.z,qa=ro(Pt);for(const t of qa)t.transparent=!0;return j.add(Pt),j.visible=!1,Sa=Zc(j,j.position,s1(Pt)*Rn.playerRadiusMul),Pt}function s1(i){i.updateMatrixWorld(!0);let e=.5;const t=new C;return i.traverse(n=>{if(!n.isMesh)return;const s=n.geometry.attributes.position;for(let r=0;r<s.count;r++)n.getVertexPosition(r,t).applyMatrix4(n.matrixWorld),e=Math.max(e,Math.hypot(t.x,t.y))}),e}const Dc=new de,kp=new Cn,na=new C;function r1(){if(Pt&&(j.updateMatrixWorld(!0),kp.setFromObject(Pt),kp.getCenter(na),Number.isFinite(na.x)&&Number.isFinite(na.y))){Dc.set(na.x,na.y);return}Dc.set(j.position.x,j.position.y)}let Ae=ex(),ji="pusher",Nc=[],rs=!1,En=0,pr=0,$a={hearts:0,powerups:0},Ji=0,Xi=0,Is=!1,Ka=!1,Zi=1,Yi=0;const mr=[],Ve={direction:new C,start:new C,target:new C,progress:1,yaw:0};function ex(){return{maxHearts:ct.baseHearts,hearts:ct.baseHearts,speedMul:1,fireCooldown:ct.baseFireCooldown,damage:ct.baseDamage,projectiles:ct.baseProjectiles,pierce:ct.basePierce,range:ct.baseRange,iFrames:ct.baseIFrames,magnetRadius:bs.magnetRadius,dropChance:ke.baseDropChance,critChance:0,thornsDamage:0,berserkPerMissingHeart:0,shotKnockback:0,slowOnHitMul:0,slowOnHitDuration:0,bulletRadiusMul:1,dodgeChance:0,trailDurationAdd:0,trailWidthMul:1,trailDamageMul:1}}function a1(i){Lc=i,i.add(j)}function o1(i){ji=i;const e=md(ji);Ae=ex(),Ae.maxHearts=e.hearts,Ae.hearts=e.hearts,Nc=[],rs=!1,En=0,pr=0,Ji=0,Xi=0,Is=!1,Ka=!1,$a={hearts:0,powerups:0},y1(),cl(),uA(ji),sx(),e.ability.minionCount&&KA(Lc,e.ability)}function Br(){return md(ji).ability}function c1(){return ji}function l1(i){Nc.push(i.id),QA(i.id);const e=i.effect;e.fireRateMul&&(Ae.fireCooldown/=e.fireRateMul),e.projectilesAdd&&(Ae.projectiles+=e.projectilesAdd),e.pierceAdd&&(Ae.pierce+=e.pierceAdd,$E(e.pierceAdd)),e.speedAdd&&(Ae.speedMul+=e.speedAdd),e.damageAdd&&(Ae.damage+=e.damageAdd),e.rangeMul&&(Ae.range*=e.rangeMul),e.maxHeartsAdd&&(Ae.maxHearts=Math.max(0,Math.min(ct.maxHearts,Ae.maxHearts+e.maxHeartsAdd)),Ae.hearts=Math.min(Ae.hearts,Ae.maxHearts),Ae.hearts<=0&&(Ae.hearts=0,rs=!0,pr=0),Ae.maxHearts>=ct.maxHearts&&Ut("fullHearts")),e.heal&&tx(e.heal),e.iFramesSet!==void 0&&(Ae.iFrames=e.iFramesSet),e.magnetMul&&(Ae.magnetRadius*=e.magnetMul),e.dropChanceSet!==void 0&&(Ae.dropChance=e.dropChanceSet),e.critChanceAdd&&(Ae.critChance+=e.critChanceAdd),e.thornsDamage&&(Ae.thornsDamage+=e.thornsDamage),e.berserkPerMissingHeart&&(Ae.berserkPerMissingHeart+=e.berserkPerMissingHeart),e.shotKnockback&&(Ae.shotKnockback+=e.shotKnockback),e.slowOnHitMul&&(Ae.slowOnHitMul=e.slowOnHitMul,Ae.slowOnHitDuration=e.slowOnHitDuration||Ae.slowOnHitDuration),e.bulletRadiusMul&&(Ae.bulletRadiusMul*=e.bulletRadiusMul),e.dodgeChanceAdd&&(Ae.dodgeChance+=e.dodgeChanceAdd),e.trailDurationAdd&&(Ae.trailDurationAdd+=e.trailDurationAdd),e.trailWidthMul&&(Ae.trailWidthMul*=e.trailWidthMul),e.trailDamageMul&&(Ae.trailDamageMul*=e.trailDamageMul),Ae.fireCooldown=Math.max(.1,Ae.fireCooldown),dA(Nc.length)}function Uc(i,e="physical"){return rs?"dead":e==="physical"&&Xi>0?(lA(),Is||(Is=!0,Ka=!0,fn("parry"),ix()),"shielded"):En>0?"immune":Ae.dodgeChance>0&&Math.random()<Ae.dodgeChance?"dodged":(Ae.hearts-=i,En=Ae.iFrames,fn("hurt"),Ae.hearts<=0?(Ae.hearts=0,rs=!0,pr=0,"dead"):"hit")}function tx(i){Ae.hearts=Math.min(Ae.maxHearts,Ae.hearts+i)}function wd(){return rs}function Fc(){return En>0}function ll(){return Xi>0}function u1(){Is||(Is=!0,Ka=!0,fn("parry"),ix())}function h1(i,e){Zi=Math.min(Yi>0?Zi:1,i),Yi=Math.max(Yi,e)}function nx(){return Zi}function d1(){if(!Ka)return null;Ka=!1;const i=Br();return{radius:i.shockwaveRadius,damage:i.shockwaveBaseDamage+Ae.hearts,knockback:i.knockback||0}}function f1(){if(rs||Ji>0||!Pt)return;const i=Br();ji==="pusher"?(Ji=i.cooldown,Xi=i.shield,Is=!1,T1()):ji==="dasher"&&(Ji=i.cooldown,p1(i))}function p1(i){const e=g1(),t=j.position.x,n=j.position.y;let s=0;const r=Math.min(.2,i.distance);for(;s<i.distance;){const o=Math.min(r,i.distance-s),c=j.position.x+e.x*o,l=j.position.y+e.y*o;if(!Ot(Sa,c,l))break;j.position.x=c,j.position.y=l,s+=o}Ve.progress=1,Ve.start.copy(j.position),Ve.target.copy(j.position);const a=i.trailBaseDuration+i.trailPerHeart*Ae.hearts+Ae.trailDurationAdd;RE(t,n,j.position.x,j.position.y,a,i.trailWidth*Ae.trailWidthMul),m1(t,n,j.position.x,j.position.y),_1(t,n,j.position.x,j.position.y,i),En=Math.max(En,i.extraIFrames),cA(),fn("dash")}function m1(i,e,t,n){const s=Math.hypot(t-i,n-e),r=Math.max(1,Math.ceil(s));for(let a=0;a<=r;a++){const o=a/r,c=zE(i+(t-i)*o,e+(n-e)*o,1);$a.hearts+=c.hearts,$a.powerups+=c.powerups}}function x1(){const i=$a;return $a={hearts:0,powerups:0},i}function g1(){const i=I0(j.position);if(i){const e=i.x-j.position.x,t=i.y-j.position.y,n=Math.hypot(e,t);if(n>1e-4)return{x:e/n,y:t/n}}return{x:Math.cos(Ve.yaw-bh),y:Math.sin(Ve.yaw-bh)}}function _1(i,e,t,n,s){if(!(!Pt||!Lc))for(let r=0;r<s.cloneCount;r++){const a=(r+1)/(s.cloneCount+1),o=Pt.clone();o.position.set(i+(t-i)*a,e+(n-e)*a,o.position.z),o.rotation.copy(Pt.rotation);const c=ro(o);for(const l of c)l.transparent=!0,l.opacity=.5;Lc.add(o),mr.push({clone:o,life:s.cloneLife,total:s.cloneLife})}}function v1(i){for(let e=mr.length-1;e>=0;e--){const t=mr[e];if(t.life-=i,t.life<=0){mr.splice(e,1),t.clone.parent&&t.clone.parent.remove(t.clone);continue}const n=.5*(t.life/t.total);t.clone.traverse(s=>{s.isMesh&&s.material&&(s.material.opacity=n)})}}function y1(){for(const i of mr)i.clone.parent&&i.clone.parent.remove(i.clone);mr.length=0}const M1=9430729,b1=15400949,S1=12449254;function Cd(i,e,t){const n=new Bt(i,new Kt({color:e,transparent:!0,opacity:0,blending:vc,depthWrite:!1,side:en}));return n.position.z=t,n.visible=!1,j.add(n),n}const yi=Cd(new Za(Ue.pushGlowRadius*.5,Ue.pushGlowRadius,40),M1,.12),Si=Cd(new sd(.5,24),b1,.14),ws=Cd(new Za(.72,1,40),S1,.13);let Rr="none",Un=0,zp=0;function T1(){Rr="glow",Un=0,yi.scale.setScalar(1),yi.visible=!0,Si.visible=!1,ws.visible=!1}function ix(){Rr="impact",Un=0,yi.visible=!1,Si.scale.setScalar(.6),Si.material.opacity=.9,Si.visible=!0,ws.visible=!1}function E1(){Rr="fail",Un=0,yi.visible=!0,Si.visible=!1,ws.visible=!1}function Oc(){Rr="none",Un=0,yi.visible=!1,Si.visible=!1,ws.visible=!1}function A1(i){zp+=i;const e=.5+.5*Math.sin(zp*14);switch(Rr){case"glow":{yi.material.opacity=.3+.3*e,yi.scale.setScalar(1+.06*e);break}case"impact":{Un+=i;const t=Math.min(Un/Ue.pushImpactDuration,1);Si.scale.setScalar(.6+.7*t),Si.material.opacity=.9*(1-.6*t),t>=1&&(Rr="ring",Un=0,Si.visible=!1,ws.visible=!0);break}case"ring":{Un+=i;const t=Math.min(Un/Ue.pushRingDuration,1);ws.scale.setScalar(1+(Br().shockwaveRadius-1)*t),ws.material.opacity=.85*(1-t),t>=1&&Oc();break}case"fail":{Un+=i;const t=Math.min(Un/Ue.pushFailDuration,1);yi.scale.setScalar(1-.6*t),yi.material.opacity=.5*(1-t),t>=1&&Oc();break}}}function w1(i){if(rs){Oc();return}const e=j.position.x,t=j.position.y;if(En>0&&(En=Math.max(0,En-i)),Yi>0&&(Yi=Math.max(0,Yi-i),Yi===0&&(Zi=1)),Ji>0&&(Ji=Math.max(0,Ji-i*Zi)),Xi>0&&(Xi=Math.max(0,Xi-i),Xi===0&&!Is&&(fn("parry_failed"),E1())),v1(i),A1(i),Ve.progress>=1){const s=I0(j.position);if(s){const r=s.x-j.position.x,a=s.y-j.position.y,o=Math.hypot(r,a);Ve.direction.set(r/o,a/o,0),Ve.start.copy(j.position),Ve.target.copy(Ve.start).addScaledVector(Ve.direction,Math.min(ct.hopDistance,o)),Ve.progress=0,Ve.yaw=Math.atan2(Ve.direction.y,Ve.direction.x)+bh,fn("jump")}}if(Ve.progress<1){const s=ct.baseSpeed*Ae.speedMul*Zi,r=Math.min(Ve.progress+i*s/ct.hopDistance,1),a=Ve.start.distanceTo(Ve.target),o=a>0?Math.min(Jc/a,1):1;let c=!1;for(;Ve.progress<r;){const l=Math.min(Ve.progress+o,r),u=Zu.lerp(Ve.start.x,Ve.target.x,l),h=Zu.lerp(Ve.start.y,Ve.target.y,l);if(!Ot(Sa,u,h)){const d=Ot(Sa,u,j.position.y),f=!d&&Ot(Sa,j.position.x,h);if(d||f){const m=d?u:j.position.x,g=d?j.position.y:h,x=m-u,p=g-h;Ve.start.x+=x,Ve.start.y+=p,Ve.target.x+=x,Ve.target.y+=p,Ve.progress=l,j.position.x=m,j.position.y=g;continue}c=!0;break}Ve.progress=l,j.position.x=u,j.position.y=h}c&&(Ve.start.copy(j.position),Ve.target.copy(j.position),Ve.progress=r)}j.position.z=Math.sin(Ve.progress*Math.PI)*ct.hopHeight,P1(Ve.yaw,Ve.progress<1?I1():0),r1();const n=En>0&&Math.floor(En*10)%2===0?ct.iframeFlashOpacity:1;for(const s of qa)s.opacity=n;j.userData.velocity={x:(j.position.x-e)/Math.max(i,1e-6),y:(j.position.y-t)/Math.max(i,1e-6)},jA(i,j.position,Ae,Br())}const C1=new zn(Math.PI/2,0,0,"XYZ"),R1=new C(1,0,0),Hp=new vn,Vp=new vn;function P1(i,e){Pt&&(Hp.setFromEuler(C1.set(Math.PI/2,i,0,"XYZ")),Vp.setFromAxisAngle(R1,e),Pt.quaternion.copy(Hp).multiply(Vp))}function I1(){const i=Math.min(ct.baseSpeed*Ae.speedMul*Zi*ct.leanPerSpeed,ct.leanMax),e=Ve.progress;if(e<Jo){const t=e/Jo;return-i*(t*t*(3-2*t))}if(e<Bp){const t=Bp-Jo,n=(e-Jo)/t,s=n*n*(3-2*n);return i*(2*s-1)}return i}function L1(i){if(!rs||pr>=ct.deathAnimDuration)return!1;pr+=i;const e=Math.min(1,pr/ct.deathAnimDuration);Pt&&(Pt.rotation.z=-e*Math.PI*2,Pt.position.z=Ad-e*.5*ct.targetHeight);for(const t of qa)t.opacity=Math.max(0,1-e);return e<1}function Vn(){return Ae}function D1(){return Ae.hearts}function N1(){const i=md(ji);return{icon:i.icon,cooldown:i.ability.cooldown||0,remaining:Ji,passive:!i.ability.cooldown}}function Rd(){return Nc.slice()}function co(){return Dc}function sx(){j.position.set(0,0,0),Dc.set(j.position.x,j.position.y),Ve.progress=1,Ve.direction.set(0,0,0),Ve.start.copy(j.position),Ve.target.copy(j.position),En=0,Zi=1,Yi=0,j.userData.velocity={x:0,y:0},Oc(),j.visible=!0,Pt&&(Pt.rotation.z=0,Pt.position.z=Ad);for(const i of qa)i.opacity=1}const Gp=.15,U1=13377311,rx=.15,Zo=.5,Wp=6,F1=1.2,O1=1.5,B1=.01,ax=.9;let Bc=null,_n=null,V=null,kc=1,kr=1;const Ye={mesh:null,active:!1,originX:0,originY:0,dirAngle:0,radius:0,maxRadius:0,speed:0,hit:!1},k1=new Oe(ke.silhouetteColor);async function z1(i){Bc=i;const e=await io(Yn.model),t=e.scene;so(t);const n=Or(t),s=wr(n,{targetHeight:Yn.targetHeight}),r=c=>{if(!c)return null;const l=h=>{const d=h.lastIndexOf("|");return d>=0?h.slice(d+1):h},u=c.toLowerCase();return e.animations.find(h=>h.name===c||l(h.name)===c)||e.animations.find(h=>l(h.name).toLowerCase()===u)||e.animations.find(h=>{const d=l(h.name).toLowerCase();return d.includes(u)||u.includes(d)})||null},a={move:r(Yn.moveClip),idle:r(Yn.idleClip),attack:r(Yn.attackClip),volley:r(Yn.volleyClip),hit:r(Yn.hitClip),death:r(Yn.deathClip)},o=Object.entries(a).filter(([,c])=>!c).map(([c])=>c);o.length>0&&console.warn(`Boss: no clip for [${o.join(", ")}].`,"Available:",e.animations.map(c=>c.name)),_n={template:t,scale:s.scale,groundOffset:s.groundOffset,radius:s.radius*Rn.bossRadiusMul,clips:a}}function H1(i,e=qe.speedMul,t=1,n=!1,s=!1){if(!_n||!Bc||V)return null;ul();const r=V1();if(!r)return null;const a=Or(_n.template);a.rotation.x=Math.PI/2,a.scale.setScalar(_n.scale),a.position.z+=_n.groundOffset;const o=ro(a),c=o.map(m=>({material:m,emissive:m.emissive?m.emissive.clone():null,intensity:m.emissiveIntensity!==void 0?m.emissiveIntensity:null,color:m.color?m.color.clone():null})),l=new un;l.position.set(r.x,r.y,0),l.add(a),Bc.add(l);const u=new o0(a),h=(m,g)=>{if(!m)return null;const x=u.clipAction(m);return g&&(x.setLoop(jh,1),x.clampWhenFinished=!0),x},d={move:h(_n.clips.move,!1),idle:h(_n.clips.idle,!1),attack:h(_n.clips.attack,!0),volley:h(_n.clips.volley,!0),hit:h(_n.clips.hit,!0),death:h(_n.clips.death,!0)};d.move?d.move.play():d.idle&&d.idle.play();const f=l.userData;return f.isBoss=!0,f.maxHp=Math.ceil(i*IA()),f.hp=f.maxHp,f.speedMul=e,f.orbSpeedMul=t,f.knockbackImmune=n,f.hpRage=s,f.collider=Zc(l,l.position,_n.radius),f.dying=!1,f.dyingTimer=0,f.fading=!1,f.materials=o,f.flashTimer=0,f.flashOriginals=c,f.mixer=u,f.actions=d,f.currentAction=d.move||d.idle,f.oneShotRemaining=0,f.touchingPlayer=!1,f.velocity={x:0,y:0},f.state="chaseA",f.stateTimer=qe.phaseAChase,f.stuckTimer=0,f.escapeWaypoint=null,f.lastAttack=null,f.nextChase="chaseB",f.spiralAngle=0,f.spiralTimer=0,f.dashDirection={x:0,y:0},f.dashHit=!1,f.silhouette=0,f.silhouetteDirty=!1,f.trailTickTimer=Math.random()*rn.tickInterval,f.trailTinted=!1,f.lastHitSource="shot",V=l,XA(l),yd("boss_spawn",l.position.x,l.position.y,j.position.x,j.position.y),l}function V1(){const i=dd.map(e=>e);for(let e=i.length-1;e>0;e--){const t=Math.floor(Math.random()*(e+1));[i[e],i[t]]=[i[t],i[e]]}for(const e of i)if(pd(e.x,e.y,_n.radius))return e;return null}function Pd(i,e={}){if(!V||V.userData.dying)return!1;const t=V.userData;return t.hp-=i,t.lastHitSource=e.source||"shot",e.silent||(aw(),yd("hit",V.position.x,V.position.y,j.position.x,j.position.y)),e.knockback>0&&G1(e.knockbackX||0,e.knockbackY||0,e.knockback),t.hp<=0?(W1(),!0):(e.silent||or(V,t.actions.hit),!1)}function G1(i,e,t){if(!V||V.userData.dying||V.userData.knockbackImmune)return;const n=V.userData.collider,s=Math.hypot(i,e);if(!n||s<1e-6)return;const r=i/s,a=e/s;let o=t;for(;o>0;){const c=Math.min(rx,o),l=V.position.x+r*c,u=V.position.y+a*c;if(!Ot(n,l,u,!0))break;V.position.x=l,V.position.y=u,o-=c}}function W1(){const i=V.userData;i.dying=!0,i.touchingPlayer=!1,i.velocity.x=0,i.velocity.y=0,ul(),Qc(V),i.collider=null;const e=i.actions.death;e?(sw(V),e.reset(),e.setEffectiveWeight(1),e.play(),i.currentAction=e,i.dyingTimer=Fr(e.getClip().duration,2,3)):i.dyingTimer=2.5,bd(Yn.score),q0(i.lastHitSource,!0);const t=qe.heartDropsMin,n=Math.max(t,qe.heartDropsMax),s=t+Math.floor(Math.random()*(n-t+1));for(let r=0;r<s;r++){const a=Math.random()*Math.PI*2,o=.6+Math.random()*1.2;N0(V.position.x+Math.cos(a)*o,V.position.y+Math.sin(a)*o)}Math.random()<qe.powerupDropChance&&BE(V.position.x,V.position.y)}function X1(i){if(!V)return;const e=V.userData,t=e.collider;if(Q1(i),e.mixer.update(i),e.flashTimer>0&&(e.flashTimer-=i,e.flashTimer<=0&&qp()),ow(i),e.dying){e.dyingTimer-=i,!e.fading&&e.dyingTimer<=qe.deathFade&&(e.fading=!0,V.traverse(d=>{d.isMesh&&(d.castShadow=!1)})),e.fading&&M0(e.materials,Math.max(0,e.dyingTimer/qe.deathFade)),e.dyingTimer<=0&&cx();return}e.oneShotRemaining>0&&(e.oneShotRemaining-=i,e.oneShotRemaining<=0&&iw());const n=xd(V.position.x,V.position.y);if(n&&(e.trailTickTimer-=i,e.trailTickTimer<=0)){e.trailTickTimer=rn.tickInterval;const d=Vn();let f=(rn.damageBase+d.hearts*rn.damagePerHeart)*d.trailDamageMul;if(d.critChance>0&&Math.random()<d.critChance&&(f*=2),Pd(f,{silent:!0,source:"trail"}),e.dying)return}cw(n);const s=j.position.x-V.position.x,r=j.position.y-V.position.y,a=Math.max(Math.hypot(s,r),1e-6),o=s/a,c=r/a;e.stateTimer-=i;const l=V.position.x,u=V.position.y;let h=!1;if(e.state==="chaseA"||e.state==="chaseB"){const d=ke.baseSpeed*e.speedMul*kc;let f=o,m=c;if(t&&e.escapeWaypoint)if(V.position.distanceTo(e.escapeWaypoint)<=F1||$1(t,V.position,j.position))e.escapeWaypoint=null,e.stuckTimer=0;else{const p=e.escapeWaypoint.x-V.position.x,M=e.escapeWaypoint.y-V.position.y,v=Math.hypot(p,M);v>1e-6&&(f=p/v,m=M/v)}Yp(t,f,m,d,i)>B1?e.stuckTimer=0:t&&(e.stuckTimer+=i,K1(t)),ia(f,m),h=!0,e.stateTimer<=0&&Y1(e.state==="chaseA"?"chaseB":"chaseA")}else if(e.state==="chargeA")ia(o,c),e.stateTimer<=0&&(Cr(V.position.x,V.position.y)||J1(),ar());else if(e.state==="spiral")ia(o,c),e.spiralTimer-=i,e.spiralTimer<=0&&(e.spiralTimer=qe.spiralInterval,Cr(V.position.x,V.position.y)||tw()),e.stateTimer<=0&&ar();else if(e.state==="telegraph")ia(o,c),e.stateTimer<=0&&(e.state="dash",e.stateTimer=qe.dashDuration,e.dashDirection.x=o,e.dashDirection.y=c,e.dashHit=!1,qp());else if(e.state==="dash"){const d=qe.dashSpeed*kc,f=Yp(t,e.dashDirection.x,e.dashDirection.y,d,i);h=!0,ia(e.dashDirection.x,e.dashDirection.y);const m=no(j),g=co();!e.dashHit&&m&&t&&g0(V.position.x,V.position.y,t.radius,g.x,g.y,m.radius)&&(!Fc()||ll())&&(e.dashHit=!0,Uc(qe.dashDamage*ss(),"physical"),ar());const x=f<=1e-6;(e.stateTimer<=0||x)&&e.state==="dash"&&ar()}e.state!=="dash"&&t&&j1(t)&&Uc(qe.contactDamage*ss(),"physical"),e.velocity.x=(V.position.x-l)/Math.max(i,1e-6),e.velocity.y=(V.position.y-u)/Math.max(i,1e-6),!h&&e.state==="chargeA"&&e.oneShotRemaining<=0&&e.currentAction!==e.actions.idle&&Id(e.actions.idle)}function Y1(i){const e=V.userData;e.nextChase=i,e.stuckTimer=0,e.escapeWaypoint=null;const t=qe.attacks.filter(s=>s!==e.lastAttack),n=t[Math.floor(Math.random()*t.length)];e.lastAttack=n,n==="volley"?(e.state="chargeA",e.stateTimer=qe.chargeTime,Id(e.actions.idle)):n==="dash"?(e.state="telegraph",e.stateTimer=qe.dashTelegraph,or(V,e.actions.attack),rw()):n==="spiral"?(e.state="spiral",e.stateTimer=qe.spiralDuration,e.spiralTimer=0,e.spiralAngle=Math.random()*Math.PI*2,or(V,e.actions.volley||e.actions.attack)):n==="shockwave"?(Cr(V.position.x,V.position.y)||Z1(),or(V,e.actions.attack),ar()):n==="summon"&&(nw(),or(V,e.actions.attack),ar())}function ar(){const i=V.userData;i.state=i.nextChase,i.stateTimer=q1(i.nextChase==="chaseA"?qe.phaseAChase:qe.phaseBChase)}function q1(i){const e=V.userData;let t=1;if(e.hpRage){const n=Math.max(0,e.hp/e.maxHp);t=Math.max(0,(n-qe.hpRageFloor)/(1-qe.hpRageFloor))}return i/kr/ss()*t}function $1(i,e,t){const n=t.x-e.x,s=t.y-e.y,r=Math.max(1,Math.ceil(Math.hypot(n,s)/O1));for(let a=1;a<=r;a++){const o=a/r;if(!Ot(i,e.x+n*o,e.y+s*o,!0))return!1}return!0}function Xp(i,e){const t=j.position.x-V.position.x,n=j.position.y-V.position.y,s=Math.hypot(t,n);if(s<1e-6)return null;const r=-n/s*Wp,a=t/s*Wp,o=new C(V.position.x+r,V.position.y+a,0),c=new C(V.position.x-r,V.position.y-a,0),l=[];return Ot(i,o.x,o.y,!0)&&l.push(o),Ot(i,c.x,c.y,!0)&&l.push(c),l.length===0?null:l.length===1?l[0]:e?(e.x-V.position.x)*r+(e.y-V.position.y)*a>0?c:o:Math.random()<.5?o:c}function K1(i){const e=V.userData;if(e.escapeWaypoint){if(e.stuckTimer<Zo*2)return;e.escapeWaypoint=Xp(i,e.escapeWaypoint)??e.escapeWaypoint,e.stuckTimer=Zo;return}e.stuckTimer<Zo||(e.escapeWaypoint=Xp(i,null),e.stuckTimer=e.escapeWaypoint?Zo:0)}function Yp(i,e,t,n,s){if(!i)return 0;const r=V.position.x,a=V.position.y,o=n*s,c=Math.max(1,Math.ceil(o/Jc)),l=e*o/c,u=t*o/c;for(let h=0;h<c;h++){const d=V.position.x+l,f=V.position.y+u;if(Ot(i,d,f,!0)){V.position.x=d,V.position.y=f;continue}if(Ot(i,d,V.position.y,!0)){V.position.x=d;continue}if(Ot(i,V.position.x,f,!0)){V.position.y=f;continue}break}return Math.hypot(V.position.x-r,V.position.y-a)}function ia(i,e){const t=V.children[0];t&&(i!==0||e!==0)&&(t.rotation.y=Math.atan2(e,i)+Yn.yawOffset)}function j1(i){if(Fc()&&!ll())return!1;const e=no(j);if(!e)return!1;const t=co(),n=t.x-V.position.x,s=t.y-V.position.y,r=Math.hypot(n,s),a=e.radius+i.radius;if(r>=a)return!1;if(Fc())return!0;const o=r>1e-6?n/r:1,c=r>1e-6?s/r:0;let l=a-r+.05;for(;l>0;){const u=Math.min(rx,l),h=j.position.x+o*u,d=j.position.y+c*u;if(!Ot(e,h,d))break;j.position.x=h,j.position.y=d,l-=u}return!0}function J1(){if(!V)return;or(V,V.userData.actions.volley||V.userData.actions.attack);const i=V.userData.orbSpeedMul*kr*ss();for(let e=0;e<qe.orbCount;e++){const t=e/qe.orbCount*Math.PI*2;O0(V.position.x,V.position.y,Math.cos(t),Math.sin(t),i,V)}}function Z1(){const i=j.position.x-V.position.x,e=j.position.y-V.position.y;Ye.dirAngle=Math.atan2(e,i),Ye.originX=V.position.x,Ye.originY=V.position.y,Ye.radius=1,Ye.maxRadius=qe.waveMaxRadius,Ye.speed=qe.waveSpeed*kr*ss(),Ye.hit=!1,Ye.active=!0,ew();const t=qe.waveArcDeg*Math.PI/180;Ye.mesh.rotation.z=Ye.dirAngle-t/2,Ye.mesh.position.x=Ye.originX,Ye.mesh.position.y=Ye.originY,Ye.mesh.visible=!0}function Q1(i){if(!Ye.active)return;Ye.radius+=Ye.speed*i;const e=Math.min(Ye.radius/Ye.maxRadius,1);if(Ye.mesh.scale.setScalar(Ye.radius),Ye.mesh.material.opacity=.75*(1-e*e),!Ye.hit){const t=j.position.x-Ye.originX,n=j.position.y-Ye.originY,s=Math.hypot(t,n);let r=Math.atan2(n,t)-Ye.dirAngle;r=Math.atan2(Math.sin(r),Math.cos(r));const a=qe.waveArcDeg*Math.PI/360,o=no(j),c=o?o.radius:.5;Math.abs(r)<=a&&s-c<=Ye.radius&&s+c>=Ye.radius*ax&&(Ye.hit=!0,h1(qe.waveSlowMul,qe.waveSlowDuration))}Ye.radius>=Ye.maxRadius&&ul()}function ew(){if(Ye.mesh)return;const i=qe.waveArcDeg*Math.PI/180;Ye.mesh=new Bt(new Za(ax,1,48,1,0,i),new Kt({color:qe.waveColor,transparent:!0,opacity:0,blending:vc,depthWrite:!1,side:en})),Ye.mesh.position.z=.1,Ye.mesh.visible=!1,Bc.add(Ye.mesh)}function ul(){Ye.active=!1,Ye.mesh&&(Ye.mesh.visible=!1)}function tw(){const i=V.userData,e=i.orbSpeedMul*kr*ss()*qe.spiralSpeedMul;for(let t=0;t<qe.spiralOrbs;t++){const n=i.spiralAngle+t/qe.spiralOrbs*Math.PI*2;O0(V.position.x,V.position.y,Math.cos(n),Math.sin(n),e,V)}i.spiralAngle+=qe.spiralStepDeg*Math.PI/180}function nw(){if(!(J0()+qe.summonCount>ke.maxAlive))for(let i=0;i<qe.summonCount;i++){const e=Math.random()*Math.PI*2,t=1.5+Math.random()*qe.summonRadius,n=qe.summonTypes[Math.floor(Math.random()*qe.summonTypes.length)];j0(n,{x:V.position.x+Math.cos(e)*t,y:V.position.y+Math.sin(e)*t})}}function or(i,e){const t=i.userData;if(!e)return;const n=t.currentAction;e.reset(),e.setEffectiveWeight(1),e.play(),n&&n!==e&&n.crossFadeTo(e,Gp,!1),t.currentAction=e,t.oneShotRemaining=Math.max(e.getClip().duration-Gp,.05)}function Id(i){if(!V||!i)return;const e=V.userData,t=e.currentAction;i.reset(),i.setEffectiveWeight(1),i.play(),t&&t!==i&&t.crossFadeTo(i,.25,!1),e.currentAction=i,e.oneShotRemaining=0}function iw(){if(!V)return;const i=V.userData,e=i.state==="chaseA"||i.state==="chaseB"||i.state==="dash"?i.actions.move:i.actions.idle;e&&i.currentAction!==e&&Id(e)}function sw(i){i.userData.oneShotRemaining=0}function rw(){const i=V.userData;for(const e of i.flashOriginals)e.emissive&&(e.material.emissive.setHex(U1),e.intensity!==null&&(e.material.emissiveIntensity=.9))}function aw(){const i=V.userData;i.flashTimer=ke.hitFlashDuration;for(const e of i.flashOriginals)e.emissive&&(e.material.emissive.setHex(16777215),e.intensity!==null&&(e.material.emissiveIntensity=1))}function qp(){if(V)for(const i of V.userData.flashOriginals)i.emissive&&(i.material.emissive.copy(i.emissive),i.intensity!==null&&(i.material.emissiveIntensity=i.intensity))}function ow(i){if(!V)return;const e=V.userData,t=Cr(V.position.x,V.position.y)?1:0;if(e.silhouette===t&&!e.silhouetteDirty)return;const n=i/ke.silhouetteBlend;e.silhouette=t>e.silhouette?Math.min(t,e.silhouette+n):Math.max(t,e.silhouette-n);for(const s of e.flashOriginals)s.color&&s.material.color.copy(s.color).lerp(k1,e.silhouette);e.silhouetteDirty=e.silhouette>0}function cw(i){if(!V)return;const e=V.userData;if(!(e.flashTimer>0||e.state==="telegraph")&&!(!i&&!e.trailTinted)){e.trailTinted=i;for(const t of e.flashOriginals)t.emissive&&(i?(t.material.emissive.setHex(rn.tint),t.intensity!==null&&(t.material.emissiveIntensity=rn.bossTintIntensity)):(t.material.emissive.copy(t.emissive),t.intensity!==null&&(t.material.emissiveIntensity=t.intensity)))}}function Sh(){return!!V&&!V.userData.dying}function lw(){return!V||V.userData.dying?null:{hp:V.userData.hp,maxHp:V.userData.maxHp}}function ox(i,e){kc=i,kr=e}function cx(){V&&(YA(V),Qc(V),V.parent&&V.parent.remove(V),V=null)}function uw(){cx(),ul(),kc=1,kr=1}let mc=0,Th=null,Eh=null,xc=0;function hw(i){Th=i}function dw(i){Eh=i}function fw(){mc=0,xc=0}function pw(i){w1(i),VA(i),X1(i),xw(i),vw();const e=KE(i,oo(),Tw());Mw(e.enemyHits),bw(e.playerHits),Sw(),yw();const t=kE(i,j.position.x,j.position.y,Vn().magnetRadius),n=x1();mw(t.hearts+n.hearts,t.powerups+n.powerups),PE(i),wd()&&Th&&Th()}function mw(i,e){i>0&&(tx(i*bs.heal),fn("heart")),xc+=e,xc>0&&wi()===Fe.WAVE_PLAYING&&Eh&&(xc--,Eh())}function xw(i){const e=Vn(),t=gw(e.range);t&&(mc-=i*nx(),!(mc>0)&&(mc=e.fireCooldown,_w(t)))}function gw(i){let e=null,t=i*i;const n=j.position.x,s=j.position.y;for(const r of oo()){if(r.userData.dying)continue;const a=r.position.x-n,o=r.position.y-s,c=a*a+o*o;c>=t||fd(n,s,r.position.x,r.position.y,st.playerRadius*Rn.projectileRadiusMul,!0)&&(t=c,e=r)}return e}function _w(i){const e=Vn(),t=j.position.x,n=j.position.y,s=st.playerSpeed*nx(),r=i.position.x-t,a=i.position.y-n,c=Math.max(Math.hypot(r,a),1e-4)/s,l=i.userData.velocity||{x:0,y:0},u=i.position.x+l.x*c*st.aimLeadFactor,h=i.position.y+l.y*c*st.aimLeadFactor,d=Math.atan2(h-n,u-t),f=st.multiShotSpreadDeg*Math.PI/180,m=Math.max(1,e.projectiles),g=(m-1)/2*f,x=Math.max(0,e.maxHearts-e.hearts),p=e.damage+e.berserkPerMissingHeart*x;for(let M=0;M<m;M++){const v=d-g+M*f;let S=p;e.critChance>0&&Math.random()<e.critChance&&(S*=2);const w=WE(t,n,Math.cos(v),Math.sin(v),{damage:S,speed:s,radiusMul:e.bulletRadiusMul});w&&(w.pierce=e.pierce)}fn("shoot")}function vw(){if(!ll())return;const i=co(),e=Br();qE(i.x,i.y,e.reflectRadius,e.reflectDamage)>0&&u1()}function yw(){const i=d1();if(!i)return;const e=Br(),t=Vn(),n=j.position.x,s=j.position.y;for(const r of oo()){if(r.userData.dying)continue;const a=i.radius+(r.userData.collider?r.userData.collider.radius:0),o=Math.hypot(r.position.x-n,r.position.y-s);if(o>a)continue;let c=i.damage;if(t.critChance>0&&Math.random()<t.critChance&&(c*=2),r.userData.isBoss){const l=!r.userData.knockbackImmune;Pd(c,{knockback:l?qe.knockbackDistance:0,knockbackX:r.position.x-n,knockbackY:r.position.y-s,source:"shockwave"}),l&&Np()}else r.userData.typeConfig.behavior!=="tank"&&i.knockback>0&&o>1e-6&&(ol(r,r.position.x-n,r.position.y-s,i.knockback),Np()),al(r,c,{source:"shockwave"}),FA(r,e.stun)}}function Mw(i){const e=Vn();for(const{bullet:t,enemy:n}of i){const s={source:t.source||"shot"};if(n.userData.isBoss){Pd(t.damage,s);continue}al(n,t.damage,s),!n.userData.dying&&(e.slowOnHitMul>0&&e.slowOnHitDuration>0&&UA(n,e.slowOnHitMul,e.slowOnHitDuration),e.shotKnockback>0&&ol(n,t.speedX,t.speedY,e.shotKnockback))}}function bw(i){const e=st.damage*ss();for(let t=0;t<i.length;t++){const n=Uc(e,"projectile");(n==="hit"||n==="dead")&&$0()}}function Sw(){if(wd()||Fc()&&!ll())return;const i=Vn(),e=ss();for(const t of oo()){if(t.userData.isBoss||t.userData.dying||!t.userData.touchingPlayer)continue;const n=Uc(e,"physical");(n==="hit"||n==="dead")&&($0(),i.thornsDamage>0&&al(t,i.thornsDamage,{source:"thorns"})),ol(t,t.position.x-j.position.x,t.position.y-j.position.y,ke.knockbackDistance)}}function Tw(){const i=no(j),e=co();return{x:e.x,y:e.y,radius:i?i.radius:.6}}const lx=[{duration:30,pool:["fighter","ranged"],spawnInterval:.5,clearBonusMul:500},{duration:30,pool:["fighter","ranged","speeder"],spawnInterval:.3,clearBonusMul:500},{duration:1/0,pool:[],spawnInterval:.5,boss:"start",bossHp:80,bossSpeedMul:.7,bossOrbSpeedMul:1,bossSpawnRate:.3,clearBonusMul:500},{duration:30,pool:["fighter","ranged","speeder","tank"],spawnInterval:.3,clearBonusMul:500},{duration:1/0,pool:["fighter","ranged","speeder","tank"],spawnInterval:.3,spawnIntervalMin:.2,rampSeconds:300,boss:"start",bossHp:180,bossSpeedMul:.77,bossOrbSpeedMul:1.1,bossKnockbackImmune:!0,bossHpRage:!0,bossRespawnScore:1e3,clearBonusMul:0}],ux=lx.length;function Ld(i){return lx[i-1]}let Ah=null,Xt=0,xi=0,Dd=0,Ta=0,Nd=!1,lo=!1,Ea=!1,Aa=!1,wa=null,wh=0;function Ew(i){Ah=i}function Aw(){Nd=!0,hx(1)}function ww(){Nd=!1,Xt=0,xi=0,Dd=0,Ta=0,lo=!1,Ea=!1,Aa=!1,wa=null,wh=0}function Cw(){lo&&hx(Xt+1)}function Rw(){return{wave:Xt,total:ux,waveElapsed:xi,bossAlive:Sh(),boss:lw()}}function Pw(){return{total:Dd,wave5:Xt===5?xi:0}}function hx(i){Xt=i,xi=0,Ta=0,lo=!1,Ea=!!Ld(i).boss,Aa=!1,wa=null,i===5&&(K0(1,1,1),ox(1,1)),gA(i,Vn().hearts),fh(i,!1)}function Iw(i){if(!Nd||lo)return;const e=Ld(Xt);if(!e)return;xi+=i,Dd+=i;const t=Lw(pc());t!==wh&&(wh=t,PA(Math.pow(2,t),Math.pow(3,t)));let n=1,s=1;if(Xt===5){const a=xi/60;n=1+ke.growthPerMinute*a;const o=Math.min(1+ke.growthPerMinute*a,ke.growthSpeedCap);s=1+ke.growthAttackPerMinute*a,K0(n,o,s),ox(o,s),yA(xi)}if(e.boss&&Ea&&(wa===null||pc()-wa>=e.bossRespawnScore)&&H1(e.bossHp*n,e.bossSpeedMul,e.bossOrbSpeedMul,!!e.bossKnockbackImmune,!!e.bossHpRage)&&(Ea=!1,Aa=!0,fh(Xt,!0)),Aa&&!Sh()){if(Aa=!1,vA(Xt),fh(Xt,!1),Xt===5)wa=pc(),Ea=!0;else if(Xt===3){$p();return}}if(Number.isFinite(e.duration)&&xi>=e.duration){$p();return}let r=e.spawnInterval;if(Xt===5&&e.rampSeconds){const a=Math.min(xi/e.rampSeconds,1);r+=(e.spawnIntervalMin-e.spawnInterval)*a,r=Math.max(.15,r/s)}for(e.bossSpawnRate&&Sh()&&(r/=e.bossSpawnRate),Ta+=i;Ta>=r;)Ta-=r,Dw(e.pool)}function Lw(i){let e=0,t=ke.doomScore,n=ke.doomScore/2;for(;i>=t;)e++,t+=Math.ceil(n/1e3)*1e3,n/=2;return e}function Dw(i){if(J0()>=ke.maxAlive)return;const e=i[Math.floor(Math.random()*i.length)],t=NA(e),n=dd.map(s=>s);for(let s=n.length-1;s>0;s--){const r=Math.floor(Math.random()*(s+1));[n[s],n[r]]=[n[r],n[s]]}for(const s of n){const r=Math.random()*Math.PI*2,a=Math.sqrt(Math.random())*ke.spawnJitter,o=s.x+Math.cos(r)*a,c=s.y+Math.sin(r)*a;if(pd(o,c,t)){j0(e,{x:o,y:c});return}}}function $p(){lo=!0;const i=Ld(Xt);i.clearBonusMul&&bd(i.clearBonusMul*Xt),_A(Xt),Ah&&Ah(Xt)}const hi=i=>Math.round(i*100),Kp={fireRateMul:1.25},jp={projectilesAdd:1},Jp={pierceAdd:2},Zp={speedAdd:.5},Qp={damageAdd:2},em={rangeMul:1.3},iu={maxHeartsAdd:1,heal:2},tm={iFramesSet:3},nm={magnetMul:5},im={critChanceAdd:.15},sm={thornsDamage:2},rm={berserkPerMissingHeart:.5},Qo={trailDurationAdd:1,trailWidthMul:1.25,trailDamageMul:3},su={slowOnHitMul:.6,slowOnHitDuration:1},am={bulletRadiusMul:2.5},om={dodgeChanceAdd:.15},ru={damageAdd:5,maxHeartsAdd:-1},au={projectilesAdd:2,fireRateMul:.75},Ud=[{id:"quickTrigger",icon:"⚡",name:"Quick Trigger",description:`+${hi(Kp.fireRateMul-1)}% fire rate.`,effect:Kp},{id:"multiShot",icon:"🎯",name:"Multi-Shot",description:`+${jp.projectilesAdd} projectile per volley.`,effect:jp},{id:"piercing",icon:"💥",name:"Piercing",description:`Each projectile pierces +${Jp.pierceAdd} targets.`,effect:Jp},{id:"jumpSneakers",icon:"👟",name:"Jump Sneakers",description:`+${hi(Zp.speedAdd)}% movement speed.`,effect:Zp},{id:"heavyAmmo",icon:"🗡️",name:"Heavy Ammo",description:`+${Qp.damageAdd} damage per shot.`,effect:Qp},{id:"tacticalVision",icon:"👁️",name:"Tactical Vision",description:`+${hi(em.rangeMul-1)}% auto-shooter range.`,effect:em},{id:"titanHeart",icon:"💖",name:"Titan Heart",description:`+${iu.heal} HP and +${iu.maxHeartsAdd} max HP (max ${ct.maxHearts}). Still heals at ${ct.maxHearts} hearts.`,effect:iu},{id:"scaledSkin",icon:"🛡️",name:"Scaled Skin",description:`Invulnerability after a hit becomes ${tm.iFramesSet} s.`,effect:tm},{id:"pointMagnet",icon:"🧲",name:"Point Magnet",description:`x${nm.magnetMul} pickup attraction radius (hearts and power-up drops).`,effect:nm},{id:"healthy",icon:"🩸",name:"Healthy",description:`Health drop chance goes from ${ke.baseDropChance*100}% to ${ke.HealthyDropChance*100}%.`,effect:{dropChanceSet:ke.HealthyDropChance}},{id:"criticalHit",icon:"🎯",name:"Critical Hit",description:`${hi(im.critChanceAdd)}% chance for a hit to deal double damage (shots, shockwave, trail).`,effect:im},{id:"thornSkin",icon:"🌵",name:"Thorn Skin",description:`Common enemies that hurt you by touch take ${sm.thornsDamage} damage.`,effect:sm},{id:"berserk",icon:"😤",name:"Berserk",description:`+${rm.berserkPerMissingHeart} damage per shot for every missing heart.`,effect:rm},{id:"concussiveShots",icon:"💨",name:"Concussive Shots",description:"Shots knock common enemies back.",effect:{shotKnockback:2.5}},{id:"trailMaster",icon:"🌀",name:"Trail Master",description:`Trail lasts +${Qo.trailDurationAdd} s, is ${hi(Qo.trailWidthMul-1)}% wider and deals ${Qo.trailDamageMul}x damage.`,effect:Qo},{id:"frostShot",icon:"❄️",name:"Frost Shot",description:`Hits slow common enemies by ${hi(1-su.slowOnHitMul)}% for ${su.slowOnHitDuration} s.`,effect:su},{id:"bigBullets",icon:"⚪",name:"Big Bullets",description:`+${hi(am.bulletRadiusMul-1)}% bullet size (visuals and hitbox).`,effect:am},{id:"evasion",icon:"🍀",name:"Evasion",description:`${hi(om.dodgeChanceAdd)}% chance to ignore an incoming hit.`,effect:om},{id:"reckless",icon:"💢",name:"Reckless",description:`+${ru.damageAdd} damage per shot, but ${ru.maxHeartsAdd} max heart.`,effect:ru},{id:"overflow",icon:"🌊",name:"Overflow",description:`+${au.projectilesAdd} projectiles per volley, but ${hi(1-au.fireRateMul)}% slower fire rate.`,effect:au}];function dx(i){return Ud.find(e=>e.id===i)}let hl=[],zc=0;function fx(){hl=px(),fn("card")}function Nw(){return hl.slice()}function Uw(){return zc<=0?!1:(zc--,hl=px(),fn("card"),!0)}function Fw(){return zc}function Ow(){hl=[],zc=to.reshuffleAllowed}function px(){const i=c1(),e=Ud.filter(t=>!t.classId||t.classId===i);for(let t=e.length-1;t>0;t--){const n=Math.floor(Math.random()*(t+1));[e[t],e[n]]=[e[n],e[t]]}return e.slice(0,to.cardsShown)}let cm=!1,cr=null,ja=!1;function Bw(){cm||(cm=!0,hw(()=>mx()),Ew(()=>{ja=!1,fx(),hn(Fe.POWERUP_DRAFT)}),dw(()=>kw()))}function kw(){wi()===Fe.WAVE_PLAYING&&(Rd().length>=to.maxCards||(ja=!0,fx(),hn(Fe.POWERUP_DRAFT)))}function zw(i){Ch(),o1(i),bA(),xA(),Ow(),ja=!1,MT(j.position),Aw(),hn(Fe.WAVE_PLAYING)}function Hw(i){if(l1(i),wd()){mx();return}ja?ja=!1:Cw(),hn(Fe.WAVE_PLAYING)}function mx(){cl(),cr=TA(),MA(cr),hn(Fe.GAME_OVER)}function Ch(){jE(),HE(),IE(),cl(),uw(),qA(),fw(),ww()}function Vw(){return{score:cr?cr.finalScore:0,best:Rc(),isRecord:cr?cr.isRecord:!1,cards:Rd(),unlocked:mA(),times:Pw()}}const Gw="1.2.5",Fd=document.createElement("div");Fd.id="ui-root";document.body.appendChild(Fd);const Od=document.createElement("div");Od.className="ui-layer";Fd.appendChild(Od);function G(i,e,t){const n=document.createElement(i);return e&&(n.className=e),t!==void 0&&(n.innerHTML=t),n}function ii(...i){for(const e of i)Od.appendChild(e);return i[i.length-1]}function Bd(i,e){const t=G("ul",i);for(const n of e)t.appendChild(G("li","",n));return t}const gi=G("div","badge-tooltip");gi.style.display="none";document.body.appendChild(gi);let Pr=null;function xr(i,e,t){i.addEventListener("pointerenter",n=>{n.pointerType==="mouse"&&lm(i,e,t)}),i.addEventListener("pointerleave",n=>{n.pointerType==="mouse"&&Pr===i&&as()}),i.addEventListener("click",()=>{Pr===i?as():lm(i,e,t)})}document.addEventListener("pointerdown",i=>{Pr&&(Pr.contains(i.target)||gi.contains(i.target)||as())},!0);function lm(i,e,t){gi.replaceChildren(G("div","badge-tooltip-title",e),G("div","badge-tooltip-body",t)),Pr=i,gi.style.display="block";const n=i.getBoundingClientRect(),s=gi.getBoundingClientRect(),r=Math.max(8,Math.min(n.left+n.width/2-s.width/2,window.innerWidth-s.width-8));let a=n.top-s.height-8;a<8&&(a=n.bottom+8),gi.style.left=`${r}px`,gi.style.top=`${a}px`}function as(){Pr=null,gi.style.display="none"}function gc(i){const e=Number.isFinite(i)&&i>0?Math.floor(i):0,t=Math.floor(e/3600),n=String(Math.floor(e%3600/60)).padStart(2,"0"),s=String(e%60).padStart(2,"0");return t>0?`${t}:${n}:${s}`:`${n}:${s}`}let Rh=null,Ph=null,Ih=null,Ca=null,Lh=null,Ra=null,Dh=null,Hc=null,mi=null,sa=null;const Vt={hearts:"",wave:"",score:"",bossWidth:-1,abilityFill:-1,abilityIcon:"",abilityPassive:null,badges:""};function Ww(){mi=G("div"),mi.id="hud";const i=G("div","hud-top");Rh=G("div","hearts"),Ph=G("div","wave-banner");const e=G("div","score-row");Ih=G("span","score"),sa=G("button","pause-btn","⏸"),sa.title="Pause",sa.addEventListener("click",()=>{wi()===Fe.WAVE_PLAYING&&hn(Fe.PAUSE_MENU)}),e.appendChild(Ih),e.appendChild(sa),Ca=G("div","boss-bar hidden"),Lh=G("div","boss-fill"),Ca.appendChild(Lh),i.appendChild(Rh),i.appendChild(Ph),i.appendChild(e),i.appendChild(Ca);const t=G("div","hud-bottom");Ra=G("div","ability-ring"),Dh=G("div","inner"),Ra.appendChild(Dh),Hc=G("div","build-panel"),t.appendChild(Ra),t.appendChild(Hc),mi.appendChild(i),mi.appendChild(t),ii(mi),ls(n=>{const s=n===Fe.WAVE_PLAYING||n===Fe.POWERUP_DRAFT||n===Fe.PAUSE_MENU||n===Fe.GAME_OVER;mi.classList.toggle("hidden",!s),sa.classList.toggle("hidden",n!==Fe.WAVE_PLAYING),as()}),mi.classList.add("hidden")}function Xw(){if(!mi||mi.classList.contains("hidden"))return;const i=D1(),e=Vn().maxHearts,t="💖".repeat(i)+"🖤".repeat(Math.max(0,e-i));t!==Vt.hearts&&(Vt.hearts=t,Rh.textContent=t);const n=Rw();let s=n.wave>0?`WAVE ${n.wave}/${n.total}`:"";n.wave===n.total&&(s=`⏱ ${gc(n.waveElapsed)}`);const r=n.bossAlive?' <span class="boss-tag">- BOSS ⚠️</span>':"";s+r!==Vt.wave&&(Vt.wave=s+r,Ph.innerHTML=Vt.wave);const a=`⭐ ${pc().toLocaleString()}`;if(a!==Vt.score&&(Vt.score=a,Ih.textContent=a),n.boss){Ca.classList.remove("hidden");const d=Math.max(0,Math.round(n.boss.hp/n.boss.maxHp*100));d!==Vt.bossWidth&&(Vt.bossWidth=d,Lh.style.width=`${d}%`)}else Ca.classList.add("hidden"),Vt.bossWidth=-1;const o=N1();o.icon!==Vt.abilityIcon&&(Vt.abilityIcon=o.icon,Dh.textContent=o.icon),o.passive!==Vt.abilityPassive&&(Vt.abilityPassive=o.passive,Ra.classList.toggle("passive",o.passive));const c=o.passive||o.cooldown<=0?1:Math.min(1,Math.max(0,1-o.remaining/o.cooldown)),l=Math.round(c*100)/100;l!==Vt.abilityFill&&(Vt.abilityFill=l,Ra.style.setProperty("--fill",String(l)));const u=new Map;for(const d of Rd())u.set(d,(u.get(d)||0)+1);let h="";for(const[d,f]of u)h+=`${d}x${f}|`;if(h!==Vt.badges){Vt.badges=h,as(),Hc.replaceChildren();for(const[d,f]of u){const m=dx(d),g=G("span","build-badge",m?m.icon:"❔");if(f>1&&g.appendChild(G("span","count",`x${f}`)),m){const x=f>1?` (stacked x${f})`:"";xr(g,`${m.icon} ${m.name}`,m.description+x)}else xr(g,"❔ Unknown","This power-up is no longer in the card pool.");Hc.appendChild(g)}}}let Fi=null,Vc=null;function Yw(){Fi=G("div","overlay");const i=G("div","panel achievements-panel");i.appendChild(G("div","achievements-title","🏆 ACHIEVEMENTS")),Vc=G("div","achievements-list"),i.appendChild(Vc);const e=G("div","achievements-footer"),t=G("button","btn","✖ CLOSE");t.addEventListener("click",ou),e.appendChild(t),i.appendChild(e),Fi.addEventListener("click",n=>{n.target===Fi&&ou()}),window.addEventListener("keydown",n=>{n.key==="Escape"&&Fi.classList.contains("visible")&&(n.stopPropagation(),n.preventDefault(),ou())},!0),Fi.appendChild(i),ii(Fi)}function kd(){qw(),Fi.classList.add("visible")}function qw(){Vc.innerHTML="";for(const i of rA()){const e=G("div",`achievement${i.unlocked?"":" locked"}`);e.appendChild(G("div","a-icon",i.unlocked?i.icon:"🔒"));const t=G("div","");t.appendChild(G("div","a-name",i.name)),t.appendChild(G("div","a-desc",i.description)),e.appendChild(t),Vc.appendChild(e)}}function ou(){Fi.classList.remove("visible")}let Oi=null,Es=null;function $w(){Oi=G("div","overlay");const i=G("div","panel compendium-panel");i.appendChild(G("div","compendium-title","📖 COMPENDIUM")),Es=G("div","compendium-list"),i.appendChild(Es);const e=G("div","compendium-footer"),t=G("button","btn","✖ CLOSE");t.addEventListener("click",cu),e.appendChild(t),i.appendChild(e),Oi.addEventListener("click",n=>{n.target===Oi&&cu()}),window.addEventListener("keydown",n=>{n.key==="Escape"&&Oi.classList.contains("visible")&&(n.stopPropagation(),n.preventDefault(),cu())},!0),Oi.appendChild(i),ii(Oi)}function zd(){Kw(),Oi.classList.add("visible")}function Kw(){Es.innerHTML="",Es.appendChild(G("div","summary-label","CLASSES"));const i=hA();for(const e of tl)Es.appendChild(um(e,i.includes(e.id),`${e.name}  ${"💖".repeat(e.hearts)}`));Es.appendChild(G("div","summary-label","POWER-UPS"));for(const e of Ud)Es.appendChild(um(e,e1(e.id),e.name))}function um(i,e,t){const n=G("div",`achievement${e?"":" locked"}`);n.appendChild(G("div","a-icon",e?i.icon:"🔒"));const s=G("div","");return s.appendChild(G("div","a-name",t)),Array.isArray(i.description)?s.appendChild(Bd("a-desc a-desc-list",i.description)):s.appendChild(G("div","a-desc",i.description)),n.appendChild(s),n}function cu(){Oi.classList.remove("visible")}const jw=["🖱️ Use the mouse to move — touch the screen on mobile. Tode hops toward your pointer.","⚡ Double click / double tap to use your class ability (Pusher or Dasher).","🃏 Pick a power-up after every wave — stack cards to build your run.","🐸 Survive as long as you can — the waves only get harder, and Wave 5 never ends.","🏆 Get all achievements and fill the compendium.","🐛 Try to break the game or crash it."];let Bi=null;function Jw(){Bi=G("div","overlay");const i=G("div","panel guide-panel");i.appendChild(G("div","guide-title","🎮 GUIDE"));const e=G("div","guide-list");e.appendChild(Bd("guide-bullets",jw)),i.appendChild(e);const t=G("div","guide-footer"),n=G("button","btn","✖ CLOSE");n.addEventListener("click",lu),t.appendChild(n),i.appendChild(t),Bi.addEventListener("click",s=>{s.target===Bi&&lu()}),window.addEventListener("keydown",s=>{s.key==="Escape"&&Bi.classList.contains("visible")&&(s.stopPropagation(),s.preventDefault(),lu())},!0),Bi.appendChild(i),ii(Bi)}function Zw(){Bi.classList.add("visible")}function lu(){Bi.classList.remove("visible")}const Qw="https://github.com/mephisto-inc/jogos/tree/main/3d-game-challenge#creditos";function e3(){const i=G("button","btn","💚 CREDITS");return i.addEventListener("click",()=>{window.open(Qw,"_blank","noopener,noreferrer")}),i}let ra=null,ua=null,Wn=null,Qi=null,hm=0;function t3(){ra=G("div","overlay");const i=G("div","panel menu-panel");i.appendChild(G("div","game-title","🐸 TODE")),i.appendChild(G("div","game-subtitle","Survive the bugs. Beat your record.")),ua=G("div","best-score"),i.appendChild(ua);const e=G("button","btn","▶ PLAY");e.addEventListener("click",()=>hn(Fe.CHARACTER_SELECTION)),i.appendChild(e);const t=G("div","btn-row"),n=G("button","btn","🏆 ACHIEVEMENTS");n.addEventListener("click",()=>kd()),t.appendChild(n);const s=G("button","btn","📖 COMPENDIUM");s.addEventListener("click",()=>zd()),t.appendChild(s),i.appendChild(t);const r=G("div","volume-row");r.appendChild(G("span","","🔊")),Wn=G("input"),Wn.type="range",Wn.min="0",Wn.max="1",Wn.step="0.05",Wn.addEventListener("input",()=>H0(Number(Wn.value))),r.appendChild(Wn),i.appendChild(r);const a=G("div","btn-row"),o=G("button","btn","🎮 GUIDE");o.addEventListener("click",()=>Zw()),a.appendChild(o),a.appendChild(e3()),i.appendChild(a),Qi=G("button","btn","↺ RESET ALL PROGRESS"),Qi.addEventListener("click",n3),i.appendChild(Qi),ra.appendChild(i),ii(ra),ls(c=>{const l=c===Fe.MAIN_MENU;ra.classList.toggle("visible",l),l&&(ua.textContent=`Best score: ⭐ ${Rc().toLocaleString()}`,Wn.value=String(dh()))}),ra.classList.add("visible"),ua.textContent=`Best score: ⭐ ${Rc().toLocaleString()}`,Wn.value=String(dh())}function n3(){if(!Qi.classList.contains("confirming")){Qi.classList.add("confirming"),Qi.textContent="SURE?",hm=setTimeout(dm,Ar.resetConfirm);return}clearTimeout(hm),dm(),SA(),oA(),t1(),ua.textContent=`Best score: ⭐ ${Rc().toLocaleString()}`}function dm(){Qi.classList.remove("confirming"),Qi.textContent="↺ RESET ALL PROGRESS"}let ec=null;function i3(){ec=G("div","overlay");const i=G("div","panel menu-panel wide");i.appendChild(G("div","game-title","CHOOSE YOUR FROG"));const e=G("div","class-cards");for(const n of tl){const s=G("div","panel class-card");s.appendChild(G("div","icon",n.icon)),s.appendChild(G("div","name",n.name)),s.appendChild(G("div","hearts-line","💖".repeat(n.hearts))),s.appendChild(Bd("desc desc-list",n.description)),s.addEventListener("click",()=>zw(n.id)),e.appendChild(s)}i.appendChild(e);const t=G("button","btn","← BACK");t.addEventListener("click",()=>hn(Fe.MAIN_MENU)),i.appendChild(t),ec.appendChild(i),ii(ec),ls(n=>{ec.classList.toggle("visible",n===Fe.CHARACTER_SELECTION)})}let tc=null,Gc=null,_c=null,Nh=null,Uh=0;function s3(){tc=G("div","overlay");const i=G("div","panel draft-panel");i.appendChild(G("div","draft-title","CHOOSE A POWER-UP")),Gc=G("div","draft-cards"),i.appendChild(Gc);const e=G("div","reshuffle-row");_c=G("button","btn","🔄 RESHUFFLE"),Nh=G("span"),_c.addEventListener("click",()=>{performance.now()-Uh<to.inputLock||Uw()&&fm()}),e.appendChild(_c),e.appendChild(Nh),i.appendChild(e),tc.appendChild(i),ii(tc),ls(t=>{const n=t===Fe.POWERUP_DRAFT;tc.classList.toggle("visible",n),n&&(Uh=performance.now(),fm())})}function fm(){Gc.innerHTML="";for(const t of Nw()){const n=G("div","panel draft-card");n.appendChild(G("div","icon",t.icon)),n.appendChild(G("div","name",t.name)),n.appendChild(G("div","desc",t.description)),n.addEventListener("click",()=>{performance.now()-Uh<INPUT_LOCK_MS||Hw(t)}),Gc.appendChild(n)}const i=Fw();_c.disabled=i<=0;const e="once";Nh.textContent=i>0?`(${e} per game)`:"already used"}let nc=null,di=null;function r3(){nc=G("div","overlay");const i=G("div","panel pause-panel");i.appendChild(G("div","pause-title","PAUSED"));const e=G("button","btn","▶ CONTINUE");e.addEventListener("click",()=>hn(Fe.WAVE_PLAYING)),i.appendChild(e);const t=G("button","btn","🏆 ACHIEVEMENTS");t.addEventListener("click",()=>kd()),i.appendChild(t);const n=G("button","btn","📖 COMPENDIUM");n.addEventListener("click",()=>zd()),i.appendChild(n);const s=G("div","volume-row");s.appendChild(G("span","","🔊")),di=G("input"),di.type="range",di.min="0",di.max="1",di.step="0.01",di.addEventListener("input",()=>H0(Number(di.value))),s.appendChild(di),i.appendChild(s);const r=G("button","btn","✖ QUIT TO MENU");r.addEventListener("click",()=>hn(Fe.MAIN_MENU)),i.appendChild(r),nc.appendChild(i),ii(nc),window.addEventListener("keydown",a=>{if(a.key!=="Escape")return;const o=wi();o===Fe.WAVE_PLAYING?hn(Fe.PAUSE_MENU):o===Fe.PAUSE_MENU&&hn(Fe.WAVE_PLAYING)}),ls(a=>{const o=a===Fe.PAUSE_MENU;nc.classList.toggle("visible",o),o&&(di.value=String(dh()))})}let nr=null,Fh=null,Oh=null,Bh=null,kh=null,Pa=null,Ia=null,uu=null;function a3(){nr=G("div","overlay");const i=G("div","panel gameover-panel");i.appendChild(G("div","gameover-title","GAME OVER")),Fh=G("div","final-score"),Oh=G("div","best-score"),Bh=G("div","record-badge"),kh=G("div","final-time"),i.appendChild(Fh),i.appendChild(Oh),i.appendChild(Bh),i.appendChild(kh),i.appendChild(G("div","summary-label","Power-ups collected")),Pa=G("div","recap-cards"),i.appendChild(Pa),i.appendChild(G("div","summary-label","Unlocked this run")),Ia=G("div","recap-achievements"),i.appendChild(Ia);const e=G("button","btn","▶ PLAY AGAIN");e.addEventListener("click",()=>hn(Fe.CHARACTER_SELECTION)),i.appendChild(e);const t=G("button","btn","🏠 MAIN MENU");t.addEventListener("click",()=>hn(Fe.MAIN_MENU)),i.appendChild(t);const n=G("button","btn","🏆 ACHIEVEMENTS");n.addEventListener("click",()=>kd()),i.appendChild(n);const s=G("button","btn","📖 COMPENDIUM");s.addEventListener("click",()=>zd()),i.appendChild(s),nr.appendChild(i),ii(nr),ls(r=>{r===Fe.GAME_OVER?(o3(),nr.classList.remove("revealed"),clearTimeout(uu),uu=setTimeout(()=>{nr.classList.add("visible","revealed")},ct.deathAnimDuration*1e3)):(clearTimeout(uu),nr.classList.remove("visible","revealed"),as())})}function o3(){const i=Vw();Fh.textContent=`⭐ ${i.score.toLocaleString()}`,Oh.textContent=`Best: ${i.best.toLocaleString()}`,Bh.textContent=i.isRecord?"🏆 NEW RECORD!":"";const e=i.times||{total:0,wave5:0};if(kh.textContent=e.wave5>0?`⏱ Total ${gc(e.total)} · Wave ${ux} ${gc(e.wave5)}`:`⏱ Total ${gc(e.total)}`,as(),Pa.innerHTML="",i.cards.length===0)Pa.appendChild(G("span","summary-label","— none —"));else for(const n of i.cards){const s=dx(n),r=G("span","build-badge",s?s.icon:"❔");s?xr(r,`${s.icon} ${s.name}`,s.description):xr(r,"❔ Unknown","This power-up is no longer in the card pool."),Pa.appendChild(r)}Ia.innerHTML="";const t=i.unlocked.map(Y0).filter(Boolean);if(t.length===0)Ia.appendChild(G("div","summary-label","— none —"));else for(const n of t){const s=G("span","build-badge",n.icon);xr(s,`${n.icon} ${n.name}`,n.description),Ia.appendChild(s)}}let zh=null;function c3(){zh=G("div","toast-container"),ii(zh),aA(l3)}function l3(i){const e=G("div","toast");e.appendChild(G("div","toast-icon",i.icon));const t=G("div","toast-text");t.appendChild(G("div","toast-title","ACHIEVEMENT UNLOCKED")),t.appendChild(G("div","toast-name",i.name)),e.appendChild(t),zh.appendChild(e),xr(e,`${i.icon} ${i.name}`,i.description||"Achievement unlocked."),e.offsetWidth,e.classList.add("visible");let n=null;const s=()=>{n=setTimeout(()=>{n=null,e.classList.remove("visible"),setTimeout(()=>{as(),e.remove()},Ar.toastFade)},Ar.toastLife)};e.addEventListener("pointerenter",r=>{r.pointerType==="mouse"&&n&&(clearTimeout(n),n=null)}),e.addEventListener("pointerleave",r=>{r.pointerType==="mouse"&&!n&&s()}),s()}function u3(){Ww(),t3(),i3(),s3(),r3(),a3(),Jw(),$w(),Yw(),c3(),h3()}function h3(){const i=document.createElement("div");i.className="version-tag",i.textContent=`v${Gw}`,document.getElementById("ui-root").appendChild(i)}const Qn=new t_,d3=new pv,f3=.1,p3=new hv(kn.ambientColor,kn.ambientIntensity);Qn.add(p3);const uo=new a0(kn.dirColor,kn.dirIntensity);uo.position.set(kn.dirPosition.x,kn.dirPosition.y,kn.dirPosition.z);uo.castShadow=!0;uo.shadow.mapSize.set(4096,4096);const Ds=uo.shadow.camera;Ds.left=-76;Ds.right=kn.shadowHalfX;Ds.top=kn.shadowHalfY;Ds.bottom=-61;Ds.near=kn.shadowNear;Ds.far=kn.shadowFar;Ds.updateProjectionMatrix();Qn.add(uo);TE();EE(()=>{wi()===Fe.WAVE_PLAYING&&f1()});QE();uE(Qn);await gE(Wi);await bE(Wi);document.documentElement.style.setProperty("--vignette-strength",String(Ar.vignetteStrength));document.documentElement.style.setProperty("--vignette-color",Ar.vignetteColor);a1(Qn);await n1;await Promise.all([DA(Qn),z1(Qn)]);JE(Qn);VE(Qn);LE(Qn);Bw();u3();let pm=wi();ls(i=>{const e=pm;pm=i,i===Fe.MAIN_MENU?(e!==Fe.MAIN_MENU&&Ch(),j.visible=!1):(j.visible=!0,e===Fe.MAIN_MENU&&dE(),i===Fe.CHARACTER_SELECTION&&(Ch(),sx()))});Ai.setAnimationLoop(()=>{const i=Math.min(d3.getDelta(),f3),e=wi();e===Fe.MAIN_MENU?hE(i):e===Fe.WAVE_PLAYING?(Iw(i),pw(i)):e===Fe.GAME_OVER&&L1(i),yT(i,wE(),j.position),e!==Fe.MAIN_MENU&&(SE(i,j.position),_E(i,j.position)),Xw(),Ai.render(Qn,Gt)});
