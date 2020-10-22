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


// SETTAGGI DEI PARAMETRI FONDAMENTALI DEL GIOCO
// settaggio numero mine
var numeroMine = 16;

// settaggio dei livelli
var livello_0 = 100;
var livello_1 = 80;
var livello_2 = 50;

// settaggio delle scelte corrispondenti ai livelli
var sceltaA = 0;
var sceltaB = 1;
var sceltaC = 2;


// SVILUPPO
// ---INPUT RICHIESTI DALL'UTENTE
var difficoltaScelta = parseInt(prompt('Scegli un livello di difficoltà tra 0 e 2 compresi'));

while (difficoltaScelta != sceltaA && difficoltaScelta != sceltaB && difficoltaScelta != sceltaC) {
    alert('Input non valido, riprovare..');
    difficoltaScelta = parseInt(prompt('Scegli un livello di difficoltà tra 0 e 2 compresi'));
}

// trasformo il livello scelto dall'utente nel numero di scelte possibili
var rangeNumeriLivello;
if (difficoltaScelta == sceltaA) {
    rangeNumeriLivello = livello_0;
} else if (difficoltaScelta == sceltaB){
    rangeNumeriLivello = livello_1;
} else {
    rangeNumeriLivello = livello_2;
}

// trasformo il livello scelto dall'utente nel range di tentativi possibili
var rangePosizioniLibere = rangeNumeriLivello - numeroMine;


// ---ANALISI DEI DATI INSERITI
// faccio generare 16 numeri al programma compresi tra 1 e il limite massimo dipendente dal livllo scelto
var posizioneMine = [];
for (var i = 0; i < numeroMine; i++) {
    var numeriRandom = Math.floor(Math.random() * 100) + 1;
    posizioneMine.push(numeriRandom);
}
console.log(posizioneMine);

// chiedo a l'utente di inserire un numero compreso tra 1 e il limite superiore
var userInput;
var posizioniSafe = [];

// devo ripetere questo ciclo di richiesta numeri all'utente fintantochè:
// - l'utente non cade su una mina;
// - l'utente non inserisce il numero massimo di lanci
// (che corrisponderà alla lunghezza massima di posizioniSafe.length)
var arbitro = false;
do {
    userInput = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + rangeNumeriLivello));

    while (isNaN(userInput) || userInput < 0 || userInput > rangeNumeriLivello) {
        alert('Input non valido, riprovare..');
        userInput = parseInt(prompt('Inserisci un numero compreso tra 1 e ' + rangeNumeriLivello));
    }
        // verifico che l'utente non sia caduto su una mina
    if (posizioneMine.includes(userInput)) {
        alert('Hai preso una mina, hai perso :(');
        arbitro = true;
    } else if (posizioniSafe.includes(userInput)) {
        alert('Inserire un numero differente tra quelli già inseriti: ' + posizioniSafe);
    } else {
        posizioniSafe.push(userInput);
        // console.log(posizioniSafe);
    }

} while ((posizioniSafe.length < rangePosizioniLibere) && (arbitro == false));

// comunico il risultato all'utente
console.log('Sei riuscito a inserire n.' + posizioniSafe.length + ' numeri:');
console.log(posizioniSafe);

// calcolo lo score dell'utente e lo comunico
var score = Math.round((100 * posizioniSafe.length) / rangePosizioniLibere);
console.log('Hai ottenuto uno score del: ' + score + '%');
