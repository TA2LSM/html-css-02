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
    this.textContent = "Karanlık Tema Kullan";
  } else {
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
    this.textContent = "Aydınlık Tema Kullan";
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

const hideShow = document.querySelector(".btnHideShow");

hideShow.addEventListener("click", function () {
  var text = this.textContent;
  var x = document.getElementsByClassName("classToBeHide");

  if (text === "Gizle") {
    this.textContent = "Göster";
    this.style.background = "green";

    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  } else {
    this.textContent = "Gizle";
    this.style.background = "red";

    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "block";
    }
  }
});
