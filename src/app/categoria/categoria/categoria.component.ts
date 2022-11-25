import { Component, OnInit } from '@angular/core';
import { estoque } from 'src/app/core/model';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categorias: estoque[] = [
    {id: 1, nameCategoria: 'Padaria'},
    {id: 2, nameCategoria: 'Alimentos (cereais e grãos)'},
    {id: 3, nameCategoria: 'Congelados e frios'},
    {id: 4, nameCategoria: 'Hortifruti'},
    {id: 5, nameCategoria: 'Produtos de limpeza'},
    {id: 6, nameCategoria: 'Higiene pessoal'},
    {id: 7, nameCategoria: 'Bebidas'},
    {id: 8, nameCategoria: 'Papelaria'}
  ];
  displayedColumns = ['id', 'nameCategoria']

  constructor() { }

  ngOnInit(): void {
  }

}
