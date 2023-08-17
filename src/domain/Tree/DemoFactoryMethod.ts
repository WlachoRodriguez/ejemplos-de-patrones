import { TreeFactory } from './TreeFactory';

export class DemoFactoryMethod {

    public static main(tree: string): string {
       const treeFactory = new TreeFactory();
 
       const typeFruit1 = treeFactory.getTree(tree);
       return typeFruit1?.fruit() ?? "No se reconoce el arbol";
    }
 }