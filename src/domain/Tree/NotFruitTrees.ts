import { PineTree } from './PineTree';
import { LemonTree } from './LemonTree';
import { MangoTree } from './MangoTree';

export class DemoNotFruitTrees {
  public static main(tree: string): string {
    if (tree === 'PineTree') {
      new PineTree();
      return 'Se planto el arbol de pino';
    }
    return 'No se pudo plantar ningun arbol';
  }
}
