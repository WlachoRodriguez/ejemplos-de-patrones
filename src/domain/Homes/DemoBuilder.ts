import { ListaConstruir } from './ListaConstruir';

export class BuilderPatternDemo {
  public static main(lista: string[]): string {
    const listaConstruir = new ListaConstruir();
    const contruir = listaConstruir.lista(lista);
    return contruir.showCost();
  }
}
