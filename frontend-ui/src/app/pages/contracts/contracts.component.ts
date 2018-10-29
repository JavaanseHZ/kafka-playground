import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ContractRestService } from '../../@core/data/contract-rest-service';
import { EmptyFieldEditorComponent } from '../../@theme/components/table/empty-field-editor';
import { ClientRestService } from '../../@core/data/client-rest-service';
import { elementEnd } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './contracts.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ContractsComponent implements OnInit{
  
  clientArray = [];

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
      type: {
        title: 'Type',
        type: 'string',
        filter: false,
      },
      premium: {
        title: 'Premium',
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
      client: {
        title: 'Client',
        type: 'html',
        filter: false,
        valuePrepareFunction: (value) => value.lastname + ", " + value.firstname + "<br/>" + value.id,
        editor: {
          type: 'list',
          config:{
            list: this.clientArray,
          },
        },
      },
    },
  };

  source: LocalDataSource;
  contractRestService: ContractRestService;
  clientRestService: ClientRestService;

  constructor(contractRestService: ContractRestService, clientRestService: ClientRestService) {
    this.source = new LocalDataSource();
    this.contractRestService = contractRestService;
    this.clientRestService = clientRestService;
  }

  ngOnInit(): void {
    this.contractRestService.getContracts().subscribe(
      (data) => this.source.load(data)
    );
    this.clientRestService.getClients().subscribe(
      (data) => {
        data.forEach(element => {
          const client = {
            id:element.id,
            firstname: element.firstname,
            lastname: element.lastname,
          }
          this.settings.columns.client.editor.config.list.push({
            value: JSON.stringify(client),
            title: element.lastname + ", " + element.firstname + ", " + element.id, })
        });
        this.settings = Object.assign({}, this.settings);
      }
    );
  }

  onDeleteConfirm(event): void {
    this.contractRestService.deleteContract(event.data.id).subscribe(
      () => event.confirm.resolve()
    );
  }

  onCreateConfirm(event): void {
    const newClient = JSON.parse(event.newData.client)
    const contract = {
      id:null,
      type: event.newData.type,
      premium: event.newData.premium,
      client : newClient,
    }
    this.contractRestService.addContract(contract).subscribe(
      (response) => event.confirm.resolve(response)
    );
  }

  onEditConfirm(event): void {
    const newClient = JSON.parse(event.newData.client)
    const contract = {
      id:event.newData.id,
      type: event.newData.type,
      premium: event.newData.premium,
      client : newClient,
    }
    this.contractRestService.updateContract(event.data.id, contract).subscribe(
      () => event.confirm.resolve(contract)
    );
  }

}
