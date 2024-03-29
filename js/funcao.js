$('#formulario').submit(function(){
    var nomeTutor = $('#nomeTutor');
    var erro = $('.msg.alert');
    // var result = $('.result.alert');
    // var calcular = $('#calcular')
    var campo = $('#campo-erro');
    // var resultado = $('#campo-resultado');
    var telefone = $('#tell');
    var nomePet = $('#nomePet');
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
    var itens = $('#item');
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
    var dataIni = $('#dataIni');
    var dataFim = $('#dataFim');
    var resultado = $('#resultado');

    

    erro.addClass('d-none');
    $('.is-invalid').removeClass('is-invalid');
    $('.text-danger').removeClass('text-danger');
    $('.radio').removeClass('form-control')


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

    else if(nomePet.val() == ''){
        erro.removeClass('d-none');
        campo.html('Nome do Pet');
        nomePet.focus();
        nomePet.addClass('is-invalid');
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
    // else if(resultado.val() == ''){
    //     result.removeClass('d-none');
    //     resultado.focus();
    //     resultado.addClass('is-invalid');
    //     calcular.removeClass('btn-success');
    //     calcular.addClass('btn-danger')
    //     calcular.addClass('is-invalid');
    //     return false;
    // }
    
    else{
        return true;
    }
    
});

function openPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}