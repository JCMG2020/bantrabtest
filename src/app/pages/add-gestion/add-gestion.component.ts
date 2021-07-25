import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {GestionModel} from "../../models/gestion.model";
import {GestionesService} from "../../service/gestiones.service";
import Swal from 'sweetalert2';
import {Observable} from "rxjs";


@Component({
  selector: 'app-add-gestion',
  templateUrl: './add-gestion.component.html',
  styleUrls: ['./add-gestion.component.css']
})
export class AddGestionComponent implements OnInit {
  gestion: GestionModel = new GestionModel();


  constructor(private gestionService: GestionesService) {
  }

  ngOnInit(): void {
  }

  guardar(form: NgForm) {
    console.log(form);
    console.log(this.gestion);


    if (form.invalid) {
      console.log("formulario invalido")
      return;
    }

    // @ts-ignore
    Swal.fire({
      title: 'Espere',
      text: 'Guardando información',
      type: 'info',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    peticion = this.gestionService.crearGestion(this.gestion);

    peticion.subscribe(resp => {

      // @ts-ignore
      Swal.fire({
        title: this.gestion.id,
        text: 'Se creo el registro correctamente',
        type: 'success'
      });

    });


  }
}
