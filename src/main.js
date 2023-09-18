import {generalFilter} from './data.js';
import data from './rickandmorty.js';
// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const linkAbout = document.querySelector("#linkAbout");
const filterGenderSelect = document.querySelector("#filter-gender-select")
const filterStatusSelect = document.querySelector("#filter-status-select")
const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-button");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);
// linkAbout.addEventListener("click", goToPagethree);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;
let filteredData;
let selectedGender = 'All';
let selectedStatus = 'All';
let selectedName = '';

  //Cards Container
  data.results.map(personagem => {
     cardscontainer.innerHTML += `
      <section class="personagem">
         <img src="${personagem.image}">
         <p>Nome: ${personagem.name}</p>
         <p>Status: ${personagem.status}</p>
         <p>Espécie: ${personagem.species}</p>
         <p>Tipo: ${personagem.type}</p>
         <p>Gênero: ${personagem.gender}</p>
      </section>`;
  });

  function displayFilteredData(filteredData) {
    const cardscontainer = document.getElementById('cardscontainer');
    cardscontainer.innerHTML = ''; // Limpa o conteúdo anterior

    filteredData.forEach(personagem => {
        cardscontainer.innerHTML += `
            <section class="personagem">
                <img src="${personagem.image}">
                <p>Nome: ${personagem.name}</p>
                <p>Status: ${personagem.status}</p>
                <p>Espécie: ${personagem.species}</p>
                <p>Tipo: ${personagem.type}</p>
                <p>Gênero: ${personagem.gender}</p>
            </section>`;
    });
}

 //Função de filtrar por genero

 filterGenderSelect.addEventListener("change", () => {
    const selectedOption = filterGenderSelect.value;
    switch (selectedOption) {
        case "Male":
            selectedGender = 'Male';
            break;
        case "Female":
            selectedGender = 'Female';
            break;
        default:
            selectedGender = 'All';
    }
});

//Função de filtrar por status
filterStatusSelect.addEventListener("change", () => {
    const selectedOption = filterStatusSelect.value;
    switch (selectedOption) {
        case "Alive":
            selectedStatus = "Alive"
            break;
        case "Dead":
            selectedStatus = "Dead"
            break;
            case "unknown":
                selectedStatus = "unknown"
            break;
        default:
            selectedStatus = "All"
    }
});

//Função de filtrar por nome
searchInput.addEventListener("input", (event) => {
    selectedName = event.target.value;
});

searchButton.addEventListener("click", () => {
    filteredData = generalFilter(data.results, selectedStatus, selectedGender, selectedName);
    displayFilteredData(filteredData);
});


/// até essa parte foi onde eu mexi

function goToPagethree(isAtBeginning) {
    paper3.classList.add("flipped");
    paper3.style.zIndex = 3;
    closeBook(isAtBeginning); // Verifique como a função closeBook deve ser chamada
}

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }

    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                closeBook(false);
                break;
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}