import { Gegenstand } from './gegenstand'; //von Stackblitz automat. generiert

export class Schmuck extends Gegenstand {
  constructor(id: number, wert: number, public bezeichnung: string) {
    super(id, wert);
  }

  get toString(): string {
    return super.toString + '\t' + 'Bezeichnung: ' + this.bezeichnung;
  }
}
