import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HeaderComponent} from './components/header/header.component'
import { AppComponent } from './app.component';
import {BodyComponent} from "./components/body/body.component";
import {FooterComponent} from "./components/footer/footer.component";
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import { MenuLateralInternoComponent } from './components/menu-lateral-interno/menu-lateral-interno.component';
import { NgxResizableModule } from '@3dgenomes/ngx-resizable';
import { VistaMenuComponent } from './pages/vista-menu/vista-menu.component';
import {AppRoutingModule} from "./app-routing.module";
import { AddGestionComponent } from './pages/add-gestion/add-gestion.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MenuLateralComponent,
    MenuLateralInternoComponent,
    VistaMenuComponent,
    AddGestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
