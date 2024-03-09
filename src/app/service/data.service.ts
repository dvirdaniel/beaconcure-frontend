import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { FileModel } from '../model/file.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) {}

  getDataFromServer(): Observable<FileModel[]> {
    const url = `${this.apiUrl}/api/files`;
    return this.httpClient.get<FileModel[]>(url);
  }
}
