import { Gegenstand } from './gegenstand'; //von Stackblitz automat. generiert

export class Aktie extends Gegenstand {
  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) {
    super(id, wert);
  }

  get toString(): string {
    return super.toString + '\t' + 'Bezeichnung: ' + this.unternehmen + "\t Nennwert: " + this.nennwert;
  }
}
