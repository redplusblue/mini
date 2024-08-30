import "./style.css";
import getSecrets from "./secrets";

let API_KEY = getSecrets('API');
const generated = [];
let phrase;

function createImg() {
  let img = document.createElement("img");
  img.id = "img";
  img.alt = "img";
  return img;
}

function content() {
  let element = document.createElement("div");
  element.id = "content";
  return element;
}

function generateGif(phrase) {
  // If phrase is falsy
  if (!phrase) {
    phrase = 'random';
  }
  const img = document.querySelector('img');
  fetch('https://api.giphy.com/v1/gifs/translate?api_key=' + API_KEY + '&s=' + phrase, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Make sure that the new URL is not in generated
    if (generated.includes(response.data.images.original.url)) {
      generateGif(phrase);
    } else {
      img.src = response.data.images.original.url;
      generated.push(response.data.images.original.url);
    }
  });
  
}

// Generate Gif but using async/await
async function generateGifAsync(phrase) {
  const img = document.querySelector('img');
  const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=' + API_KEY + '&s=' + phrase, {mode: 'cors'});
  const data = await response.json();
  img.src = data.data.images.original.url;
}

function search(){
  let searchDiv = document.createElement("div");
  searchDiv.id = "searchDiv";
  let box = document.createElement("input");
  box.id = "search";
  box.type = "text";
  let btn = document.createElement("button");
  btn.id = "searchBtn";
  btn.innerText = "Search";
  btn.addEventListener('click', () => { 
    phrase = document.getElementById("search").value;
    generateGif(phrase);
  });
  searchDiv.appendChild(box);
  searchDiv.appendChild(btn);
  return searchDiv;
}

function changeImageButton() {
  const btn = document.createElement('button');
  btn.id = 'searchBtn';
  btn.className= 'btn2';
  btn.addEventListener('click', () => {
    if (!phrase) {
      phrase = document.getElementById("search").value;
    }
    console.log("Current Phrase " + phrase);
    generateGif(phrase);
    });
  btn.innerText = 'Change Image';
  return btn;
}

if (API_KEY == 'INSERT KEY HERE') {
  API_KEY = prompt("Please enter your API key (https://developers.giphy.com/dashboard/?create=true)");
}
  document.body.appendChild(content());
  document.getElementById("content").appendChild(search());
  document.getElementById("content").appendChild(createImg());
  document.getElementById("content").appendChild(changeImageButton());
  generateGif();
