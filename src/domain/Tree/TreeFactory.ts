import { AppleTree } from './AppleTree';
import { LemonTree } from './LemonTree';
import { MangoTree } from './MangoTree';

export class TreeFactory {
    getTree(fruitType: string){
       if(fruitType === "AppleTree"){
          return new AppleTree();
       } else if(fruitType === "LemonTree"){
          return new LemonTree();
       } else if(fruitType === "MangoTree"){
          return new MangoTree();
       }
    }
 }