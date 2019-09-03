import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { environment } from '../../environments/environment';
import { ProductModel } from '../model/ProductModel'
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {
    constructor(private request: Http) {

    }

    public getProducts(): Promise<Array<ProductModel>> {
        let url = `${environment.URL_API}produto/ALL/25/`;
        return this.request.get(url)
            .toPromise()
            .then((data: any) => data.json());

    }
    public getProductByCode(code : string): Promise<ProductModel> {
        let url = `${environment.URL_API}produto/ID/1/${code}`;
        return this.request.get(url)
            .toPromise()
            .then((data: any) => data.json()[0]);

    }
    public getProductByName(nome : string): Promise<Array<ProductModel>> {
        let url = `${environment.URL_API}produto/NAME/25/${nome}`;
        return this.request.get(url)
            .toPromise()
            .then((data: any) => data.json());

    }
}