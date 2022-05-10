import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectData } from './models/project.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-client';
  data$: Observable<ProjectData[]>;

  constructor(private dataService: DataService) {
    // this.dataService.getData().subscribe((data: any) => {
    //   this.data$ = data;
    //   console.log('data: ', data);
    // });
    this.data$ = this.dataService.getProjectData();
  }
}
