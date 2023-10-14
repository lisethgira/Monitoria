// Una empresa que fabrica luces de Navidad nos ha pedido que le echemos una mano.

// Tienen unas tiras led que son como un Array. Cada posición es un led y puede ser estar encendido (1) o apagado (0).

// Cada 7 segundos, los leds cambian de estado de esta forma:

// Si el led está apagado, se enciende si el led de su izquierda (index - 1) estaba encendido antes.
// Si el led está encendido, se mantiene siempre encendido.
// Nos han pedido un programa que nos diga cuantos segundos deben pasar hasta que todos los leds están encendidos. Los segundos se expresan en un número entero. 

let leds 
let seg = 0
let bool = true

function countTime(leds) {
    console.log(leds)
    while (leds.includes(0)) {
        for (let i = 0; i < leds.length; i++) {
            if(leds[i] == 0){
                if (bool == true ){
                    if (leds[leds.length-1] == 1){
                    leds[0] = 1
                    seg = seg + 7
                    console.log(leds)
                    console.log("ultimo " + seg)
                    bool = false
                    i = i + 1
                    }
                }
                if(i>0){
                    if (leds[i-1] == 1 && leds[i] == 0) {
                    leds[i] = 1
                    seg = seg + 7
                    console.log(leds)
                    console.log(seg)
                    } 
                }
            }
        }
    }
}

countTime([0, 0, 1, 0, 0])
console.log(`Se tardó ${seg} en ejecutarse`)

// Tienes una caja de regalos de Navidad que Santa Claus quiere entregar a los niños. Cada regalo está representado por una cadena. Santa Claus tiene un trineo que puede llevar un peso limitado, y cada regalo dentro de la caja tiene un peso que es igual al número de letras en el nombre del regalo.

// Santa Claus también tiene una lista de renos que pueden ayudarlo a entregar los regalos. Cada reno tiene un límite de peso máximo que puede llevar. El límite de peso máximo de cada reno es igual a dos veces el número de letras en su nombre.

// Tu tarea es implementar una función distributeGifts(packOfGifts, reindeers) que recibe una caja de regalos y una lista de renos y devuelve el número máximo de cajas de estos regalos que Santa Claus puede entregar a los niños. Las cajas de regalos no se pueden dividir.

// const packOfGifts = ["book", "doll", "ball"]
// const reindeers = ["dasher", "dancer"]

// // el pack de regalos pesa 4 + 4 + 4 = 12
// // los renos pueden llevar (2 * 6) + (2 * 6) = 24
// // por lo tanto, Santa Claus puede entregar 2 cajas de regalos

// distributeGifts(packOfGifts, reindeers) // 2
// Cosas a tener en cuenta:

// Las cajas de regalos no se pueden dividir.
// Los nombres de los regalos y los renos siempre serán mayores que 0.

const packOfGifts = ["book", "doll", "ball", "computer", "phone"]
const reindeers = ["dasher", "dancer"]
let reindeersWeight = 0
let maxWeight 
let giftsWeigth = 0
let giftAmount

function distributeGifts(packOfGifts, reindeers) {
    for (let i = 0; i < reindeers.length; i++) {
        reindeersWeight = reindeersWeight + (reindeers[i].length)
    }
    maxWeight = 2 * reindeersWeight
    for (let i = 0; i < packOfGifts.length; i++) {
        giftsWeigth = giftsWeigth + (packOfGifts[i].length)
    }
    console.log("El peso de esta caja de regalos es de " + giftsWeigth)
    console.log("El peso máximo que pueden llevar estos dos renos es de " + maxWeight)
    giftAmount = Math.floor(maxWeight / giftsWeigth)
    console.log("Estos renos pueden llevar " + giftAmount + " cajas de regalos")

}

distributeGifts(packOfGifts, reindeers)