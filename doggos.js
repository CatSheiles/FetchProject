const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

//putting fetch inside the addDoggo function so when the button to keep adding dogs is clicked more dogs are fetched
//or you can just use fetch stand alone - without a button feature
function addDoggo (){
    const promise = fetch(BREEDS_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
    })
    .then(function (processingPromise) {
        const img = document.createElement('img');
        img.src = processingPromise.message;
        img.alt = 'Cute doggo';
        doggos.appendChild(img);
    })
}

document.querySelector('.add-doggo').addEventListener
("click", addDoggo);

