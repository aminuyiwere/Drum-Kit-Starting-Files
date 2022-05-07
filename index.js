// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("i got clicked");
// }


for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    
    // var drumAlhpa = document.querySelectorAll(".drum")[i].innerHTML;
    // console.log(drumAlhpa)
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
      if(this.innerHTML == 'w'){
       var audioFile = new Audio("sounds/tom-1.mp3")
       audioFile.play();
       }
       else if(this.innerHTML == 'a'){
        var audioFile = new Audio("sounds/tom-2.mp3")
        audioFile.play();
        
       }
       else if(this.innerHTML == 's'){
        var audioFile = new Audio("sounds/tom-3.mp3")
        audioFile.play();
        
       }
       else if(this.innerHTML == 'd'){
        var audioFile = new Audio("sounds/tom-4.mp3")
        audioFile.play();
        
       }
       else if(this.innerHTML == 'j'){
        var audioFile = new Audio("sounds/snare.mp3")
        audioFile.play();
        
       }
       else if(this.innerHTML == 'k'){
        var audioFile = new Audio("sounds/crash.mp3")
        audioFile.play();
        
       }
       else if(this.innerHTML == 'l'){
        var audioFile = new Audio("sounds/kick-bass.mp3")
        audioFile.play();
        
       }
       
    });

} 
document.addEventListener("keypress", function(){
  console.log(this)
})
