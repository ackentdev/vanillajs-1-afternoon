console.log('I am the senate!');

const idInput = document.getElementById('idInput');

const colorInput = document.getElementById('colorInput');

function setCard() {
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function reset() {
    const card1 = document.getElementById('diamond'.value);
    const card2 = document.getElementById('club'.value);
    const card3 = document.getElementById('heart'.value);
    const card4 = document.getElementById('spade'.value);
    card1, card2, card3, card4 = '';
    card1.style.color, card2.style.color, card3.style.color, card4.style.color = '';
}