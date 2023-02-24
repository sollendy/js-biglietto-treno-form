let anniEl = document.getElementById("age");
let distanzaEl = document.getElementById("distanza");
let bottoneEl = document.getElementById("insertBtn");



    bottoneEl.addEventListener('click', function() {
        if ( isNaN(anniEl.value) || isNaN(distanzaEl.value) || anniEl.value <= 0 || distanzaEl.value <= 0) {
            alert("errore nella digitazione dei caratteri");
        }

            let prezzo = distanzaEl.value * 0.21;
            let sconto;
            let totale;

        if ( anniEl.value < 18 ) {
             sconto = (prezzo / 100) * 20;
             totale = prezzo - sconto;
            } else if( anniEl.value > 65 ) {
             sconto = (prezzo / 100) * 40;
             totale = prezzo - sconto;
            } else {
             totale = prezzo;
            }
            
            document.getElementById("ticket").style.display = "flex";
            document.getElementById("ageTicket").innerHTML = "Anni del passeggero: " + anniEl.value;
            document.getElementById("chilometri").innerHTML = "Viaggio di Km: " + distanzaEl.value;
            document.getElementById("ammonto").innerHTML = "importo totale: €" + totale;
            console.log( "totale: €" + totale.toFixed(2) );
            //document.writeln( " Età passeggero: " + anniEl.value + " anni - Km di corsa: " + distanzaEl.value + " - importo totale: €" + totale.toFixed(2));
        })