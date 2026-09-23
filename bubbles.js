/* Air bubbles rising in the underwater part of the hero photo (2D canvas, no libraries). */
(function(){
const hero=document.querySelector('.hero-v3');
const holder=hero&&hero.querySelector('.hero-bg');
if(!hero||!holder)return;
if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
const canvas=document.createElement('canvas');canvas.className='hero-3d';canvas.setAttribute('aria-hidden','true');
holder.appendChild(canvas);
const ctx=canvas.getContext('2d');if(!ctx)return;
// waterline of the photo as a fraction of the image height, by x fraction (0 = left)
const waterline=fx=>.53+.06*fx+.11*fx*fx;
let W=1,H=1,dpr=1;
const mobile=window.innerWidth<700;
const N=mobile?40:95;
const bubbles=[];
function spawn(b,anywhere){
b.x=Math.random();
b.r=(Math.random()<.8?1.6+Math.random()*2.6:4+Math.random()*4)*(mobile?.8:1);
const top=waterline(b.x);
b.y=anywhere?top+Math.random()*(1-top):1+Math.random()*.08;
b.v=.00004+b.r*.000012+Math.random()*.00003;// fraction of height per ms
b.phase=Math.random()*6.28;b.wob=.4+Math.random()*1.2;
return b;
}
for(let i=0;i<N;i++)bubbles.push(spawn({},true));
// occasional clusters rising from the reef
function burst(){const x=.05+Math.random()*.85;for(let i=0;i<6;i++){const b=bubbles[Math.floor(Math.random()*N)];spawn(b,false);b.x=x+(Math.random()-.5)*.02;b.y=1+Math.random()*.05}}
function layout(){
const r=holder.getBoundingClientRect();
dpr=Math.min(window.devicePixelRatio||1,2);
W=Math.max(1,r.width);H=Math.max(1,Math.min(r.height,r.width/1.5));
canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);
canvas.style.height=H+'px';
ctx.setTransform(dpr,0,0,dpr,0,0);
}
function draw(t,dt){
ctx.clearRect(0,0,W,H);
for(const b of bubbles){
b.y-=b.v*dt;b.phase+=dt*.003*b.wob;
const top=waterline(b.x);
if(b.y<top){spawn(b,false);continue}
const x=(b.x*W)+Math.sin(b.phase)*b.r*1.6,y=b.y*H;
const fade=Math.min(1,(b.y-top)*14);// fade out just under the surface
ctx.globalAlpha=.8*fade;
ctx.beginPath();ctx.arc(x,y,b.r,0,6.283);
ctx.strokeStyle='rgba(225,245,255,.9)';ctx.lineWidth=Math.max(.6,b.r*.22);ctx.stroke();
ctx.fillStyle='rgba(200,235,250,.12)';ctx.fill();
ctx.beginPath();ctx.arc(x-b.r*.35,y-b.r*.35,Math.max(.5,b.r*.28),0,6.283);
ctx.fillStyle='rgba(255,255,255,.9)';ctx.fill();
}
ctx.globalAlpha=1;
}
let visible=true,last=performance.now(),nextBurst=1500;
function frame(now){
const dt=Math.min(now-last,50);last=now;
if(visible){draw(now,dt);nextBurst-=dt;if(nextBurst<0){burst();nextBurst=2500+Math.random()*3500}}
requestAnimationFrame(frame);
}
new IntersectionObserver(es=>{visible=es[0].isIntersecting;last=performance.now()}).observe(hero);
window.addEventListener('resize',layout,{passive:true});
layout();requestAnimationFrame(frame);
})();
