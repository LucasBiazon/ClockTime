
const btClock = document.querySelector("#btClock")
const btTemporizador = document.querySelector("#btTemporizador")
const btCronometro = document.querySelector("#btCronometro")

const clock = document.querySelector("#clock")
const temporizador = document.querySelector("#temporizador")
const cronometro = document.querySelector("#cronometro")

const atual = clock

btClock.addEventListener("click", () => {
    btClock.classList.remove("desativo")
    btClock.classList.add("ativo")
    btCronometro.classList.add("desativo")
    btTemporizador.classList.add("desativo")

    clock.classList.remove("disabled")
    temporizador.classList.add("disabled")
    cronometro.classList.add("disabled")

    oi = setInterval(Relogio, 1000)
})

btTemporizador.addEventListener("click", () => {
    btTemporizador.classList.remove("desativo")
    btTemporizador.classList.add("ativo")
    btClock.classList.add("desativo")
    btCronometro.classList.add("desativo")
    
    temporizador.classList.remove("disabled")
    clock.classList.add("disabled")
    cronometro.classList.add("disabled")
    
    clearInterval(oi)
  
})

btCronometro.addEventListener("click", () => {
    btCronometro.classList.remove("desativo")
    btCronometro.classList.add("ativo")
    btClock.classList.add("desativo")
    btTemporizador.classList.add("desativo")
    
    cronometro.classList.remove("disabled")
    temporizador.classList.add("disabled")
    clock.classList.add("disabled")
    clearInterval(oi)
})

const hora = document.querySelector("#ClockHora")
    const min = document.querySelector("#ClockMin")
    const seg = document.querySelector("#ClockSeg")
    const date = document.querySelector("#date")
function Relogio(){
    const horarioDate = new Date()
    const horaDate = horarioDate.getHours().toString().padStart(2, '0')
    const minDate = horarioDate.getMinutes().toString().padStart(2, '0')
    const segDate = horarioDate.getSeconds().toString().padStart(2, '0')

    
    date.textContent = `${horarioDate.getDate().toString().padStart(2, '0')}/${horarioDate.getMonth().toString().padStart(2, '0')}/${horarioDate.getFullYear().toString().padStart(2, '0')} `
    hora.textContent = horaDate
    min.textContent = minDate
    seg.textContent = segDate

    
}

oi  = setInterval(Relogio, 1000)



