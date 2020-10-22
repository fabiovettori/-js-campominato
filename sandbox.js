// ESERCIZIO:
// Campo minato
// Il programma deve generare 16 numeri compresi tra 1 e 100: queste saranno le mine.
//
// Dopodiché, il programma deve chiedere all'utente un numero alla volta e verificare se il numero indicato dall'utente è una mina oppure no.
// Se l'utente becca una mina, il gioco finisce, mentre, se il numero non corrisponde ad una mina, il gioco prosegue e il programma chiede all'utente un nuovo numero.
// Alla fine della partita, il programma comunica all'utente il suo punteggio, cioè quanti numeri è riuscito ad inserire prima che il gioco finisse.
//
// BONUS (facoltativo): all'inizio del gioco, il programma chiede all'utente il livello di difficoltà:
// 0 = l'intervallo di numeri possibili è tra 1 e 100
// 1 = l'intervallo di numeri possibili è tra 1 e 80
// 2 = l'intervallo di numeri possibili è tra 1 e 50
// In ogni caso, le mine sono sempre 16.


// faccio generare 16 numeri al programma compresi tra 1 e 100
var posizioneMine = [];
for (var i = 0; i < 16; i++) {
    var numeriRandom = Math.floor(Math.random() * 100) + 1;
    posizioneMine.push(numeriRandom);
}
console.log(posizioneMine);

// chiedo a l'utente di inserire un numero compreso tra 1 e 100
var userInput;
var posizioniSafe = [];

// devo ripetere questo ciclo di richiesta numeri all'utente fintantochè:
// - l'utente non cade su una mina;
// - l'utente non inserisce il numero massimo di lanci, ovvero 100 - 16 = 84
// (che corrisponderà alla lunghezza massima di posizioniSafe.length)
var arbitro = false;
do {
    userInput = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));

    while (isNaN(userInput) || userInput < 0 || userInput > 100) {
        alert('Input non valido, riprovare..');
        userInput = parseInt(prompt('Inserisci un numero compreso tra 1 e 100'));
    }
        // verifico che l'utente non sia caduto su una mina
    if (posizioneMine.includes(userInput)) {
        alert('Hai preso una mina, hai perso :(');
        arbitro = true;
    } else {
        posizioniSafe.push(userInput);
        console.log(posizioniSafe);
    }

} while ((posizioniSafe.length < 84) && (arbitro == false));

// comunico il risultato all'utente
console.log('Sei riuscito a inserire n.' + posizioniSafe.length + ' numeri');

// calcolo lo score dell'utente e lo comunico
var score = Math.round((100 * posizioniSafe.length) / 84);
console.log('Hai ottenuto uno score del: ' + score + '%');
