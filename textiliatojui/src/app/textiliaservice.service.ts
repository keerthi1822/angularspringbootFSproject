 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable , BehaviorSubject } from 'rxjs';
import { Cloth } from './toj';

/* interface Cloth {
  id: bigint;
  name: string;
  size: number;
  color:number;
  createdDate: Date;
  updatedDate: Date;
} */

@Injectable({
  providedIn: 'root'
})
export class TextiliaserviceService {

  private tojDataSubject = new BehaviorSubject<any>(null);
  tojData$ = this.tojDataSubject.asObservable();

  constructor(private _http:HttpClient) { }

  setState(newState: any) {
    console.log("in service state", newState)
    this.tojDataSubject.next(newState);
  }

  fetchTojListFromBE():Observable<any>{
   return this._http.get<any>("http://localhost:8080/getTextiliatojList")
  }

  addTojToDB(toj : Cloth):Observable<any>{
    return this._http.post<any>("http://localhost:8080/addTextiliatoj", toj)
  }
}
