
var topping = prompt("Ingrese el topping (Oreo, Kitkat, Kinder)");
var precio= 10;
var precio1= 15;
var precio2=25;
var mensaje= "El precio es ";
var helado = 300;
var precioFinal= helado + precio;

if(topping === "oreo"){
    alert("El precio es $10")
    alert("El precio del helado con oreo es $ " + (precio + 300));
} else if (topping === "kitkat") {
    alert("El precio es $15")
    alert("El precio del helado con kitkat es $ " + (precio1 + 300));
} else if (topping === "kinder") {
alert("El precio es $25")
alert("El precio del helado con kinder es $ " + (precio2 + 300));
} else {
    alert("No tenemos ese tooping");
}


var menu= prompt("Ingrese el pedido")

switch (menu) {
    case "carne":
        console.log("Sugerencia de la casa: vino tinto")
        break;

        case "pescado":
        console.log("Sugerencia de la casa: vino blanco")
        break;

        case "verduras":
        console.log("Sugerencia de la casa: agua")
        break;

        default:
            console.log("Elija carne, pescado o verdura");
            break;
}

let arrayTarea = ["hola", "soy", "Nerea", "Espindola"];
let i;
for(i=0; i<arrayTarea.length; i++){
console.log(arrayTarea[i]);
}

let nuevaTarea= ["chau"];
nuevaTarea.push("nuevaTarea");

for(let i=0; i<nuevaTarea.length; i++){
    console.log(nuevaTarea[i]);
}
var numero=5;
while (numero<11) {
    console.log(numero + "es mas chico que 11")
    numero++;
}