var i = 0;
var txt = 'Dare defy me and my character. Sting as deep as flesh, bore through you. I am a force much stronger than such, respect that which is grander';
var speed = 100;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}