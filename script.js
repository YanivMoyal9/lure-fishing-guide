const lures = [
{id:1,name:'Ima Nabarone',type:'minnow',typeLabel:'מינו',image:'ima-nabarone.webp',subtitle:'מינו יפני עם כפית',fish:['ברקודה','לוקוס','פלמידה'],methods:['גלגול בקצב בינוני.','לעצור מדי פעם; התקיפה יכולה להגיע דווקא בזמן העצירה.'],preview:'גלגול בינוני עם עצירות קצרות',area:'מהחוף',months:null},
{id:2,name:'Bassday Sugapen',type:'topwater',typeLabel:'טופ ווטר',image:'bassday-sugapen.webp',subtitle:'פנסיל על פני המים',fish:['לברק','חניתן','טרכון'],methods:['לעבוד על פני המים, במיוחד בחופים.','טוויצ׳ים קצובים בשפיץ החכה ליצירת תנועה מצד לצד.'],preview:'טוויצ׳ים קצובים על פני המים',area:'חופים',months:[11,12,1,2,3,4,5,6,7]},
{id:3,name:'Bassday S.P.M 90',type:'minnow',typeLabel:'פנסיל',image:'bassday-spm-90.webp',subtitle:'פנסיל 90 מ״מ',fish:['לברק','חניתן','טרכון'],methods:['לזרוק מהחוף או מהריף.','לעבוד בטוויצ׳ים כך שהדמוי יברח לצדדים כמו דג פצוע.'],preview:'טוויצ׳ים מהחוף או מהריף',area:'חופים וריפים',months:null},
{id:4,name:'Ima Cobra 60',type:'topwater',typeLabel:'טופ ווטר',image:'ima-cobra-60.webp',subtitle:'Walk the dog',fish:['לברק','טרכון','חניתן'],methods:['טוויצ׳ים רציפים בשפיץ החכה תוך כדי גלגול איטי.','לשמור על תנועת זיגזג רציפה על פני המים.'],preview:'טוויצ׳ים רציפים וגלגול איטי',area:'פני המים',months:null},
{id:5,name:'Ima Issen 45S',type:'minnow',typeLabel:'מינו שוקע',image:'ima-issen-45s.webp',subtitle:'45 מ״מ · לריפים',fish:['סרגוס','לוקוס','כחילה','צ׳יפורה'],methods:['גלגול רציף במהירות בינונית.','לעבוד באזורי ריף עם קצף וסלעים.'],preview:'גלגול בינוני באזורי קצף וסלעים',area:'ריפים',months:null},
{id:6,name:'Ima Sukari 37S',type:'minnow',typeLabel:'מינו שוקע',image:'ima-sukari-37s.webp',subtitle:'37 מ״מ · אולטרה לייט',fish:['סרגוס','צ׳יפורה','כחילה'],methods:['גלגול רציף בקצב בינוני.','להוסיף טוויצ׳ים קטנים מדי פעם.'],preview:'גלגול בינוני וטוויצ׳ים קטנים',area:'ריפים או חוף חולי',months:[3,4,5,6,7,8,9],seasonName:'עונת האולטרה לייט'},
{id:7,name:'Major Craft Jigpara TG',type:'jig',typeLabel:'ג׳יג',image:'jigpara-tg-14g.webp',subtitle:'14 גרם · טונגסטן',fish:['טרכון','גומבר','חניתן','כחילה','טונית'],methods:['לזרוק למרחק הרצוי; המבנה הקומפקטי והטונגסטן מסייעים לזריקה רחוקה.','לתת לג׳יג לשקוע לעומק הרצוי ואז לגלגל עם הקפצות.'],preview:'זריקה רחוקה וגלגול עם הקפצות',area:'מהחוף',months:null},
{id:8,name:'Zeake R Sardine',type:'jig',typeLabel:'ג׳יג',image:'zeake-r-sardine-20g.webp',subtitle:'20 גרם · מומלץ בצבע זברה גלואו',fish:['טרכון','חניתן','פלמידה','טונית','ביבי אינטיאס'],methods:['לבצע שתיים עד שלוש הקפצות.','לעצור, לגלגל ולחזור על הרצף.'],preview:'2–3 הקפצות, עצירה וגלגול',area:'מהחוף',months:null},
{id:9,name:'Fiiish Black Minnow Candy',type:'soft',typeLabel:'סיליקון',image:'black-minnow-candy.webp',subtitle:'10 גרם · גלואו',fish:['לברק','לוקוס'],methods:['לזרוק ולהמתין שהדמוי ירד לקרקעית.','שלושה גלגולים, עצירה, וחזרה על הרצף. המטרה היא לעבוד קרוב לקרקעית.'],preview:'קרוב לקרקעית: שלושה גלגולים ועצירה',area:'קרוב לקרקעית',months:null},
{id:10,name:'Fiiish Black Minnow Red Head',type:'soft',typeLabel:'סיליקון',image:'black-minnow-red-head.webp',subtitle:'10 גרם · ראש אדום',fish:['לברק','לוקוס'],methods:['לזרוק ולהמתין שהדמוי ירד לקרקעית.','שלושה גלגולים, עצירה, וחזרה על הרצף.'],preview:'שלושה גלגולים ועצירה ליד הקרקעית',area:'קרוב לקרקעית',note:'הראש האדום הוא צבע בולט לימים עם מים עכורים.',months:null},
{id:11,name:'Ragot Raglou Hybrid',type:'soft',typeLabel:'סיליקון',image:'raglou-hybrid.webp',subtitle:'4.5 גרם · זנב פדל',fish:['לברק','לוקוס','טרכון'],methods:['גלגול רצוף ואיטי.','תנועת הזנב נוצרת בזמן הגלגול; אין צורך להוסיף הרבה אקשן.'],preview:'גלגול איטי ורצוף',area:'לפי עומק הזריקה',months:[11,12,1,2,3,4,5,6,7],seasonName:'עונת הלברקים'}
];

const MONTH_NAMES=['ינואר','פברואר','מרץ','אפריל','מאי','יוני','יולי','אוגוסט','ספטמבר','אוקטובר','נובמבר','דצמבר'];
const MONTH_SHORT=['ינו׳','פבר׳','מרץ','אפר׳','מאי','יוני','יולי','אוג׳','ספט׳','אוק׳','נוב׳','דצמ׳'];
const NOW=new Date().getMonth()+1;

const state={type:'all',fish:'all',month:'all',search:''};
const el={grid:document.querySelector('#cardGrid'),count:document.querySelector('#resultCount'),empty:document.querySelector('#emptyState'),fish:document.querySelector('#fishFilter'),month:document.querySelector('#monthFilter'),search:document.querySelector('#searchFilter'),hint:document.querySelector('#seasonHint'),now:document.querySelector('#nowStrip')};
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fishNames=[...new Set(lures.flatMap(l=>l.fish))].sort((a,b)=>a.localeCompare(b,'he'));
fishNames.forEach(name=>el.fish.add(new Option(name,name)));
const nowOption=el.month.querySelector(`option[value="${NOW}"]`);
if(nowOption)nowOption.textContent=`${MONTH_NAMES[NOW-1]} (החודש)`;

const worksIn=(lure,month)=>!lure.months||lure.months.includes(month);
function nextStart(lure){let m=NOW;for(let i=0;i<12;i++){m=m%12+1;if(lure.months.includes(m))return m}return null}
function rangeText(months){
// months are listed in season order, so first and last give the range
return `${MONTH_SHORT[months[0]-1]}–${MONTH_SHORT[months[months.length-1]-1]}`;
}
function season(lure){
if(!lure.months)return {badges:[{text:'כל השנה',className:'all-year'}],share:'כל השנה'};
const range=rangeText(lure.months);
const status=lure.months.includes(NOW)?{text:'בעונה עכשיו',className:'in-season'}:{text:`מתחיל ב${MONTH_NAMES[nextStart(lure)-1]}`,className:'off-season'};
return {badges:[status,{text:range,className:'range'}],share:`${lure.seasonName?lure.seasonName+': ':''}${range}`};
}
const profiles={
1:{pace:'בינוני',motion:'pause',label:'גלגול ← עצירה ← גלגול',water:'אמצע המים'},
2:{pace:'בינוני',motion:'surface',label:'טוויצ׳ים על פני המים',water:'פני המים'},
3:{pace:'בינוני',motion:'twitch',label:'טוויצ׳ים מצד לצד',water:'מתחת לפני המים'},
4:{pace:'איטי',motion:'surface',label:'זיגזג רציף + גלגול איטי',water:'פני המים'},
5:{pace:'בינוני',motion:'steady',label:'גלגול רציף ליד הריף',water:'ריף וקצף'},
6:{pace:'בינוני',motion:'steadyTwitch',label:'גלגול רציף + טוויצ׳ים קצרים',water:'ריף או חולי'},
7:{pace:'מהיר',motion:'jig',label:'שקיעה ← הקפצות ← גלגול',water:'עומק משתנה'},
8:{pace:'מהיר',motion:'jigPause',label:'2–3 הקפצות ← עצירה ← גלגול',water:'עומק משתנה'},
9:{pace:'איטי',motion:'bottom',label:'שקיעה ← 3 גלגולים ← עצירה',water:'צמוד לקרקעית'},
10:{pace:'איטי',motion:'bottom',label:'שקיעה ← 3 גלגולים ← עצירה',water:'צמוד לקרקעית'},
11:{pace:'איטי',motion:'steady',label:'גלגול רצוף ואיטי',water:'לפי עומק הזריקה'}
};
// Side view: y=12 is the water surface, y≈61 is the bottom.
const motionPaths={
pause:'M12 38 C30 34 43 32 58 34 L75 35 M91 35 C111 35 122 38 142 36 L158 36 M174 36 C192 34 210 32 228 34',
surface:'M12 34 L38 19 L64 34 L90 19 L116 34 L142 19 L168 34 L194 19 L228 33',
twitch:'M12 35 L34 25 L55 42 L78 25 L101 42 L124 25 L147 42 L170 25 L194 42 L228 28',
steady:'M12 37 C37 30 55 31 78 37 S119 43 142 37 S184 31 205 37 S220 40 228 37',
steadyTwitch:'M12 38 C30 38 44 38 58 38 L64 31 L70 38 C92 38 110 38 128 38 L134 31 L140 38 C160 38 178 38 196 38 L202 31 L208 38 C216 38 222 38 228 38',
jig:'M12 14 L44 55 L54 36 L66 53 L78 34 L90 51 L102 32 L114 49 L126 30 L138 47 L150 28 L162 45 C185 40 205 30 228 22',
jigPause:'M12 14 L40 55 L50 37 L60 53 L70 35 L80 51 L90 33 L100 50 L122 55 C145 50 160 44 176 42 L186 27 L196 43 L206 25 L216 41 L228 34',
bottom:'M12 47 C31 45 44 43 57 47 L76 47 M93 47 C111 45 123 42 140 47 L157 47 M174 47 C193 44 210 44 228 47'
};
const groups=[
{id:'minnow',title:'מינו ופנסיל',subtitle:'תנועה מתחת לפני המים · גלגול וטוויצ׳ים',index:'01'},
{id:'topwater',title:'טופ ווטר',subtitle:'עבודה על פני המים · תקיפות שרואים',index:'02'},
{id:'jig',title:'ג׳יגים',subtitle:'מתכת לזריקה רחוקה · הקפצות ושקיעה',index:'03'},
{id:'soft',title:'סיליקון',subtitle:'עבודה איטית · תנועה טבעית ליד הקרקעית',index:'04'}
];
// Holds (pauses) inside the retrieve, as fractions of the path. Gaps in a path ("M" moves) add holds automatically.
const motionHolds={jigPause:[0.46]};
const paceDuration={'איטי':5600,'בינוני':4600,'מהיר':3800};
// how the lure speed changes on the way up (dart / hop) and down (flutter / fall)
const speedProfile={jig:{up:2.6,down:.5},jigPause:{up:2.6,down:.5},twitch:{up:2,down:.75},steadyTwitch:{up:2.2,down:.8},surface:{up:1.3,down:1.3}};
// lift = rod snaps up (jigging) · sweep = rod held low to the side and swept (twitching / walk the dog) · tick = small tip twitches
const rodStyle={jig:'lift',jigPause:'lift',twitch:'sweep',surface:'sweep',steadyTwitch:'tick'};
// Lures worked with the rod to the side are shown from above, where the side-to-side action is visible.
const topView=new Set(['twitch','surface']);
const lureShape={
hard:'<path class="lure-body" d="M-7 0 C-5 -3.2 3 -3.4 7 -0.6 L9.5 -2 L8.6 0.4 L9.5 2.4 L7 1 C3 3.4 -5 3 -7 0Z"/><path class="lure-lip" d="M-7 0.4 L-10.5 3.2 L-8.8 3.8 L-6.2 1.6Z"/><circle class="lure-eye" cx="-4.4" cy="-0.8" r="0.95"/>',
hardTop:'<path class="lure-body" d="M-7.5 0 C-5 -2.6 3 -2.8 7 -1 L9.2 -2.4 L9.2 2.4 L7 1 C3 2.8 -5 2.6 -7.5 0Z"/><circle class="lure-eye" cx="-4.8" cy="-1.3" r="0.8"/><circle class="lure-eye" cx="-4.8" cy="1.3" r="0.8"/>',
jig:'<path class="lure-metal" d="M-7.5 0 C-5 -2.6 4 -2.4 7.5 -0.3 C4 2.1 -5 2.4 -7.5 0Z"/><path class="lure-shine" d="M-5 -0.9 C-1 -1.9 3 -1.7 6 -0.5"/><circle class="lure-eye" cx="-4.9" cy="-0.3" r="0.9"/>',
soft:'<path class="lure-soft" d="M-6.5 0 C-5 -2.8 2.5 -2.6 5.5 -1.2 L7.4 -3.6 L8.6 0 L7.4 3.6 L5.5 1.2 C2.5 2.6 -5 2.8 -6.5 0Z"/><path class="lure-head" d="M-6.5 0 C-6 -2.6 -3.2 -2.9 -2.4 -2.4 L-2.4 2.4 C-3.2 2.9 -6 2.6 -6.5 0Z"/><circle class="lure-eye" cx="-4.6" cy="-0.7" r="0.85"/>'
};
function motionGraphic(lure){
const p=profiles[lure.id];
const path=motionPaths[p.motion];
const top=topView.has(p.motion);
const shape=lure.type==='jig'?'jig':lure.type==='soft'?'soft':top?'hardTop':'hard';
const scene=top
?`<path class="shore" d="M246 0 C240 14 250 26 243 40 C238 52 248 62 244 74 H280 V0Z"/><path class="shore-foam" d="M246 0 C240 14 250 26 243 40 C238 52 248 62 244 74"/><path class="ripple" d="M30 56 q8 -3 16 0 M90 62 q8 -3 16 0 M150 58 q8 -3 16 0 M60 8 q8 -3 16 0 M180 6 q8 -3 16 0"/>`
:`<path class="water-line" d="M4 12 H244"/><path class="bottom-line" d="M4 61 C50 58 80 64 120 61 S190 59 244 62"/>`;
return `<div class="motion-panel motion-${p.motion}${top?' is-top':''}"><div class="motion-heading"><span>${top?'מבט מלמעלה · חכה לצד':'מבט מהצד · תנועת הדמוי במים'}</span><strong>${p.label}</strong></div>
<svg class="motion-graphic" viewBox="0 0 280 74" role="img" aria-label="אנימציה: זריקה והחזרה בשיטת ${p.label}${top?', במבט מלמעלה עם חכה לצד':''}" data-motion="${p.motion}" data-pace="${p.pace}" data-view="${top?'top':'side'}">
${scene}
<path class="motion-track" d="${path}"/>
<path class="motion-trail" d="${path.replace(/\sM/g,' L')}"/>
<circle class="splash" cx="0" cy="12" r="0"/><circle class="puff" cx="0" cy="60" r="0"/>
<path class="fishing-line" d=""/>
<g class="rod-group"><g class="reel"><path class="reel-foot" d=""/><ellipse class="reel-body" rx="4.2" ry="3.3"/><circle class="reel-spool" r="1.7"/><path class="reel-handle" d=""/></g><path class="rod-blank" d=""/><path class="rod-grip" d=""/><path class="rod-butt" d=""/><g class="rod-guides"></g></g>
<g class="lure-glyph lure-${shape}">${lureShape[shape]}</g>
</svg><div class="motion-axis"><span>${top?'הדייג על החוף':'הדייג בחוף'}</span><span>נקודת הנחיתה</span></div></div>`;
}

/* ---- Rod drawing ----
   The rod is a cubic curve: the butt section stays stiff, the bend concentrates in the upper third (fast action tip). */
const ROD_SIDE={butt:[272,72],len:68,base:112,bendSign:1};
const ROD_TOP={butt:[266,46],len:54,base:203,bendSign:-1};
const GUIDES=[.42,.6,.75,.88];
function cub(g,t){const u=1-t;return [u*u*u*g[0][0]+3*u*u*t*g[1][0]+3*u*t*t*g[2][0]+t*t*t*g[3][0],u*u*u*g[0][1]+3*u*u*t*g[1][1]+3*u*t*t*g[2][1]+t*t*t*g[3][1]]}
function cubT(g,t){const u=1-t;const dx=3*u*u*(g[1][0]-g[0][0])+6*u*t*(g[2][0]-g[1][0])+3*t*t*(g[3][0]-g[2][0]),dy=3*u*u*(g[1][1]-g[0][1])+6*u*t*(g[2][1]-g[1][1])+3*t*t*(g[3][1]-g[2][1]);const l=Math.hypot(dx,dy)||1;return [dx/l,dy/l]}
function rodGeometry(R,angle,bend){
const a=angle*Math.PI/180,dir=[Math.cos(a),-Math.sin(a)];
const n=[dir[1]*R.bendSign,-dir[0]*R.bendSign];// bend direction: toward the lure side
const [bx,by]=R.butt,L=R.len;
// tip moves on an arc: bending shortens the straight distance a little
const b=Math.max(-14,Math.min(20,bend));
const tip=[bx+dir[0]*L*(1-Math.abs(b)/140)+n[0]*b,by+dir[1]*L*(1-Math.abs(b)/140)+n[1]*b];
return [[bx,by],[bx+dir[0]*L*.35,by+dir[1]*L*.35],[bx+dir[0]*L*.72+n[0]*b*.18,by+dir[1]*L*.72+n[1]*b*.18],tip];
}
function taper(g,t0,t1,w0,w1,steps){
const Lp=[],Rp=[];
for(let i=0;i<=steps;i++){const t=t0+(t1-t0)*i/steps;const p=cub(g,t),d=cubT(g,t);const w=(w0+(w1-w0)*i/steps)/2;
Lp.push(`${(p[0]-d[1]*w).toFixed(2)} ${(p[1]+d[0]*w).toFixed(2)}`);Rp.unshift(`${(p[0]+d[1]*w).toFixed(2)} ${(p[1]-d[0]*w).toFixed(2)}`)}
return `M${Lp.join(' L')} L${Rp.join(' L')}Z`;
}
function drawRod(a,angle,bend){
const R=a.R,g=rodGeometry(R,angle,bend);
a.blank.setAttribute('d',taper(g,.18,1,2.6,.6,22));
a.grip.setAttribute('d',taper(g,.03,.2,3.8,3.2,4));
a.butt.setAttribute('d',taper(g,0,.04,4.2,4,1));
// spinning reel hangs under the rod (side view) / beside it (top view)
const s=cub(g,.23),d=cubT(g,.23);
let nd=[-d[1],d[0]];if(a.top?nd[1]<0:nd[1]<0)nd=[-nd[0],-nd[1]];
const r=[s[0]+nd[0]*6,s[1]+nd[1]*6];
a.reelFoot.setAttribute('d',`M${s[0].toFixed(1)} ${s[1].toFixed(1)} L${r[0].toFixed(1)} ${r[1].toFixed(1)}`);
a.reelBody.setAttribute('cx',r[0].toFixed(1));a.reelBody.setAttribute('cy',(r[1]+1).toFixed(1));
const spool=[r[0]-d[0]*2.6,r[1]-d[1]*2.6];
a.reelSpool.setAttribute('cx',spool[0].toFixed(1));a.reelSpool.setAttribute('cy',spool[1].toFixed(1));
a.reelHandle.setAttribute('d',`M${r[0].toFixed(1)} ${(r[1]+1).toFixed(1)} l${(Math.cos(a.crank)*4).toFixed(1)} ${(Math.sin(a.crank)*4).toFixed(1)}`);
const pts=GUIDES.map(t=>{const p=cub(g,t),dd=cubT(g,t);let nn=[-dd[1],dd[0]];if(nn[1]<0)nn=[-nn[0],-nn[1]];const k=(1-t)*2.2+.8;return [p[0]+nn[0]*k,p[1]+nn[1]*k,p[0],p[1]]});
a.guides.innerHTML=pts.map(([x,y,px,py],i)=>`<path d="M${px.toFixed(1)} ${py.toFixed(1)} L${x.toFixed(1)} ${y.toFixed(1)}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(1.3-i*.2).toFixed(2)}"/>`).join('');
return {tip:g[3],spool,guides:pts.map(p=>[p[0],p[1]])};
}
// Spring model for the rod tip: it lags when the rod moves, loads up under tension, and vibrates back.
function springTip(a,target,dt){
const k=.0016,c=.055;
for(let i=0;i<Math.ceil(dt/8);i++){const h=dt/Math.ceil(dt/8);a.bv+=(k*(target-a.b)-c*a.bv)*h;a.b+=a.bv*h}
return a.b;
}

/* ---- Casting + retrieve animation ---- */
const reduceMotion=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const animated=new Map();
const CAST=1100,HOLD=700,REST=1200;
function setupAnimation(svg){
const trail=svg.querySelector('.motion-trail');
const total=trail.getTotalLength();
const motion=svg.dataset.motion;
const holds=[...(motionHolds[motion]||[])];
const subs=svg.querySelector('.motion-track').getAttribute('d').split(/(?=M)/).filter(Boolean);
if(subs.length>1){const tmp=document.createElementNS('http://www.w3.org/2000/svg','path');let acc=0;subs.slice(0,-1).forEach(s=>{tmp.setAttribute('d',s);acc+=tmp.getTotalLength();holds.push(Math.min(acc/total,1))})}
holds.sort((a,b)=>a-b);
trail.style.strokeDasharray=`${total} ${total}`;
const q=s=>svg.querySelector(s);
const top=svg.dataset.view==='top';
return {svg,trail,total,holds,motion,top,R:top?ROD_TOP:ROD_SIDE,speed:total/(paceDuration[svg.dataset.pace]||4600),
profile:speedProfile[motion]||{up:1,down:1},style:rodStyle[motion]||'none',
lure:q('.lure-glyph'),line:q('.fishing-line'),splash:q('.splash'),puff:q('.puff'),
blank:q('.rod-blank'),grip:q('.rod-grip'),butt:q('.rod-butt'),guides:q('.rod-guides'),reelFoot:q('.reel-foot'),reelBody:q('.reel-body'),reelSpool:q('.reel-spool'),reelHandle:q('.reel-handle'),
phase:'cast',t0:null,last:null,L:0,holdUntil:0,nextHold:0,lift:0,vy:0,prevY:null,crank:0,landed:false,b:0,bv:0,ang:null,sweep:0,lastSlope:0,kick:0};
}
function resetCycle(a,now){a.phase='cast';a.t0=now;a.L=0;a.nextHold=0;a.holdUntil=0;a.lift=0;a.vy=0;a.prevY=null;a.landed=false;a.sweep=0;a.kick=0;a.kickT=0;a.lastSlope=0}
function lineTo(a,rod,x,y,sag){
const [tx,ty]=rod.tip;const mx=(tx+x)/2,my=(ty+y)/2+Math.max(sag,0)*(1+Math.abs(tx-x)/120);
const g=rod.guides.map(p=>`L${p[0].toFixed(1)} ${p[1].toFixed(1)}`).join(' ');
a.line.setAttribute('d',`M${rod.spool[0].toFixed(1)} ${rod.spool[1].toFixed(1)} ${g} L${tx.toFixed(1)} ${ty.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`);
}
function placeLure(a,x,y,angle){a.lure.setAttribute('transform',`translate(${x.toFixed(1)} ${y.toFixed(1)}) rotate(${(angle+180).toFixed(1)})`)}
// rod angle + spring-driven tip; the tip also lags behind fast rod rotation
function moveRod(a,ang,tension,dt){
const prev=a.ang??ang;a.ang=ang;
const angVel=(ang-prev)/Math.max(dt,1);
const lag=-angVel*30;
return drawRod(a,ang,springTip(a,tension+lag,dt));
}
function frame(a,now){
if(a.t0===null)resetCycle(a,now);
const dt=Math.min(now-(a.last??now),50)||16;a.last=now;
const start=a.trail.getPointAtLength(0);
const base=a.R.base;
if(a.phase==='cast'){
const k=Math.min((now-a.t0)/CAST,1);
let ang,load;
if(k<.32){const e=k/.32;ang=base-38*e*e;load=-3}
else if(k<.55){const e=(k-.32)/.23;ang=base-38+72*e;load=14*Math.sin(Math.PI*e)}
else{const e=(k-.55)/.45;ang=base+34-34*(1-Math.pow(1-e,2));load=1}
if(a.top){ang=base+(ang-ROD_SIDE.base)*.6}
const rod=moveRod(a,ang,load,dt);
let x,y,rot=0;
if(k<.45){x=rod.tip[0]-2;y=rod.tip[1]+5}
else{const e=(k-.45)/.55,f=1-Math.pow(1-e,1.6);const [sx,sy]=rod.tip;x=sx+(start.x-sx)*f;const apex=a.top?Math.min(sy,start.y)-14:-26;y=(1-f)*(1-f)*sy+2*(1-f)*f*apex+f*f*start.y;rot=a.top?0:-20+40*f}
placeLure(a,x,y,rot);
lineTo(a,rod,x,y,k<.45?0:2);
a.trail.style.strokeDashoffset=a.total;a.splash.setAttribute('r',0);
if(k>=1){a.phase='retrieve';a.landed=now}
return;
}
if(a.phase==='rest'){
const rod=moveRod(a,base,.5,dt);const end=a.trail.getPointAtLength(a.total);
placeLure(a,end.x,end.y,0);lineTo(a,rod,end.x,end.y,1);
if(now-a.t0>REST)resetCycle(a,now);
return;
}
// retrieve
const holding=now<a.holdUntil;
let slope=0;
if(!holding){
const here=a.trail.getPointAtLength(a.L),ahead=a.trail.getPointAtLength(Math.min(a.L+2,a.total));
slope=(ahead.y-here.y)/2;
const factor=slope<-.3?a.profile.up:slope>.3?a.profile.down:1;
a.L=Math.min(a.L+a.speed*factor*dt,a.total);
a.crank+=dt*.02*(factor>1?.4:1);
const hf=a.holds[a.nextHold];
if(hf!==undefined&&a.L>=hf*a.total){a.holdUntil=now+HOLD;a.nextHold++}
}
const pt=a.trail.getPointAtLength(a.L),pt2=a.trail.getPointAtLength(Math.min(a.L+1.5,a.total));
let angle=Math.atan2(pt2.y-pt.y,pt2.x-pt.x)*180/Math.PI;
const vy=a.prevY===null?0:(a.prevY-pt.y)/Math.max(dt,1);// + when rising
a.prevY=pt.y;a.vy=a.vy*.7+vy*.3;
const rising=a.vy>.012,falling=a.vy<-.006;
// a new zigzag leg = a new twitch of the rod
const leg=Math.sign(Math.round(slope*3));
if(leg!==0&&leg!==a.lastSlope){a.kickT=1;a.lastSlope=leg}
a.kickT=(a.kickT||0)*Math.pow(.993,dt);a.kick+=(a.kickT-a.kick)*Math.min(1,dt/45);
let ang=base,tension=holding?0:2.5;
if(a.style==='lift'){a.lift=a.lift*.86+(rising?1:0)*.14*3;ang=base-Math.min(a.lift,1.4)*16;tension=rising?11:falling?-1:2}
else if(a.style==='sweep'){ang=base+a.kick*16;tension=2+a.kick*9}
else if(a.style==='tick'){ang=base+a.kick*5;tension=2+a.kick*7}
const rod=moveRod(a,ang,tension,dt);
if(a.style==='lift'&&falling)angle+=Math.sin(now/55)*22;
if(a.L>=a.total-0.5)angle=0;
placeLure(a,pt.x,pt.y,angle);
lineTo(a,rod,pt.x,pt.y,falling||holding?9:rising||a.kick>.5?0:3);
a.trail.style.strokeDashoffset=a.total-a.L;
const s=Math.min((now-a.landed)/550,1);a.splash.setAttribute('cx',start.x);a.splash.setAttribute('cy',a.top?start.y:12);a.splash.setAttribute('r',s<1?2+s*10:0);a.splash.style.opacity=1-s;
if(!a.top&&pt.y>=52&&!rising){a.puffAt=a.puffAt&&now-a.puffAt<600?a.puffAt:now;a.puff.setAttribute('cx',pt.x)}
const ps=a.puffAt?Math.min((now-a.puffAt)/600,1):1;a.puff.setAttribute('r',ps<1?1+ps*6:0);a.puff.style.opacity=(1-ps)*.7;
if(a.L>=a.total&&!holding){a.phase='rest';a.t0=now}
}
let rafId=null;
function loop(now){animated.forEach(a=>{if(a.visible)frame(a,now);else a.last=null});rafId=requestAnimationFrame(loop)}
const io='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(en=>{const a=animated.get(en.target);if(a){a.visible=en.isIntersecting;if(!en.isIntersecting)a.t0=null}}),{rootMargin:'80px'}):null;
function initAnimations(){
animated.forEach((a,svg)=>io&&io.unobserve(svg));animated.clear();
document.querySelectorAll('.motion-graphic').forEach(svg=>{
const a=setupAnimation(svg);animated.set(svg,a);
if(reduceMotion){a.trail.style.strokeDashoffset=0;const end=a.trail.getPointAtLength(a.total);const rod=drawRod(a,a.R.base,1);placeLure(a,end.x,end.y,0);lineTo(a,rod,end.x,end.y,1);return}
drawRod(a,a.R.base,1);
if(io)io.observe(svg);else a.visible=true;
});
if(!reduceMotion&&rafId===null)rafId=requestAnimationFrame(loop);
}
function card(lure){
const s=season(lure);
const p=profiles[lure.id];
const shareText=`🎣 ${lure.name} — ${lure.subtitle}\n🐟 דגי מטרה: ${lure.fish.join(', ')}\n🔁 שיטת עבודה: ${lure.methods.join(' ')}\n📅 עונה: ${s.share}${lure.note?`\n💡 ${lure.note}`:''}\n${location.href.split('#')[0]}`;
return `<article class="lure-card" aria-labelledby="lure-${lure.id}">
<div class="card-top"><div class="card-visual"><span class="card-index">#${String(lure.id).padStart(2,'0')}</span><img src="assets/lures/${lure.image}" alt="דמוי ${escapeHTML(lure.name)}" width="500" height="312" loading="lazy" decoding="async"></div>
<div class="card-identity"><div class="card-badges"><span class="card-type">${lure.typeLabel}</span>${s.badges.map(b=>`<span class="season-badge ${b.className}">${b.text}</span>`).join('')}</div><h3 id="lure-${lure.id}" lang="en">${escapeHTML(lure.name)}</h3><p class="card-subtitle">${lure.subtitle}</p><div class="fish-tags">${lure.fish.map(f=>`<span>${f}</span>`).join('')}</div></div></div>
${motionGraphic(lure)}
<div class="method-block"><span class="method-title">כך עובדים איתו</span><ol class="method-steps">${lure.methods.map((m,i)=>`<li><span class="step-num">${i+1}</span><span>${m}</span></li>`).join('')}</ol></div>
<div class="card-bottom"><div class="stat"><span>קצב</span><strong>${p.pace}</strong><span class="pace-bars pace-${p.pace==='איטי'?1:p.pace==='בינוני'?2:3}" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="stat"><span>אזור</span><strong>${p.water}</strong></div><a class="share-link" href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" aria-label="שלח את ${escapeHTML(lure.name)} בוואטסאפ">שלח בוואטסאפ ↗</a></div>
${lure.note?`<p class="card-note">${lure.note}</p>`:''}
</article>`;
}
function renderNow(){
if(!el.now)return;
const seasonal=lures.filter(l=>l.months);
const inNow=seasonal.filter(l=>l.months.includes(NOW));
const later=seasonal.filter(l=>!l.months.includes(NOW));
const allYear=lures.length-seasonal.length;
const short=l=>l.name.split(' ').slice(1).join(' ');
let parts=[];
if(inNow.length)parts.push(`בעונה עכשיו: <b>${inNow.map(short).join(', ')}</b>`);
parts.push(`${allYear} דמויים עובדים כל השנה`);
if(later.length){const byMonth={};later.forEach(l=>{const m=nextStart(l);(byMonth[m]=byMonth[m]||[]).push(short(l))});
Object.entries(byMonth).forEach(([m,names])=>parts.push(`${names.join(' ו־')} ${names.length>1?'נכנסים':'נכנס'} לעונה ב${MONTH_NAMES[m-1]}`))}
const active=state.month===String(NOW);
el.now.innerHTML=`<div class="now-text"><span class="now-label">מה עובד ב${MONTH_NAMES[NOW-1]}</span><p>${parts.join(' · ')}</p></div><button type="button" class="now-button" id="nowButton" aria-pressed="${active}">${active?'הצג את כל השנה':'הצג רק מה שעובד עכשיו'}</button>`;
}
function render(){
const q=state.search.trim().toLocaleLowerCase('he');
const visible=lures.filter(l=>(state.type==='all'||l.type===state.type)&&(state.fish==='all'||l.fish.includes(state.fish))&&(state.month==='all'||worksIn(l,Number(state.month)))&&(!q||[l.name,l.subtitle,l.typeLabel,...l.fish].join(' ').toLocaleLowerCase('he').includes(q)));
el.grid.innerHTML=groups.map(group=>{
const items=visible.filter(l=>l.type===group.id);
if(!items.length)return '';
return `<section class="lure-group" aria-labelledby="group-${group.id}"><div class="group-heading"><div><span class="group-number">${group.index} / 04</span><h3 id="group-${group.id}">${group.title}</h3><p>${group.subtitle}</p></div><span class="group-count">${items.length} דמויים</span></div><div class="group-grid">${items.map(card).join('')}</div></section>`;
}).join('');
el.count.textContent=`${visible.length} מתוך ${lures.length} דמויים`;
el.empty.hidden=visible.length!==0;
el.hint.hidden=state.month==='all';
renderNow();
initAnimations();
}
function setMonth(v){state.month=v;el.month.value=v;render()}
function reset(){state.type='all';state.fish='all';state.month='all';state.search='';el.fish.value='all';el.month.value='all';el.search.value='';document.querySelectorAll('[data-type]').forEach(b=>{const active=b.dataset.type==='all';b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});render()}
document.querySelector('#typeFilters').addEventListener('click',event=>{const button=event.target.closest('[data-type]');if(!button)return;state.type=button.dataset.type;document.querySelectorAll('[data-type]').forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});render()});
el.fish.addEventListener('change',()=>{state.fish=el.fish.value;render()});
el.month.addEventListener('change',()=>setMonth(el.month.value));
el.search.addEventListener('input',()=>{state.search=el.search.value;render()});
if(el.now)el.now.addEventListener('click',e=>{if(e.target.closest('#nowButton'))setMonth(state.month===String(NOW)?'all':String(NOW))});
document.querySelector('#resetFilters').addEventListener('click',reset);
document.querySelector('#emptyReset').addEventListener('click',reset);
render();
