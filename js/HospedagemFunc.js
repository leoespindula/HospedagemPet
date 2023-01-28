$('#dataHospedagem').submit(function(){
    var nomeTutor = $('#nomeTutor');
    var erro = $('.msg.alert');
    var nomePet = $('#nomePet');
    var dataIni = $('#dataIni');
    var dataFim = $('#dataFim');
    var campo = $('#campo-erro');
    
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

    else if(nomePet.val() == ''){
        erro.removeClass('d-none');
        campo.html('Nome do Pet');
        nomePet.focus();
        nomePet.addClass('is-invalid');
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