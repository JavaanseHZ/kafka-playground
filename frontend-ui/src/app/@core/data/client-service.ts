import { Injectable } from '@angular/core';

@Injectable()
export class ClientService {

  data = [{
    id: 1,
    firstname: 'Mark',
    lastname: 'Otto',
    street: 'Main Street 5',
    city: 'London',
  }, {
    id: 2,
    firstname: 'Jacob',
    lastname: 'Thornton',
    street: 'Garden Street 16',
    city: 'Manchester',
  }];

  getData() {
    return this.data;
  }
}
