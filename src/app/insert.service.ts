import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http: HttpClient) { }

  insertData(task, priority, date){
    return this.http.post('http://localhost:1234/insert.php', {
      task,
      priority,
      date
    }).subscribe(data=>{
      console.log(data)
    });

  }


  doneData(id){
    return this.http.post('http://localhost:1234/done.php', {
      id
    }).subscribe(data=>{
      console.log(data)
    });

  }

  updateTask(id, task){
    return this.http.post('http://localhost:1234/update.php', {
      id,
      task
    }).subscribe(data=>{
      console.log(data)
    });

  }

  doUnArchive(id){
    return this.http.post('http://localhost:1234/undo.php', {
      id
    }).subscribe(data=>{
      console.log(data)
    });

  }

}
