const lures = [
  {id:1,name:'Ima Nabarone',type:'minnow',typeLabel:'מינו',image:'ima-nabarone.webp',subtitle:'מינו יפני עם כפית',fish:['ברקודה','לוקוס','פלמידה'],methods:['גלגול בקצב בינוני.','לעצור מדי פעם; התקיפה יכולה להגיע דווקא בזמן העצירה.'],preview:'גלגול בינוני עם עצירות קצרות',area:'מהחוף',months:null},
  {id:2,name:'Bassday Sugapen',type:'topwater',typeLabel:'טופ ווטר',image:'bassday-sugapen.webp',subtitle:'פנסיל על פני המים',fish:['לברק','חניתן','טרכון'],methods:['לעבוד על פני המים, במיוחד בחופים.','טוויצ׳ים קצובים בשפיץ החכה ליצירת תנועה מצד לצד.'],preview:'טוויצ׳ים קצובים על פני המים',area:'חופים',months:[11,12,1,2,3,4,5,6,7]},
  {id:3,name:'Bassday S.P.M 90',type:'minnow',typeLabel:'פנסיל',image:'bassday-spm-90.webp',subtitle:'פנסיל 90 מ״מ',fish:['לברק','חניתן','טרכון'],methods:['לזרוק מהחוף או מהריף.','לעבוד בטוויצ׳ים כך שהדמוי יברח לצדדים כמו דג פצוע.'],preview:'טוויצ׳ים מהחוף או מהריף',area:'חופים וריפים',months:null},
  {id:4,name:'Ima Cobra 60',type:'topwater',typeLabel:'טופ ווטר',image:'ima-cobra-60.webp',subtitle:'Walk the dog',fish:['לברק','טרכון','חניתן'],methods:['טוויצ׳ים רציפים בשפיץ החכה תוך כדי גלגול איטי.','לשמור על תנועת זיגזג רציפה על פני המים.'],preview:'טוויצ׳ים רציפים וגלגול איטי',area:'פני המים',months:null},
  {id:5,name:'Ima Issen 45S',type:'minnow',typeLabel:'מינו שוקע',image:'ima-issen-45s.webp',subtitle:'45 מ״מ · לריפים',fish:['סרגוס','לוקוס','כחילה','צ׳יפורה'],methods:['גלגול רציף במהירות בינונית.','לעבוד באזורי ריף עם קצף וסלעים.'],preview:'גלגול בינוני באזורי קצף וסלעים',area:'ריפים',months:null},
  {id:6,name:'Ima Sukari 37S',type:'minnow',typeLabel:'מינו שוקע',image:'ima-sukari-37s.webp',subtitle:'37 מ״מ · אולטרה לייט',fish:['סרגוס','צ׳יפורה','כחילה'],methods:['גלגול רציף בקצב בינוני.','להוסיף טוויצ׳ים קטנים מדי פעם.'],preview:'גלגול בינוני וטוויצ׳ים קטנים',area:'ריפים או חוף חולי',months:[3,4,5,6,7,8,9]},
  {id:7,name:'Major Craft Jigpara TG',type:'jig',typeLabel:'ג׳יג',image:'jigpara-tg-14g.webp',subtitle:'14 גרם · טונגסטן',fish:['טרכון','גומבר','חניתן','כחילה','טונית'],methods:['לזרוק למרחק הרצוי; המבנה הקומפקטי והטונגסטן מסייעים לזריקה רחוקה.','לתת לג׳יג לשקוע לעומק הרצוי ואז לגלגל עם הקפצות.'],preview:'זריקה רחוקה וגלגול עם הקפצות',area:'מהחוף',months:null},
  {id:8,name:'Zeake R Sardine',type:'jig',typeLabel:'ג׳יג',image:'zeake-r-sardine-20g.webp',subtitle:'20 גרם · זברה גלואו',fish:['טרכון','חניתן','פלמידה','טונית','ביבי אינטיאס'],methods:['לבצע שתיים עד שלוש הקפצות.','לעצור, לגלגל ולחזור על הרצף.'],preview:'2–3 הקפצות, עצירה וגלגול',area:'מהחוף',months:null},
  {id:9,name:'Fiiish Black Minnow Candy',type:'soft',typeLabel:'סיליקון',image:'black-minnow-candy.webp',subtitle:'10 גרם · גלואו',fish:['לברק','לוקוס'],methods:['לזרוק ולהמתין שהדמוי ירד לקרקעית.','שלושה גלגולים, עצירה, וחזרה על הרצף. המטרה היא לעבוד קרוב לקרקעית.'],preview:'קרוב לקרקעית: שלושה גלגולים ועצירה',area:'קרוב לקרקעית',months:null},
  {id:10,name:'Fiiish Black Minnow Red Head',type:'soft',typeLabel:'סיליקון',image:'black-minnow-red-head.webp',subtitle:'10 גרם · ראש אדום',fish:['לברק','לוקוס'],methods:['לזרוק ולהמתין שהדמוי ירד לקרקעית.','שלושה גלגולים, עצירה, וחזרה על הרצף.'],preview:'שלושה גלגולים ועצירה ליד הקרקעית',area:'קרוב לקרקעית',note:'הראש האדום הוא צבע בולט לימים עם מים עכורים.',months:null},
  {id:11,name:'Ragot Raglou Hybrid',type:'soft',typeLabel:'סיליקון',image:'raglou-hybrid.webp',subtitle:'4.5 גרם · זנב פדל',fish:['לברק','לוקוס','טרכון'],methods:['גלגול רצוף ואיטי.','תנועת הזנב נוצרת בזמן הגלגול; אין צורך להוסיף הרבה אקשן.'],preview:'גלגול איטי ורצוף',area:'עונת הלברק',note:'מתואר כדמוי לעונת הלברק, ללא חודשים מדויקים במידע המקורי.',months:null}
];

const state={type:'all',fish:'all',month:'all',search:''};
const el={grid:document.querySelector('#cardGrid'),count:document.querySelector('#resultCount'),empty:document.querySelector('#emptyState'),fish:document.querySelector('#fishFilter'),month:document.querySelector('#monthFilter'),search:document.querySelector('#searchFilter'),hint:document.querySelector('#seasonHint')};
const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const fishNames=[...new Set(lures.flatMap(l=>l.fish))].sort((a,b)=>a.localeCompare(b,'he'));
fishNames.forEach(name=>el.fish.add(new Option(name,name)));

function season(lure){
  if(lure.id===2)return {text:'נוב׳–יולי',className:'winter'};
  if(lure.id===6)return {text:'מרץ–ספט׳',className:''};
  return {text:'עונה לא הוגדרה',className:'unknown'};
}
const profiles={
  1:{pace:'בינוני',motion:'pause',label:'גלגול ← עצירה ← גלגול',water:'אמצע המים'},
  2:{pace:'בינוני',motion:'surface',label:'טוויצ׳ים על פני המים',water:'פני המים'},
  3:{pace:'בינוני',motion:'twitch',label:'טוויצ׳ים מצד לצד',water:'מתחת לפני המים'},
  4:{pace:'איטי',motion:'surface',label:'זיגזג רציף + גלגול איטי',water:'פני המים'},
  5:{pace:'בינוני',motion:'steady',label:'גלגול רציף ליד הריף',water:'ריף וקצף'},
  6:{pace:'בינוני',motion:'twitch',label:'גלגול רציף + טוויצ׳ים קצרים',water:'ריף או חולי'},
  7:{pace:'מהיר',motion:'jig',label:'שקיעה ← הקפצה ← גלגול',water:'עומק משתנה'},
  8:{pace:'מהיר',motion:'jig',label:'2–3 הקפצות ← עצירה ← גלגול',water:'עומק משתנה'},
  9:{pace:'איטי',motion:'bottom',label:'שקיעה ← 3 גלגולים ← עצירה',water:'צמוד לקרקעית'},
  10:{pace:'איטי',motion:'bottom',label:'שקיעה ← 3 גלגולים ← עצירה',water:'צמוד לקרקעית'},
  11:{pace:'איטי',motion:'steady',label:'גלגול רצוף ואיטי',water:'לפי עומק הזריקה'}
};
const motionPaths={
  pause:'M12 38 C30 34 43 32 58 34 L75 35 M91 35 C111 35 122 38 142 36 L158 36 M174 36 C192 34 210 32 228 34',
  surface:'M12 34 L38 19 L64 34 L90 19 L116 34 L142 19 L168 34 L194 19 L228 33',
  twitch:'M12 35 L34 25 L55 42 L78 25 L101 42 L124 25 L147 42 L170 25 L194 42 L228 28',
  steady:'M12 37 C37 30 55 31 78 37 S119 43 142 37 S184 31 205 37 S220 40 228 37',
  jig:'M12 54 L48 18 L63 52 L94 24 L110 53 L144 16 L161 51 L193 26 L209 53 L228 35',
  bottom:'M12 47 C31 45 44 43 57 47 L76 47 M93 47 C111 45 123 42 140 47 L157 47 M174 47 C193 44 210 44 228 47'
};
const groups=[
  {id:'minnow',title:'מינו ופנסיל',subtitle:'תנועה מתחת לפני המים · גלגול וטוויצ׳ים',index:'01'},
  {id:'topwater',title:'טופ ווטר',subtitle:'עבודה על פני המים · תקיפות שרואים',index:'02'},
  {id:'jig',title:'ג׳יגים',subtitle:'מתכת לזריקה רחוקה · הקפצות ושקיעה',index:'03'},
  {id:'soft',title:'סיליקון',subtitle:'עבודה איטית · תנועה טבעית ליד הקרקעית',index:'04'}
];
function motionGraphic(lure){
  const p=profiles[lure.id];
  return `<div class="motion-panel motion-${p.motion}"><div class="motion-heading"><span>תנועת הדמוי במים</span><strong>${p.label}</strong></div>
    <svg class="motion-graphic" viewBox="0 0 240 72" role="img" aria-label="המחשת תנועה: ${p.label}">
      <path class="water-line" d="M8 12 H232"/><path class="bottom-line" d="M8 61 C50 58 80 64 120 61 S190 59 232 62"/>
      <path class="motion-track" d="${motionPaths[p.motion]}"/><circle class="motion-start" cx="12" cy="${p.motion==='jig'?54:p.motion==='bottom'?47:p.motion==='surface'?34:p.motion==='steady'?37:p.motion==='twitch'?35:38}" r="4"/>
    </svg><div class="motion-axis"><span>תחילת ההחזרה</span><span>כיוון העבודה ←</span></div></div>`;
}
function card(lure){
  const s=season(lure);
  const p=profiles[lure.id];
  const shareText=`${lure.name} — ${lure.subtitle}\nדגי מטרה: ${lure.fish.join(', ')}\nשיטת עבודה: ${lure.methods.join(' ')}\n${location.href.split('#')[0]}`;
  return `<article class="lure-card" aria-labelledby="lure-${lure.id}">
    <div class="card-top"><div class="card-visual"><span class="card-index">#${String(lure.id).padStart(2,'0')}</span><img src="assets/lures/${lure.image}" alt="דמוי ${escapeHTML(lure.name)}" width="500" height="312" loading="lazy" decoding="async"></div>
      <div class="card-identity"><div class="card-badges"><span class="card-type">${lure.typeLabel}</span><span class="season-badge ${s.className}">${s.text}</span></div><h3 id="lure-${lure.id}" lang="en">${escapeHTML(lure.name)}</h3><p class="card-subtitle">${lure.subtitle}</p><div class="fish-tags">${lure.fish.map(f=>`<span>${f}</span>`).join('')}</div></div></div>
    ${motionGraphic(lure)}
    <div class="method-block"><span class="method-title">כך עובדים איתו</span><ol class="method-steps">${lure.methods.map((m,i)=>`<li><span class="step-num">${i+1}</span><span>${m}</span></li>`).join('')}</ol></div>
    <div class="card-bottom"><div class="stat"><span>קצב</span><strong>${p.pace}</strong><span class="pace-bars pace-${p.pace==='איטי'?1:p.pace==='בינוני'?2:3}" aria-hidden="true"><i></i><i></i><i></i></span></div><div class="stat"><span>אזור</span><strong>${p.water}</strong></div><a class="share-link" href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" aria-label="שתף את ${escapeHTML(lure.name)} בוואטסאפ">שתף ↗</a></div>
    ${lure.note?`<p class="card-note">${lure.note}</p>`:''}
  </article>`;
}
function render(){
  const q=state.search.trim().toLocaleLowerCase('he');
  const visible=lures.filter(l=>(state.type==='all'||l.type===state.type)&&(state.fish==='all'||l.fish.includes(state.fish))&&(state.month==='all'||l.months?.includes(Number(state.month)))&&(!q||[l.name,l.subtitle,l.typeLabel,...l.fish].join(' ').toLocaleLowerCase('he').includes(q)));
  el.grid.innerHTML=groups.map(group=>{
    const items=visible.filter(l=>l.type===group.id);
    if(!items.length)return '';
    return `<section class="lure-group" aria-labelledby="group-${group.id}"><div class="group-heading"><div><span class="group-number">${group.index} / 04</span><h3 id="group-${group.id}">${group.title}</h3><p>${group.subtitle}</p></div><span class="group-count">${items.length} דמויים</span></div><div class="group-grid">${items.map(card).join('')}</div></section>`;
  }).join('');
  el.count.textContent=`${visible.length} מתוך ${lures.length} דמויים`;
  el.empty.hidden=visible.length!==0;
  el.hint.hidden=state.month==='all';
}
function reset(){state.type='all';state.fish='all';state.month='all';state.search='';el.fish.value='all';el.month.value='all';el.search.value='';document.querySelectorAll('[data-type]').forEach(b=>{const active=b.dataset.type==='all';b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});render()}
document.querySelector('#typeFilters').addEventListener('click',event=>{const button=event.target.closest('[data-type]');if(!button)return;state.type=button.dataset.type;document.querySelectorAll('[data-type]').forEach(b=>{const active=b===button;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});render()});
el.fish.addEventListener('change',()=>{state.fish=el.fish.value;render()});
el.month.addEventListener('change',()=>{state.month=el.month.value;render()});
el.search.addEventListener('input',()=>{state.search=el.search.value;render()});
document.querySelector('#resetFilters').addEventListener('click',reset);
document.querySelector('#emptyReset').addEventListener('click',reset);
render();
