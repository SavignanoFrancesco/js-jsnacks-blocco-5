//JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

$(document).ready(function(){

    //inizializzo un array di oggetti
    var lista_candidati = [
        {
            nome : 'gianni',
            cognome : 'rossi'
        },
        {
            nome : 'mario',
            cognome : 'verdi'
        },
        {
            nome : 'anna',
            cognome : 'bianchi'
        },
        {
            nome : 'pina',
            cognome : 'grigi'
        },
    ];

    //copio il primo array in un secondo array
    var assegnazione_candidati = lista_candidati;

    //array utile a controllare che non venga assegnata la stessa lettera a più candidati
    var controllo_ripetizioni = [];

    //contatore
    var i = 0;

    //scorro l'array
    while (i < assegnazione_candidati.length) {

        //genero una lettera casuale
        var lettera_casuale = rndChar();

        //se la lettera casuale non è stata già assegnata
        if (!controllo_ripetizioni.includes(lettera_casuale)) {

            //aggiungi position : lettera_casuale all'oggetto e passa all'oggetto successivo
            assegnazione_candidati[i].position = lettera_casuale;
            i++;

        }

        //pusho la lettera nell'array di controllo
        controllo_ripetizioni.push(lettera_casuale);

    }

    //stampa gli oggetti con la nuova proprietà
    console.log(assegnazione_candidati);

});


//funzione che genera una lettera casuale
function rndChar() {

   var lettera_random = '';
   var lettere = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

   lettera_random = lettere.charAt(Math.floor(Math.random() * lettere.length));

   return lettera_random;
}
