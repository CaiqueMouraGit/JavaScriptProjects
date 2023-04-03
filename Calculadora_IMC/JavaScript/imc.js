const calcular = document.getElementById('calcular');


//Acessa o valor da propriedade
//nome.value='asfa';


calcular.addEventListener('click', imc);

//Declarando um método
function imc() {
    //Capturando elementos que tem id
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(2);

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso';
        }
        else if (valorIMC < 25) {
            classificacao = 'com o peso ideal';
        }
        else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso';
        }
        else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I';
        }
        else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        }
        else {
            classificacao = 'com obesidade grau III';
        }

        resultado.textContent = `${nome} seu imc é ${valorIMC} e você está ${classificacao}`;
    }
    else {
        resultado.textContent = 'Preencha todos os campos';
    }
}