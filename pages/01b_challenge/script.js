import gsap from "gsap";

gsap.to(".card, #square, .triangle", {
  rotation: 360,
  y: 200,
  duration: 1,
  yoyo: true,
  repeat: -1,
  ease: "power1",
});
