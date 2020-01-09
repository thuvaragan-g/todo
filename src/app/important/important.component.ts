import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['./important.component.css']
})
export class ImportantComponent implements OnInit {

  importantRecords = []

  constructor(private importantRecordeService : RecordsService) { }

  ngOnInit() {
    this.importantRecordeService.getDataImportant().subscribe(data=>{
      this.importantRecords=data.obj
    });
  }

}
