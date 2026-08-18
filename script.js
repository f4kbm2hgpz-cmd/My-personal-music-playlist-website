const works = [
  "1090 महिला शक्ति लाइन — महिलाओं की सुरक्षा से जुड़ी हेल्पलाइन",
  "लखनऊ मेट्रो — शहरी परिवहन परियोजना",
  "आगरा-लखनऊ एक्सप्रेसवे — 302 किलोमीटर का एक्सप्रेसवे",
  "किसान बाज़ार — किसानों के लिए बाजार व्यवस्था",
  "लोहिया आवास योजना — ग्रामीण गरीबों के आवास से जुड़ी योजना",
  "समाजवादी स्वास्थ्य सेवा — 108 आपातकालीन एम्बुलेंस सेवा",
  "कामधेनु योजना — डेयरी क्षेत्र से जुड़ी योजना"
];

let currentWork = 0;

function changeWork() {
  const workText = document.getElementById("workText");

  if (!workText) return;

  workText.classList.remove("show");

  setTimeout(function () {
    currentWork = (currentWork + 1) % works.length;
    workText.textContent = works[currentWork];
    workText.classList.add("show");
  }, 400);
}

document.addEventListener("DOMContentLoaded", function () {

  const workText = document.getElementById("workText");

  if (workText) {
    workText.classList.add("show");
    setInterval(changeWork, 3500);
  }

});
