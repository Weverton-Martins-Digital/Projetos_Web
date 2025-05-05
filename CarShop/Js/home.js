/* Funções para a animação e troca de imagem do banner por condição
do botão apertado */
const buttonConfigu = document.getElementById('buttonConfigu');
const buttonSong = document.getElementById('buttonSong');
const buttonLike = document.getElementById('buttonLike');

const buttonLeft = document.getElementById('buttonLeft');
const buttonImage = document.getElementById('buttonImage');
const buttonRight = document.getElementById('buttonRight');

const bannerImagem = document.getElementById('bannerImagem');

// Array com os caminhos das imagens
const imagensBanner = [
    '/CarShop/Image/Banner_001.jpg',
    '/CarShop/Image/Banner_002.jpg',
    '/CarShop/Image/Banner_003.jpg',
    '/CarShop/Image/Banner_004.jpg',
    '/CarShop/Image/Banner_005.jpg'
];

// Variável para controlar o índice da imagem atual
let indiceImagemAtual = 0;

// Função para atualizar a imagem do banner
function atualizarImagem() {
    bannerImagem.src = imagensBanner[indiceImagemAtual];
}

// Event listener para o botão "buttonLeft"
buttonLeft.addEventListener('click', () => {
    // Decrementa o índice, mas volta para a última imagem se estiver na primeira
    indiceImagemAtual = (indiceImagemAtual - 1 + imagensBanner.length) % imagensBanner.length;
    atualizarImagem();
});

// Event listener para o botão "buttonRight"
buttonRight.addEventListener('click', () => {
    indiceImagemAtual = (indiceImagemAtual + 1 + imagensBanner.length) % imagensBanner.length;
    atualizarImagem();
})

// Exibe a primeira imagem ao carregar a página
atualizarImagem();