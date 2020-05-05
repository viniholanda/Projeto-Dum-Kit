
var numberOfDrumBottons = document.querySelectorAll(".drum").length // . drum é utilizado quando é especificado class

//var audio = new Audio ('sounds/tom-1.mp3')

for (let i = 0; i < numberOfDrumBottons; i++) { 

    document.querySelectorAll("button")[i].addEventListener("click", function(){
             
       console.log (this.style.color = "white")
        
    })
}



    

