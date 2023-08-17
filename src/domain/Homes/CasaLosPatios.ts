import type { Home } from './Home';
import { LosPatios } from './LosPatios';

export class CasaLosPatios implements Home {

    public name() {
        return "Casa en Conjunto Bellomonte"
    }

    public site() {
       return new LosPatios();
    }
 
    public price() {
        return 1500
    }
 }