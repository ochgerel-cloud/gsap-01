import gsap from "gsap";

gsap.to(".btn", {
  y: 200,
  ease: "power4.out",
  duration: 0.4,
  repeat: -1,
  yoyo: true,
});
gsap.to(".toast", {
  y: 200,
  ease: "power2.out",
  duration: 1.2,
  repeat: -1,
  yoyo: true,
});
gsap.to(".card", {
  y: 200,
  ease: "power3.inOut",
  duration: 1,
  repeat: -1,
  yoyo: true,
  scale: 0.5,
});
