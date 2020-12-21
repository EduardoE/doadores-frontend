import { Component, OnInit } from '@angular/core';
import { DoadorService } from 'src/app/service/doador.service';

@Component({
  selector: 'app-percentual-obesos',
  templateUrl: './percentual-obesos.component.html',
  styleUrls: ['./percentual-obesos.component.css']
})
export class PercentualObesosComponent implements OnInit {

  dataSource: any[];
  displayedColumns: string[];


  constructor(private doadorService: DoadorService) {
    this.dataSource = [];
    this.displayedColumns = ["percentual-homem", "percentual-mulher"];
  }

  ngOnInit(): void {
    this.doadorService.getPercentualObesos().subscribe((data: any) => {
      this.dataSource = [data];
      console.log(this.dataSource);
    });
  }

}
