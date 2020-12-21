import { Component, OnInit } from '@angular/core';
import { DoadorService } from 'src/app/service/doador.service';

@Component({
  selector: 'app-idade-tiposanguineo',
  templateUrl: './idade-tiposanguineo.component.html',
  styleUrls: ['./idade-tiposanguineo.component.css']
})
export class IdadeTiposanguineoComponent implements OnInit {

  dataSource : any[];
  displayedColumns: string[];

  constructor(private doadorService: DoadorService) { 
    this.dataSource  = [];
    this.displayedColumns = ["tipo-sanguineo", "media"];
  }

  ngOnInit(): void {
    this.doadorService.getMediaIdadePorTipoSanguineo().subscribe((data: any[]) => {
      this.dataSource  = data;
      console.log(this.dataSource);
    });
  }
}
