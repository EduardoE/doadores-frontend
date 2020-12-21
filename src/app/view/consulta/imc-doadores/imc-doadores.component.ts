import { Component, OnInit } from '@angular/core';
import { DoadorService } from 'src/app/service/doador.service';

@Component({
  selector: 'app-imc-doadores',
  templateUrl: './imc-doadores.component.html',
  styleUrls: ['./imc-doadores.component.css']
})
export class ImcDoadoresComponent implements OnInit {

  dataSource : any[];
  displayedColumns: string[];

  constructor(private doadorService: DoadorService) {
    this.dataSource  = [];
    this.displayedColumns = ["faixa-etaria", "media-imc"];
  }

  ngOnInit(): void {
    this.doadorService.getMediaIMCDoadoresFaixaEtaria().subscribe((data: any[]) => {
      this.dataSource  = data;
      console.log(this.dataSource);
    });
  }

}
