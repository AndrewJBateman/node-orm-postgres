import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProjectData } from '../../../models/project.data';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-project-data',
  templateUrl: './project-data.component.html',
  styleUrls: ['./project-data.component.css']
})
export class ProjectDataComponent implements OnInit {
  data$: Observable<ProjectData[]>;

  constructor(private dataService: DataService) {
    // this.dataService.getData().subscribe((data: any) => {
    //   this.data$ = data;
    //   console.log('data: ', data);
    // });
    this.data$ = this.dataService.getData();
  }

  ngOnInit(): void {
  }

}
