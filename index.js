// Code your solutions in this file
//for (let age = 30; age < 40; age++) {
//    console.log(`I'm ${age} years old. Happy birthday to me!`);
//    debugger;
//  }
const message = []
function writeCards(myArr,event){
    for(let count=0;count<myArr.length;count++){
        message.push(`Thank you, ${myArr[count]}, for the wonderful ${event} gift!`)
    }
    return message

}
function countDown(number){
    while(number>=0){
        console.log(number)
        number-=1
    }
}