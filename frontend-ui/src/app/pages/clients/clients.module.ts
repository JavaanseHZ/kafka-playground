import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { ClientRestService } from '../../@core/data/client-rest-service';
import { ClientsComponent } from './clients.component';

@NgModule({
  imports: [
    ThemeModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ClientsComponent,
  ],
  providers: [
    ClientRestService,
  ],
})
export class ClientsModule { }
