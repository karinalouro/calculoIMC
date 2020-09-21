//Cálculo de IMC
const nome = "Carlos";
const peso = 90;
const altura = 1.68;

const IMC = peso / (altura * altura);

if (IMC >= 30){
    console.log(`${nome} Você esta acima do Peso`)
}else{
    console.log(`&{nome} Você não esta acima do Peso `)
}