

/*
-  creazione constanti per prendere elementi dall HTML BY ID.
-  creazione array dove inserire numeri random e numeri inseriti dall'USER.
-  creazione function per num RANDOM.
-  inserimento numeri random nell'array tramite ciclo for (let i = 0; i < 5; i++)
   ed eseguiamo il push dei numeri random nell array con min=1 e max=100.
-  stampa numeri random.
-  oscuramento array dopo il tempo stabilito (30sec=30.000ms) con un inner di un elemento vuoto "".
-  creo un ulteriore timeout di 60 sec per dare il tempo all'USER di inserire i numeri nel PROMPT che verrà creato 5 VOLTE. 
-  eseguo  il push nell array "userNum" dei numeri del prompt.
-  stampa numeri inseriti dall'USER.
-  stampa numeri che è riuscito ad indovinare tramite richiamo della funzione "compNum" (compara numeri random e numeri USER e se sono inclusi li aggiunge in un array che contiene i numeri indovinati).
-  eseguo controlli (if-else) per stampare i risultati  in pagina.

*/


const revealRandomNum = document.getElementById("revealNumber");
const outputNum = document.getElementById("outputNum");
const randomNum = [];
const userNum = [];

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (let i = 0; i < 5; i++) {

    randomNum.push(getRandomNumber(1, 100));

}

revealRandomNum.innerHTML = ` ------   ${randomNum}   ------- `;

const timeoutA = setTimeout(function () {
    revealRandomNum.innerHTML = "";
}, 30000)

const timeoutB = setTimeout(function () {
    for (let i = 0; i < 5; i++) {
        userNum.push(parseInt(prompt("inserisci i numeri")));
    }
    revealRandomNum.innerHTML =
        "Numeri inseriti :" + "<br>" + userNum + "<br>";
    const trueNum = compNum(randomNum, userNum)
    if (trueNum.length > 0) {
        outputNum.innerHTML = " Numeri  indovinati :" + "<br>" + trueNum + "<br>" + "<br>" + "HAI VINTO! :)";

    } else {
        revealRandomNum.innerHTML = "I numeri inseriti sono" + "<br>" + userNum + "<br>";
        outputNum.innerHTML = "Numeri non indovinati :(";

    }

}, 31000);
function compNum(randomNum, userNum) {
    const veriNum = [];
    for (let i = 0; i < randomNum.length; i++) {
        if (userNum.includes(randomNum[i])) {
            veriNum.push(randomNum[i]);
        }
    }
    return veriNum;
}
