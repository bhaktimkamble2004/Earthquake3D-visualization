const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuToggle){menuToggle.addEventListener('click',()=>nav.classList.toggle('open'));}

document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav-links a')];
const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${entry.target.id}`));
    }
  });
},{rootMargin:'-25% 0px -65% 0px',threshold:0});
sections.forEach(section=>observer.observe(section));

// Keep embedded Plotly documents responsive when their parent container changes size.
window.addEventListener('resize',()=>{
  document.querySelectorAll('iframe').forEach(frame=>{
    try{frame.contentWindow.dispatchEvent(new Event('resize'));}catch(e){}
  });
});
