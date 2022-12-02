const form = document.getElemenById("form-number");

function validaNumero(numero) {
  const numeroComoArray = numero.split(' ');
  return numeroComoArray.length >= 2;
}

function validate(e) {
  e.preventDefault();

  const a = document.getElementById("a");
  let valid = true;

  if (!a.value) {
    const numberError = document.getElementById("numberError");
    numberError.classList.add("visible");
    a.classList.add("invalid");
    numberError.setAttribute("aria-hidden", false);
    numberError.setAttribute("aria-invalid", true);
  }
  return valid;
}