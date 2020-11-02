//JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

//inizializzo array di oggetti
$(document).ready(function(){

    //inizializzo un array di nomi
    var lista_nomi = ['marco','gianni','anna','piero','eleonora','maria','olmo','pina'];

    //quali numeri vanno bene?
    alert('I numeri devono essere tra 1 e ' + lista_nomi.length);

    do {

        //richiedo  all'utente due numeri
        var num1 = chiedi_numero();
        var num2 = chiedi_numero();

        //num1 deve essere minore di num2
        if (num1 >= num2) {
            alert('Il primo numero deve essere più piccolo del secondo');
        }

        //i numeri inseriti devono essere compresi tra 1 e la lunghezza dell'array
        if ((num1 < 1) || (num1 > lista_nomi.length) || (num2 < 1) || (num2 > lista_nomi.length)) {
            alert('I numeri devono essere tra 1 e ' + lista_nomi.length);
        }

    //ripeti fino a quando i numeri non sono validi
    } while ((num1 >= num2) || (num1 < 1) || (num1 > lista_nomi.length) || (num2 < 1) || (num2 > lista_nomi.length));


    //trasformo i numeri in indici adatti ad un array
    var indice1 = (num1 - 1);
    var indice2 = (num2 - 1);

    //inizializzo il nuovo array
    var nuova_lista_nomi = [];

    //scorro l'array da indice1 a indice2 e pusho i valori nella nuova lista
    for (var i = indice1; i <= indice2; i++) {
        nuova_lista_nomi.push(lista_nomi[i]);
    }

    console.log('Vecchia lista: ' + lista_nomi);
    console.log('Nuova lista: ' + nuova_lista_nomi);

});

//funzione che chede all'utente un numero che deve essere intero
function chiedi_numero(){

    do {
        var num = parseInt(prompt('Inserisci un numero: '));
        if (isNaN(num)) {
            alert('Inserire un numero!')
        }
    } while (isNaN(num));

    return num;

}
