let counter = 0;
// document.querySelector("#msTens").textContent = counter;
// setInterval(function(){document.querySelector("#msTens").textContent = counter += 1}, 100);

function startTimer(){
    let msTenCounter = 1;
    let msHundredsCounter = 1;
    let secondCounter = 1;
    setInterval(function(){
        if(msTenCounter > 9){
            msTenCounter = 0;
        }
        document.querySelector("#msTens").textContent = msTenCounter;
        msTenCounter += 1
    }, 10);
    setInterval(function(){
        if(msHundredsCounter > 9){
            msHundredsCounter = 0;
        }
        document.querySelector("#msHundreds").textContent = msHundredsCounter;
        msHundredsCounter += 1
    }, 100);
    setInterval(function(){
        if(secondCounter > 9){
            secondCounter = 0;
        }
        document.querySelector("#secondOnes").textContent = secondCounter;
        secondCounter += 1
    }, 1000);
    document.querySelector("#secondTens").textContent = 0;
}
startTimer();