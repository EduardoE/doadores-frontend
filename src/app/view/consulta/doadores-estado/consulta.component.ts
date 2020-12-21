import { Component, OnInit } from '@angular/core';
import { DoadorService } from '../../../service/doador.service'

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  dataSource : any[];
  displayedColumns: string[];

  constructor(private doadorService: DoadorService) { 
    this.dataSource  = [];
    this.displayedColumns = ["estado", "qtd-doadores"];
  }

  ngOnInit(): void {
    this.doadorService.getDoadoresPorEstado().subscribe((data: any[]) => {
      this.dataSource  = data;
      console.log(this.dataSource);
    });
  }
}
