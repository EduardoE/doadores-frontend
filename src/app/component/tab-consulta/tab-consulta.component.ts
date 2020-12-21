import { Component, OnInit } from '@angular/core';
import {Observable, Observer} from 'rxjs';

export interface ExampleTab {
  label: string;
}

@Component({
  selector: 'app-tab-consulta',
  templateUrl: './tab-consulta.component.html',
  styleUrls: ['./tab-consulta.component.css']
})
export class TabConsultaComponent implements OnInit {

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<any[]>) => {
      setTimeout(() => {
        observer.next([
          {label: 'Doadores por Estado'},
          {label: 'Mádia IMC Doadores'}
        ]);
      }, 1000);
    });
   }

  ngOnInit(): void {
  }

}
