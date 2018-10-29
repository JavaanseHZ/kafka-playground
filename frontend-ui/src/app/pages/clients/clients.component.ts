import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ClientRestService } from '../../@core/data/client-rest-service';
import { EmptyFieldEditorComponent } from '../../@theme/components/table/empty-field-editor';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './clients.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ClientsComponent implements OnInit{
  
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
        filter: false,
      },
      lastname: {
        title: 'Last Name',
        type: 'string',
        filter: false,
      },
      street: {
        title: 'Street',
        type: 'string',
        filter: false,
      },
      city: {
        title: 'City',
        type: 'string',
        filter: false,
      },
      id: {
        title: 'ID',
        type: 'string',
        filter: false,
        editable: false,
        editor: {
          type: 'custom',
          component: EmptyFieldEditorComponent,
        },
      },
    },
  };

  source: LocalDataSource;
  clientRestService: ClientRestService;

  constructor(clientRestService: ClientRestService) {
    this.source = new LocalDataSource();
    this.clientRestService = clientRestService;
  }

  ngOnInit(): void {
    this.clientRestService.getClients().subscribe(
      (data) => this.source.load(data)
    );
  }

  onDeleteConfirm(event): void {
    this.clientRestService.deleteClient(event.data.id).subscribe(
      () => event.confirm.resolve()
    );
  }

  onCreateConfirm(event): void {
    const client = {
      firstname: event.newData.firstname,
      lastname: event.newData.lastname,
      street: event.newData.street,
      city: event.newData.city,
    }
    this.clientRestService.addClient(client).subscribe(
      (response) => event.confirm.resolve(response)
    );
  }

  onEditConfirm(event): void {
    this.clientRestService.updateClient(event.data.id, event.newData).subscribe(
      () => event.confirm.resolve(event.newData)
    );
  }

}
