let anniEl = document.getElementById("age");
let distanzaEl = document.getElementById("distanza");
let bottoneEl = document.getElementById("insertBtn");

if ( isNaN(anniEl) || isNaN(distanzaEl) || anniEl <= 0 || distanzaEl <= 0) {
    alert("errore nella digitazione dei caratteri");
    } else if (bottoneEl.addEventListener('click', function() {
    let prezzo = distanzaEl * 0.21;
    let sconto;
    let totale;
    if( anniEl < 18 ) {
    sconto = (prezzo / 100) * 20;
    totale = prezzo - sconto;
    } else if( anniEl > 65 ) {
    sconto = (prezzo / 100) * 40;
    totale = prezzo - sconto;
    } else {
    totale = prezzo;
    }}));

    document.writeln( ` Grazie mille per averci fornito le informazioni da noi richieste per poter erogare il nostro servizio. In base ai nostri calcoli, ci risulta che dati i suoi ${anniEl} anni e l'itinerario che conta ${distanzaEl} Chilometri, le annunciamo che ha diritto ad un biglietto che ammonta a ${totale.toPrecision(4)} euro di prezzo.`);
}