// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("i got clicked");
// }


for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var audioFile = new Audio("sounds/tom-1.mp3")
       audioFile.play();
       
    });
} 
