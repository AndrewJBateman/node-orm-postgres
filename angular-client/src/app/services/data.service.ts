import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectData } from '../models/project.data';
import { NorskData } from '../models/norsk.data';

const baseUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getProjectData(): Observable<ProjectData[]> {
    return this.http.get<ProjectData[]>(`${baseUrl}/data`);
  }

  getNorskData(): Observable<NorskData[]> {
    return this.http.get<NorskData[]>(`${baseUrl}/norsk`);
  }
}
