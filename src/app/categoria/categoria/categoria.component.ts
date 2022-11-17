import { Component, OnInit } from '@angular/core';
import { estoque } from 'src/app/core/model';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: estoque[] = [
    {id: 1, nameCategoria: 'qualquer categoria'}
  ];
  displayedColumns = ['id', 'nameCategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
