/* 3D school of fish swimming in the underwater part of the hero photo.
   Built with three.js (vendor/three.min.js). Fish are procedural meshes with a swimming tail,
   steered with simple flocking toward a wandering target, and they scatter away from the pointer. */
(function(){
const hero=document.querySelector('.hero-v3');
const holder=hero&&hero.querySelector('.hero-bg');
if(!hero||!holder||!window.THREE)return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const T=THREE;
let renderer;
try{renderer=new T.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'})}catch(e){return}
const canvas=renderer.domElement;canvas.className='hero-3d';canvas.setAttribute('aria-hidden','true');
holder.appendChild(canvas);
renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));
renderer.setClearColor(0x000000,0);

const scene=new T.Scene();
scene.fog=new T.Fog(0x0f4760,10,19);
const camera=new T.PerspectiveCamera(32,1,.1,60);camera.position.set(0,0,14);
scene.add(new T.HemisphereLight(0x9fd3ef,0x041822,.55));
const sun=new T.DirectionalLight(0xffd6a0,.95);sun.position.set(-3,6,5);scene.add(sun);
const rim=new T.DirectionalLight(0x7fd0ff,.55);rim.position.set(4,-2,-4);scene.add(rim);

/* ---- fish geometry ---- */
function fishBody(){
const g=new T.SphereGeometry(1,28,18);
const p=g.attributes.position,col=[];
const back=new T.Color(0x12293b),side=new T.Color(0x5b8098),belly=new T.Color(0xb7cad4),c=new T.Color();
for(let i=0;i<p.count;i++){
let x=p.getX(i),y=p.getY(i),z=p.getZ(i);
// taper toward the tail (−x) and keep a rounded head (+x)
const t=x<0?1+x*.78:1-x*x*.12;
y*=.42*t;z*=.2*t;x*=1.7;
p.setXYZ(i,x,y,z);
const k=(y/.42+1)/2;// 0 belly … 1 back
if(k>.62)c.copy(side).lerp(back,(k-.62)/.38);else c.copy(belly).lerp(side,k/.62);
col.push(c.r,c.g,c.b);
}
g.setAttribute('color',new T.Float32BufferAttribute(col,3));g.computeVertexNormals();
return g;
}
function finShape(pts){const s=new T.Shape();s.moveTo(pts[0][0],pts[0][1]);pts.slice(1).forEach(q=>s.lineTo(q[0],q[1]));s.closePath();return new T.ShapeGeometry(s)}
const bodyGeo=fishBody();
const tailGeo=finShape([[0,0],[-.85,.55],[-.62,0],[-.85,-.55]]);
const dorsalGeo=finShape([[.35,.34],[-.25,.62],[-.55,.3]]);
const eyeGeo=new T.SphereGeometry(.07,10,8);
const bodyMat=new T.MeshStandardMaterial({vertexColors:true,metalness:.62,roughness:.36});
const finMat=new T.MeshStandardMaterial({color:0x2a4a5c,metalness:.3,roughness:.5,side:T.DoubleSide,transparent:true,opacity:.9});
const eyeMat=new T.MeshBasicMaterial({color:0x0a0f12});

function makeFish(){
const g=new T.Group();
const body=new T.Mesh(bodyGeo,bodyMat);g.add(body);
const tail=new T.Group();tail.position.x=-1.62;tail.add(new T.Mesh(tailGeo,finMat));g.add(tail);
const dorsal=new T.Mesh(dorsalGeo,finMat);g.add(dorsal);
[.11,-.11].forEach(z=>{const e=new T.Mesh(eyeGeo,eyeMat);e.position.set(1.18,.1,z);g.add(e)});
g.userData={tail,body,phase:Math.random()*6.28,vel:new T.Vector3((Math.random()-.5)*.02,0,0),scale:.22+Math.random()*.12};
g.scale.setScalar(g.userData.scale);
return g;
}

/* ---- screen-space swimming area (below the waterline in the photo) ---- */
const view={w:1,h:1};
function worldAt(fx,fy){return new T.Vector3((fx-.5)*view.w,(.5-fy)*view.h,0)}
// waterline in the photo, as a fraction of height, by x fraction (0 = left)
function waterline(fx){return .53+.06*fx+.11*fx*fx}
const bounds={minX:0,maxX:0,minY:0,maxYAt:fx=>0};

const mobile=window.innerWidth<700;
const COUNT=mobile?6:11;
const fish=[];for(let i=0;i<COUNT;i++){const f=makeFish();scene.add(f);fish.push(f)}

/* bubbles */
const BN=mobile?24:48,bubbleGeo=new T.BufferGeometry(),bp=new Float32Array(BN*3),bs=[];
for(let i=0;i<BN;i++){bs.push(.004+Math.random()*.01)}
bubbleGeo.setAttribute('position',new T.BufferAttribute(bp,3));
const bubbles=new T.Points(bubbleGeo,new T.PointsMaterial({color:0xcfefff,size:.07,transparent:true,opacity:.55,depthWrite:false}));
scene.add(bubbles);

function layout(){
const r=holder.getBoundingClientRect();
const w=Math.max(1,r.width),h=Math.max(1,Math.min(r.height,r.width/1.5));
renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();
view.h=2*Math.tan(camera.fov*Math.PI/360)*camera.position.z;view.w=view.h*camera.aspect;
bounds.minX=worldAt(.02,0).x;bounds.maxX=worldAt(.9,0).x;bounds.minY=worldAt(0,.97).y;
}
function placeInitial(){
fish.forEach((f,i)=>{const fx=.08+Math.random()*.75;const top=waterline(fx)+.07;const fy=top+Math.random()*(.95-top);const p=worldAt(fx,fy);f.position.set(p.x,p.y,(Math.random()-.5)*3)});
for(let i=0;i<BN;i++){resetBubble(i,true)}
}
function resetBubble(i,anywhere){const fx=.03+Math.random()*.9;const top=waterline(fx);const fy=anywhere?top+Math.random()*(1-top):.99;const p=worldAt(fx,fy);bp[i*3]=p.x;bp[i*3+1]=p.y;bp[i*3+2]=(Math.random()-.5)*3}

/* pointer: fish scatter away */
const pointer={active:false,v:new T.Vector3()};
hero.addEventListener('pointermove',e=>{const r=holder.getBoundingClientRect();const fx=(e.clientX-r.left)/r.width,fy=(e.clientY-r.top)/r.height;pointer.v.copy(worldAt(fx,fy));pointer.active=fy>waterline(fx)-.02},{passive:true});
hero.addEventListener('pointerleave',()=>{pointer.active=false});

/* wandering target the school follows */
const target=new T.Vector3();
const tmp=new T.Vector3(),steer=new T.Vector3(),X=new T.Vector3(1,0,0),q=new T.Quaternion();
function update(t,dt){
const tx=.15+.33*(1+Math.sin(t*.00011)),fyTop=waterline(tx)+.08;
const ty=fyTop+(.93-fyTop)*(.5+.4*Math.sin(t*.00023+1));
target.copy(worldAt(tx,ty));target.z=Math.sin(t*.00017)*1.6;
for(const f of fish){
const u=f.userData,pos=f.position,vel=u.vel;
steer.set(0,0,0);
// cohesion toward target
tmp.subVectors(target,pos).multiplyScalar(.00011);steer.add(tmp);
// separation
for(const o of fish){if(o===f)continue;const d=pos.distanceTo(o.position);if(d<1.4){tmp.subVectors(pos,o.position).multiplyScalar(.0011/(d+.05));steer.add(tmp)}}
// alignment (gentle)
// flee pointer
if(pointer.active){const d=pos.distanceTo(pointer.v);if(d<2.4){tmp.subVectors(pos,pointer.v);tmp.z=0;tmp.normalize().multiplyScalar(.004*(2.4-d));steer.add(tmp)}}
// stay under the waterline and above the bottom
const fx=pos.x/view.w+.5,fy=.5-pos.y/view.h,top=waterline(Math.min(Math.max(fx,0),1))+.04;
if(fy<top)steer.y-=.0012*(top-fy)*40;
if(pos.y<bounds.minY)steer.y+=.001;
if(pos.x<bounds.minX)steer.x+=.001;if(pos.x>bounds.maxX)steer.x-=.001;
if(Math.abs(pos.z)>2)steer.z-=Math.sign(pos.z)*.0006;
vel.addScaledVector(steer,dt);vel.y=Math.max(-.0014,Math.min(.0014,vel.y));
const sp=vel.length(),max=.0032,min=.0011;
if(sp>max)vel.multiplyScalar(max/sp);else if(sp<min)vel.multiplyScalar(min/(sp||1));
pos.addScaledVector(vel,dt);
// orient along velocity (head is +x), keep upright
tmp.copy(vel);tmp.y*=.22;tmp.z*=.5;tmp.normalize();q.setFromUnitVectors(X,tmp);f.quaternion.slerp(q,Math.min(1,dt*.006));
// swim: tail beat faster when faster
const speed=vel.length()/max;u.phase+=dt*(.008+.018*speed);
u.tail.rotation.y=Math.sin(u.phase)*(.45+.25*speed);
u.body.rotation.y=Math.sin(u.phase-1.2)*.07;
}
for(let i=0;i<BN;i++){bp[i*3+1]+=bs[i]*dt*.12;bp[i*3]+=Math.sin(t*.002+i)*.0006*dt;const fx=bp[i*3]/view.w+.5,fy=.5-bp[i*3+1]/view.h;if(fy<waterline(Math.min(Math.max(fx,0),1)))resetBubble(i,false)}
bubbleGeo.attributes.position.needsUpdate=true;
}

let visible=true,last=performance.now(),raf=null;
function frame(now){
const dt=Math.min(now-last,48);last=now;
if(visible){update(now,dt);renderer.render(scene,camera)}
raf=requestAnimationFrame(frame);
}
new IntersectionObserver(es=>{visible=es[0].isIntersecting;last=performance.now()}).observe(hero);
window.addEventListener('resize',layout,{passive:true});
layout();placeInitial();raf=requestAnimationFrame(frame);
})();
