import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/common/home/home.component';
import { NotFoundComponent } from './modules/common/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'project-data',
    loadChildren: () =>
      import('./modules/application/project-data/project-data.module').then(
        (mod) => mod.ProjectDataModule
      ),
  },
  {
    path: 'norsk-data',
    loadChildren: () =>
      import('./modules/application/norsk-data/norsk-data.module').then(
        (mod) => mod.NorskDataModule
      ),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/common/about/about.module').then(
        (mod) => mod.AboutModule
      ),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./modules/common/contact/contact.module').then(
        (mod) => mod.ContactModule
      ),
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
