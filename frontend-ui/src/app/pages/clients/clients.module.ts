import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientsRoutingModule, routedComponents } from './clients-routing.module';
import { ClientService } from '../../@core/data/client-service';

@NgModule({
  imports: [
    ThemeModule,
    ClientsRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    ClientService,
  ],
})
export class ClientsModule { }
