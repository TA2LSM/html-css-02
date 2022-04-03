"use strict"; // hata oluşsa da görüntülenmez, akış bozulmaz

// "btn" class'ına ait "switcher" isimli bir queryselector tanımlandı
const switcher = document.querySelector(".btnThemeSelect");

// "switcher"a, tıklandığı zamanı yakalayan bir "event listener" tanımlandı
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
