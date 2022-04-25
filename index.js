// document.querySelector("button").addEventListener("click",handleClick)

// function handleClick(){
//     alert("i got clicked");
// }


for (let i = 0; i < document.getElementsByClassName("drum").length; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        alert("I got clicked")
    });
} 