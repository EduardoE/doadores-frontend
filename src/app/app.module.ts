import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './view/cadastro/cadastro.component';
import { ConsultaComponent } from './view/consulta/doadores-estado/consulta.component';
import { HeaderComponent } from './component/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { TabConsultaComponent } from './component/tab-consulta/tab-consulta.component';
import { ImcDoadoresComponent } from './view/consulta/imc-doadores/imc-doadores.component';
import { PercentualObesosComponent } from './view/consulta/percentual-obesos/percentual-obesos.component';
import { IdadeTiposanguineoComponent } from './view/consulta/idade-tiposanguineo/idade-tiposanguineo.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastroComponent,
    ConsultaComponent,
    HeaderComponent,
    TabConsultaComponent,
    ImcDoadoresComponent,
    PercentualObesosComponent,
    IdadeTiposanguineoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatTabsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
