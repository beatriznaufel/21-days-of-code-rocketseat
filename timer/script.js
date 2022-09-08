var sec=0
var min=0

var interval

function twoDigits(digit) {
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

function start() {
   timer()
    interval= setInterval(timer,100)

}

function pause() {
    clearInterval(interval)

}

function stop() {
    clearInterval(interval)
    sec=0
    min=0
    document.getElementById('timer').innerText='00:00'

}

function timer() {
    sec++
    if(sec==60){
        min++
        sec=0
    }
    document.getElementById('timer').innerText=twoDigits(min)+':'+twoDigits(sec)
}