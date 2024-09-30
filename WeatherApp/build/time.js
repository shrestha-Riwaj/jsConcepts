// User Input
let countdown = document.querySelector('#countdownDisplay');

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let start = document.querySelector('#startBtn');
let pause = document.querySelector('#pauseBtn');
let reset = document.querySelector('#resetBtn');

let intervalId; 


function stopTime (){
    clearInterval(intervalId);
    countdown.innerHTML = "00:00:00"; 
    }

start.addEventListener('click', (e)=>{

    e.preventDefault();
    let userHour;
    let userMin;
    let userSec;
    if(hours.value < 0 || minutes.value < 0 || seconds.value < 0){
        alert("Please enter correct number.");
        return;
    }
    else{
        userHour =parseInt( hours.value);
        userMin = parseInt(minutes.value);
        userSec = parseInt(seconds.value);

        if (intervalId){
            clearInterval(intervalId);
        }
        // countdown.innerHTML = `${userHour}: ${userMin}: ${userSec}`;
     intervalId =   setInterval(() => {
            
            countdown.innerHTML = `${userHour.toString().padStart(2, '0')}:${userMin.toString().padStart(2, '0')}:${userSec.toString().padStart(2, '0')}`;
            userSec -= 1;
            if (userSec < 0){
                userSec = 59;
                userMin -=1;
                if(userMin<0){
                    userMin = 59;
                    userHour -=1;
                    if(userHour<0){
                        stopTime();
                    }
                }

            }
            // else if(userMin ===  0){
            //     userHour -= 1;
            //     userMin = 5;
            // }
            // else if(userHour === 0){
            //     alert('Time over')
            // }
        }, 1000);

    }

})

pause.addEventListener('click', (e)=>{

    e.preventDefault();
    clearInterval(intervalId);
});

reset.addEventListener('click', (e)=>{

    e.preventDefault();
    countdown.innerHTML = "00:00:00";
    clearInterval(intervalId);
    hours.value = '';
    minutes.value = '';
    seconds.value = '';
});