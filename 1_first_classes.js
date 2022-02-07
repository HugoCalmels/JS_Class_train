let helloCount = 0

const sayHello = () => {
    console.log("Hello");
    helloCount += 1;

    if (helloCount >= 10) {
        console.log("OK, I'm stopping :D");
        clearInterval(sayHelloEverySecond)
    }
}

// Affiche "Hello" dans la console, toutes les secondes pendant 10 secondes :
const sayHelloEverySecond = setInterval(sayHello, 1000);