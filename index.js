
var numberOfDrumBottons = document.querySelectorAll(".drum").length

for (let i = 0; i < numberOfDrumBottons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function(){
        alert("I got clicked");
        
    
    })
}

    

