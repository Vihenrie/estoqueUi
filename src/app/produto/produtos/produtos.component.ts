import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produto: produtos[] = [
    {id: 1, nameProduto: 'Padaria'},
    {id: 2, nameProduto: 'Alimentos (cereais e grãos)'},
    {id: 3, nameProduto: 'Congelados e frios'},
    {id: 4, nameProduto: 'Hortifruti'},
    {id: 5, nameProduto: 'Produtos de limpeza'},
    {id: 6, nameProduto: 'Higiene pessoal'},
    {id: 7, nameProduto: 'Bebidas'},
    {id: 8, nameProduto: 'Papelaria'}
  ];

  displayedColumns = ['id', 'nameProduto']
  constructor() { }


  ngOnInit(): void {
  }

}
