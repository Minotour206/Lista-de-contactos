// Input:Ingrese su tarea
const input = document.querySelector('input');

let initialValue = 'Ingrese su tarea:';

input.addEventListener('focus', function() {
  if (this.value === initialValue) {
    this.value = '';
  }
});

input.addEventListener('blur', function() {
  if (this.value === '') {
    this.value = initialValue;
  }
});


// Añadir tasks
const buttoninput = document.querySelector('button');
const ul = document.querySelector('ul');
const total = document.querySelector('total');

let valorInicial = 0;

input.addEventListener('keyup', function() {
  if (this.value !== '') {
    buttoninput.disabled = false;
  } else {
    buttoninput.disabled = true;
  }
  buttoninput.addEventListener('click', function() {
  if (input.value !== '') {
    const newItem = document.createElement('li');
    newItem.innerHTML = `
    <button class="borrar-btn">
        <svg class="borrar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
        </svg>                      
    </button>
    <p>${input.value}</p>
    <button class="editar-btn">
        <svg class="editar-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
    </button>
    <button class="listo-btn">
        <svg class="listo-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
    </button>
    `;
    ul.appendChild(newItem);
    input.value = '';
    buttoninput.disabled = true;
    valorInicial++;
    total.value = valorInicial;
  }
  });
});




// Checkear tasks

const check = document.querySelector(".listo-btn");
const texto = document.getElementById("texto");
let taClick = false;
let editarBye = false;

check.addEventListener("click", () => {
  if (!taClick){
    texto.style.color = "greenyellow";
    texto.style.textDecoration = "line-through";
    taClick = true
    editar.disabled = true;
    editarBye.disabled = true;
  } else {
    texto.style.color = "";
    texto.style.textDecoration = "";
    taClick = false;
    editar.disabled = false;
    editarBye.disabled = false;
  }
});


// Eliminar tasks

const lista = document.getElementById('list');
const deleteButtons = document.querySelectorAll('.borrar-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    const listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
  });
});


// Editar tasks

const editar = document.querySelector('.editar-btn');

let taEditao = false;

editar.addEventListener('click', () => {
  if (!taEditao) {
    texto.classList.add('p2');
    taEditao = true;
  } else {
    texto.classList.remove('p2');
    taEditao = false;
  }
});

editar.addEventListener('click', () => {
  texto.contentEditable = true
  texto.focus ();
  texto.addEventListener('blur', () =>{
    const newTexto = texto.textContent;
    localStorage.setItem('paragraphText', newTexto);
  });
});

const guardaTexto = localStorage.getItem('paragraphText');
  if (guardaTexto){
    texto.textContent = guardaTexto;
  }

  // contadores

