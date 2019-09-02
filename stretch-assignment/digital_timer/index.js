let counter = 0;
// document.querySelector("#msTens").textContent = counter;
// setInterval(function(){document.querySelector("#msTens").textContent = counter += 1}, 100);

function startTimer(){
    let msTenCounter = 0;
    let msHundredsCounter = 0;
    let secondCounter = 0;
    let tenSecondCounter = 0;
    setInterval(function(){
        let addition = msTenCounter += 1
        document.querySelector("#msTens").textContent = addition;
        if(msTenCounter === 9){
            msTenCounter = 0;
        }
    }, 10);
    setInterval(function(){
        document.querySelector("#msHundreds").textContent = msHundredsCounter += 1;
        if(msHundredsCounter === 9){
            msHundredsCounter = 0;
        }
    }, 100);
    setInterval(function(){
        document.querySelector("#secondOnes").textContent = secondCounter += 1;
        if(secondCounter === 9){
            secondCounter = 0;
        }
    }, 1000);
    document.querySelector("#secondTens").textContent = secondCounter;
}
startTimer();