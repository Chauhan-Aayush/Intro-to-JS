let player = 3;
const Computer = Math.floor(Math.random() *3)
if(player == 0){
  console.log("Player Picked:   Rock")
}
else if (player == 1){
  console.log("Player Picked:   Paper")
}
else{
  console.log("player Picked:   Scissors")
}

if(Computer == 0){
  console.log("Computer Picked:   Rock")
}
else if (Computer == 1){
  console.log("Computer Picked:   Paper")
}
else{
  console.log("Computer Picked:   Scissors")
}

if (player == Computer){
  console.log("It's a Tie")
}
else if(
  (player ===0 && Computer ===2) ||
  (player ===1 && Computer ===0) ||
  (player ===2 && Computer ===1)
){
  console.log("The Player Won!")
}
else{
  console.log("The Computer Won!")
}