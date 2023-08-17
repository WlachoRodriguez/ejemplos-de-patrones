import { SaludoSimple } from './SaludoSimple';

export class LlamadoSaludoSimple {
  public static main(tipoSaludo: boolean): string {
    const object = SaludoSimple.getInstance();
    if (tipoSaludo) {
      return object.showSaludo();
    } else {
      return object.showDespedida();
    }
  }
}
