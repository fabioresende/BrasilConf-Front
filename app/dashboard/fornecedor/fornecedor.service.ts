import {Injectable} from '@angular/core';
import {Fornecedor} from './Fornecedor';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";

@Injectable()
export class FornecedorService {
    private URLBASE = 'http://localhost:8000/api';
    constructor(private http: Http) {
    }
    getFornecedor(idFornecedor: number): Promise<Fornecedor> {
        return this.http.get(this.URLBASE + "/fornecedor/buscar/" + idFornecedor)
            .toPromise()
            .then(response => response.json() as Fornecedor);
    }

    salvarFornecedor(fornecedor:Fornecedor) {
        return this.http.post(this.URLBASE + "/fornecedor/salvar", fornecedor)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}