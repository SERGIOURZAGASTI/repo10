const helado = 100;
let topping = "";
let precio = 0;
let precioFinal = 0;

const botonCalcularPrecio = document.getElementById("calcular-precio");
botonCalcularPrecio.addEventListener("click", function() {
  topping = document.getElementById("topping").value;
  
  if (topping === "Oreo") {
    precio = 10;
  } else if (topping === "KitKat") {
    precio = 15;
  } else if (topping === "Kinder") {
    precio = 25;
  } else {
    alert("No tenemos este topping");
    return;
  }
  
  precioFinal = helado + precio;
  alert("El helado sin topping sale $100. El precio final de su helado es $" + precioFinal);
});
