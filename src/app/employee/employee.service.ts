import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getListOfEmpNames(): Observable<string>{
    return from(['Rohan', 'Ethan', 'Pruthvi']);
  }
}
