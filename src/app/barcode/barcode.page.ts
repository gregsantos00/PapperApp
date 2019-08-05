import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { ProductService } from '../services/ProductService';
import { ProductModel } from '../model/ProductModel';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.page.html',
  styleUrls: ['./barcode.page.scss']
})
export class BarcodePage implements OnInit {

  public code: string = '';
  public model: ProductModel = null;

  constructor(private barcodeScanner: BarcodeScanner, private productService: ProductService) { }

  ngOnInit() {

  }

  scanBarcode(): void {
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.code = barcodeData.text;
      this.findProduct(this.code);
    }).catch(err => {
      console.log('Error', err);
      this.code = err;
    });
  }

  findProduct(code: string): void {
    this.productService.getProductByCode(code).then((x: any) => {
        this.model = x;
    });
  }
}
