function maior() {
  var numero1 = parseFloat(document.getElementById("numA").value);
  var numero2 = parseFloat(document.getElementById("numB").value);

  if (numero1 < numero2){
  document.write("formulario enviado B maior que A");
} else {
  document.write("falha nao enviado A e maior que B");
} 
}      