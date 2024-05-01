import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Consultation } from '../models/consultation.model';

const baseUrl = 'http://localhost:8080/api/consultations';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(baseUrl);
  }

  get(id: any): Observable<Consultation> {
    return this.http.get<Consultation>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Consultation[]> {
    return this.http.get<Consultation[]>(`${baseUrl}?title=${title}`);
  }
}