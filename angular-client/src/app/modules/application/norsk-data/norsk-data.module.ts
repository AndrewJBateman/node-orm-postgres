import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NorskDataRoutingModule } from './norsk-data-routing.module';
import { NorskDataComponent } from './norsk-data.component';


@NgModule({
  declarations: [
    NorskDataComponent
  ],
  imports: [
    CommonModule,
    NorskDataRoutingModule
  ]
})
export class NorskDataModule { }
