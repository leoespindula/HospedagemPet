
const calcular = document.querySelector('#calcular')

function calcularQuantDia(){

    const dataInicio = new Date(document.querySelector('#dataIni').value);
    const dataFim = new Date(document.querySelector('#dataFim').value);
    let start = dataInicio
    let end = dataFim
    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOnDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.ceil(diffInTime / timeInOnDay)
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
    let diaria = 70;
    let vlrhr = 5 * calcHorasExtras()
    if (calcularQuantDia() > 3){
        diaria = 60;
    }
    diaria = diaria * calcularQuantDia() + vlrhr
    return diaria
}


calcular.addEventListener('click', () => {
    const diaria = calcularValor ()
    const diffInDays = calcularQuantDia()
    const horasExtras = calcHorasExtras()
    document.getElementById('resultado').value = diffInDays +' diárias e '+horasExtras+' horas, R$'+diaria+',00'})

