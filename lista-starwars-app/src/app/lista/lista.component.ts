import { ListaFilme } from './../model/lista';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
//import { ListaFilme } from 'src/model/produto';
[];

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})



export class ListaComponent implements OnInit {

  //ou fora do @component? array correto?
displayedColumns: string[] = [ 'título', 'episódio', 'resumo', 'produtor', 'Data de estréia'];
dataSource: ListaFilme[];

  constructor(private _api: ApiService) { }

  ngOnInit() {
    this._api.getListas()
    .subscribe(res => {
      this.dataSource = res;
      console.log(this.dataSource);
      //this.isLoadingResults = false;
    }, err => {
      console.log(err);
     // this.isLoadingResults = false;
    });
  }

}
