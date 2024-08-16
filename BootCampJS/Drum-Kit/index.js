let numDrumBtn = document.querySelectorAll(".drum").length;

console.log(numDrumBtn);

for (let i = 0; i < numDrumBtn; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        let btnInnerHTML = this.innerHTML;       
        console.log("Button "+ i +" is clicked");
        let drumIndex = document.querySelectorAll(".drum")[i];
        getDrumName(drumIndex);     

    });
}

document.addEventListener("keydown", function(event){    
    try{
        let keyIndex = document.querySelector("."+event.key);
        
        getDrumName(keyIndex);
    }
    catch(err){
        console.log(event.key);
    }
    
});

function getDrumName(element){    
    console.log(element);
    let imgName = this.window.getComputedStyle(element, null).getPropertyValue("background-image");
    let btnStyle = element.classList[0];
    buttonAnimation(btnStyle);
    imgName = imgName.slice(43,imgName.length-6);
    makeSound(imgName);
}

function makeSound(soundName){
    let drumSound = new Audio("sounds/" + soundName + ".mp3");
    drumSound.play();
}

function buttonAnimation(currentKey) 
{

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}
