class Contatos{
    constructor(nome, email, telefone, comentario){
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.comentario = comentario
    }
}

class GerenciadorContatos{
    constructor(){
        this.contatos = []
    }

    adicionarContatos(contato){
        this.contatos.push(contato);
    }

    exibirContatos(){
        const listaContatos = document.getElementById('contato-lista');
        listaContatos.innerHTML = '';
        
        for(const contato of this.contatos){
        const li = document.createElement('li');
        li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.comentario}`; 
        listaContatos.appendChild(li);
        }
    }
}

const gerenciadorContatos = new GerenciadorContatos();

const contatoForm = document.getElementById('contato-form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const comentarioForm = document.getElementById('comentario');

const mostrarContatos = document.getElementById('mostrar-contato');
const ocultarContatos = document.getElementById('ocultar-contato');
const listaContatos = document.getElementById('contato-lista');

contatoForm.addEventListener('submit', function (event) {
event.preventDefault();

const nome = nomeForm.value;
const email = emailForm.value;
const telefone = telefoneForm.value;
const comentario = comentarioForm.value;

const contato = new Contatos(nome, email, telefone, comentario);

gerenciadorContatos.adicionarContatos(contato);

  nomeForm.value = ''; // Corrigido de nomeForm = '';
  emailForm.value = ''; // Corrigido de emailForm = '';
  telefoneForm.value = ''; // Corrigido de telefoneForm = '';
  comentarioForm.value = ''; // Corrigido de comentarioForm = '';
});

mostrarContatos.addEventListener('click', function () {
gerenciadorContatos.exibirContatos();

  // Adicione a classe 'fade-in' para os elementos <li>
const lis = listaContatos.querySelectorAll('li');
lis.forEach((li, index) => {
    setTimeout(() => {
    li.classList.add('fade-in');
    }, index * 100); // Adicione um atraso crescente para criar um efeito de animação sequencial
});

listaContatos.style.display = 'block';
});

ocultarContatos.addEventListener('click', function () {
  // Adicione a classe 'fade-out' para os elementos <li>
const lis = listaContatos.querySelectorAll('li');
lis.forEach((li, index) => {
    setTimeout(() => {
    li.classList.add('fade-out');
    }, index * 100); // Adicione um atraso crescente para criar um efeito de animação sequencial

    setTimeout(() => {
    listaContatos.removeChild(li);
    }, (index + 1) * 1000); // Remova o elemento após a animação de fade-out
});
});
