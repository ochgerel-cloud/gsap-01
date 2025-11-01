import gsap from "gsap";
// 👉 GSAP (GreenSock Animation Platform)-ийг импортолж байна. Энэ нь HTML элементүүдэд анимаци үүсгэхэд ашиглагддаг powerful animation library юм.

// Select the "Repeat" button
const repeat = document.querySelector(".repeat");
// 👉 HTML дээрх `.repeat` гэсэн класстай товчийг сонгож `repeat` хувьсагчид хадгалж байна. Дараа нь графикийг дахин ачаалах үүрэгтэй.

// Sample data for each day of the week
const data = [
  { label: "Mon", value: 80 },
  { label: "Tue", value: 60 },
  { label: "Wed", value: 100 },
  { label: "Thu", value: 70 },
  { label: "Fri", value: 90 },
  { label: "Sat", value: 50 },
  { label: "Sun", value: 65 },
];
// 👉 7 хоногийн өдрүүдийн жишээ өгөгдөл.
// `label` нь тухайн өдрийн нэр, `value` нь тэр өдрийн утгыг илэрхийлж байна (жишээ нь борлуулалт эсвэл үзүүлэлт гэх мэт).

// Get reference to the chart container
const chart = document.getElementById("chart");
// 👉 HTML дээрх `id="chart"` гэсэн контейнерийг сонгож авч байна. Энэ нь багананууд (bars)-ыг байрлуулах үндсэн chart div юм.

// Calculate layout constants
const chartHeight = chart.clientHeight;
// 👉 Chart контейнерийн өндрийг пикселээр авна. Баганануудын харьцангуй өндрийг тооцохдоо ашиглана.

console.log(chartHeight);
// 👉 Chart-ийн өндрийг шалгах зорилгоор консол дээр хэвлэж байна.

const barWidth = 50;
// 👉 Нэг баганын өргөнийг 50 пикселээр тогтоож байна.

const spacing = 25;
// 👉 Багануудын хоорондох зайг 25 пикселээр тогтооно.

const maxValue = Math.max(...data.map((d) => d.value));
// 👉 Хамгийн өндөр (их) утгыг олж байна. Энэ нь бүх баганын өндрийг харьцуулан тооцоход хэрэглэгдэнэ.

console.log(maxValue);
// 👉 Хамгийн их утгыг шалгах зорилгоор консол дээр хэвлэнэ.

// Render the bar chart
function renderChart() {
  // 👉 Chart-ийг үүсгэж, DOM дотор харуулах зориулалттай функц.
  data.forEach((item, i) => {
    // 👉 `data` массивын бүх элементүүдийг нэг бүрчлэн давтаж ажиллуулна. `item` нь тухайн объект, `i` нь индекс.

    // Create a wrapper for bar + label
    const wrapper = document.createElement("div");
    // 👉 div элемент үүсгэж, энэ нь тухайн багана болон доорх бичгийг хамтад нь байрлуулах зориулалттай.

    wrapper.className = "bar-wrapper";
    // 👉 Шинэ wrapper div-д `bar-wrapper` гэсэн класс өгч байна (CSS-д зориулж).

    wrapper.style.left = `${i * (barWidth + spacing) + 50}px`;
    // console.log((wrapper.style.left = `${i * (barWidth + spacing) + 50}px`));
    // 👉 Хэвтээ байрлалыг тооцож өгч байна.
    // Индекс (`i`) бүрийн хувьд (өргөн + зай)-г үржүүлж, +50px margin зөрүүтэй эхэлж байрлуулна.

    wrapper.style.width = `${barWidth}px`;
    // 👉 Wrapper-ийн өргөнийг 50px гэж тогтооно.

    // Create the bar itself
    const bar = document.createElement("div");
    // 👉 Chart дээрх үндсэн баганыг үүсгэж байна.

    bar.className = "bar";
    // 👉 `bar` гэсэн класс өгнө. Энэ нь CSS дээр background-color, transform гэх мэтээр харагдах байдлыг тодорхойлно.

    const barHeight = (item.value / maxValue) * (chartHeight - 60);
    // 👉 Тухайн баганын өндрийг хамгийн их утгатай харьцуулж хувиар тооцож байна.
    // (chartHeight - 60) гэдэг нь дээд/доод margin-ийг тооцсон тохируулга юм.

    bar.style.height = `${barHeight}px`;
    // 👉 Тооцсон өндрийг пиксел хэлбэрээр тохируулж байна.

    // Create the label under the bar
    const label = document.createElement("div");
    // 👉 Баганы доор байрлах текстийн div үүсгэнэ.

    label.className = "label";
    // 👉 CSS-д ашиглах зориулалттай `label` гэсэн класс өгч байна.

    label.textContent = item.label;
    // 👉 Label-ийн текстийг тухайн өдрийн нэрээр (`Mon`, `Tue`, гэх мэт) тохируулна.

    // Assemble the components
    wrapper.appendChild(bar);
    // 👉 Bar-ийг wrapper дотор байрлуулна.

    wrapper.appendChild(label);
    // 👉 Label-ийг wrapper дотор bar-ийн доор нэмж байрлуулна.

    chart.appendChild(wrapper);
    // 👉 Wrapper-ийг нийт chart контейнерт нэмж оруулна.

    // 👇 This is where GSAP animation will go later
    gsap.to(bar, {
      scaleY: 1,
      duration: 2,
      ease: "elastic.out(1.5,0.8)",
      delay: i * 0.1,
    });
    // 👉 GSAP ашиглан тухайн bar-д анимаци өгч байна.
    // `scaleY: 1` — босоо хэмжээг аажмаар 1 (жижигээс том) болгоно.
    // `duration: 2` — 2 секунд үргэлжилнэ.
    // `ease: "elastic.out(1.5,0.8)"` — уян хатан, үсэрч байгаа мэт хөдөлгөөнтэй болно.
  });
}

// Clear chart and re-render on "Repeat" click
repeat.addEventListener("click", () => {
  // 👉 “Repeat” товч дарахад chart-ийг дахин зурна.
  chart.innerHTML = "";
  // 👉 Chart контейнерийг хоосолж байна (хуучин багануудыг арилгана).

  renderChart();
  // 👉 Chart-ийг дахин зурна — ингэснээр анимаци дахин тоглогдоно.
});

// Initial render
renderChart();
// 👉 Хуудас ачаалахад хамгийн анхны chart-ийг зурж эхлүүлнэ.
