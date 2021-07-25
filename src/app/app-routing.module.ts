import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddGestionComponent} from './pages/add-gestion/add-gestion.component';
import {VistaMenuComponent} from "./pages/vista-menu/vista-menu.component";

const routes: Routes = [
  {path: 'AddGestion', component: AddGestionComponent},
  {path: 'MuestraGestion', component: VistaMenuComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
