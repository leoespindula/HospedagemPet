function carregarJs(){
    var primeiraVez = document.getElementById('sim1vez');
    if (primeiraVez.checked){
        document.getElementById('info-adcionais').hidden = false
        document.getElementById('TelefoneVeterinario').disabled = false
        document.getElementById('especie').disabled = false
        document.getElementById('raca').disabled = false
        document.getElementById('sexo').disabled = false
        document.getElementById('idade').disabled = false
        document.getElementById('tipoIdade').disabled = false
        document.getElementById('medicamentoSN').disabled = false
        document.getElementById('medicamentos').disabled = false
        document.getElementById('castrado').disabled = false
        document.getElementById('vacinado').disabled = false
        document.getElementById('vermifugado').disabled = false
        document.getElementById('prevencao').disabled = false
        document.getElementById('sociavel').disabled = false
        document.getElementById('rotina').disabled = false
        document.getElementById('nomeTutor').disabled = false
        document.getElementById('tell').disabled = false
        document.getElementById('endereco').disabled = false
        document.getElementById('email').disabled = false
    }else{
        document.getElementById('info-adcionais').hidden = true
        document.getElementById('TelefoneVeterinario').disabled = true
        document.getElementById('especie').disabled = true
        document.getElementById('raca').disabled = true
        document.getElementById('sexo').disabled = true
        document.getElementById('idade').disabled = true
        document.getElementById('tipoIdade').disabled = true
        document.getElementById('medicamentoSN').disabled = true
        document.getElementById('medicamentos').disabled = true
        document.getElementById('castrado').disabled = true
        document.getElementById('vacinado').disabled = true
        document.getElementById('vermifugado').disabled = true
        document.getElementById('prevencao').disabled = true
        document.getElementById('sociavel').disabled = true
        document.getElementById('rotina').disabled = true
        document.getElementById('nomeTutor').disabled = true
        document.getElementById('tell').disabled = true
        document.getElementById('endereco').disabled = true
        document.getElementById('email').disabled = true

    }
}