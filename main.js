AOS.init();
let loader = document.getElementById("preloader");

setTimeout(() => {
  loader.style.display = "none";
}, 3000);

setTimeout(() => {
  let typingText = new Typed("#text", {
    strings: [
      "في مكتبتي الالكترونية ",
      "أنا سعيد بحضورك هنا",
      "يمكنك أخذ جولة رائعة هنا ",
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
  });
}, 4000);
