// Slider script: autoplay, controls, indicators, accessible
document.addEventListener('DOMContentLoaded', function(){
  const track = document.querySelector('.slider-track');
  const slides = Array.from(document.querySelectorAll('.slide-item'));
  const prev = document.querySelector('.slider-button.prev');
  const next = document.querySelector('.slider-button.next');
  const dots = Array.from(document.querySelectorAll('.slider-dot'));
  let idx = 0;
  let autoplay = true;
  let timer = null;

  function goTo(i){
    idx = (i + slides.length) % slides.length;
    track.style.transform = `translateX(${-idx * 100}%)`;
    dots.forEach((d, j)=> d.classList.toggle('active', j===idx));
  }

  function nextSlide(){ goTo(idx+1); }
  function prevSlide(){ goTo(idx-1); }

  next.addEventListener('click', ()=>{ nextSlide(); resetTimer(); });
  prev.addEventListener('click', ()=>{ prevSlide(); resetTimer(); });
  dots.forEach((d, i)=> d.addEventListener('click', ()=>{ goTo(i); resetTimer(); }));

  function startTimer(){ if(!autoplay) return; timer = setInterval(nextSlide, 5000); }
  function resetTimer(){ clearInterval(timer); startTimer(); }

  // pause on hover
  document.querySelector('.slider-outer').addEventListener('mouseenter', ()=>{ autoplay = false; clearInterval(timer); });
  document.querySelector('.slider-outer').addEventListener('mouseleave', ()=>{ autoplay = true; startTimer(); });

  // init
  goTo(0);
  startTimer();
});
