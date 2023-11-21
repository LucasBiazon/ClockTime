const btClock = document.querySelector("#btClock")
const btTimer = document.querySelector("#btTimer")
const btStopwatch = document.querySelector("#btStopwatch")

const clock = document.querySelector("#clock")
const timer = document.querySelector("#timer")
const stopwatch = document.querySelector("#stopwatch")

const horaClockTime = document.querySelector("#horaClockTime")
const minClockTime = document.querySelector("#minClockTime")
const segClockTime = document.querySelector("#segClockTime")
const clockDate = document.querySelector("#clockDate")

let mainAtual = clock
function ClickBtClock(){
    btClock.classList.remove("desativado")
    btClock.classList.add('ativado')
    btStopwatch.classList.add("desativado")
    btTimer.classList.add("desativado")

    mainAtual.classList.add("hidden")
    clock.classList.remove("hidden")
    mainAtual = clock
}

function ClickBtTimer(){
    btTimer.classList.remove("desativado")
    btTimer.classList.add("ativado")
    btClock.classList.add("desativado")
    btStopwatch.classList.add("desativado")

    mainAtual.classList.add("hidden")
    timer.classList.remove("hidden")
    mainAtual = timer
}

function ClickBtStopwatch(){
    btStopwatch.classList.remove("desativado")
    btStopwatch.classList.add("ativado")
    btClock.classList.add("desativado")
    btTimer.classList.add("desativado")

    mainAtual.classList.add("hidden")
    stopwatch.classList.remove("hidden")
    mainAtual = stopwatch
}

function ClockTime(){
    const now = new Date()
    horaClockTime.innerHTML = now.getHours().toString().padStart(2, '0')
    minClockTime.innerHTML = now.getMinutes().toString().padStart(2, '0')
    segClockTime.innerHTML = now.getSeconds().toString().padStart(2, '0')
    clockDate.innerHTML = `${now.getDate().toString().padStart(2, "0")}/${(now.getMonth() + 1).toString().padStart(2, "0")}/${now.getFullYear().toString().padStart(2, "0")}`
}const clockInteval = setInterval(ClockTime, 1000)
