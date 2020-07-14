
let nota1, nota2, nota3, media;

nota1 = Number(prompt ('insira a nota 1: '));

//nota1= eval(nota1);

nota2 = Number(prompt ('insira a nota 2: '));

//nota2= eval(nota2);

nota3 = Number(prompt ('insira a nota 3: '));

//nota3= eval(nota3);

media = (nota1 + nota2 + nota3) / 3;

console.log(media); 

if (media <=5){
  console.log('Reprovado');
}else{
  console.log('Aprovado'); 
}

