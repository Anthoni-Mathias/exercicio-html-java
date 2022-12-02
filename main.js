function maior() {
  let formValido = false;

  var numero1 = parseFloat(document.getElementById("numA").value);
  var numero2 = parseFloat(document.getElementById("numB").value);
  formValido = numero1 < numero2
  const mensagemSucesso = `B e igual ${numB.value} A e igual ${numA.value} formulario enviado B maior que A`;

  if (formValido){
    alert(mensagemSucesso);
} else {
    alert("falha nao enviado A e maior que B");
} 
}      