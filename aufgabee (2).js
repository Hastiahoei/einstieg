<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Titel</title>
        <style></style>
        
        <script>
            'use strict';
           
            let hAsti = 30 ;
            let maHtab = 20;

             if (hAsti == maHtab ) {
                 console.log("beide sind gleich");
             }
             else if (hAsti > maHtab){
             console.log("hasti ist grosser als mahtab") ;
            } else { 
             console.log("mahtab ist kleiner als hasti") ;
        
            }

           //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            let myName = "sophia";
            let yourName ="stephan";

            if (myName.length ==  yourName.length){
                    console.log("Beide sind gleich");
            }
            else if (myName.length!== yourName.length){
                    console.log("Die sind nicht gleich");
            } else{
                console.log (" tschüss");
            }

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


            let eingabe = prompt("deine eingabe ");
            if(eingabe == ""){
                console.log("sie gebe ihre name nicht ein");
            }              
            
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

      

            let TeXt = "Ihre Eingabe";
            let eingabee = prompt(TeXt);

            if (eingabee == '') {
            console.log("Es wurde keine Eingabe gemacht.");
            } else if (eingabee == null) {
            if (confirm('Wirklich abbrechen?'))
             {
            console.log("Es wurde Abbrechen geklickt.");
            } else {
            eingabee = prompt(TeXt)
            }
            }

            if (eingabee) {
            console.log(eingabee);
            }

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



            let TeXtt = 'Ihre Eingabe';
            let eingab = prompt(TeXtt);

            if (eingabe == '') {
            console.log('Es wurde keine Eingabe gemacht.');
            } else if (eingabe == null) {
            if (confirm('Wirklich abbrechen?')) {
            console.log('Es wurde Abbrechen geklickt.');
            } else {
            eingabe = prompt(TeXtt)
            }
            }

            if (eingab.length > 10) {
            console.log(eingab);
            }
            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            let meinName = "sahar"
            let deinName = "mani"

            if (meinName > deinName){
                console.log("Der erste Name steht vorn im Alfabet");
            } else {
                console.log("Der zweite Name steht vorn im Alfabet");
            }

            //!!!!!!!!!!!!!!!!!!!!!!!!!!!!

            let vname1 = prompt('Erster Name');
            let vname2 = prompt('Zweiter Name');

            if (vname1 < vname2) {
            console.log(`${vname1} steht vor ${vname2} im Alfabet`);
            } else {
            console.log(`${vname1} steht hinter ${vname2} im Alfabet`);
            }

        </script>
    </head>
    <body>
    
    </body>
</html>