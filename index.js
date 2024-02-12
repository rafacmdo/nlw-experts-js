const perguntas = [
    {
      pergunta: "Qual é a forma correta de declarar uma variável em JavaScript?",
      respostas: [
        "let varName = 10;",
        "const varName = 10;",
        "var varName = 10;",
      ],
      correta: 1
    },
    {
      pergunta: "O que significa o termo 'hoisting' em JavaScript?",
      respostas: [
        "Elevar objetos fisicamente no código",
        "Elevar variáveis e funções no código antes da execução",
        "Ignorar certas partes do código durante a execução",
      ],
      correta: 1
    },
    {
      pergunta: "Como se chama a estrutura de controle de fluxo que permite executar um bloco de código repetidamente enquanto uma condição for verdadeira?",
      respostas: [
        "if-else statement",
        "switch statement",
        "while loop",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do método 'addEventListener' em JavaScript?",
      respostas: [
        "Adicionar estilos a elementos HTML",
        "Adicionar um ouvinte de eventos a um elemento HTML",
        "Adicionar elementos ao DOM",
      ],
      correta: 1
    },
    {
      pergunta: "O que é o conceito de 'closure' em JavaScript?",
      respostas: [
        "Uma forma de estilizar código JavaScript",
        "Um tipo de loop condicional",
        "Uma função que mantém acesso às variáveis do escopo em que foi criada",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
      respostas: [
        "São equivalentes e podem ser usados indistintamente",
        "Null representa a ausência intencional de qualquer valor e undefined é atribuído automaticamente a variáveis não inicializadas",
        "Undefined representa a ausência intencional de qualquer valor e null é atribuído automaticamente a variáveis não inicializadas",
      ],
      correta: 1
    },
    {
      pergunta: "Como é feita a declaração de um array em JavaScript?",
      respostas: [
        "array = [1, 2, 3];",
        "let array = {1, 2, 3};",
        "let array = [1, 2, 3];",
      ],
      correta: 2
    },
    {
      pergunta: "O que é JSON em JavaScript?",
      respostas: [
        "Um formato de arquivo de áudio",
        "Uma linguagem de programação",
        "Um formato de dados para intercâmbio de informações",
      ],
      correta: 2
    },
    {
      pergunta: "O que é o operador '===' em JavaScript?",
      respostas: [
        "Operador de atribuição",
        "Operador lógico 'ou'",
        "Operador de igualdade estrita",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a finalidade do método 'map' em JavaScript?",
      respostas: [
        "Criar uma cópia de um array invertendo a ordem dos elementos",
        "Iterar sobre os elementos de um array e executar uma função para cada elemento, retornando um novo array com os resultados",
        "Remover elementos duplicados de um array",
      ],
      correta: 1
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totaldePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas 
  
  for(const item of perguntas){
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  for(const resposta of item.respostas){
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta) 
  
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if(estaCorreta){
        corretas.add(item)
      }
      mostrarTotal.textContent = corretas.size + ' de ' + totaldePerguntas
    }
  
    quizItem.querySelector('dl').appendChild(dt)
  }
  
  quizItem.querySelector('dl dt').remove()
  
   //coloca a pergunta na tela 
  quiz.appendChild(quizItem)  
  
  }
  