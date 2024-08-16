let player1;
let player2;

let imgDir  = "images/dice";

let p1Result;
let p2Result;

player1 = Math.floor(Math.random() * 6) + 1;
player2 = Math.floor(Math.random() * 6) + 1;

p1Result = imgDir.concat(String(player1),".png");
p2Result = imgDir.concat(String(player2),".png");

console.log(p1Result);
console.log(p2Result);

console.log(player1);
console.log(player2);

document.querySelector(".img1").setAttribute("src", p1Result);
document.querySelector(".img2").setAttribute("src", p2Result);

if(player1 > player2){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!"   
}
else if(player2 > player1){
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}