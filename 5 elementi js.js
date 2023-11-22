//Muutuja(d)/

//Muutujale paned arvu, mida võid kasutada hiljem*/


let kolm = 3 //----- Teeme tähis nimega "kolm" ja paneme väärtuseks "3" -----/
let kaks = 2 //----- Teeme teise tähis nimega "kaks" ja paneme väärtuseks "2" -----/
let arv = kolm + kaks; //----- Liidame kokku "kolm" ja "kaks" -----/

console.log(arv); //-- koonsol trükib välja seda nagu "arv", antud hetkel vastus on 5. "console.log(arv);" on sama mis "print(arv) pythonis"//




//Andmetüübid (5)//


    //"String" on text//

        let tervitus = 'Sieg Heil!'; //----- Siin on string "Sieg Heil!" -----/
        console.log(tervitus); //----- See kuvab konsoolis stringi "Sieg Heil! -----"

        let esimeneNimi = 'John';
        let teineNimi = 'Doe';
        let täisNimi = esimeneNimi + ' ' + teineNimi; //----- Ühendame kaks stringi -----/
        console.log(täisNimi); //----- See näitab konsoolis täisnime "John Doe" -----//





    //"Numbers" on numbrid ( ͡° ͜ʖ ͡°)//


    let neli = 4
    console.log(neli) //----- Kui sa kasutad juttumärgid consol.log("4") siis see on String, kuna program loeb väja mis on on juttu märgi sees. Kui sa aga ei pane juttu märgi console.log(neli) siis programm loeb välja tähise mille väärtuse sa kirjutasid -----/

    



    //"Boolean" on "tõne" või/ja "väär"//

    let mathiasTöötabVikingBurgeris = true; //----- Siin on booleani väärtus true (tõene) -----/
    let mathiasOnKoolis = false; // Siin on booleani väärtus false (väär) -----/





    //"Array" JavaScriptis on andmestruktuur, mis võimaldab salvestada mitu väärtust ühte muutujasse. Need väärtused võivad olla erinevat tüüpi andmed, nagu stringid ja/või numbrid booleanid//

    let nimed = ['John', 'Sarah', 'Tom']; //----- Siin loome massiivi nimega "nimed" ja lisame sinna kolm nime -----//

    console.log(nimed); //----- See näitab konsoolis kõiki nimesid -----//
    console.log(nimed[0]); //----- See näitab konsoolis esimest nime massiivis, mis on 'John' -----//





    //"Object" on JavaScriptis on andmestruktuur, mis võimaldab sul salvestada mitut seotud väärtust ühte muutujasse.//

    let inimene = { //----- Siin loome objekti nimega "inimene" -----//
        nimi: 'John', //----- Võti "nimi" ja selle väärtus 'John' -----//
        vanus: 30, //----- Võti "vanus" ja selle väärtus 30 -----//
        onTäisealine: true //----- Võti "onTäisealine" ja selle väärtus true -----//
      };
      
      console.log(inimene); //----- See näitab konsoolis kogu objekti -----//
      console.log(inimene.nimi); //----- See näitab konsoolis inimese nime, mis on 'John' -----//
      console.log(inimene.vanus); //----- See näitab konsoolis inimese vanust, mis on 30 -----//
      


      //Loop (tsükkel) on programmeerimisstruktuur, mis võimaldab funktsioonil korduvalt midagi teha või mingit tegevust korrata.//

      const headPhones = ["Headphone1", "Headphone2", "Headphone3", "Headphone4"]; //----- teed object -----//

for (let index = 0; index < headPhones.length; index++) { //----- alustab lugemisest välja esimesest headPhones  "headPhones2, headPhones2" jne kuni ei jõua viimasele -----//
    console.log(headPhones[index]); //----- loeb välja headPhones -----//
}





//Funktsioon//

function tervita(nimi) { // Siin defineerime funktsiooni nimega "tervita", mis võtab argumendina "nimi"
    console.log('Tere, ' + nimi + '!'); // See prindib konsoolis tervitusnime koos antud nimega
  }
  
  tervita('John'); // Siin kutsutakse välja funktsioon "tervita" ning antakse argument 'John'
  tervita('Sarah'); // Siin kutsutakse välja sama funktsioon teise nimega 'Sarah'
  