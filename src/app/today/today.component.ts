import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  todayRecords = []

  status: boolean = false;
  clickEvent(){
      this.status = !this.status;       
  }

  constructor(private todayRecordeService : RecordsService) { }

  ngOnInit() {
    this.todayRecordeService.getDataToday().subscribe(data=>{
      this.todayRecords=data.obj
    });
  }

}
