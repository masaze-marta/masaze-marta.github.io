
window.onload = () => { scrollFunction() };
window.onscroll = () => { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("header").style.marginTop = "-4.7rem";
  } else {
    document.getElementById("header").style.marginTop = "0rem";
  }
}