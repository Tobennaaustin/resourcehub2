const open = document.getElementById("open");
const close = document.getElementById("close");
const aside = document.querySelector("aside");
const acc = document.getElementById("acc");

open.addEventListener('click', () => {
  // aside.style.width ="70%";
  aside.style.display = "block";
  aside.style.transition = ".10s ease"

});
close.addEventListener('click', () => {
  // aside.style.width = "0"
  aside.style.display = "none";

});

if (window.screen.width < 799) {
  aside.style.display = "none"
}



// acc.addEventListener('click', () => {
//   window.location.href = 'account.html';
// });