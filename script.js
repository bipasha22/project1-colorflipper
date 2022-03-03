const colors = ["Red", "Green", "Blue","Grey","Orange"];

const btn = document.getElementById("colorBtn");
const color =  document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNum = getRandomNum();
    document.body.style.backgroundColor = colors[randomNum];
    console.log(randomNum);
    // Update the content of the span 
    color.textContent = colors[randomNum];
})

function getRandomNum(){
    // multiply random number with the coulors array in order to get the value of the array range
    return Math.floor(Math.random()*colors.length);
}
