import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {GestionModel} from "../models/gestion.model";


@Injectable({
  providedIn: 'root'
})
export class GestionesService {

  private url = 'https://bantrab-e698e-default-rtdb.firebaseio.com';
  constructor(private http: HttpClient) { }

  getGestiones(){
     return  this.http.get(`${this.url}/GESTION.json`)
       .pipe(
         map(this.crearArreglo)
     );
  }

  crearGestion( gestion: GestionModel ) {

    return this.http.post(`${ this.url }/GESTION.json`, gestion)
      .pipe(
        map( (resp: any) => {
          gestion.id = resp.name;
          return gestion;
        })
      );

  }

  private crearArreglo(gestionObj : object){
    const gestiones: GestionModel[] = [];

    if (gestionObj === null) {
      return [];
    }

    Object.keys(gestionObj).forEach(key => {
      // @ts-ignore
      const gestionID : GestionModel  = gestionObj[key];
      gestionID.id = key;
      gestiones.push(gestionID);
    });


    return gestiones;
  }
}
