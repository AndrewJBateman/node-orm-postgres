import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectData } from '../models/project.data';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  constructor(private http: HttpClient) {}

  getData(): Observable<ProjectData[]> {
    return this.http.get<ProjectData[]>(`${baseUrl}/data`);
  }
}
