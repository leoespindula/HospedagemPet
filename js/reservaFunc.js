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
const adicionais = document.querySelector('#fralda')

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
        if (calcularQuantDia() > 3){
            vlrhrs = 60;
        }else{
            vlrhrs = 70
        }       
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
            diaria = 90;
        } 
    }
    else if (calcularQuantDia() > 3){
        
        if(portePq.checked == true){
            diaria = 60;
        diaria = diaria * calcularQuantDia() + vlrhrs
        }
        else{
            diaria = 80;
            diaria = diaria * calcularQuantDia() + vlrhrs
        } 
    }else if(calcularQuantDia() >=1 && calcularQuantDia()<=3){
        
        if(portePq.checked == true){
            diaria = 70;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
        else{
            diaria = 90;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
    }
    document.getElementById('valorFinal').value = 'R$' + diaria +',00';
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
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
    else{
        document.getElementById('resultado').value = calcularQuantDia() +' diária(s) e '+calcHorasExtras()+' hora(s), R$'+calcularValor ()+',00'
        document.getElementById('resultado').classList.remove('d-none');
        document.getElementById('result').classList.remove('d-none');
    }
}

dataIni.addEventListener('change', () => {
    atualizarCampos();
});

dataFim.addEventListener('change', () => {
    atualizarCampos();
});

   
    
function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    window.location.href = 'https://leoespindula.github.io/HospedagemPet/pagamento.html';
}

$('#formulario').submit(function(){
    var erro = $('.msg.alert');
    var nomePet = $('#nomePet');
    var dataIni = $('#dataIni');
    var dataFim = $('#dataFim');
    var campo = $('#campo-erro');
    var itens = $('#item');
    var portePq = document.getElementById('portePq');
    var porteGr = document.getElementById('porteGr');
    var porte = $('#porte');

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    $('.text-danger').removeClass('text-danger');
    $('.radio').removeClass('form-control')

    if(nomePet.val() == ''){
        erro.removeClass('d-none');
        campo.html('Nome do Pet');
        nomePet.focus();
        nomePet.addClass('is-invalid');
        return false;
    }
    else if(itens.val() == ''){
        erro.removeClass('d-none');
        campo.html('Itens Pessoais');
        itens.focus();
        itens.addClass('is-invalid');
        return false;
    }

    else if(portePq.checked == false && porteGr.checked == false){
        erro.removeClass('d-none');
        campo.html('Porte');
        porte.focus();
        porte.addClass('is-invalid form-control');
        return false;    
    }

    else if(dataIni.val() == ''){
        erro.removeClass('d-none');
        campo.html('Data de Entrada');
        dataIni.focus();
        dataIni.addClass('is-invalid');
        return false;
    }

    else if(dataFim.val() == ''){
        erro.removeClass('d-none');
        campo.html('Data de Saída');
        dataFim.focus();
        dataFim.addClass('is-invalid');
        return false;
    }
    
    else{
        return true;
    }
    
});