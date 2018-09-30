let botao = document.querySelector('.botao')

let nome;
let idade;
let salario;
let emprestimo;
let experiencia;
let contador = 0;

while (contador<3){

nome = prompt('Hey,qual seu nome?');
idade = prompt('Hey ' +nome + ', qual a sua idade?');
salario = prompt('Quanto você ganha?');
salario = Number(salario)

// como validar um algoritmo condicional 
if (isNaN(salario)){
    alert('Ops, erro. Só escreva números!')
}

else {


emprestimo = prompt('Quanto quer o seu empréstimo?');

if ((idade>=21 && idade<=55) && (emprestimo<=5*salario) && (experiencia >=5)) {
    alert('Tudo certo! Empréstimo aprovado ;)');
}

else {
    alert('Ops, empréstimo recusado ;)');
}};

experiencia = prompt ('Há quanto tempo trabalha (em meses)?');

// repetição

    contador ++;
}

// for (contator= 0, contator<3, contator ++);{ 

// }
// // FDS version
// let nome;
// let idade;
// let salario;
// let signo;
// let emprestimo;

// for(let contador=0; contador<3; contador++){
//         nome = prompt("Qual é o seu nome?");
//         idade = prompt("Olá " + nome + ", qual é sua idade?");
//         salario = prompt("Quanto você ganha?");
//         signo = prompt("Qual seu signo?");
//         emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

// if(isNaN(salario)){
//     alert("Salario inválido, recarregue o navegador e tente novamente!");
// }
// else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
//         alert("Emprestimo aprovado");
//     }
//    else if(signo == "aries" || signo == "áries" || signo == "Aries"){
//        alert("Pelo signo, aprovo!");
//    }
//     else{
//         alert("Emprestimo recusado");
//     }
// }


