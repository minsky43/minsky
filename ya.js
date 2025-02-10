gsap.registerPlugin(ScrollTrigger);

gsap.to(".screen-bear", {
  scrollTrigger: {
    trigger: "#content-1",
    start: "top bottom", 
    end: "top top", 
    scrub: true
  },
  y: 50,
  opacity: 0
}); // Closed the missing bracket

gsap.to('.screen-bear', {
  scale: 0.8,
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '.screen-bear',
    scrub: true,
    start: 'center top',
    end: 'bottom top',
  }
});

gsap.set('.screen-bear', { '--opacity': 1 });

gsap.to('.screen-bear', {
  '--opacity': 1,
  ease: 'power1.in',
  scrollTrigger: {
    trigger: '.screen-bear',
    scrub: true,
    start: 'center bottom',
    end: 'bottom bottom'
  }
});

gsap.utils.toArray(".content-section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section, // Corrected the trigger reference
    start: "top top", 
    scrub: true,
    pin: true, 
    pinSpacing: false
  });
});

if (!CSS.supports('animation-timeline: scroll()') && matchMedia('(prefers-reduced-motion: no-preference)')) {
  gsap.registerPlugin(ScrollTrigger);

  const scrub = 0.5;
  const trigger = '#content-1'; // Updated trigger to content-1

  gsap.set('p > span', {
    '--progress': 0,
    backgroundPositionX: 'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
    color: 'transparent',
    overflow: 'visible' // Ensure overflow is visible
  });

  gsap.to('p > span', {
    '--progress': 1,
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top',
      end: 'top top-=75%'
    }
  });

  gsap.to('p > span', {
    color: 'black',
    scrollTrigger: {
      trigger,
      scrub,
      start: 'top top-=75%',
      end: 'bottom bottom'
    }
  });
}

// Smooth scrolling with Lenis
const lenis = new Lenis();
lenis.on('scroll', (e) => console.log(e));
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
