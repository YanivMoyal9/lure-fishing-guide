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
function card(lure){
  const s=season(lure);
  const shareText=`${lure.name} — ${lure.subtitle}\nדגי מטרה: ${lure.fish.join(', ')}\nשיטת עבודה: ${lure.methods.join(' ')}\n${location.href.split('#')[0]}`;
  return `<article class="lure-card" aria-labelledby="lure-${lure.id}">
    <div class="card-visual"><span class="season-badge ${s.className}">${s.text}</span><img src="assets/lures/${lure.image}" alt="דמוי ${escapeHTML(lure.name)}" width="500" height="312" loading="lazy" decoding="async"></div>
    <div class="card-body"><div class="card-topline"><span class="card-type">${lure.typeLabel}</span><span class="card-number">#${String(lure.id).padStart(2,'0')}</span></div>
    <h3 id="lure-${lure.id}" lang="en">${escapeHTML(lure.name)}</h3><p class="card-subtitle">${lure.subtitle}</p>
    <div class="card-divider"></div><div class="card-fish"><strong>דגי מטרה</strong><div class="fish-tags">${lure.fish.map(f=>`<span>${f}</span>`).join('')}</div></div>
    <p class="method-preview">${lure.preview}</p>
    <details class="card-details"><summary>שיטת עבודה ופרטים</summary><div class="detail-content"><h4>איך עובדים איתו?</h4><ol>${lure.methods.map(m=>`<li>${m}</li>`).join('')}</ol><h4>אזור עבודה</h4><p>${lure.area}</p>${lure.note?`<p>${lure.note}</p>`:''}<a class="share-link" href="https://wa.me/?text=${encodeURIComponent(shareText)}" target="_blank" rel="noopener noreferrer" aria-label="שתף את ${escapeHTML(lure.name)} בוואטסאפ">שתף בוואטסאפ <span aria-hidden="true">↗</span></a></div></details>
    </div></article>`;
}
function render(){
  const q=state.search.trim().toLocaleLowerCase('he');
  const visible=lures.filter(l=>(state.type==='all'||l.type===state.type)&&(state.fish==='all'||l.fish.includes(state.fish))&&(state.month==='all'||l.months?.includes(Number(state.month)))&&(!q||[l.name,l.subtitle,l.typeLabel,...l.fish].join(' ').toLocaleLowerCase('he').includes(q)));
  el.grid.innerHTML=visible.map(card).join('');
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
