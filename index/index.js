// Criamos aqui uma variavel para guardar o nome do personagem que o usuario iria digitar
let nomePersonagem1 = prompt("Insira o nome do personagem 1");
// Criamos tambem outra variavel para salvar o poder de ataque do personagem
// Esse poder seria passado pelo proprio usuario, esse valor esta sendo convertido em numeros
let poderAtk = parseFloat(
  prompt("Insira a quantidade de poder de ataque do personagem 1")
);
// Criamos aqui outra variavel para o nome do segundo personagem
let nomePersonagem2 = prompt("Insira o nome do personagem 2");
// Criamos aqui uma variavel que teria os pontos de vida do personagem
// Um valor que esta sendo convertido para numerico
let pontosDeVida = parseFloat(
  prompt("Insira a quantidade de pontos de vida do personagem 2")
);
// Uma variavel para o poder de defesa do personagem
// Tambem sendo convertido de texto para numeral
let poderDef = parseFloat(
  prompt("Insira a quantidade de poder de defesa do personagem")
);
// Tambem criamos uma variavel que pergunta se o personagem possui escudo ou nao
let escudo = prompt("O personagem possui escudo? True ou False? ");
// Aqui criamos uma variavel que sera o dano causado, caso ele ocorra
// Por isso, começamos com ele em 0
let danoCausado = 0;
// Criamos aqui a analise que diz que
// Se o poder de ataque for maior que o poder de defesa e nao possui um escudo
// O dano causado é a diferença entre o poder de ataque pelo poder de defesa
if (poderAtk > poderDef && escudo === "False") {
  danoCausado = poderAtk - poderDef;
} // Aqui caso o poder de ataque seja maior que o poder de defesa e possua escudo no defensor
// O dano causado é a diferença entre o poder de ataque pelo poder de defesa
// Porem, dividido por 2
else if (poderAtk > poderDef && escudo === "True") {
  danoCausado = poderAtk - poderDef / 2;
}
// Aqui estamos decrementando os pontos de vida pelo dano causado
pontosDeVida -= danoCausado;
// Aqui estamos criando as situações dos personagens contendo o nome
// O dano causado e os pontos de vida do personagem que foi atacado
alert(
  nomePersonagem1 +
    " causou " +
    danoCausado +
    " pontos de vida em " +
    nomePersonagem2
);
// Aqui exibimos as informações dos personagens como poder de ataque
// Pontos de vida, poder de defesa e escudo
alert(
  nomePersonagem1 +
    "\nPoder de ataque: " +
    poderAtk +
    "\n\n" +
    nomePersonagem2 +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDef +
    "\nPossui escudo: " +
    escudo
);
