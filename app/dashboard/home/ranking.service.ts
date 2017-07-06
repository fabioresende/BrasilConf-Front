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
            .catch(response => {
                return {
                    'msg': 'Você não possui seu estabelecimento cadastrado, convidamos você a cadastra-lo no sistema',
                    'success': 'Bem vindo!'
                }
            });
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
    getGraficos() {
        return this.http.get("/ranking/historico")
            .toPromise()
            .then(response => {return response.json()})
            .catch(response => {return response.json()});
    }
    getPossuiEstabelecimento(tipo_empresa) {
        if (tipo_empresa ==2){
            return this.http.get("/loja")
                .toPromise()
                .then(response => {return response.json()})
                .catch(response => {
                    return {
                        'msg': 'Você não possui seu estabelecimento cadastrado, convidamos você a cadastra-lo no sistema',
                        'success': 'Bem vindo!'
                    }
                });
        } else {
            return this.http.get("/fornecedor")
                .toPromise()
                .then(response => {return response.json()})
                .catch(response => {
                    return {
                        'msg': 'Você não possui seu estabelecimento cadastrado, convidamos você a cadastra-lo no sistema',
                        'success': 'Bem vindo!'
                    }
                });
        }
    }
}