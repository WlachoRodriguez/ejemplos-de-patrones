import { AppleTree } from './AppleTree';
import { LemonTree } from './LemonTree';
import { MangoTree } from './MangoTree';

export class DemoFruitTrees {
  public static main(tree: string): string {
    if (tree === 'AppleTree') {
      new AppleTree();
      return 'Se planto el arbol de manzana';
    } else if (tree === 'LemonTree') {
      new LemonTree();
      return 'Se planto el arbol de limon';
    } else if (tree === 'MangoTree') {
      new MangoTree();
      return 'Se planto el arbol de mango';
    }
    return 'No se pudo plantar ningun arbol';
  }
}
