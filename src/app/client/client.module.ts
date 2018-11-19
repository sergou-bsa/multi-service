import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientItInfrastructureComponent } from './client-it-infrastructure/client-it-infrastructure.component';
import { ClientServiceSupportComponent } from './client-service-support/client-service-support.component';
import { ClientLegalEntitiesComponent } from './client-legal-entities/client-legal-entities.component';
import { ClientIndividualsComponent } from './client-individuals/client-individuals.component';
import { ClientContactsComponent } from './client-contacts/client-contacts.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeaderMenuComponent } from './shared/components/header-menu/header-menu.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageService} from './shared/services/page.service';

@NgModule({
  declarations: [
    ClientComponent,
    ClientHomeComponent,
    ClientItInfrastructureComponent,
    ClientServiceSupportComponent,
    ClientLegalEntitiesComponent,
    ClientIndividualsComponent,
    ClientContactsComponent,
    HeaderComponent,
    HeaderMenuComponent,
    SliderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ],
  providers: [PageService]
})
export class ClientModule {}
