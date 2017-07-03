import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";
import {Loja} from "../loja/Loja";
import {Fornecedor} from "../fornecedor/Fornecedor";

@Injectable()
export class RankingService {
    constructor(private http: Http) {
    }
    getEstabelecimento(){
        return this.http.get("/ranking/estabelecimento")
            .toPromise()
            .then(response => {return response.json()})
            .catch(response => {return response.json()});
    }
    getRanking() {
        return this.http.get("/ranking")
            .toPromise()
            .then(response => {return response.json()})
            .catch(response => {return response.json()});
    }

    getQuantidadeUsuarios() {
        return this.http.get("/usuario/qtd-usuarios")
            .toPromise()
            .then(response => {return response.json()})
            .catch(response => {return response.json()});
    }
    getQuantidadeProdutosMes() {
        return this.http.get("/produtos-mes")
            .toPromise()
            .then(response => {return response.json()})
            .catch(response => {return response.json()});
    }
}