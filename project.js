let fname = document.getElementById("fname");

let formAc = document.getElementById("formAc");

function validateEmail() {
  if (!fname.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    let arrpeImg = document.getElementById("errorImg");
    arrpeImg.style.display = "block";
    let errorspan = document.getElementById("errorspan");
    errorspan.style.display = "block";
  } else {
    let respond = document.getElementById("respond");
    respond.style.display = "block";
  }
}
