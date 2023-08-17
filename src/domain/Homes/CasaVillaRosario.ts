import type { Home } from './Home';
import { VillaRosario } from './VillaRosario';

export class CasaVillaRosario implements Home {

    public name() {
        return "Casa en Conjunto Ebano"
    }

    public site() {
       return new VillaRosario();
    }
 
    public price() {
        return 3500
    }
 }