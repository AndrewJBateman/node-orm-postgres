import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDataComponent } from './project-data.component';

const routes: Routes = [{ path: '', component: ProjectDataComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectDataRoutingModule {}
