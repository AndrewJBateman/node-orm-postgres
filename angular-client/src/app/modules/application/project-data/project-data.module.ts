import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectDataRoutingModule } from './project-data-routing.module';
import { ProjectDataComponent } from './project-data.component';


@NgModule({
  declarations: [
    ProjectDataComponent
  ],
  imports: [
    CommonModule,
    ProjectDataRoutingModule
  ],
  exports: [
    ProjectDataComponent
  ]
})
export class ProjectDataModule { }
