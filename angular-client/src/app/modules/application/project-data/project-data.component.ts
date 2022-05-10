import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { ProjectData } from '../../../models/project.data';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css'],
})
export class ProjectDataComponent implements OnInit {
  projectData$: Observable<ProjectData[]>;

  constructor(private dataService: DataService) {
    this.projectData$ = this.dataService.getProjectData();
  }

  ngOnInit(): void {}
}
