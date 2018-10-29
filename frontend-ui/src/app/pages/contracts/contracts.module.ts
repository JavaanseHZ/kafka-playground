import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ContractRestService } from '../../@core/data/contract-rest-service';
import { ContractsComponent } from './contracts.component';
import { CustomTableModule } from '../../@theme/components/table/custom-table.module';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CustomTableModule,
  ],
  declarations: [
    ContractsComponent,
  ],
  providers: [
    ContractRestService,
  ],
})
export class ContractsModule { }
