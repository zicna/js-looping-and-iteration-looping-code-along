// Code your solutions in this file
function writeCards(arrayOfNames, eventName){
    let newArray = []
    for(let i = 0; i < arrayOfNames.length; i++){
        newArray[i] = `Thank you, ${arrayOfNames[i]}, for the wonderful ${eventName} gift!`
    }
    return newArray
}
writeCards(["Ada", "Brendan", "Ali"], "birthday")

function countDown(number) {
    while(number >= 0){
        console.log(number)
        number--
    }
}