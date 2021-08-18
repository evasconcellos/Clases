let nombre = prompt("Ingresá tu nombre");
if (nombre !== "") {
  alert("Hola " + nombre + ", bienvenido.");

  let edad = prompt("Ingresá tu edad");
  if (edad >= 18) {
    alert("Tenés " + edad + ", excelente.");
    let elegirNumer = parseInt(prompt("Ahora elige un número del 1 al 5"));

    switch (elegirNumer) {
      case 1:
        alert("Elegiste el 1");
        break;
      case 2:
        alert("Elegiste el 2");
        break;
      case 3:
        alert("Elegiste el 3");
        break;
      case 4:
        alert("Elegiste el 4");
        break;
      case 5:
        alert("Elegiste el 5");
        break;

      default:
        alert("Elegiste un número mayor a 5, pero sigamos...");
    }

    for (i = 0; i < 1; i++) {
      var sumaNumer = prompt("Sumale un número");
      alert("El resultado es " + (parseInt(elegirNumer) + parseInt(sumaNumer)));
      var sumaNumer2 = prompt("Por último, uno más")
      alert("El resultado final es " + (parseInt(elegirNumer) + parseInt(sumaNumer) + parseInt(sumaNumer2)));
    }

  } else {
    alert("Solo puedes continuar si eres mayor de 18 años");
  }
} else {
  alert("Debes escribir tu nombre para continuar");
}
