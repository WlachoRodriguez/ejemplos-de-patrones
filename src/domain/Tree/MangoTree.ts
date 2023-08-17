import type { Tree } from './Tree';

export class MangoTree implements Tree {
  fruit(): string {
    return "Mangos"
  }
}
