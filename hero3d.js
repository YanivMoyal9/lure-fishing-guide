(() => {
  const hero = document.querySelector('.hero-depth');
  if (!hero || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  let scrollFrame = 0;
  const updateScroll = () => {
    scrollFrame = 0;
    const rect = hero.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, -rect.top / rect.height));
    hero.style.setProperty('--scroll', progress.toFixed(3));
  };
  const scheduleScroll = () => { if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll); };
  window.addEventListener('scroll', scheduleScroll, {passive:true});
  window.addEventListener('resize', scheduleScroll, {passive:true});
  updateScroll();
  if (!matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  let x = 0, y = 0, goalX = 0, goalY = 0, frame = 0;
  const render = () => {
    x += (goalX - x) * .085;
    y += (goalY - y) * .085;
    hero.style.setProperty('--dx', x.toFixed(3));
    hero.style.setProperty('--dy', y.toFixed(3));
    if (Math.abs(goalX-x) + Math.abs(goalY-y) > .005) frame = requestAnimationFrame(render);
    else frame = 0;
  };
  const move = event => {
    const r = hero.getBoundingClientRect();
    goalX = Math.max(-1,Math.min(1,(event.clientX-r.left)/r.width*2-1));
    goalY = Math.max(-1,Math.min(1,(event.clientY-r.top)/r.height*2-1));
    hero.style.setProperty('--mx',`${Math.round((event.clientX-r.left)/r.width*100)}%`);
    hero.style.setProperty('--my',`${Math.round((event.clientY-r.top)/r.height*100)}%`);
    if (!frame) frame = requestAnimationFrame(render);
  };
  hero.addEventListener('pointermove', move, {passive:true});
  hero.addEventListener('pointerleave', () => {goalX=goalY=0; if(!frame) frame=requestAnimationFrame(render)});
})();
