let numeroUm, numeroDois, resultado; // cria as variaveis

 numeroUm = prompt("digite o primeiro numero");// declara a variavel primeiro numero
 numeroDois = prompt("digite outro numero");//  declara a variave segundo numero

resultadoDaSoma = parseInt(numeroUm) + parseInt(numeroDois);
 resultadoDaSubtracao = parseInt(numeroUm) - parseInt(numeroDois);
 resultadoDaMultiplicacao = parseInt(numeroUm) * parseInt(numeroDois);
 resultadoDaDivisao = parseInt(numeroUm) / parseInt(numeroDois);

 document.write("a divisão dos numeros da: " + resultadoDaDivisao + "<br>")
 document.write("a soma dos numeros da: " + resultadoDaSoma + "<br>")
 document.write("a subtração dos numeros da: " + resultadoDaSubtracao + "<br>")
 document.write("a multiplicação dos numeros da: " + resultadoDaMultiplicacao+ "<br>")