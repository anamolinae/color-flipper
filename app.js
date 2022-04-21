const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener("click", function(){
    // meta: lograr un color randon utilizando el array de la const colores entre el 0 y 3
    const randomNumber = getRandomNumber(); //desde que puse los () ya no sale el # al hacerle click
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
