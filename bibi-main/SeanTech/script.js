// Função para abrir o modal com as informações do livro
function abrirModal(titulo, autor, imagem) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-autor').innerText = "Autor: " + autor;
    document.getElementById('modal-img').src = imagem;
    document.getElementById('modal').setAttribute('aria-hidden', 'false');
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal
function fecharModal() {
    document.getElementById('modal').setAttribute('aria-hidden', 'true');
    document.getElementById('modal').style.display = 'none';
}

// Função para avaliar o livro
function avaliar(estrelas) {
    const resultado = document.getElementById('resultado-avaliacao');
    resultado.innerText = `Você avaliou este livro com ${estrelas} estrela(s).`;
}

// Função para abrir o formulário de reserva (apenas um exemplo, pode ser expandido)
function abrirFormularioReserva() {
    const reservasLista = document.getElementById('reservas-lista');
    const titulo = document.getElementById('modal-titulo').innerText;
    const novaReserva = document.createElement('div');
    novaReserva.innerText = `Reserva feita para: ${titulo}`;
    reservasLista.appendChild(novaReserva);
    fecharModal();
}

// Função de pesquisa de livros
function pesquisarLivros() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const livros = document.getElementsByClassName('livro');

    Array.from(livros).forEach(livro => {
        const titulo = livro.getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (titulo.includes(input)) {
            livro.style.display = '';
        } else {
            livro.style.display = 'none';
        }
    });
}
// Variáveis globais para armazenar informações do livro
let livroReservado = '';

// Função para abrir o modal de reserva
function abrirModalReserva(titulo) {
    document.getElementById('modal-reserva-titulo').innerText = `Reservar: ${titulo}`;
    document.getElementById('modal-reserva').setAttribute('aria-hidden', 'false');
    document.getElementById('modal-reserva').style.display = 'block';
}

// Função para fechar o modal de reserva
function fecharModalReserva() {
    document.getElementById('modal-reserva').setAttribute('aria-hidden', 'true');
    document.getElementById('modal-reserva').style.display = 'none';
}

// Função para lidar com a reserva
document.getElementById('form-reserva').onsubmit = function(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const tempo = document.getElementById('tempo').value;

    const reservasLista = document.getElementById('reservas-lista');
    const novaReserva = document.createElement('div');
    novaReserva.innerText = `Reserva feita para: ${livroReservado} - Nome: ${nome} - Tempo: ${tempo} dias`;
    reservasLista.appendChild(novaReserva);

    fecharModalReserva();
};

// Modifique a função de reserva para abrir o modal de reserva
function abrirFormularioReserva() {
    const titulo = document.getElementById('modal-titulo').innerText;
    livroReservado = titulo; // Armazena o título do livro a ser reservado
    abrirModalReserva(titulo);
}
// Função para abrir o modal de detalhes do livro
function abrirModal(titulo, autor, imgSrc) {
    document.getElementById('modal-titulo').innerText = titulo;
    document.getElementById('modal-autor').innerText = autor;
    document.getElementById('modal-img').src = imgSrc;
    document.getElementById('modal').style.display = 'block';
}

// Função para fechar o modal de detalhes do livro
function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

// Função para abrir o formulário de reserva
function abrirFormularioReserva() {
    fecharModal(); // Fecha o modal de livro
    document.getElementById('modal-reserva').style.display = 'block';
}

// Função para fechar o formulário de reserva
function fecharFormularioReserva() {
    document.getElementById('modal-reserva').style.display = 'none';
}

// Função para salvar a reserva
function salvarReserva(event) {
    event.preventDefault(); // Previne o recarregamento da página

    const nomeAluno = document.getElementById('nomeAluno').value;
    const tempoReserva = document.getElementById('tempoReserva').value;
    const livroReservado = document.getElementById('modal-titulo').innerText;

    // Adiciona a reserva à lista
    const reservaDiv = document.createElement('div');
    reservaDiv.classList.add('reserva-item');
    reservaDiv.innerHTML = `
        <h4>${livroReservado}</h4>
        <p>Reservado por: ${nomeAluno}</p>
        <p>Tempo de Reserva: ${tempoReserva} dias</p>
        <button onclick="removerReserva(this)">Cancelar Reserva</button>
    `;

    document.getElementById('reservas-lista').appendChild(reservaDiv);

    // Fecha o modal de reserva
    fecharFormularioReserva();
}

// Função para remover uma reserva
function removerReserva(button) {
    const reservaItem = button.parentElement;
    reservaItem.remove();
}
