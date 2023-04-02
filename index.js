// Code your solutions in this file
const names = ["Guadalupe", "Ollie", "Aki"]
let cards =[]
function writeCards(names, occasion) {
    for (let i = 0; i < names.length; i++) {
    
     cards.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`)
    }
    return cards
}

let count = 10
function countDown(count) {
    
while (count >= 0) {
    console.log(count--)
}
}