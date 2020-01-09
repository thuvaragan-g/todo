import { Component } from '@angular/core';
import { PopupComponent } from './popup/popup.component';
import { ImportantComponent } from './important/important.component';
import { ArchivedComponent } from './archived/archived.component';


import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { TodayComponent } from './today/today.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { RecordsService } from './records.service';
import { InsertService } from './insert.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'todo';
  test = false;
  showCheck = true;
  view = false;
  changeText: boolean;
  status: boolean = false;
  records = []

  displayData

  mySubscription: any;


  high: boolean = false;
  medium: boolean = false;
  low: boolean = false;
  taskEditor = false;
  toggleOptions: Array<String> = ["High", "Medium", "Low"];

  ngOnInit(){
     this.homeRecordeService.getData().subscribe(data=>{
      this.records=data.obj
      console.log(this.records)
    });
  }

    clickEvent(){
    this.status = !this.status;       
  }

 

  visablity(){
    this.view = false;
  }

  constructor( private _bottomSheet: MatBottomSheet, public dialog: MatDialog, private homeRecordeService : RecordsService, private updateDone: InsertService) {
    this.changeText = false;
  }


  done (tskid) {
    const id = tskid
    console.log(id)
    this.updateDone.doneData(id)
    // this.records.splice(1,0);
     // this.records[index]= []
  }


  updateTask (event, tskid) {
    event.preventDefault()
    const target = event.target
    const id = tskid
    const task = target.querySelector('#tskName').value
    console.log(id, task)
    this.updateDone.updateTask(id, task)
  }


  openBottomSheet(): void {
    this._bottomSheet.open(PopupComponent);
  }

  openDialog(): void {
    this.dialog.open(TodayComponent, {
      width: '70%',
    });

}

openImportant(): void {
 this.dialog.open(ImportantComponent, {
    width: '70%',
  });
}

openArchived(): void {
  this.dialog.open(ArchivedComponent, {
     width: '70%',
   });
 }

}