function entrada(){
    const dataInicio = new Date(document.querySelector('#dataIni').value); 
    let horarioInvalido = true;
    var hora = dataInicio.getHours()
    if (hora > 7 && hora < 20){
        horarioInvalido = false;
    }
    return horarioInvalido
}
const dataFim = document.querySelector('#dataFim')
const dataIni = document.querySelector('#dataIni')

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

    if (calcularQuantDia() == 0 && calcHorasExtras() <= 10){
        diaria = 50
    }
    else if (calcularQuantDia() == 0 && calcHorasExtras() > 10){
        diaria = 70
    }
    else if (calcularQuantDia() > 3){
        diaria = 60;
        diaria = diaria * calcularQuantDia() + vlrhrs
    }else if(calcularQuantDia() >=1 && calcularQuantDia()<=3){
        diaria = 70;
        diaria = diaria * calcularQuantDia() + vlrhrs
    }
        // diaria = diaria * calcularQuantDia() + vlrhrs
    return diaria
}

dataFim.addEventListener('change', () => {
    const horaInvalida = entrada()
    const diaria = calcularValor ()
    const diffInDays = calcularQuantDia()
    const horasExtras = calcHorasExtras()
    document.getElementById('dataInvalida').classList.add('d-none');
    document.getElementById('valid').classList.add('d-none');
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
    if(horaInvalida){
        document.getElementById('dataInvalida').value = 'Entrada permitida das 08:00h as 20:00h'
        document.getElementById('dataInvalida').classList.add('is-invalid');
        document.getElementById('dataIni').classList.add('is-invalid');
        document.getElementById('dataInvalida').classList.remove('d-none');
        document.getElementById('valid').classList.remove('d-none');
    }
    else if(diffInDays < 1){
        document.getElementById('resultado').value = 'Valor fixo, R$'+diaria+',00'
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
    else{
        document.getElementById('resultado').value = diffInDays +' diária(s) e '+horasExtras+' hora(s), R$'+diaria+',00'
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
})

dataIni.addEventListener('change', () => {
    const horaInvalida = entrada()
    const diaria = calcularValor ()
    const diffInDays = calcularQuantDia()
    const horasExtras = calcHorasExtras()
    document.getElementById('dataInvalida').classList.add('d-none');
    document.getElementById('valid').classList.add('d-none');
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');
    $('.is-invalid').removeClass('is-invalid');
    
    if(horaInvalida){
        document.getElementById('dataInvalida').value = 'Entrada permitida das 08:00h as 20:00h'
        document.getElementById('dataInvalida').classList.add('is-invalid');
        document.getElementById('dataIni').classList.add('is-invalid');
        document.getElementById('dataInvalida').classList.remove('d-none');
        document.getElementById('valid').classList.remove('d-none');
    }
    else if(diffInDays < 1){
        document.getElementById('resultado').value = 'Valor fixo, R$'+diaria+',00'
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
    else{
        document.getElementById('resultado').value = diffInDays +' diária(s) e '+horasExtras+' hora(s), R$'+diaria+',00'
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
    

})
    
    

