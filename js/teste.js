var n1 = Number(document.getElementById("txtn1").value);
var n2 = Number(document.getElementById("txtn2").value);


/* Pegando a referência aos inputs */
const n1 = document.getElementById("txtn1");
const n2 = document.getElementById("txtn2");

/* Adicionando evendo ao botão */
const soma = document.getElementById("somar");
soma.addEventListener("click", operacaoSoma);

function operacaoSoma() {
  /// Pegando os valores no momento do click
  const input1 = Number(n1.value);
  const input2 = Number(n2.value);

  /// Mostrando a soma
  document.getElementById("resultado").innerHTML = input1 + input2;
}

