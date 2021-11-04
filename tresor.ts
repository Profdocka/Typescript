import { Gegenstand } from './gegenstand';
import { GegenstandNichtGefundenError } from './gegenstandNichtGefundenError';

export class Tresor {
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
  public gegenstaende: Gegenstand[];

  constructor() {
    this.gegenstaende = new Array();
  }

  //todo Gegenstand hinzufügen (addGegenstand)
  addGegenstand(g: Gegenstand): void {
    this.gegenstaende.push(g);
  }

  //todo Gegenstand finden (getGegenstand)
  getGegenstand(_id: number): Gegenstand {
    for (let gegenstand of this.gegenstaende) {
      if (gegenstand.id === _id) {
        return gegenstand;
      }
      throw new GegenstandNichtGefundenError(_id);
    }
  }

  removeGegenstand(g: Gegenstand): void {
    this.gegenstaende = this.gegenstaende.filter(
      (gegenstand) => gegenstand != g
    );
  }

  /**
   * Drei verschiedene Varianten des Durchsuchens des Arrays möglich:
   * a) forEach-Schleife --> in typescript 'for ... of'
   *    --> vgl. https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#forof-statements
   * b) for-Zählerschleife mit Iteration
   *    --> vergleichbar mit der Umsetzung in Java
   * c) Methode find() auf das Array anwenden
   *    --> vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   */

  //todo Gegenstand aus Tresor nehmen (removeGegenstand)
  /**
   * 1. sinnvollerweise zunächst prüfen, ob der Gegenstand im Tresor ist
   *    (vgl. gewählte Variante für "Gegenstand finden", also für 'getGegenstand')
   * 2. wenn nicht gefunden, Fehler werfen (GegenstandNichtGefundenError), ebenfalls wie in 'getGegenstand'
   * 3. Methode filter() auf das Array anwenden, um dieses neu aufzubauen
   *    vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */

  berechneGesamtwert(): number {
    let summeWerte: number = 0;
    this.gegenstaende.forEach((gegenstand) => (summeWerte += gegenstand.wert));
    return summeWerte;
  }

  toString(): string {
    let text: string = 'LISTE DER GEGENSTÄNDE';
    text += this.gegenstaende.forEach(Gegenstand.toString);
    return text;
  }
}

function _g(_g: any, arg1: (Gegenstand: any) => boolean) {
  throw new Error('Function not implemented.');
}
