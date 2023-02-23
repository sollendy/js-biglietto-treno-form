let anni = document.getElementById("age");
let distanza = document.getElementById("distanza");
if ( isNaN(anni) || isNaN(distanza) || anni <= 0 || distanza <= 0) {
    //alert("errore nella digitazione dei caratteri");
    } else {
    let prezzo = distanza * 0.21;
    let sconto;
    let totale;
    if( anni < 18 ) {
    sconto = (prezzo / 100) * 20;
    totale = prezzo - sconto;
    } else if( anni > 65 ) {
    sconto = (prezzo / 100) * 40;
    totale = prezzo - sconto;
    } else {
    totale = prezzo;
    }

    document.writeln( ` Grazie mille per averci fornito le informazioni da noi richieste per poter erogare il nostro servizio. In base ai nostri calcoli, ci risulta che dati i suoi ${anni} anni e l'itinerario che conta ${distanza} Chilometri, le annunciamo che ha diritto ad un biglietto che ammonta a ${totale.toPrecision(4)} euro di prezzo.`);
}