import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { NorskData } from '../../../models/norsk.data';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-norsk-data',
  templateUrl: './norsk-data.component.html',
  styleUrls: ['./norsk-data.component.css']
})
export class NorskDataComponent implements OnInit {
  norskData$: Observable<NorskData[]>;

  constructor(private dataService: DataService) {
    this.norskData$ = this.dataService.getNorskData();
  }

  ngOnInit(): void {
  }

  trackByFn(index: number, data: any): number {
    return data;
  }

}
