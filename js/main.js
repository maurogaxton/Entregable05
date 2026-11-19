//Simulador de productos en carrito y modulo de pago 

/* function listarCarrito(lista) {
    console.log("--- Productos en carrito de compras ---")
    for (const producto of lista) {
    console.log(`Producto: ${producto}`)
    }
    console.log(`Total: ${lista.length} productos`)
} */

function recargarCuotas(cantidadCuotas){
    let recargo
    if (cantidadCuotas >= 1 && cantidadCuotas <= 3) {
        recargo = 1.1
    } else if (cantidadCuotas >= 4 && cantidadCuotas <= 6) {
        recargo = 1.5
    } else {
        recargo = 2
    }
    return recargo
}

function calcularValorCuota(importe, cuotasRecargo, cuotas){
    let importeDeCuota = ((importe * cuotasRecargo) / cuotas)
    return importeDeCuota.toFixed(2)
}

function calcularPorcentaje(cuotasConRecargo){
    let valorPorcentaje = ((cuotasConRecargo - 1) * 100)
    return valorPorcentaje.toFixed(2)
}

function calculoPagoConTarjeta(empresa, importe){
    let cuotasRecargo
    let importeCuota
    let porcentaje
    let costoTotalFinanciado
    let mensaje
    let cuotasEmpresa
    let cuotasValido = false
    do {
        cuotasEmpresa = parseInt(prompt("Ingrese la cantidad de cuotas: de 1 a 12"))
        if (cuotasEmpresa >= 1 && cuotasEmpresa <= 12){
            cuotasValido = true
        } else {
            console.log("Ingrese una cantidad de cuotas validas, de 1 a 12")    
        }
    } while (cuotasValido == false)
    cuotasRecargo = recargarCuotas(cuotasEmpresa)
    importeCuota = calcularValorCuota (importe, cuotasRecargo, cuotasEmpresa)
    porcentaje = calcularPorcentaje(cuotasRecargo)
    costoTotalFinanciado = calcularCostoTotal (importe, cuotasRecargo)
    mensaje = "Por su compra de $ " + importe + " con " + empresa + ", abonara un recargo de " + porcentaje + " %: \n" + cuotasEmpresa + " cuotas de $ " + importeCuota +  "\nCosto total financiado: $ " + costoTotalFinanciado.toFixed(2)
    return mensaje 
}

const calcularCostoTotal = (importe, cuotasRecargo) => importe * cuotasRecargo


class Producto{
    static id = 0
    constructor (id, nombre, origen, presentacion, precio){
        this.id = ++Producto.id,
        this.nombre = nombre,
        this.origen = origen,
        this.presentacion = presentacion,
        this.precio = precio
    }
}

class Carrito{
    constructor ({changuitoItems}, cantidad){
        this.id = ++Carrito.id,
        this.changuitoItems = changuitoItems,
        this.cantidad = cantidad,
        this.importeTotal = importeTotal
    }
    importeCarrito= () => {
       this.importeTotal = this.changuitoItems.precio*this.cantidad
       console.log("Precio total del carrito: $" + this.importeTotal)
    }
}

const te1 = new Producto("Té negro La Virginia", "Argentina", "25 saquitos", 1500);
const te2 = new Producto("Té verde Taragüi", "Argentina", "20 saquitos", 1850);
const te3 = new Producto("Té Earl Grey Twinings", "Reino Unido", "25 saquitos", 6500);
const te4 = new Producto("Té rojo Pu-Erh Inti Zen", "China", "15 saquitos", 4200);
const te5 = new Producto("Té en hebras Chai Saint Gottard", "India", "50 gramos", 3800);




const changuitoItems = []
const comprarCarrito = () => {
    let compraProducto = prompt("Ingrese el producto")
    let cantidadProducto = prompt("Ingrese la cantidad")
    


    const changuito1 = new Carrito(compraProducto, cantidadProducto)
    changuitoItems.push(changuito1)
}

const verCarrito = () => {
    if(changuitoItems.length == 0) {
        alert("No hay productos agregados al carrito")
    } else {
        console.log(changuitoItems)
    }
}



const pagarCarrito = () => {
let pagar = true
while(pagar) {
    let importeValido = false
    let importe
    do {
        importe = parseFloat(prompt("Ingrese el importe de la compra"))
        if (importe > 0){
            importeValido = true
        } else {
            console.log("Ingrese un importe válido, mayor a 0")
        } 
    } while (importeValido == false)

    let menuPago = parseInt(prompt("Ingrese una opcion de pago: 1 VISA, 2 MASTERCARD, 3 AMERICAN EXPRESS, 4 MERCADOPAGO o 5 EFECTIVO"))
    
    switch(menuPago) {
        case 1:
            console.log(calculoPagoConTarjeta("Visa", importe))
            break
        case 2:
            console.log(calculoPagoConTarjeta("Mastercard", importe))
            break
        case 3:
            console.log(calculoPagoConTarjeta("American Express", importe))
            break
        case 4:
            let importeMP = importe * 0.85
            alert("Su pago con MercadoPago tiene un 15% de descuento, por su compra de $ " + importe + " abonara $ " + importeMP )
            break
        case 5:
            let importeEfectivo = importe * 0.75
            alert("Su pago con efectivo tiene un 25% de descuento, por su compra de $ " + importe + " abonara $ " + importeEfectivo )
            break
        default:
            alert("Opcion incorrecta")
    }

    let confirmacion = prompt("Desea hacer otro pago? (si/no)").toLowerCase()
    if(confirmacion == "no"){
        pagar = false
        alert("Gracias por su compra!")
    }
}


let menuPrincipal = parseInt(prompt("Bienvenido! Ingrese 1 para comprar, 2 para ver carrito, 3 para pagar o 4 para salir"))

while(menuPrincipal !== 4) {
    switch(menuPrincipal) {
        case 1:
            comprarCarrito()
            break
        case 2:
            verCarrito()
            break
        case 3:
            pagarCarrito()
            break
        default:
            alert("Opcion incorrecta")
    }
    menuPrincipal = parseInt(prompt("Bienvenido! Ingrese 1 para comprar, 2 para ver carrito, 3 para pagar o 4 para salir"))
}



}