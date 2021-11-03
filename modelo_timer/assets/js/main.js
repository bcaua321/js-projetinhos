function relogio(){
  function formataSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  }
  
  const relogio = document.querySelector('.meuRelogio');
  const iniciar = document.querySelector('.iniciar');
  const pausar = document.querySelector('.pausar');
  const zerar = document.querySelector('.zerar');
  let segundos = 0;
  let timer;
  
  function iniciaRelogio(){
    timer = setInterval(function(){
      relogio.classList.remove('red')
      segundos++;
      relogio.innerHTML = `<p>${formataSegundos(segundos)}</p>`;
    }, 1000);  
  }
  
  document.addEventListener('click', function(e){
    const el = e.target; // pega qualquer elemento que foi clicado
  
    if(el.classList.contains('zerar')){ // contains, irá pegar a classe e o evento dessa classe
      clearInterval(timer);
      relogio.innerHTML = `<p>${formataSegundos(0)}</p>`;
      segundos = 0;
    }
  
    if(el.classList.contains('iniciar')){
      relogio.classList.remove('red') 
      clearInterval(timer);
      iniciaRelogio();
    }
  
    if(el.classList.contains('pausar')){  
      relogio.classList.add('red') 
      clearInterval(timer);
    }
  
  });
}

relogio();

