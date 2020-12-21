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
import { ConsultaComponent } from './view/consulta/consulta.component';
import { HeaderComponent } from './component/header/header.component';
import { MatTabsModule } from '@angular/material/tabs';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CadastroComponent,
    ConsultaComponent,
    HeaderComponent,
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
