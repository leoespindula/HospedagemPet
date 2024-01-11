const dataFim = document.querySelector('#dataFim')
const dataIni = document.querySelector('#dataIni')
const adicionais = document.querySelector('#fralda')

function entrada(){
    const dataInicio = new Date(document.querySelector('#dataIni').value); 
    let horarioValido = true;
    var hora = dataInicio.getHours()
    // if (hora > 7 && hora < 20){
    //     horarioValido = false;
    // }
    horarioValido = false;
    return horarioValido
}

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
    var portePq = document.getElementById('portePq');
    if (hora > 5 && hora < 18){
        vlrhr = 5
    }
   
    let vlrhrs = 0
    
    if(calcHorasExtras() > 12){
        vlrhrs = 70      
    }
    else{
        vlrhrs = vlrhr * calcHorasExtras()
    }

    if (calcularQuantDia() == 0 && calcHorasExtras() <= 10){
        if(portePq.checked == true){
            diaria = 50;
        }
        else{
            diaria = 70;
        } 
    }
    else if (calcularQuantDia() == 0 && calcHorasExtras() > 10){
        if(portePq.checked == true){
            diaria = 70;
        }
        else{
            diaria = 80;
        } 
    }
    else if(calcularQuantDia() >=1){
        if(portePq.checked == true){
            diaria = 70;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
        else{
            diaria = 80;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
    }
    return diaria
}


function atualizarCampos() {
    document.getElementById('dataInvalida').classList.add('d-none');
    document.getElementById('valid').classList.add('d-none');
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');
    $('.is-invalid').removeClass('is-invalid');
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').classList.remove('btn-danger')
    document.getElementById('submit').classList.add('btn-primary')
    
    if(entrada()){
        document.getElementById('dataInvalida').value = 'Entrada permitida das 08:00h as 20:00h'
        document.getElementById('dataInvalida').classList.add('is-invalid');
        document.getElementById('dataIni').classList.add('is-invalid');
        document.getElementById('dataInvalida').classList.remove('d-none');
        document.getElementById('valid').classList.remove('d-none');
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').classList.add('btn-danger')
        document.getElementById('submit').classList.remove('btn-primary')
    }
    else if(calcularQuantDia() < 1){
        document.getElementById('resultado').value = 'Valor fixo, R$'+calcularValor ()+',00';
        document.getElementById('resultadoFralda').value = 'Quantidade '+(calcQuantFralda()/3)+ ',  R$'+calcQuantFralda()+',00';
        document.getElementById('total').value = 'Valor Total: R$'+(calcularValor () + calcQuantFralda()) +',00';
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('resultadoFralda').classList.remove('d-none');
        document.getElementById('resultF').classList.remove('d-none');
        document.getElementById('total').classList.remove('d-none');
        document.getElementById('resultTotal').classList.remove('d-none');
    }
    else{
        document.getElementById('resultado').value = calcularQuantDia() +' diária(s) e '+calcHorasExtras()+' hora(s), R$'+calcularValor ()+',00'
        document.getElementById('resultadoFralda').value = 'Quantidade '+(calcQuantFralda()/3)+ ',  R$'+calcQuantFralda()+',00';
        document.getElementById('total').value = 'Valor Total: R$'+(calcularValor () + calcQuantFralda() )+',00';
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
        document.getElementById('resultadoFralda').classList.remove('d-none');
        document.getElementById('resultF').classList.remove('d-none');
        document.getElementById('total').classList.remove('d-none');
        document.getElementById('resultTotal').classList.remove('d-none');
    }
}

dataIni.addEventListener('change', () => {
    atualizarCampos();
});

dataFim.addEventListener('change', () => {
    atualizarCampos();
});

adicionais.addEventListener('change', () => {
    atualizarCampos();
});

function goToWhatsapp() {
    var name = document.getElementById("nomePet").value;
    var dateIni = document.getElementById("dataIni").value;
    var dateFim = document.getElementById("dataFim").value;
    var valorD = document.getElementById("resultado").value;
    var valorF = document.getElementById("resultadoFralda").value;
    var valorT = document.getElementById("total").value;

    var url = "https://wa.me/?text="
    + "Nome: " + name + "%0a"
    + "Data entrada: " + dateIni + "%0a"
    + "Data saída: " + dateFim + "%0a"
    + "Diárias e valor: " + valorD + "%0a"
    + "Fralda/Tapete higiênico: " + valorF + "%0a"
    + valorT + "%0a";

    window.open(url, '_blank').focus();
}

function calcQuantFralda(){
    const qntFralda = document.getElementById('fralda').value;
    const valor = 3

    let totalFraldas = (qntFralda * valor)
    
    return totalFraldas
}