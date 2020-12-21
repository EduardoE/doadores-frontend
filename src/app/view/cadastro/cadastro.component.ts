import { Component, OnInit } from '@angular/core';
import { DoadorService } from 'src/app/service/doador.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private doadorService: DoadorService) { }

  ngOnInit(): void {
  }

  inputFile(event: any) {
    if (event.target.files && event.target.files[0]) {
      const doadores = event.target.files[0];
      this.doadorService.newDoadores(doadores).subscribe(resposta => console.log('Ok'));

    }
  }

}
