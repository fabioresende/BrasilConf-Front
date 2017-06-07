import {Injectable} from '@angular/core';
import {Fornecedor} from './Fornecedor';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";

@Injectable()
export class FornecedorService {
    constructor(private http: Http) {
    }
    getFornecedor(){
        return this.http.get("/fornecedor")
            .toPromise()
            .then(response => {return response.json() as Fornecedor})
            .catch();
    }

    salvarFornecedor(fornecedor:Fornecedor) {
        return this.http.post( "/fornecedor/salvar", fornecedor)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}