let tamanho = document.querySelectorAll(".drum").length;

for (let i = 0; i<tamanho; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", (e) => {

        let buttonHTML = e.target.innerHTML;
    
        som(buttonHTML);
        
        animacao(buttonHTML);
    })
}

document.addEventListener('keydown', (e) => {
    som(e.key);
    animacao(e.key);
})

som = (key) => {
    
    switch (key) {

        case 'a':
            let caixa = new Audio("sounds/caixa.mp3");
            caixa.play();   
            break;
        
        case 's':
            let crash = new Audio("sounds/crash.mp3");
            crash.play();   
            break;

        case 'd':
            let bumbo = new Audio("sounds/bumbo.mp3");
            bumbo.play();   
            break;

        case 'h':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();   
            break;

        case 'j':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();   
            break;
    
        case 'k':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();   
            break;
        

        case 'l':
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();   
            break;

        default:
            console.log(buttonHTML);
            console.log(key);
            break;
    }
}

animacao = (key) => {

    let but = document.querySelector("." + key);
  
    but.classList.add("pressed");
  
    setTimeout( () => {
      but.classList.remove("pressed");
    }, 90);
  
  }


