

//Detecting botton press

var numberOfDrumBottons = document.querySelectorAll(".drum").length // . drum é utilizado quando é especificado class



for (let i = 0; i < numberOfDrumBottons; i++) {

    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var buttonInner = this.innerHTML
        MakeSounds(buttonInner)
        buttonAnimation(buttonInner)



    })
}
    //Detecting Keyboard press 

    document.addEventListener("keydown", (press) => {
        
        MakeSounds(event.key)
        buttonAnimation(event.key)
      
    })

    function MakeSounds(key){

        switch (key) {
            case "w": 
                var crash = new Audio('sounds/crash.mp3')
                crash.play()


                break;
            case "a":
                var kick_bass = new Audio('sounds/kick-bass.mp3')
                kick_bass.play()

                break;
            case "s":
                var snare = new Audio('sounds/snare.mp3')
                snare.play()
                break;

            case "d":
                var tom1 = new Audio('sounds/tom-1.mp3')
                tom1.play()
                break;

            case "j":
                var tom2 = new Audio('sounds/tom-2.mp3')
                tom2.play()
                break;

            case "k":
                var tom3 = new Audio('sounds/tom-3.mp3')
                tom3.play()
                break;

            case "l":
                var tom4 = new Audio('sounds/tom-4.mp3')
                tom4.play()
                break;

            default:
                console.log(buttonInner)

        }

    }
        function buttonAnimation(currentKey) {
         var activeButton = document.querySelector("."+ currentKey)
         activeButton.classList.add("pressed")
         setTimeout(() => {
             activeButton.classList.remove("pressed")
         }, 100);
            
        }