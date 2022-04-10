"use strict"; // hata oluşsa da görüntülenmez, akış bozulmaz

//----------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------
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

//----------------------------------------------------------------------------------------
const hideShow = document.querySelector(".btnHideShow");

hideShow.addEventListener("click", function () {
  var text = this.textContent;
  var x = document.getElementsByClassName("classToBeHide");

  if (text === "Metni Gizle") {
    this.textContent = "Metni Göster";
    this.style.background = "green";

    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
  } else {
    this.textContent = "Metni Gizle";
    this.style.background = "red";

    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "inline";
      // burada "block" seçeneği seçilirse p ve div gibi blok elementlerine uygun olur
      // inline seçilirse span gibi inline elementlerine uygun olur
    }
  }
});

function changeText() {
  var text = document.getElementById("textToBeChange").innerHTML;

  if (text !== "MERHABA") document.getElementById("textToBeChange").innerHTML = "MERHABA";
  else document.getElementById("textToBeChange").innerHTML = "NASILSIN?";
}

//----------------------------------------------------------------------------------------
var myVideo = document.getElementById("video1");

function playPause() {
  if (myVideo.paused) myVideo.play();
  else myVideo.pause();
}

function makeBig() {
  myVideo.width = 560;
}

function makeSmall() {
  myVideo.width = 320;
}

function makeNormal() {
  myVideo.width = 420;
}
