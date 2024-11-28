//Objetos 
//Se eligió un objeto de: relojes
const relojMujer= {
    nombre: "Reloj informal",
    paisOrigen: "China", 
    descripcion: "Relojes de oro rosa para mujer, muñeca pequeña, preciosa abeja, corazón de diamantes, esfera romana, reloj de pulsera de malla de moda para mujer, movimiento de cuarzo japonés", 
    precio: 35.88, 
    color: ["Rojo", "Plateado", "Azul", "Verde"], 
    detalles: {
        anchoProducto: 2.6, 
        tipoCierre: "Cierre deslizante", 
        
    }
}
console.log(relojMujer); 

//Destructuración de objetos
const {nombre,paisOrigen, descripcion,precio, color, detalles} = relojMujer
console.log(nombre,paisOrigen, descripcion,precio, color, detalles);

//Congelamiento de objetos
Object.freeze(relojMujer.detalles)
console.log(Object.isFrozen(relojMujer.detalles));

//Copiar dos objetos
const cliente = {
    nombreCliente: "Milena",
    correoCliente: "milena@edu.ec", 
    cedula: "12345678", 
    celular: 123456789,
    numeroTarjeta: 11111111111
}

const informacionDelProductoAdquirido = {...relojMujer,...cliente}
console.log(informacionDelProductoAdquirido )

//Utilización del "this"
const mantelesVasos = {
    nombre: "6 manteles individuales de ganchillo", 
    precio: 8.99,
    color: "Beige", 
    detalles: {
        material: "Algodon", 
        talla: 7.87, 
        marca: "Divina Vitae"
    },
    mostrarInformacion: function(){
        console.log(console.log(`Nombre: ${this.nombre}\nPrecio: ${this.precio}
            \nColor: $${this.color}\nDetalles: 
            -Material: ${this.detalles.material}
            -Talla: ${this.detalles.talla}
            -Marca: ${this.detalles.marca}`))
    }
}
mantelesVasos.mostrarInformacion(); 

//Metodos de los objetos
console.log("Array con claves del objeto:",Object.keys(mantelesVasos))
console.log("Array con propiedades del objeto:",Object.values(mantelesVasos ))
console.log("Array con arrays que contienen la clave y las propiedades del objeto :",Object.entries(mantelesVasos ))

//(ES6) Nombres abreviados de propiedades

const nombreSilla = "Silla de Navidad"; 
const precioSilla = 34.99; 
const dimensionSilla = "0,1 prof. x 0,1 an. x 0,1 al. pulgadas"; 

const sillaNavideña = {
    nombreSilla, 
    precioSilla, 
    dimensionSilla
}

console.log(sillaNavideña); 

//Arreglos 
const productosGamers = ["Bluetooth Controller for Switch", "3 piezas de arte pared", "Teclado y mouse para juegos", 
    "EURPMASK", "Auriculares para jeugos para PS4"];
//Metodos 
console.log("El tamaño del arreglo es: ", productosGamers.length); 
console.log("Elimina el elemento del final del arreglo, en este caso es: ", productosGamers.pop(productosGamers));
console.log("Elimina el elemento del inicio del arreglo, en este caso es: ", productosGamers.shift(productosGamers)); 
const escritorio = "Besiost de metal"; 
console.log("Se agrega el elemento al final, se añade el elemento: ", productosGamers.push(escritorio)); 
const accesorio = "Gaming Controller Holder One More Life"; 
console.log("Se agrega el elemento al inicio, se añade el elemento: ", productosGamers.unshift(accesorio)); 
console.log(productosGamers)
console.log("¿Es un arreglo?", Array.isArray(productosGamers)); 
//Se debe colocar la posición final + 1
console.log("Se extrae la sección 2 - 4: ", productosGamers.slice(2,5))

//Recorrido
//For 
for (let i=0 ; i<productosGamers.length ; i++){
    console.log("-", productosGamers[i]);
}

productosGamers.forEach((e,i)=>console.log(`${i}._ ${e}`))

//Map
const productosGamers02= productosGamers.map((e)=> `Nombre del Producto:  ${e}`)
console.log(productosGamers);
console.log(productosGamers02);

//Destructuración
const [producto01, producto02, producto03, producto04, producto05] = productosGamers; 
console.log("El producto 01 es: ", producto01); 
console.log("El producto 02 es: ", producto02); 
console.log("El producto 03 es: ", producto03); 
console.log("El producto 04 es: ", producto04); 
console.log("El producto 05 es: ", producto05); 


// Saltar el valor en un arreglo
const [ , producto002, , , producto005] = productosGamers;  
console.log("El producto 02 es: ", producto02); 
console.log("El producto 05 es: ", producto05); 

// Desestructurando un arreglo anidado
const modelosPinturasGamers = ["3 lienzos de colores de Fornite", "1 lienzo de Plantas vs Zombies"]; 
productosGamers.push(modelosPinturasGamers)
console.log(productosGamers)
const arregloDelArreglo = productosGamers[5]; 
const elementoArregloDelArreglo = arregloDelArreglo[0]; 
console.log(elementoArregloDelArreglo);

//Operador rest 
const [ropaMujer, ropaHombre, ...ropaUnisex] = [["Vestido plateado con cuentas", "Camiseta a rayas ajustada al cuerpo", "Jeans de cuero cafe"], 
    ["Zapatos elegantes negro", "Camiseta de Dragon Ball", "Zapatillas deportivas azules"], ["Buso blanco básico", "Buso negro con cara feliz"], 
    ["Camiseta verde básica", "Camiseta blanca con bordado negro"]]; 

console.log(ropaMujer)
console.log(ropaHombre)
console.log(ropaUnisex)

//Operador spread 
const clientesFrecuentes = ["Mireya","Mateo","Anthony","Paul","Ariel","Matias"]
const nombreDeLosProductosAdquiridos = ["Falda negra con pliegues","Forro para celular","Teclado gamer con luces led","Parlantes con luces led",
    "Jeans con bolsillos azulkes clasicos",'Manteles para vasos y platos']

const informacionCompleta = [...clientesFrecuentes,...nombreDeLosProductosAdquiridos]
console.log(informacionCompleta);