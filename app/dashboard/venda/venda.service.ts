import {Injectable} from '@angular/core';
import {Produto} from './Produto';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";

@Injectable()
export class VendaService {
    private teste: Array<String> = null;

    constructor(private http: Http) {
    }


    getProdutos(){
        return this.http.get("/produtos/venda")
            .toPromise()
            .then(response => {
                return response.json() as Produto[]
            });
    };
    // stub
    getProduto(idProduto: string): Promise<Produto> {
        return this.http.get("/produto/buscar/" + idProduto)
            .toPromise()
            .then(response =>
            {
                return response.json()
            });
    }

    salvarProduto(produto: Produto) {
        return this.http.post("/produto/salvar", produto)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    buscarDepartamentos() {
        return this.http.get("/produto/departamentos")
            .toPromise()
            .then(response => response.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}