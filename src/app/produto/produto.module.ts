import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    MatTableModule
  ]
})
export class ProdutoModule { }
