function entrada(){
    const dataInicio = new Date(document.querySelector('#dataIni').value); 
    let horarioInvalido = true;
    var hora = dataInicio.getHours()
    
    if(dataInicio.toString().includes('Sun') || dataInicio.toString().includes('Sat')){
            
        if(hora >= 9 && hora < 12 || hora >= 15 && hora < 18){
            horarioInvalido = false;
        }else{
            alert('Horário de entrada e saída das 09:00h até as 12:00h e das 15:00h as 18:00h aos Sábados e Domingos')
            document.querySelector('#dataIni').value = '';
        }
    }
    else{
        if (hora >= 8 && hora < 12 || hora >= 14 && hora < 18){
        horarioInvalido = false;
        }else{
            alert('Horário de entrada e saída das 08:00h até as 12:00h e das 14:00h as 18:00h')
            document.querySelector('#dataIni').value = '';
        }
    }
    
    return horarioInvalido
}
function saida(){
    const dataFim = new Date(document.querySelector('#dataFim').value); 
    const dataInicio = new Date(document.querySelector('#dataIni').value); 
    let horarioInvalido = true;
    var hora = dataFim.getHours()
    
    if(dataFim.toString().includes('Sun') || dataFim.toString().includes('Sat')){
        if(hora >= 9 && hora < 12 || hora >= 15 && hora < 18){
            horarioInvalido = false;
        }else{
            alert('Horário de entrada e saída das 08:00h até as 12:00h e das 14:00h as 18:00h')
            document.querySelector('#dataFim').value = '';
        }
    }
    else if(dataFim <= dataInicio){
        horarioInvalido = true
    }
    else {
        if (hora >= 8 && hora < 12 || hora >= 14 && hora < 18){
            horarioInvalido = false;
        }else{
            alert('Horário de entrada e saída das 08:00h até as 12:00h e das 14:00h as 18:00h')
            document.querySelector('#dataFim').value = '';
        }
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
    // var porteM = document.getElementById('porteM');
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
        // else if(porteM.checked == true){
        //     diaria = 70;
        // } 
        else{
            diaria = 80;
        }
    }
    else if (calcularQuantDia() == 0 && calcHorasExtras() > 10){
        if(portePq.checked == true){
            diaria = 70;
        }
        
        // if(porteM.checked == true){
        //     diaria = 80;
        // }
        else{
            diaria = 90;
        } 
    }
    else if(calcularQuantDia() >=1){
        
        if(portePq.checked == true){
            diaria = 70;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
        // if(porteM.checked == true){
        //     diaria = 80;
        //     diaria = diaria * calcularQuantDia() + vlrhrs
        // }
        else{
            diaria = 90;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
    }
    document.getElementById('valorFinal').value = 'R$' + diaria +',00';
    // document.getElementById('urlVar').value = 'https://leoespindula.github.io/HospedagemPet/pagamento.html?valor=' + diaria;
    // alert(document.getElementById('urlVar').value)
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
        const dataInicio = new Date(document.querySelector('#dataIni').value); 
        if(dataInicio.toString().includes('Sun') || dataInicio.toString().includes('Sat')){
            document.getElementById('dataInvalida').value = 'Entrada permitida das 09:00h as 18:00h'
            
        }else{
            document.getElementById('dataInvalida').value = 'Entrada permitida das 08:00h as 20:00h'
        }
        
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

function atualizarCamposFim() {
    document.getElementById('dataInvalida').classList.add('d-none');
    document.getElementById('valid').classList.add('d-none');
    document.getElementById('resultado').classList.add('d-none');
    document.getElementById('result').classList.add('d-none');
    $('.is-invalid').removeClass('is-invalid');
    document.getElementById('submit').disabled = false;
    document.getElementById('submit').classList.remove('btn-danger')
    document.getElementById('submit').classList.add('btn-primary')
    
    if(saida()){
        const dataFim = new Date(document.querySelector('#dataFim').value); 
        const dataInicio = new Date(document.querySelector('#dataIni').value); 
        if(dataFim.toString().includes('Sun') || dataFim.toString().includes('Sat')){
            document.getElementById('dataInvalida').value = 'Entrada permitida das 09:00h as 18:00h'
        }
        else if(dataFim <= dataInicio){
            document.getElementById('dataInvalida').value = 'A saída deve ser maior que a entrada'
            document.getElementById('dataInvalida').classList.add('is-invalid');
            document.getElementById('dataFim').classList.add('is-invalid');
            document.getElementById('dataInvalida').classList.remove('d-none');
            document.getElementById('valid').classList.remove('d-none');
            document.getElementById('submit').disabled = true;
            document.getElementById('submit').classList.add('btn-danger')
            document.getElementById('submit').classList.remove('btn-primary')
        }
        else{
            document.getElementById('dataInvalida').value = 'Entrada permitida das 08:00h as 20:00h'
        }
        
        document.getElementById('dataInvalida').classList.add('is-invalid');
        document.getElementById('dataFim').classList.add('is-invalid');
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
    atualizarCamposFim();
});


$('#formulario').submit(function(){
    var erro = $('.msg.alert');
    var nomePet = $('#nomePet');
    var dataIni = $('#dataIni');
    var dataFim = $('#dataFim');
    var campo = $('#campo-erro');
    var itens = $('#item');
    var portePq = document.getElementById('portePq');
    // var porteM = document.getElementById('porteM');
    var porteGr = document.getElementById('porteGr');
    var porte = $('#porte');
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
    if(!itenAdicionais){
        if(especie.val() == ''){
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
        else{
            goToWhatsapp();
            return true;
        } 
    }
    
    else{
        goToWhatsapp();
        return true;
    } 
});

// Função de desativar datas disponíveis
var dateEntrada = document.getElementById('dataIni');
var dateSaida = document.getElementById('dataFim');
var Feriado_1_inicio = new Date('2024-12-24T00:00:00.000');
var Feriado_1_fim = new Date('2024-12-26T23:59:59.999');
var Feriado_2_inicio = new Date('2024-12-24T00:00:00.000');
var Feriado_2_fim = new Date('2024-12-26T23:59:59.999');

dateEntrada.addEventListener('input', function() {
    var selectedDate = new Date(this.value);
    // alert(selectedDate)
    // console.log(selectedDate, Feriado_1_inicio, Feriado_1_fim)
    var dataIniValue = new Date(dateEntrada.value);
    var dataFimValue = new Date(dateSaida.value);
    if ((selectedDate >= Feriado_1_inicio && selectedDate <= Feriado_1_fim) ||
        (selectedDate >= Feriado_2_inicio && selectedDate <= Feriado_2_fim)) {
        this.value = '';
        alert('Não funcionaremos no período de 24/12 a 26/12. Gratos pela compreensão!');
        
    }
    if((dataIniValue <= Feriado_1_inicio && dataFimValue >= Feriado_1_fim) || (dataIniValue <= Feriado_2_inicio && dataFimValue >= Feriado_2_fim)){
        alert('Não funcionaremos no período de 24/12 a 26/12. Gratos pela compreensão!');
        this.value = '';
    }
    });

    dateSaida.addEventListener('input', function() {
    var selectedDate = new Date(this.value);
    var dataIniValue = new Date(dateEntrada.value);
    var dataFimValue = new Date(dateSaida.value);
    if ((selectedDate >= Feriado_1_inicio && selectedDate <= Feriado_1_fim) ||
        (selectedDate >= Feriado_2_inicio && selectedDate <= Feriado_2_fim)) {
        this.value = '';
      
        alert('Não funcionaremos no período de 24/12 a 26/12. Gratos pela compreensão!');
        
    }
    if((dataIniValue <= Feriado_1_inicio && dataFimValue >= Feriado_1_fim) || (dataIniValue <= Feriado_2_inicio && dataFimValue >= Feriado_2_fim)){
        alert('Não funcionaremos no período de 24/12 a 26/12. Gratos pela compreensão!');
        this.value = '';
    }
});

