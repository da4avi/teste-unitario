class ServicoExercicio {

  Somar(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || !num1 || !num2) {
      throw new Error('Digite um número inteiro');
    }
    return num1 + num2;
  }

  Subtrair(num1, num2) {
    if (isNaN(num1) || isNaN(num2) || !num1 || !num2) {
      throw new Error('Digite um número inteiro');
    }
    return num1 - num2;
  }

  Multiplicar(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Digite um número inteiro');
    }
    return num1 * num2;
  }

  Dividir(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      throw new Error('Digite um número inteiro');
    }
    return num1 / num2;
  }

}

module.exports = ServicoExercicio;