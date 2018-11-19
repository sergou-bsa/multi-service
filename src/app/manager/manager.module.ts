import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerComponent } from './manager.component';
import { ManagerRoutingModule } from './manager-routing.module';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { AdmSidebarComponent } from './shared/components/adm-sidebar/adm-sidebar.component';
import { AdmSidebarMenuComponent } from './shared/components/adm-sidebar-menu/adm-sidebar-menu.component';
import { AdmPagesComponent } from './adm-pages/adm-pages.component';
import { AdmControlPagesComponent } from './adm-pages/adm-control-pages/adm-control-pages.component';
import { PagesControlService } from './shared/services/pages-control.service';
import { AdmHeaderComponent } from './shared/components/adm-header/adm-header.component';
import { AdmFooterComponent } from './shared/components/adm-footer/adm-footer.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AcpFormComponent } from './adm-pages/adm-control-pages/acp-form/acp-form.component';

@NgModule({
  declarations: [
    ManagerComponent,
    AdmHomeComponent,
    AdmSidebarComponent,
    AdmSidebarMenuComponent,
    AdmPagesComponent,
    AdmControlPagesComponent,
    AdmHeaderComponent,
    AdmFooterComponent,
    AcpFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ManagerRoutingModule
  ],
  providers: [PagesControlService]
})
export class ManagerModule {}
