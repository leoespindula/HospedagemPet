$('#formulario2').submit(function(){
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
    
    else{
        return true;
    }
    
});