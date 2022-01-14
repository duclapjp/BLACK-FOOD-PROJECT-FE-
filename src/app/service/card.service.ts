import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Card} from "../model/Card";
import {environment} from "../../environments/environment.prod";
const API_LOCAL  = `${environment.API_LOCAL}`;
@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    private http : HttpClient
  ) { }

  findByUser_Id(id: number): Observable<Card>{
    return this.http.get<Card>(API_LOCAL+'cards/'+id);
  }

}
