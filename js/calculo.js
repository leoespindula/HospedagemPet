function entrada(){
    const dataInicio = new Date(document.querySelector('#dataIni2').value); 
    let horarioInvalido = true;
    var hora = dataInicio.getHours()
    if (hora > 7 && hora < 20){
        horarioInvalido = false;
    }
    return horarioInvalido
}
const dataFim2 = document.querySelector('#dataFim2')
const dataIni2 = document.querySelector('#dataIni2')

function calcularQuantDia(){

    const dataInicio2 = new Date(document.querySelector('#dataIni2').value);
    const dataFim2 = new Date(document.querySelector('#dataFim2').value);
    let start = dataInicio2
    let end = dataFim2
    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOnDay = 1000 * 60 * 60 * 24
    let diffInDays = Math.floor(diffInTime / timeInOnDay)
    return diffInDays     
}
function calcHorasExtras(){
    const dataInicio2 = new Date(document.querySelector('#dataIni2').value);
    const dataFim2 = new Date(document.getElementById('dataFim2').value);
    let start = dataInicio2
    let end = dataFim2
    start = new Date(start)
    end = new Date(end)

    let diffInTime = Math.abs(end - start)
    let timeInOnDay = 1000 * 60 * 60 * 24
    let diffInHour = 1000 * 60 * 60 
    let horasExtras = Math.round(diffInTime % timeInOnDay / diffInHour )
    
    return horasExtras
}
function calcularValor(){
    const dataInicio2 = new Date(document.querySelector('#dataIni2').value); 
    var hora = dataInicio2.getHours()
    let diaria = 0;
    let vlrhr = 3
    var portePq = document.getElementById('portePq2');
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
            diaria = 80;
            diaria = diaria * calcularQuantDia() + vlrhrs
        }
    }
    document.getElementById('valorFinal2').value = 'R$' + diaria +',00';
    document.getElementById('urlVar2').value = 'https://leoespindula.github.io/HospedagemPet/pagamento.html?valor=' + diaria;
    return diaria
}


function atualizarCampos() {
    document.getElementById('dataInvalida2').classList.add('d-none');
    document.getElementById('valid2').classList.add('d-none');
    document.getElementById('resultado2').classList.add('d-none');
    document.getElementById('result2').classList.add('d-none');
    $('.is-invalid').removeClass('is-invalid');
    document.getElementById('submit2').disabled = false;
    document.getElementById('submit2').classList.remove('btn-danger')
    document.getElementById('submit2').classList.add('btn-primary')
    
    if(entrada()){
        document.getElementById('dataInvalida2').value = 'Entrada permitida das 08:00h as 20:00h'
        document.getElementById('dataInvalida2').classList.add('is-invalid');
        document.getElementById('dataIni2').classList.add('is-invalid');
        document.getElementById('dataInvalida2').classList.remove('d-none');
        document.getElementById('valid2').classList.remove('d-none');
        document.getElementById('submit').disabled = true;
        document.getElementById('submit').classList.add('btn-danger')
        document.getElementById('submit').classList.remove('btn-primary')
    }
    else if(calcularQuantDia() < 1){
        document.getElementById('resultado2').value = 'Valor fixo, R$'+calcularValor ()+',00';
        document.getElementById('resultado2').classList.remove('d-none');
        document.getElementById('result2').classList.remove('d-none');
    }
    else{
        document.getElementById('resultado2').value = calcularQuantDia() +' diária(s) e '+calcHorasExtras()+' hora(s), R$'+calcularValor ()+',00'
        document.getElementById('resultado2').classList.remove('d-none');
        document.getElementById('result2').classList.remove('d-none');
    }
}

dataIni.addEventListener('change', () => {
    atualizarCampos();
});

dataFim.addEventListener('change', () => {
    atualizarCampos();
});


var dateEntrada = document.getElementById('dataIni2');
        var dateSaida = document.getElementById('dataFim2');
        var FeriadoOn = new Date('2024-01-13');
        var FeriadoOff = new Date('2024-01-22');

        dateEntrada.addEventListener('input', function() {
        var selectedDate = new Date(this.value);
        if (selectedDate >= FeriadoOn && selectedDate <= FeriadoOff) {
            this.value = '';
            alert('Estamos de recesso do dia 13/01 a 22/01. Gratos pela compreensão!');
        }
        });

        dateSaida.addEventListener('input', function() {
        var selectedDate = new Date(this.value);
        if (selectedDate >= FeriadoOn && selectedDate <= FeriadoOff) {
            this.value = '';
            alert('Estamos de recesso do dia 13/01 a 22/01. Gratos pela compreensão!');
        }
        });