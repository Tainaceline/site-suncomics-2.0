// Base de dados de produtos do Sun.Comic
const produtos = {
  // telacomprar.html - Frieren
  1: {
    id: 1,
    nome: "Sousou no Frieren",
    imagem: "https://img.mangaschan.com/uploads/manga-images/s/sousou-no-frieren/Sousou%20no%20Frieren%20mangaschan.webp",
    preco: 70.00,
    tipo: "Mangá",
    status: "Completo",
    lancado: "2020",
    autor: "Kanehito Yamada",
    artista: "Kanehito Yamada",
    sinopse: "Mas como uma elfo, a quase imortal Frieren durará muito mais que o resto de seu antigo bando. Como ela aceitará a mortalidade de seus amigos? Como ela pode encontrar satisfação em sua própria vida e pode aprender a entender o que a vida significa para os humanos ao seu redor?",
    rating: 5.00,
    categoria: "manga"
  },
  
  // telacomprar2.html - Os 7 Maridos de Evelyn Hugo
  2: {
    id: 2,
    nome: "Os 7 Maridos de Evelyn Hugo",
    imagem: "https://m.media-amazon.com/images/I/41xVhz5sL1L._SY445_SX342_.jpg",
    preco: 70.00,
    tipo: "Livro",
    status: "Completo",
    lancado: "2017",
    autor: "Taylor Jenkins",
    artista: "Taylor Jenkins",
    sinopse: "Evelyn Hugo é uma mulher de armas, excêntrica e arrebatadora. Uma mulher que entre os anos 50 e 70 fez de tudo para poder realizar os seus sonhos numa época conservadora. Este livro mostra-nos um pouco como era/é a vida em Hollywood e as coisas que por vezes são necessárias fazer para atingir um fim.",
    rating: 5.00,
    categoria: "livro"
  },
  
  // telacomprar3.html - Solo Leveling
  3: {
    id: 3,
    nome: "Solo Leveling",
    imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTbfULhD3TJNPPOnPl9Yb8BW9mvmDaMH8qYV6hbtic8iD0kR-6-x0hyOZElDJPZBkmaHe4UENs7WX1BDfNWZSs-p6cJtF_gHrZ5CsGPXpEZ&usqp=CAE",
    preco: 139.00,
    tipo: "Manhwa",
    status: "Completo",
    lancado: "2016",
    autor: "Chugong",
    artista: "Chugong",
    sinopse: "Em um mundo onde caçadores – humanos que possuem habilidades mágicas – devem lutar contra monstros mortais para proteger a raça humana de certa aniquilação, um caçador notoriamente fraco chamado Sung Jinwoo se encontra em uma luta aparentemente interminável pela sobrevivência.",
    rating: 5.00,
    categoria: "manhua"
  },
  
  // telacomprar4.html - Operação: Amor Verdadeiro / Nerd Project
  4: {
    id: 4,
    nome: "Operação: Amor Verdadeiro",
    imagem: "imagens/operation_true_love_operacao_amor_verdadeiro.webp",
    preco: 42.00,
    tipo: "Livro",
    status: "Completo",
    lancado: "2023",
    autor: "Autor",
    artista: "Artista",
    sinopse: "Uma história de romance e comédia que te fará sorrir do início ao fim.",
    rating: 5.00,
    categoria: "livro"
  },
  
  // telacomprar5.html - Yamada-kun
  5: {
    id: 5,
    nome: "Yamada-kun",
    imagem: "imagens/yamada kun.jpg",
    preco: 55.00,
    tipo: "Mangá",
    status: "Completo",
    lancado: "2012",
    autor: "Miki Yoshikawa",
    artista: "Miki Yoshikawa",
    sinopse: "Ryo Yamada é um delinquente que adora mexer com as pessoas. Um dia, bate a cabeça de Urara Shiraishi, uma aluna modelo, e de repente conseguem trocar seus corpos!",
    rating: 5.00,
    categoria: "manga"
  },
  
  // telacomprar6.html - A Stepmother's Märchen
  6: {
    id: 6,
    nome: "A Stepmother's Märchen",
    imagem: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQA9vDF-3bmUNNyghSk3BJzKHpDVu9uux_yPIOWkzGyWA2RXyVu",
    preco: 200.00,
    tipo: "Manhwa",
    status: "Completo",
    lancado: "2021",
    autor: "Saerom",
    artista: "Saerom",
    sinopse: "A viúva de ferro, a viúva-aranha, a caçadora de homens, a bruxa do castelo de Neuschwanstein, a vergonha das nobres damas...",
    rating: 5.00,
    categoria: "manhua"
  },
  
  // telacomprar7.html - É Assim que Acaba
  7: {
    id: 7,
    nome: "É Assim que Acaba",
    imagem: "https://m.media-amazon.com/images/I/51bC3R2x-iL._SY445_SX342_.jpg",
    preco: 59.90,
    tipo: "Livro",
    status: "Completo",
    lancado: "2016",
    autor: "Colleen Hoover",
    artista: "Colleen Hoover",
    sinopse: "Uma história envolvente que explora o relacionamento abusivo e a luta pela liberdade.",
    rating: 5.00,
    categoria: "livro"
  },
  
  // telacomprar8.html - Vossa Majestade, Por Favor Não Me Mate Novamente
  8: {
    id: 8,
    nome: "Vossa Majestade, Por Favor Não Me Mate Novamente",
    imagem: "imagens/YOUR_MAJESTYN_PLEASE_DONT_KIL_1680260061122296351SK-V11680260062B.jpg",
    preco: 45.00,
    tipo: "Manhwa",
    status: "Completo",
    lancado: "2022",
    autor: "Autor",
    artista: "Artista",
    sinopse: "Uma aventura épica cheia de ação, humor e reviravoltas surpreendentes.",
    rating: 5.00,
    categoria: "manhua"
  },
  
  // Jujutsu Kaisen
  9: {
    id: 9,
    nome: "Jujutsu Kaisen",
    imagem: "imagens/jujutsu.jpg",
    preco: 50.00,
    tipo: "Mangá",
    status: "Em Andamento",
    lancado: "2018",
    autor: "Gege Akutami",
    artista: "Gege Akutami",
    sinopse: "Yuji Itadori é um garoto comum que engole um dedo de um espírito maldito poderoso e se torna seu hospedeiro.",
    rating: 5.00,
    categoria: "manga"
  }
};

// Função para obter um produto pelo ID
function obterProduto(id) {
  return produtos[id];
}

// Função para obter todos os produtos de uma categoria
function obterProdutosPorCategoria(categoria) {
  return Object.values(produtos).filter(produto => produto.categoria === categoria);
}

// Função para preencher dinamicamente os dados da página de compra
function preencherDadosProduto(id) {
  const produto = obterProduto(id);
  
  if (!produto) {
    console.error(`Produto com ID ${id} não encontrado`);
    return;
  }
  
  // Preencher imagem
  const imgElement = document.querySelector('.produto-imagem img');
  if (imgElement) {
    imgElement.src = produto.imagem;
    imgElement.alt = produto.nome;
  }
  
  // Preencher nome
  const nomeElement = document.querySelector('.produto-detalhes h1');
  if (nomeElement) {
    nomeElement.textContent = produto.nome;
  }
  
  // Preencher rating
  const notaElement = document.querySelector('.produto-rating .nota');
  if (notaElement) {
    notaElement.textContent = produto.rating.toFixed(2);
  }
  
  // Preencher grid de informações
  const labelElements = document.querySelectorAll('.produto-info-grid .label');
  const valorElements = document.querySelectorAll('.produto-info-grid .valor');
  
  if (labelElements.length >= 5 && valorElements.length >= 5) {
    valorElements[0].textContent = produto.status;
    valorElements[1].textContent = produto.tipo;
    valorElements[2].textContent = produto.lancado;
    valorElements[3].textContent = produto.autor;
    valorElements[4].textContent = produto.artista;
  }
  
  // Preencher sinopse
  const sinopseElement = document.querySelector('.produto-sinopse p');
  if (sinopseElement) {
    sinopseElement.textContent = produto.sinopse;
  }
  
  // Preencher preço
  const precoElement = document.querySelector('.produto-preco');
  if (precoElement) {
    precoElement.textContent = `R$${produto.preco.toFixed(2)}`;
  }
  
  // Preencher title do documento
  document.title = `${produto.nome} - Sun.Comic`;
}

// Função para adicionar produto ao carrinho
function adicionarAoCarrinho(id) {
  const produto = obterProduto(id);
  if (!produto) return;
  
  // Obter carrinho do localStorage
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  
  // Verificar se o produto já existe no carrinho
  const produtoExistente = carrinho.find(item => item.id === id);
  
  if (produtoExistente) {
    produtoExistente.quantidade += 1;
  } else {
    carrinho.push({
      ...produto,
      quantidade: 1
    });
  }
  
  // Salvar carrinho
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
  // Feedback visual
  alert(`${produto.nome} adicionado ao carrinho com sucesso!`);
}
