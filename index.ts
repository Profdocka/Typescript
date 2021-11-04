// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>`;


var a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
var s1: Schmuck = new Schmuck(2, 3, "Ohrstecker")
var t1: Tresor = new Tresor();

t1.addGegenstand(a1);
t1.addGegenstand(s1);


//console.log(a1.toString);
//console.log(t1.berechneGesamtwert())
console.log(t1.toString());


//todo: Ergänzungen lt. Aufgabenstellung
/**
 * Beispiel für try-catch mit dem Werfen des Errors
 */
try {
  //todo
} catch (error) {
  console.log(error.name + ":\t" + error.message);
}
