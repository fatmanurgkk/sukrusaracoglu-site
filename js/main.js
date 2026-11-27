const menuButon = document.getElementById("menuButon");
const menu = document.getElementById("menu");

menuButon.addEventListener("click", function () {
  menu.classList.toggle("acik");
});
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#hero",
    start: "top top",
    end: "+=3000",
    scrub: true,
    pin: true,
  },
});

tl.to("#hero img", { filter: "brightness(1) grayscale(0)", duration: 1 })
  .to("#hero h1", { opacity: 0, duration: 0.5 })
  .to("#hero img", { scale: 3, transformOrigin: "50% 15%", duration: 2 })
  .to(".hero-overlay", { opacity: 1, duration: 1 }, "-=0.8");
gsap.from(".logo", {
  opacity: 0,
  scale: 0.5,
  duration: 1.2,
  scrollTrigger: {
    trigger: ".logo",
    start: "top 80%",
  },
});

gsap.utils.toArray(".olay").forEach((olay) => {
  gsap.from(olay, {
    opacity: 0,
    x: -60,
    duration: 0.8,
    scrollTrigger: { trigger: olay, start: "top 85%" },
  });

  const oyuncu = olay.querySelector(".oyuncu");
  if (oyuncu) {
    const yon = oyuncu.classList.contains("sol") ? -120 : 120;
    gsap.from(oyuncu, {
      opacity: 0,
      x: yon,
      duration: 1,
      scrollTrigger: { trigger: olay, start: "top 75%" },
    });
  }
});
gsap.from(".kupa-ikon", {
  scale: 0,
  rotation: -20,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: { trigger: "#kupalar", start: "top 60%" },
});

gsap.utils.toArray(".kupa").forEach((kupa, i) => {
  gsap.from(kupa, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    delay: i * 0.15,
    scrollTrigger: { trigger: ".kupa-listesi", start: "top 80%" },
  });
});

gsap.utils.toArray(".sayi").forEach((el) => {
  const hedef = Number(el.dataset.hedef);
  const sayac = { deger: 0 };
  gsap.to(sayac, {
    deger: hedef,
    duration: 2,
    ease: "power1.out",
    onUpdate: () => {
      el.textContent = Math.round(sayac.deger);
    },
    scrollTrigger: { trigger: ".kupa-listesi", start: "top 80%" },
  });
});
document.body.style.overflow = "hidden";

const introTl = gsap.timeline({
  onComplete: () => {
    document.getElementById("intro").remove();
    document.body.style.overflow = "";
    ScrollTrigger.refresh();
  },
});

introTl
  .from(".intro-logo", {
    scale: 0.3,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
  })
  .from(".intro-yazi", { opacity: 0, y: 20, duration: 0.6 }, "-=0.2")
  .to(
    "#intro",
    { yPercent: -100, duration: 0.9, ease: "power3.inOut" },
    "+=0.5",
  );
gsap.from(".efsane-video", {
  opacity: 0,
  duration: 1.5,
  scrollTrigger: { trigger: "#efsaneler", start: "top 70%" },
});

gsap.from(".efsane", {
  opacity: 0,
  y: 80,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: { trigger: ".efsane-listesi", start: "top 80%" },
});
gsap.utils.toArray(".kadro-grup").forEach((grup) => {
  gsap.from(grup.querySelectorAll(".futbolcu"), {
    opacity: 0,
    x: -40,
    duration: 0.6,
    stagger: 0.1,
    scrollTrigger: { trigger: grup, start: "top 85%" },
  });
});
