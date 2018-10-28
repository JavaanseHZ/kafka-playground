import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerDataSource } from 'ng2-smart-table';
import { ClientRestService } from '../../@core/data/client-rest-service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './clients.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ClientsComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
       confirmDelete: true,
    },
    columns: {
      firstname: {
        title: 'First Name',
        type: 'string',
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
      },
      street: {
        title: 'Street',
        type: 'string',
      },
      city: {
        title: 'City',
        type: 'string',
      },
    },
  };

  source: ServerDataSource;
  clientRestService: ClientRestService;

  constructor(http: HttpClient, clientRestService: ClientRestService) {
    this.source = new ServerDataSource(http, { endPoint: 'http://localhost:4200/api/client' });
    this.clientRestService = clientRestService;
  }

  onDeleteConfirm(event): void {
    this.clientRestService.deleteClient(event.data.id).subscribe((response) => {
      event.confirm.resolve();
      this.source.remove(event.data);
      console.log(response);
    });
  }

  onCreateConfirm(event): void {
    const client = {
      firstname: event.newData.firstname,
      lastname: event.newData.lastname,
      street: event.newData.street,
      city: event.newData.city,
    }
    this.clientRestService.addClient(client).subscribe((response) => {
      event.confirm.resolve(event.newData);
      this.source.append(response);
      console.log(response);
    });
  }

  onEditConfirm(event): void {
    this.clientRestService.updateClient(event.data.id, event.newData).subscribe((response) => {
      event.confirm.resolve(event.newData);
      this.source.update(event.data, event.newData);
      console.log(response);
    });
  }

}
