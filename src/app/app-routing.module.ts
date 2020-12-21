import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './view/cadastro/cadastro.component';
//import { ConsultaComponent } from './view/consulta/consulta.component';
import { TabConsultaComponent } from './component/tab-consulta/tab-consulta.component';

const routes: Routes = [
  {
    path: "",
    component: CadastroComponent
  },
  {
    path: "consulta",
    component: TabConsultaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
