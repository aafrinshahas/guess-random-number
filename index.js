function guess_num(){
    var getUserInput = prompt('Guess the number between 1 ans 10');
    var randomNumber = Math.floor(Math.random()*10)+1;
    if(getUserInput == randomNumber){
        alert(`Your guess is correct and the generated random number is ${randomNumber}`);
    }
    else if(getUserInput < randomNumber){
        alert(`Too Low and the generated random number is ${randomNumber}`)
    }
    else{
        alert(`Too high and the generated random number is ${randomNumber}`)
    }
}
