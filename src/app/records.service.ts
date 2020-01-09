import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

interface myData {
  obj: Array <object>
}

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http: HttpClient) {

   }

  getData(){
    return this.http.get<myData>('http://localhost:1234/file.php')  
  }

  getDataToday(){
    return this.http.get<myData>('http://localhost:1234/today.php')  
  }

  getDataImportant(){
    return this.http.get<myData>('http://localhost:1234/important.php')  
  }

  getDataArchived(){
    return this.http.get<myData>('http://localhost:1234/archived.php')  
  }
}
