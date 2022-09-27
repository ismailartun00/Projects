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
function translateLang(lang) {
  $(".lang").each(function (index, item) {
    $(this).text(arrLang[lang][$(this).attr("key")]);
  });
}

$(function () {
  let stored_lang = localStorage.getItem("stored_lang");
  if (stored_lang != null && stored_lang != undefined) {
    lang = stored_lang;
    translateLang(lang);
  }

  $(".translate").click(function () {
    var lang = $(this).attr("id");
    localStorage.setItem("stored_lang", lang);
    translateLang(lang);
  });
});
