import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {EmergencyResponse} from "../types/emergency";
import {Observable} from "rxjs";

// this is usually in .env file so the api can be easily changed
// API_URL is set to localhost:4200 to avoid the CORS issue. The real api url is defined in proxy.conf.json file

const API_URL = 'http://localhost:4200/';

@Injectable({
  providedIn: 'root',
})
export class EmergencyRepository {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<EmergencyResponse> {
    return this.httpClient.get<EmergencyResponse>(`${API_URL}api/getAllEmergencies`, {headers: {'Authorization': `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlBhdHJvbnVzIGNvZGUgY2hhbGxlbmdlIiwiaWF0IjoxNTE2MjM5MDIyfQ.ySwvtbpSzdTimko0acSe03Tp6VadH1wCDhYxoNfgH3k'}`}});
  }
}
