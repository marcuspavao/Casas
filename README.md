## README.md onde o trainne irá continuamente responder as perguntas em formas de commit. :exploding_head:

![Gif](https://c.tenor.com/YJVujQ8qJQgAAAAC/hora-de-aprender-profesor-utonio.gif)


__Respostas:__:pencil2::closed_book:

3.  O código realiza uma soma de dois algorismos utilizando a propriedade nativa do node process.argv que contem tudo que está presente na linha de comando e assim torna-se possível utilizar da linha de comando para enviar informações para o código. A função que segue a propriedade .slice(2) faz com que os dois primeiros elementos da propriedade process.argv sejam subtraídas de uma cópia dessa, fazendo com que as partes referentes a execução do node e do caminho do código sejam ignoradas, no nosso caso, faz com que sobre apenas os dois números dentro da nova constante (args) onde a propriedade cortada é atribuida. Através disso temos a última parte do código se refere ao console.log que faz a soma dos dois números seja executada, a função parseInt transforma o valor em string e retorna o primeiro inteiro, enquanto args[0] e args[1] selecionam respectivamente o primeiro e segundo elementos do array. No final das contas temos uma soma de dois inteiros.
