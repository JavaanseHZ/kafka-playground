import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientRestService } from '../../@core/data/client-rest-service';
import { ClientsComponent } from './clients.component';
import { CustomTableModule } from '../../@theme/components/table/custom-table.module';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
    CustomTableModule
  ],
  declarations: [
    ClientsComponent,
  ],
  providers: [
    ClientRestService,
  ],
})
export class ClientsModule { }
