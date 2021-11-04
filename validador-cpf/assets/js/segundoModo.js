function ValidaCpf(cpfEnviado){
  Object.defineProperty(this, 'cpfLimpo', {
    enumerable: true,
    get: function (){
      return cpfEnviado.replace(/\D+/g, '');
    }
  });
}

ValidaCpf.prototype.valida = function(){
  if(typeof this.cpfLimpo === 'undefined') return false;
  if(this.cpfLimpo.length !== 11) return false;
  
  const cpfParcial = this.cpfLimpo.slice(0, -2);
  const digitoOne = this.criaDigito(cpfParcial);
  const digitoTwo = this.criaDigito(cpfParcial + digitoOne);
  const novoCpf = cpfParcial + digitoOne + digitoTwo;

  return novoCpf === this.cpfLimpo;
}

ValidaCpf.prototype.criaDigito = function(cpfParcial){
  const cpfArray = Array.from(cpfParcial);

  let regressivo = cpfArray.length + 1;
  const soma = cpfArray.reduce((acc, val) => {
    acc += regressivo*Number(val);
    regressivo--;
    return acc;
  }, 0);

  const digito = 11 - (soma % 11);
  
  return digito > 9? '0':String(digito);  
}

ValidaCpf.prototype.isSequency = function () {
  const sequencia = this.cpfLimpo[0].repeat(cpfLimpo.length);
  return sequencia === this.cpfLimpo;
}

const cpfSite = new ValidaCpf('705.484.450-52');
console.log(cpfSite.valida('705.484.450-52'));