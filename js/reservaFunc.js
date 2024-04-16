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
    // else if (calcularQuantDia() > 3){
        
    //     if(portePq.checked == true){
    //         diaria = 70;
    //     diaria = diaria * calcularQuantDia() + vlrhrs
    //     }
    //     else{
    //         diaria = 80;
    //         diaria = diaria * calcularQuantDia() + vlrhrs
    //     } 
// }
    else if(calcularQuantDia() >=1 && calcularQuantDia()<=3){
        
        if(portePq.checked == true){
            diaria = 70;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
        else{
            diaria = 80;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
    }
    document.getElementById('valorFinal').value = 'R$' + diaria +',00';
    document.getElementById('urlVar').value = 'https://leoespindula.github.io/HospedagemPet/pagamento.html?valor=' + diaria;
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


$('#formulario').submit(function(){
    var erro = $('.msg.alert');
    var nomePet = $('#nomePet');
    var dataIni = $('#dataIni');
    var dataFim = $('#dataFim');
    var campo = $('#campo-erro');
    var itens = $('#item');
    var portePq = document.getElementById('portePq');
    var porteM = document.getElementById('porteM');
    var porte = $('#porte');
    var nomeTutor = $('#nomeTutor');
    var telefone = $('#tell');
    var especie = $('#especie');
    var raca = $('#raca');
    var macho = document.getElementById("macho");
    var femea = document.getElementById("femea");
    var sexo = $('#sexo');
    var idade = $('#idade');
    var anos = document.getElementById("anos");
    var meses = document.getElementById("meses");
    var tipoIdade = $('#tipoIdade');
    var contVet = $('#TelefoneVeterinario');
    var usaMedicamento = document.getElementById("fazUso");
    var nUsaMedicamento = document.getElementById("naoUsa");
    var medicamentoSN = $('#medicamentoSN');
    var medicamentos = $('#medicamentos');
    var sCastrado = document.getElementById("sCastrado");
    var nCastrado = document.getElementById("nCastrado");
    var castrado = $('#castrado');
    var sVacinado = document.getElementById("sVacinado");
    var nVacinado = document.getElementById("nVacinado");
    var vacinado = $('#vacinado');
    var sVermifugado = document.getElementById("sVermifugado");
    var nVermifugado = document.getElementById("nVermifugado");
    var vermifugado = $('#vermifugado')
    var sPrevinido = document.getElementById("sPrevinido");
    var nPrevinido = document.getElementById("nPrevinido");
    var prevencao = $('#prevencao')
    var sSociavel = document.getElementById("sSociavel");
    var nSociavel = document.getElementById("nSociavel");
    var sociavel = $('#sociavel');
    var itenAdicionais = document.getElementById('info-adcionais').hidden;

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

    else if(portePq.checked == false && porteM.checked == false){
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
    if(!itenAdicionais){
        if(nomeTutor.val() == ''){
            erro.removeClass('d-none');
            campo.html('Nome do Tutor');
            nomeTutor.focus();
            nomeTutor.addClass('is-invalid');
            return false;
        } 
    
        else if(telefone.val() == ''){
            erro.removeClass('d-none');
            campo.html('Telefone');
            telefone.focus();
            telefone.addClass('is-invalid');
            return false;
        }
    
        else if(especie.val() == ''){
            erro.removeClass('d-none');
            campo.html('Espécie');
            especie.focus();
            especie.addClass('is-invalid');
            return false;
        }
    
        else if(raca.val() == ''){
            erro.removeClass('d-none');
            campo.html('Raça');
            raca.focus();
            raca.addClass('is-invalid');
            return false;
        }
    
        else if(macho.checked == false && femea.checked == false){
            erro.removeClass('d-none');
            campo.html('Sexo');
            sexo.focus();
            sexo.addClass('is-invalid form-control');
            return false;
            
        }
    
        else if(idade.val() == '' || anos.checked == false && meses.checked == false){
            erro.removeClass('d-none');
            campo.html('Idade');
            idade.focus();
            idade.addClass('is-invalid');
            tipoIdade.addClass('form-control is-invalid');
            return false;
        }
    
    
        else if(contVet.val() == ''){
            erro.removeClass('d-none');
            campo.html('Contato do Veterinário');
            contVet.focus();
            contVet.addClass('is-invalid');
            return false;
        }
    
        else if(itens.val() == ''){
            erro.removeClass('d-none');
            campo.html('Itens Pessoais');
            itens.focus();
            itens.addClass('is-invalid');
            return false;
        }
        
        else if(usaMedicamento.checked == false && nUsaMedicamento.checked == false){
            erro.removeClass('d-none');
            campo.html('Faz uso de medicamentos');
            medicamentoSN.focus();
            medicamentoSN.addClass('form-control is-invalid');
            return false;
        }
    
        else if(usaMedicamento.checked == true && medicamentos.val() == ''){
            erro.removeClass('d-none');
            campo.html('Medicamentos');
            medicamentos.focus();
            medicamentos.addClass('is-invalid');
            return false;
        }
    
        else if(sCastrado.checked == false && nCastrado.checked == false){
            erro.removeClass('d-none');
            campo.html('Castrado');
            castrado.focus();
            castrado.addClass('is-invalid form-control');
            return false;
        }
    
        else if(sVacinado.checked == false && nVacinado.checked == false){
            erro.removeClass('d-none');
            campo.html('Vacinado');
            vacinado.focus();
            vacinado.addClass('is-invalid form-control');
            return false;
        }
    
        else if(sVermifugado.checked == false && nVermifugado.checked == false){
            erro.removeClass('d-none');
            campo.html('Vermifugado');
            vermifugado.focus();
            vermifugado.addClass('is-invalid form-control');
            return false;
        }
    
        else if(sPrevinido.checked == false && nPrevinido.checked == false){
            erro.removeClass('d-none')
            campo.html('Prevenção contra pulgas e carrapatos');
            prevencao.focus();
            prevencao.addClass('is-invalid form-control');
            return false;
        }
    
        else if(sSociavel.checked == false && nSociavel.checked == false){
            erro.removeClass('d-none')
            campo.html('Prevenção contra pulgas e carrapatos');
            sociavel.focus();
            sociavel.addClass('is-invalid form-control');
            return false;
        }
    }
    
    else{
        return true;
    }
    
});

var dateEntrada = document.getElementById('dataIni');
var dateSaida = document.getElementById('dataFim');
var FeriadoOn = new Date('2024-04-01');
var FeriadoOff = new Date('2024-04-02');

dateEntrada.addEventListener('input', function() {
var selectedDate = new Date(this.value);
// alert(FeriadoOn)
// alert(selectedDate)
if (selectedDate >= FeriadoOn && selectedDate <= FeriadoOff) {
    this.value = '';
    alert('Estamos de recesso no dia 31/03 (Páscoa). Gratos pela compreensão!');
}
});

dateSaida.addEventListener('input', function() {
var selectedDate = new Date(this.value);
if (selectedDate >= FeriadoOn && selectedDate <= FeriadoOff) {
    this.value = '';
    alert('Estamos de recesso no dia 31/03 (Páscoa). Gratos pela compreensão!');
}
});