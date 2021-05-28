import "./styles.css";

import { BASE_URL, API_KEY } from "./constants";

// https://developers.google.com/books/docs/v1/using#PerformingSearch

//função
// https://www.w3schools.com/jsref/jsref_tolowercase.asp
const convertText = (text) => text.split(" ").join("&").toLowerCase();
const searchEl = document.querySelector("#search");
const searchButtonEl = document.querySelector("#searchButton");
const contentEl = document.querySelector("#content");

let searchTerm;
// https://developer.mozilla.org/pt-BR/docs/Web/API/EventTarget/addEventListener
searchEl.addEventListener("keyup", (event) => {
  //desestruturar para usar apenas o value
  const { value } = event.target;

  //Pra previnir o comportamento padrão do submit do html
  event.preventDefault();

  searchTerm = convertText(value);
});

// https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch
searchButtonEl.addEventListener("click", async () => {
  // Com async await
  // Armazeno o retorno da chamada
  let response = await fetch(`${BASE_URL}${searchTerm}${API_KEY}`);
  // Converto os dados para json
  response = await response.json();

  // Chamo a função de criação de template
  // Passando a resposta {response.items}
  createTemplate(response.items);

  // await fetch(
  //   //Importando
  //   `${BASE_URL}${searchTerm}${API_KEY}`
  // )
  //   .then((data) => data.json())
  //   .then((data) => {
  //     console.log(data);
  //     createTemplate(data.items);
  //   })
  //   .catch((err) => console.error(err));
});

/**
 * As datas que vem lá da resposta da api vem dessa forma:
 *
 */

const createTemplate = (items) => {
  console.log(items.map((el) => el));

  contentEl.innerHTML = `${items.map(
    (item) => `

    <a href="${item.volumeInfo.canonicalVolumeLink}">
    <img src=${
      item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail
    } class="center-bottom" /> 
    </a>
         <h3><b>Título:</b> ${item.volumeInfo.title}</h4>

           <p><b>Descrição:</b> ${
             item.searchInfo && item.searchInfo.textSnippet
           }</p>
        
         <p><b>Data:</b> ${item.volumeInfo.publishedDate}</p>

        <p><b>Autor: </b>${item.volumeInfo.authors.map((author) => `${author}`)}
  <br><br>
        `
  )}`;
};

// https://console.cloud.google.com/apis/credentials
