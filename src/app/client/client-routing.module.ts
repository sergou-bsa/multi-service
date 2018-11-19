import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClientComponent } from './client.component';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientItInfrastructureComponent } from './client-it-infrastructure/client-it-infrastructure.component';
import { ClientServiceSupportComponent } from './client-service-support/client-service-support.component';
import { ClientLegalEntitiesComponent } from './client-legal-entities/client-legal-entities.component';
import { ClientIndividualsComponent } from './client-individuals/client-individuals.component';
import { ClientContactsComponent } from './client-contacts/client-contacts.component';

const routes: Routes = [
  {path: '', component: ClientComponent, children: [
    {path: 'home', component: ClientHomeComponent},
    {path: 'it-infrastructure', component: ClientItInfrastructureComponent},
    {path: 'service-support', component: ClientServiceSupportComponent},
    {path: 'legal-entities', component: ClientLegalEntitiesComponent},
    {path: 'individuals', component: ClientIndividualsComponent},
    {path: 'contacts', component: ClientContactsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule {}
