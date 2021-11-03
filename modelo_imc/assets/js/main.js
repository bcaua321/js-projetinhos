const form = document.getElementById('form');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const inputPeso = event.target.querySelector('#peso'); 
  const inputAltura = event.target.querySelector('#altura'); // take the input when submit

  const peso = Number(inputPeso.value); // after take the values
  const altura = Number(inputAltura.value);

  // The second argument is for background color of output
  if(!peso && !altura){
    setResultado('Dados invalidos', false);
    return;
  }

  if(!peso){
    setResultado('Peso invalido', false);
    return;
  }

  if(!altura){
    setResultado('Altura invalida', false);
    return;
  }



  const imc = getImc(peso, altura);
  const imcState = getLevelResult(imc);
  const msg = `IMC: ${imc}       ${imcState}`

  setResultado(msg, true);

});

function getImc(peso, altura){
  const imc = peso / altura**2;
  return imc.toFixed(2);
}

// function to know how the level of IMC
function getLevelResult(imc) {

  /*
  Menos do que 18,5	Abaixo do peso
  Entre 18,5 e 24,9	Peso normal
  Entre 25 e 29,9	Sobrepeso
  Entre 30 e 34,9	Obesidade grau 1
  Entre 35 e 39,9	Obesidade grau 2
  Mais do que 40	Obesidade grau 3
  */
  const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3'];

  if (imc > 39.9) return nivel[5];

  if (imc >= 35) return nivel[4];

  if (imc >= 30) return nivel[3];
  
  if (imc >= 25) return nivel[2];
  
  if (imc >= 18.5) return nivel[1];

  if (imc < 18.5) return nivel[0];
  
}

// Function to create p in output inner #resultado
function criaP(){
  const p = document.createElement('p');
  return p;
}

// Function to output the msg
function setResultado(msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criaP ();
  if (isValid){
    // add class of style elements
    resultado.classList.add("verde");
  } else {
    resultado.classList.add("bad");
  }
  p.innerHTML = msg;
  resultado.appendChild(p);
  

}
