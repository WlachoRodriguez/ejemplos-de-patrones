import { SaludoSimple } from './SaludoSimple';

export class LlamadoSaludoSimple {
  public static main(): string {
    const object = SaludoSimple.getInstance();
    return object.showSaludo();
  }
}
