import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss'],
  providers: [ProductService]
})
export class ListPage implements OnInit {
  private selectedItem: any;
  public icons = [
    'flask',
    'wifi',
    'md-create',
    'paper',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'build'
  ];
  public items: Array<ProductModel> = [];
  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.getProducts().then((x) => {

      this.items = x;
      // for (let i = 0; i < x.length; i++) {
      //   this.items.push({
      //     title: x[i].Descricao,
      //     note: x[i].Preco,
      //     icon: this.icons[x[i].IdCategoria]
      //   });
      // }

    });
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
