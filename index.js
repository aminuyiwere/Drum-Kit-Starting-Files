// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("i got clicked");
// }


for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    
    // var drumAlhpa = document.querySelectorAll(".drum")[i].innerHTML;
    // console.log(drumAlhpa)
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      buttunPressed = this.innerHTML
      playSound(buttunPressed)
      buttonAnimation(buttunPressed)
    });

} 
document.addEventListener("keypress", function(e){
  keyPress = e.key
  playSound(keyPress)
  buttonAnimation(keyPress)
  
});


function playSound(key){
  switch (key) {
    case "w": case "W":
       var audioFile = new Audio("sounds/tom-1.mp3")
       audioFile.play();
      break;
      case "a": case "A":
        var audioFile = new Audio("sounds/tom-2.mp3")
        audioFile.play();
       break;
       case "s": case "S":
        var audioFile = new Audio("sounds/tom-3.mp3")
        audioFile.play();
       break;
       case "d": case "D":
        var audioFile = new Audio("sounds/tom-4.mp3")
        audioFile.play();
       break;
       case "j": case "J":
        var audioFile = new Audio("sounds/snare.mp3")
        audioFile.play();
       break;
       case "k": case "K":
        var audioFile = new Audio("sounds/crash.mp3")
        audioFile.play();
       break;
       case "l": case "L":
        var audioFile = new Audio("sounds/kick-bass.mp3")
        audioFile.play();
       break;
  
    default:
      console.log(this.innerHTML)
      break;
  }
}

function buttonAnimation(key) {
  var currentButton = document.querySelector("."+key);
  currentButton.classList.add("pressed")
  
}