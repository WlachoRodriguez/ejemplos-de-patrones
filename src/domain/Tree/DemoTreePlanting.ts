import { DemoFruitTrees } from './FruitTrees';
import { DemoNotFruitTrees } from './NotFruitTrees';

export class DemoTreePlanting {
  public static main(fruitTree: boolean, tree: string): string {
    if (fruitTree) {
      return DemoFruitTrees.main(tree);
    } else {
      return DemoNotFruitTrees.main(tree);
    }
  }
}
