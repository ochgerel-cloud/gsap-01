import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.create({
  trigger: ".pin-container",
  start: "top center",
  end: "+=500", //.box -ийн start эхэлсэн цэгээс доош 500px-ийн дараа animate зогсоно
  pin: ".box",
  scrub: 1.5,
  markers: true,
});
