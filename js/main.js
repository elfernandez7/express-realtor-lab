//State
let apartments;
let houses;

//Cached Elements
const listingsEl = document.getElementById('listings');

//Event Listeners
const aptsBtn = document.getElementById('aptsBtn');
const houseBtn = document.getElementById('houseBtn');

aptsBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    console.log('Show Apartments');
    fetchApartments();
});

houseBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    console.log('Show Houses');
    fetchHouses();
});

//Functions

async function fetchApartments() {
    const response = await fetch('http://localhost:3000/apartments');
    const apartments = await response.json();
    console.log(apartments);
    aptsBtn.style.backgroundColor ='whitesmoke';
    houseBtn.style.backgroundColor ='white';
    render();


function render() {
    listingsEl.innerHTML = ''
    apartments.forEach((apartment) => {
        const cardEl = document.createElement('div');
        cardEl.setAttribute('class','listing-card');
        cardEl.innerHTML = `<h3>${apartment.address}</h3>`;
        const listEl = document.createElement('ul');
        listEl.innerHTML = `
        <li>Apartment for Rent</li>
        <li>${apartment.beds} bed</li>
        <li>${apartment.baths} bath</li>
        <li>${apartment.sqft} SQFT</li>
        <li>$ ${apartment.price}</li>
        `;
        cardEl.append(listEl);
        listingsEl.append(cardEl);
    });
}}   

async function fetchHouses() {
    const response = await fetch('http://localhost:3000/houses');
    const houses = await response.json();
    console.log(houses);
    houseBtn.style.backgroundColor = 'whitesmoke';
    aptsBtn.style.backgroundColor= 'white';
    render();


function render() {
    listingsEl.innerHTML = ''
    houses.forEach((house) => {
        const cardEl = document.createElement('div');
        cardEl.setAttribute('class','listing-card');
        cardEl.innerHTML = `<h3>${house.address}</h3>`;
        const listEl = document.createElement('ul');
        listEl.innerHTML = `
        <li>House for Sale</li>
        <li>${house.beds} bed</li>
        <li>${house.baths} bath</li>
        <li>${house.sqft} SQFT</li>
        <li>$ ${house.price}</li>
        `;
        cardEl.append(listEl);
        listingsEl.append(cardEl);
    });
}}   