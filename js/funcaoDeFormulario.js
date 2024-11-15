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
    }
}
function goToWhatsapp() {           
    var primeiraVez = document.getElementById('sim1vez');
    if(!primeiraVez.checked){
        var name = document.getElementById("nomePet").value;
        var dateIni = document.getElementById("dataIni").value;
        var dateFim = document.getElementById("dataFim").value;
        var itens = document.getElementById("item").value;
        var porte = document.querySelector('input[name="porte"]:checked') ? document.querySelector('input[name="porte"]:checked').value : '';
        porte = porte.charAt(0).toUpperCase() + porte.slice(1);
        var valorT = document.getElementById("valorFinal").value;

        var formattedDateIni = new Date(dateIni).toLocaleString('pt-BR');
        var formattedDateFim = new Date(dateFim).toLocaleString('pt-BR');

        var url = "https://wa.me/+5527997337516?text="
        + "Nome: " + name + "%0a"
        + "Data entrada: " + formattedDateIni + "%0a"
        + "Data saída: " + formattedDateFim + "%0a"
        + "Itens Pessoais: " + itens + "%0a"
        + "Porte: " + porte + "%0a"
        + valorT + "%0a";

        window.open(url, '_blank').focus();
    }else{
        var name = document.getElementById("nomePet").value;
        var dateIni = document.getElementById("dataIni").value;
        var dateFim = document.getElementById("dataFim").value;
        var itens = document.getElementById("item").value;
        var porte = document.querySelector('input[name="porte"]:checked') ? document.querySelector('input[name="porte"]:checked').value : '';
        porte = porte.charAt(0).toUpperCase() + porte.slice(1);
        var especie = document.getElementById("especie").value;
        var raca = document.getElementById("raca").value;
        var sexo = document.querySelector('input[name="sexo"]:checked') ? document.querySelector('input[name="sexo"]:checked').value : '';
        var idade = document.getElementById("idade").value;
        var tipoIdade = document.querySelector('input[name="idade"]:checked') ? document.querySelector('input[name="idade"]:checked').value : '';
        var medicamentos = document.querySelector('input[name="medicamentos"]:checked') ? document.querySelector('input[name="medicamentos"]:checked').value : '';
        var usaMedicamentos = document.getElementById("medicamentos")?.value ?? "";
        var castrado = document.querySelector('input[name="castrado"]:checked') ? document.querySelector('input[name="castrado"]:checked').value : '';
        var vacinado = document.querySelector('input[name="vacinado"]:checked') ? document.querySelector('input[name="vacinado"]:checked').value : '';
        var vermifugado = document.querySelector('input[name="vermifugado"]:checked') ? document.querySelector('input[name="vermifugado"]:checked').value : '';
        var prevencao = document.querySelector('input[name="Prevencao_anti_Pulgas"]:checked') ? document.querySelector('input[name="Prevencao_anti_Pulgas"]:checked').value : '';
        var sociavel = document.querySelector('input[name="sociavel"]:checked') ? document.querySelector('input[name="sociavel"]:checked').value : '';
        var rotina = document.getElementById("rotina").value;
        var valorT = document.getElementById("valorFinal").value;

        var url = "https://wa.me/+5527997988640?text="
        + "Nome: " + name + "%0a"
        + "Data entrada: " + dateIni + "%0a"
        + "Data saída: " + dateFim + "%0a"
        + "Itens Pessoais: " + itens + "%0a"
        + "Porte: " + porte + "%0a"
        + "Espécie: " + especie + "%0a"
        + "Raça: " + raca + "%0a"
        + "Sexo: " + sexo + "%0a"
        + "Idade: " + idade + " " + tipoIdade + "%0a"
        + "Faz uso de medicamentos: " + medicamentos + ". " + usaMedicamentos + "%0a"
        + "Castrado: " + castrado + "%0a"
        + "Vacinado: " + vacinado + "%0a"
        + "Vermifugado: " + vermifugado + "%0a"
        + "Prevenção contra pulgas e carrapatos: " + prevencao + "%0a"
        + "Sociável: " + sociavel + "%0a"
        + "Sexo: " + sexo + "%0a"      
        + "Rotina: " + rotina + "%0a" 
        + "%0a"                 
        + valorT + "%0a";
        window.open(url, '_blank').focus();
    }
}