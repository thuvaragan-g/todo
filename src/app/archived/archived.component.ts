import { Component, OnInit } from '@angular/core';
import { RecordsService } from '../records.service';
import { InsertService } from '../insert.service';

@Component({
  selector: 'app-archived',
  templateUrl: './archived.component.html',
  styleUrls: ['./archived.component.css']
})
export class ArchivedComponent implements OnInit {
  archivedRecords = []

  constructor(private archivedRecordeService : RecordsService, private undo: InsertService) { }

  ngOnInit() {
    this.archivedRecordeService.getDataArchived().subscribe(data=>{
      this.archivedRecords=data.obj
    });
  }

  unArchive (tskid) {
    const id = tskid
    console.log(id)
    this.undo.doUnArchive(id)
 
  }

}
