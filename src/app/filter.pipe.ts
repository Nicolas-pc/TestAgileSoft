import { Pipe, PipeTransform } from '@angular/core';
import { Superheroes } from './class/superheroes';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listSuperhero: Superheroes[],busqueda: string): any {
    if(!listSuperhero || !busqueda){
      return listSuperhero;
    }
    busqueda=busqueda.toLowerCase();

    return listSuperhero.filter (it=>{
      return it.nombre.toLowerCase().includes(busqueda);
    })
  }

}
