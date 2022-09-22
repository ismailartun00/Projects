var arrLang = {
  tr: {
    home: "Anasayfa",
    about: "Hakkında",
    contact: "İletişim",
    gallery: "Galeri",
    callnow: "Hemen arayın ve kaydolun!",
  },
  de: {
    home: "Startseite",
    about: "Um",
    contact: "Kontakt",
    gallery: "Galeria",
    callnow: "Jetzt anrufen und anmelden!",
  },
  en: {
    home: "Home",
    about: "About",
    contact: "Contact",
    gallery: "Gallery",
    callnow: "Call now and sign up!",
  },
};

var count = 0;

function run() {
  var language = ["tr", "de", "en"];
  localStorage.setItem("langData", JSON.stringify(arrLang));
  var getItem = JSON.parse(localStorage.getItem("langData"))[language[count]];

  document.getElementById("home").innerText = getItem.home;
  document.getElementById("about").innerText = getItem.about;
  document.getElementById("contact").innerText = getItem.contact;
  document.getElementById("gallery").innerText = getItem.gallery;
  document.getElementById("callnow").innerText = getItem.callnow;

  count++;
  if (count >= 3) {
    count = 0;
  }
}
