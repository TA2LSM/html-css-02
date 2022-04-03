"use strict"; // hata oluşsa da görüntülenmez, akış bozulmaz

// "btn" class'ına ait "switcher" isimli bir queryselector tanımlandı
const switcher = document.querySelector(".btnThemeSelect");

// "switcher"a, tıklandığı zamanı yakalayan bir "event listener" tanımlandı
// Tema değiştiren kısım burası
switcher.addEventListener("click", function () {
  var className = document.body.className;
  if (className === "dark-theme") {
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    this.textContent = "Set Dark Theme";
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    this.textContent = "Set Light Theme";
  }

  className = document.body.className;
  console.log("Current class name: " + className);
});

// Örnek 8'deki resme tıklandığında çalışacak kısım burası
function imgMappingFunc(data) {
  switch (data) {
    case 1:
      alert("Bilgisayar'a tıkladınız.");
      break;
    case 2:
      alert("Telefon'a tıkladınız.");
      break;
    case 3:
      alert("Kahve'ye tıkladınız.");
      break;
    default:
      alert("Geçersiz seçim!");
      break;
  }
}
