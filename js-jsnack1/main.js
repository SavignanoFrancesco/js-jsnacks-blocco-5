//JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.

//inizializzo array di oggetti
$(document).ready(function(){
    var lista_bici = [
        {
            nome : 'bianchi',
            peso : 70
        },
        {
            nome : 'ducati',
            peso : 65
        },
        {
            nome : 'piaggio',
            peso : 60
        }
    ];

    //variabile che partendo dal primo peso si confronterà con il peso degli oggetti successivi
    var peso_corrente = lista_bici[0].peso;
    //variabile che indicherà la posizione della bici da trovare nell'array
    var indice_bici_leggera = 0;

    //scorro l'array
    for (var i = 0; i < lista_bici.length; i++) {

        //confronto il peso_corrente con quello successivo e , se il peso successivo è minore diventa il peso_corrente
        if (peso_corrente > lista_bici[i].peso){

            //salvo l'indice della bici più leggera
            indice_bici_leggera = i;
            peso_corrente = lista_bici[i].peso;

        }

    }
    console.log('Indice della bici più leggera nell\'array: ' + indice_bici_leggera);
    console.log('Peso: ' + peso_corrente);
    console.log('La bici più leggera è: ' + lista_bici[indice_bici_leggera].nome);
});
