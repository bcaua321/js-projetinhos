const form = document.getElementById('validar');
const cpf = document.getElementById('cpf');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valorCpf = cpf.value;
  let cpfNovo = retiraSimbolos(valorCpf);
  cor(primeiroDigito(cpfNovo), segundoDigito(cpfNovo));
});

function retiraSimbolos(cpf){
  // /\D+/g -> expressão regular que retira todas as letras de uma string
  let cpfLimpo = cpf.replace(/\D+/g, '');
  let array = Array.from(cpfLimpo);
  return array;
}

function primeiroDigito(array){
  let j = 10, acc = 0, resultado;

  for (let i = 0; i < array.length - 2; i++) {
    acc += array[Number(i)]*j;
    j--;
  }
  resultado = 11 - (acc % 11);

  if(resultado == array[9]){
    return true;
  }
  return false;
}

function segundoDigito(array){
  let j = 11, acc = 0, resultado;

  for (let i = 0; i < array.length - 1; i++) {
    acc += array[Number(i)]*j;
    j--;
  }
  resultado = 11 - (acc % 11);

  if(resultado == array[10]){
    return true;
  } 
  return false;
}

function cor(primeiro, segundo){
  let cpf = document.getElementById('cpf');
  if(!primeiro || !segundo){
    cpf.style.border = '3px solid #FF5757';
  } else {
    cpf.style.border = '3px solid rgb(20, 218, 62)';
  }
}

// 705.484.450-52