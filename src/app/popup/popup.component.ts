import { Component, OnInit } from '@angular/core';
import { InsertService } from '../insert.service';
import {DateAdapter} from '@angular/material/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MesComponent } from '../mes/mes.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  durationInSeconds = 5;
  priorityValue : string = ''
  toggleOptions: Array<String> = ["High", "Medium", "Low"];
  inputErrorMsg : string

  constructor(
    private insert: InsertService, 
    private _adapter: DateAdapter<any>, 
    private _snackBar: MatSnackBar) {
    }

  ngOnInit() {
// written for change the date picker fromat to canadian standed (Because of SQL Date format)
    this._adapter.setLocale('en-ca');
    }

// Method for add a new task (passing values to http service)
  addTask (event) {
    event.preventDefault()
    const target = event.target
    const task = target.querySelector('#tskName').value
    const date = target.querySelector('#date').value
    console.log(task, this.priorityValue, date)
    if(task != '' && this.priorityValue != '' && date != null ){
      this.insert.insertData(task, this.priorityValue, date)
      
//Show a resopnce snackBar pop after clicked add task buttton
      this._snackBar.openFromComponent(MesComponent, {
      duration: this.durationInSeconds * 1000,
      });

    } else {
      this.inputErrorMsg = "Please Input Valid Data"
      console.log("error")
    }
  }

//function for assign value of priority selector to priorityValue var 
  selectionChanged(item) {
    this.priorityValue = item.value
    console.log("Selected value: " + item.value);
    }

}


