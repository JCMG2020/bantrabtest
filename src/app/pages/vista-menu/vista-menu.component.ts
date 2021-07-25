import { Component, OnInit } from '@angular/core';
import {GestionesService} from "../../service/gestiones.service";
import {GestionModel} from "../../models/gestion.model";

@Component({
  selector: 'app-vista-menu',
  templateUrl: './vista-menu.component.html',
  styleUrls: ['./vista-menu.component.css']
})
export class VistaMenuComponent implements OnInit {

  constructor( private gestionesService: GestionesService) { }
gestiones: GestionModel[] = [];

  ngOnInit(): void {
    this.gestionesService.getGestiones().subscribe( resp => {
      this.gestiones = resp;
      console.log(resp);
    });
  }



}
