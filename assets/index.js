var number1 = document.querySelector("#number1");
var number2 = document.querySelector("#number2");
var time = document.querySelector(".time");

this.interval()
this.aleat();

function aleat(){

    var number1Aleat = Math.ceil(Math.random() * 100 + 1);
    var number2Aleat = Math.ceil(Math.random() * 10 + 1);

    console.log(number1Aleat, number2Aleat);

    number1.innerHTML = number1Aleat;
    number2.innerHTML = number2Aleat;

}

function verify (){
    if(document.querySelector("#input").value == number1Aleat * number2Aleat) {
        window.aleat()
        
        return console.log("Acertou");
    } else {
        
        return console.log("Errou")
    }
}

document.addEventListener("keypress", function(e) {
    e.which == 13
        verify();
});


var cont = 0; // visivel em escopo "global"

function interval(){
    var d = new Date(); // visivel somente dentro do bloco
    var t = d.toLocaleTimeString("pt-br");

    setInterval(function () {
        
        time.innerHTML = t;

    }, 10);
}
