function fizzBuzzGame() {
    for (i = 1; i <= 100; i++) {
        isFizzOrBuzz(i);
    }
};

function isFizzOrBuzz(i){
    let fizzBuzz = isFizzBuzz(i);
    let fizz = isFizz(i);
    let buzz = isBuzz(i);
    if (fizzBuzz === true){
        console.log("FizzBuzz");
    }else if(fizz === true){
        console.log("Fizz");
    }else if(buzz === true){
        console.log("Buzz");
    }else{
        console.log(i);
    };
};
function isFizz(i) {
    
    let number = i.toString();
        number = number.includes("3")
    if (i % 3 === 0 || number === true) {
        return true
    } 
};

function isBuzz(i) {
    let number = i.toString();
    number = number.includes("5");
    if (i % 5 === 0 || number === true) {
        return true
    } 
};

function isFizzBuzz(i) {
   let fizzTrue = isFizz(i) === true 
   let buzzTrue = isBuzz(i) === true
    if (fizzTrue && buzzTrue){
        return true
    }else{
        return false
    }
};




fizzBuzzGame();