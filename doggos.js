const main = document.getElementById("main");
const loader = document.getElementById("loader");
const breedSelect = document.getElementById("breed");

async function init(){
    //loading the breed list from dog.ceo api
    const res = await fetch("https://dog.ceo/api/breeds/list/all");
    const resJson = await res.json();

    let breedOptions = "<option></option>";

    let breedList = Object.keys(resJson.message);

    for (let i=0; i<breedList.length; i++) {
        breedOptions += `<option value=${breedList[i]}>${breedList[i]}</option>`;
    }

breedSelect.innerHTML = breedOptions;

//get first doggo
const randomRes = await fetch ("https://dog.ceo/api/breeds/image/random");
const randomResJson = await randomRes.json();

main.src = randomResJson.message;

//breed event listeners
breedSelect.addEventListener("change", handleBreedChange);

main.addEventListener("load", function() {
    main.classList.add("show");
    loader.classList.remove("show");
});

}

async function handleBreedChange(event) {
    const breed = event.target.value;

    main.classList.remove("show");
    loader.classList.add("show");

    const res = await fetch(` https://dog.ceo/api/breed/${breed}/images/random`);
    const resJson = await res.json();

    main.src = resJson.message;
}

init();




/*
base code v1 - just loading a random doggo using fetch
const doggos = document.querySelector(".doggos");

//putting fetch inside the addDoggo function so when the button to keep adding dogs is clicked more dogs are fetched
//or you can just use fetch stand alone - without a button feature
function addDoggo (){
    //show loading spinner
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

    //stop showing loading spinner
    })
}
document.querySelector('.add-doggo').addEventListener
("click", addDoggo);
*/

