import type { Home } from './Home';
import { LosPatios } from './LosPatios';

export class ApartamentoLosPatios implements Home {

    public name() {
        return "Apartamento Girasoles"
    }

    public site() {
       return new LosPatios();
    }
 
    public price() {
        return 3000
    }
 }