import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { AdmHomeComponent } from './adm-home/adm-home.component';
import { AdmPagesComponent} from './adm-pages/adm-pages.component';
import { AdmControlPagesComponent } from './adm-pages/adm-control-pages/adm-control-pages.component';


const routes: Routes = [
  {path: 'manager', component: ManagerComponent, children: [
    {path: 'home', component: AdmHomeComponent},
    {path: 'pages', component: AdmPagesComponent, children: [
      {path: 'control-pages', component: AdmControlPagesComponent}
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule {}
