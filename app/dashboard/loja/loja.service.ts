import {Injectable} from '@angular/core';
import {Loja} from './Loja';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";
import {Area} from "./Area";

@Injectable()
export class LojaService {
    constructor(private http: Http) {
    }
    getLoja(){
        return this.http.get("/loja")
            .toPromise()
            .then(response => {return response.json() as Loja})
            .catch();
    }

    getAreas(){
        return this.http.get("/loja/areas")
            .toPromise()
            .then(response => {return response.json() as Area[]})
            .catch();
    }
    getAreasRelacionadas(){
        return this.http.get("/loja/areas-relacionadas")
            .toPromise()
            .then(response => {return response.json() as Area[]})
            .catch();
    }

    salvarLoja(loja:Loja) {
        return this.http.post( "/loja/salvar", loja)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getCep(cep:string) {
        return this.http.get( "/cep/"+cep)
            .toPromise()
            .then(response => response.json())
            .catch(response => response.json());
    }
}