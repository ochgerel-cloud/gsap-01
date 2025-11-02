import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.from("#box", {
  opacity: 0,
  x: 500,
  rotate: 360,
  duration: 3,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#box",
    start: "top center", //Энэ нь анимаци #box-ийн дээд хэсэг дэлгэцийн төвтэй давхцах үед эхэлнэ гэсэн үг.
    end: "bottom 20%", //#box-ийн доод хэсэг дэлгэцийн дээд талаас 20%-ийн зайд хүрэх үед энэ анимаци дуусна — ингэснээр бидэнд туршиж тоглох боломжтой урт, тухтай scroll орон зай үүснэ.
    markers: true,
    scrub: 1.5, //Энэ нь бүхэл анимацийн явцыг scroll-ийн хөдөлгөөнтэй шууд уялдуулж, 1.5 секундын зөөлрүүлэх эффектээр илүү “маслаг” зөөлөн мэдрэмж төрүүлдэг.scrub: true эсвэл scrub: 1.5 ашиглах үед заавал end утга тохируулах хэрэгтэй.Учир нь end байхгүй бол scroll хийх зам үүсэхгүй — тэгэхээр GSAP анимацийг scroll-ийн урсгал дагуу “scrub” хийж чадахгүй.Ингэснээр анимац бид хүсдэг тэр зөөлөн, scroll-тэй уялдсан (smooth, tied-to-scroll) мэдрэмжийг өгөхгүй.
  },
});
