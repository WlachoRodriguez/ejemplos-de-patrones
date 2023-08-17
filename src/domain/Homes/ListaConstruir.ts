import { ApartamentoLosPatios } from './ApartamentoLosPatios';
import { CasaLosPatios } from './CasaLosPatios';
import { CasaVillaRosario } from './CasaVillaRosario';
import { Construir } from './Construir';

export class ListaConstruir {
  lista(lista: string[]): Construir {
    const construir = new Construir();
    lista.forEach((home) => {
      switch (home) {
        case 'ApartamentoLosPatios':
          construir.addItem(new ApartamentoLosPatios());
          break;
        case 'CasaLosPatios':
          construir.addItem(new CasaLosPatios());
          break;
        case 'CasaLVilla':
          construir.addItem(new CasaVillaRosario());
          break;
      }
    });
    return construir
  }
}
