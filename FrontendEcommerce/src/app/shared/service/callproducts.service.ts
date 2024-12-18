import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root',
})
export class CallproductsService {
  private readonly apiUrl:string = environment.mainurl;
  private readonly token:string = environment.products_token;

  constructor(private http: HttpClient) {}


  getProducts(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });

    return this.http.get<any>(`${this.apiUrl}/products?populate=*`, { headers });
  }
}
