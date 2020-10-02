import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Superheroes } from '../class/superheroes';

@Injectable({
  providedIn: 'root'
})
export class services {

  public heroes_url = 'http://157.245.138.232:9091/api/v1/test/superheroes';

  constructor(private http: HttpClient) { }

 
  public async getFilterSuperheroe(): Promise<Superheroes[]> {
    return new Promise<Superheroes[]>((resolve) => {
      this.http.get(`${this.heroes_url}/?puedeVolar=${true}`).subscribe((datos: any) => {
        resolve(datos.data.map(value =>  new Superheroes(value)));
      });
    });
  }
}