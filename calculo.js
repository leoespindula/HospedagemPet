const dataFim = document.querySelector('#dataFim')
const dataIni = document.querySelector('#dataIni')
// const calcular = document.querySelector('#calcular')

function calcularQuantDia(){

    const dataInicio = new Date(document.querySelector('#dataIni').value);
    const dataFim = new Date(document.querySelector('#dataFim').value);
    let start = dataInicio
    let end = dataFim
    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOnDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.floor(diffInTime / timeInOnDay)
    return diffInDays     
}
function calcHorasExtras(){
    const dataInicio = new Date(document.querySelector('#dataIni').value);
    const dataFim = new Date(document.getElementById('dataFim').value);
    let start = dataInicio
    let end = dataFim
    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOnDay = 1000 * 60 * 60 * 24
    let diffInHour = 1000 * 60 * 60 
    let horasExtras = Math.round(diffInTime % timeInOnDay / diffInHour )
    
    return horasExtras
}
function calcularValor(){
    const dataInicio = new Date(document.querySelector('#dataIni').value); 
    var hora = dataInicio.getHours()
    let diaria = 0;
    let vlrhr = 3
    if (hora > 5 && hora < 18){
        vlrhr = 5
    }
    let vlrhrs = vlrhr * calcHorasExtras()
    if (calcularQuantDia() > 3){
        diaria = 60;
    }else if(calcularQuantDia() >=1 && calcularQuantDia()<=3){
        diaria = 70;
    }
    diaria = diaria * calcularQuantDia() + vlrhrs
    return diaria
}


// calcular.addEventListener('click', () => {
//     const diaria = calcularValor ()
//     const diffInDays = calcularQuantDia()
//     const horasExtras = calcHorasExtras()
//     document.getElementById('resultado').value = diffInDays +' diárias e '+horasExtras+' horas, R$'+diaria+',00'})

dataFim.addEventListener('change', () => {
    const diaria = calcularValor ()
    const diffInDays = calcularQuantDia()
    const horasExtras = calcHorasExtras()
    document.getElementById('resultado').value = diffInDays +' diárias e '+horasExtras+' horas, R$'+diaria+',00'})

dataIni.addEventListener('change', () => {
    const diaria = calcularValor ()
    const diffInDays = calcularQuantDia()
    const horasExtras = calcHorasExtras()
    document.getElementById('resultado').value = diffInDays +' diárias e '+horasExtras+' horas, R$'+diaria+',00'})
    

