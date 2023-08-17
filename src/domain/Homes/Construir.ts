import type { Home } from './Home';

export class Construir {
  homes: Home[] = [];

  addItem(home: Home) {
    this.homes.push(home);
  }

  getCost() {
    let cost = 0;
    this.homes.forEach((home) => {
      cost += home.price();
    });
    return cost;
  }

  showCost(): string {
    let response = '';
    this.homes.forEach((home) => {
      if (response === '') {
        response =
          home.name() +
          ' ubicado en ' +
          home.site().site() +
          ' el cual tiene un valor de ' +
          home.price();
      } else {
        response =
          response +
          ', ' +
          home.name() +
          ' ubicado en ' +
          home.site().site() +
          ' el cual tiene un valor de ' +
          home.price();
      }
    });
    return response;
  }
}
