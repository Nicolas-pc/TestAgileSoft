import { Component, OnInit,Inject } from '@angular/core';
import { services } from 'src/app/class/services';
import { Superheroes } from 'src/app/class/superheroes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {


}
@Component({
  selector: 'app-list-superheroes',
  templateUrl: './list-superheroes.component.html',
  styleUrls: ['./list-superheroes.component.css']
})


export class ListSuperheroesComponent implements OnInit {
  public superhero: Superheroes;
  public filterSuperhero: Superheroes[];
  public id: number;
  public busqueda:string;
  
  
  
  constructor(private superService: services, public dialog: MatDialog) {
    this.superService.getFilterSuperheroe().then((data:Superheroes[]) => {
      this.filterSuperhero = data;
      

      
    });
   }
   
  
   

  ngOnInit(): void {
  }

  opendialog(): void {
    const dialogRef = this.dialog.open(Dialogerror, {
      width: '250px',
    });}
  
}
export class ExpansionOverviewExample {
  panelOpenState = false;
}
@Component({
  selector: 'pop-up',
  templateUrl: 'pop-up.html',
})
export class Dialogerror {

  constructor(
    public dialogRef: MatDialogRef<Dialogerror>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
