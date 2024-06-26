import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectivaComponent } from './directiva/directiva.component';
import { ClientesComponent } from './clientes/clientes.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ClienteService } from './clientes/cliente.service';


//configuración de enrutamiento
const routes:Routes = [
  {path:'', redirectTo:'/clientes', pathMatch:'full'},
  {path:'directiva', component:DirectivaComponent},
  {path:'clientes', component:ClientesComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectivaComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
