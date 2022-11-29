import { Component, OnInit } from '@angular/core';
import { produtos } from 'src/app/core/model';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  produto: produtos[] = [
    {id: 1, nameProduto: 'Arroz'},
    {id: 2, nameProduto: 'Bolachas e biscoitos'},
    {id: 3, nameProduto: 'Feijão'},
    {id: 4, nameProduto: 'Maionese'},
    {id: 5, nameProduto: 'Óleo'},
    {id: 6, nameProduto: 'Hambúrguer'},
    {id: 7, nameProduto: 'Pizza'},
    {id: 8, nameProduto: 'Polpas de frutas congeladas'}
  ];

  displayedColumns = ['id', 'nameProduto']
  constructor() { }


  ngOnInit(): void {
  }

}
