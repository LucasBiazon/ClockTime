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

const btPlay = document.querySelector("#btPlay")
const btStop = document.querySelector("#btStop")
const btReset = document.querySelector("#btReset")

const inputHora = document.querySelector("#inputHora")
const inputMin = document.querySelector("#inputMin")
const inputSeg = document.querySelector("#inputSeg")


function Play(){
   let hora  = parseInt(inputHora.value)
   let min = parseInt(inputMin.value)
   let seg = parseInt(inputSeg.value)


   if(isNaN(hora)){
    hora = 0
   }
   if(isNaN(min)){
    min = 0
   }
   if(isNaN(seg)){
    seg = 0
   }

    if(seg >= 60){
       let result = (seg - (seg % 60)) / 60
       seg = seg % 60
       min += result
    }
    
    if(min >= 60){
        let result = (min - (min % 60)) / 60
        min = min % 60
        hora += result
    }

    inputHora.value = hora
    inputMin.value = min
    inputSeg.value = seg

  
        reduzir = setInterval(Reduce, 1000)
    
}   


function Reduce() {
    if(inputSeg.value != 0 || inputMin.value != 0 || inputHora.value != 0 ) {
    inputSeg.value--

    if(inputSeg.value <= 0 && (inputMin.value > 0 || inputHora.value > 0)){
        inputSeg.value = 59
        inputMin.value--
        if(inputMin.value <= 0 && inputHora.value > 0){
            inputMin.value = 59
            inputHora.value--
        }  
    }
    }
  

    if(inputSeg.value == 0  && inputMin.value == 0 && inputHora.value == 0 ){
        Stop()
        const audio = new Audio('/assets/dingdong.mp3')
        audio.play()
    }

}


function Stop(){ clearInterval(reduzir) }
function Reset(){
    Stop()
    inputHora.value = ""
    inputMin.value = ""
    inputSeg.value = ""
    
}