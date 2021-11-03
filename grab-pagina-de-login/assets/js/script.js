let formulario = document.getElementById("formulario");
let email = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
  e.preventDefault(); 
  verifica();
});

function verifica(){
  let p =  document.getElementById("email-span");
  p.classList.add("none");
  if(email.value == ''){
    p = document.querySelector(".none");
    p.classList.remove('none');
    email.style.border = '3px solid #FF5757';
    email.style.backgroundImage = 'url("../img/email_red.svg")';
    return;
  } else {
    email.style.borderColor = '#F8F8F8';
    email.style.backgroundImage = 'url("../img/email.svg");';
    return
  }
}