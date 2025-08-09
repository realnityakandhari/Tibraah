// Robust preloader handling
(function(){
  const hidePreloader = () => {
    const preloader = document.getElementById('preloader');
    if (preloader) preloader.classList.add('hidden');

    // Scroll to #top after preloader disappears
    const topSection = document.querySelector('#top');
    if (topSection) {
      topSection.scrollIntoView({ behavior: 'instant' }); // no animation
    }
  };

  document.addEventListener('DOMContentLoaded', () => { setTimeout(hidePreloader, 1200); });
  window.addEventListener('load', () => { setTimeout(hidePreloader, 300); });
  setTimeout(hidePreloader, 5000);
  document.addEventListener('click', hidePreloader, { once:true });
})();


    // Mobile nav
    const toggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('header nav');
    toggle?.addEventListener('click', () => { nav?.classList.toggle('open'); });

    // Reveal on scroll
    const observer = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('visible'); } });
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

    // Form -> WhatsApp message
    const form = document.getElementById('lead-form');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const name = data.get('name');
      const contact = data.get('contact');
      const country = data.get('country');
      const zip = data.get('zip');
      const need = data.get('need');
          const msg = `Hi Tibraah, I'm ${name}. Reach me on ${contact}. Country: ${country}. Zip: ${zip}. I need: ${need}.`;
    const phone = '917123456789'; // Change to your number
    const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    });

    

    const testis = document.querySelector('.testis');
testis.addEventListener('mouseenter', () => {
  testis.style.animationPlayState = 'paused';
});
testis.addEventListener('mouseleave', () => {
  testis.style.animationPlayState = 'running';
});
