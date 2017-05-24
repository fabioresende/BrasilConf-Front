import {Injectable} from '@angular/core';
import {Usuario} from './Usuario';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {Mensagem} from "../Mensagem";

@Injectable()
export class UsuarioService {
    private URLBASE = 'http://localhost:8000/api';
    private teste: Array<String> = null;
    constructor(private http: Http) {
    }


    getUsuarios(): Promise<Usuario[]> {
        return this.http.get(this.URLBASE + "/usuarios")
            .toPromise()
            .then(response => response.json() as Usuario[]);
    }; // stub
    getUsuario(idUsuario: number): Promise<Usuario> {
        return this.http.get(this.URLBASE + "/usuario/buscar/" + idUsuario)
            .toPromise()
            .then(response => response.json() as Usuario);
    }

    salvarUsuario(usuario: Usuario) {
        return this.http.post(this.URLBASE + "/usuario/salvar", usuario)
            .toPromise()
            .then(response => response.json() as Mensagem);
    }

    buscarTiposUsuario(){
       return this.http.get(this.URLBASE + "/usuario/tipo-usuarios")
            .toPromise()
            .then(response => response.json());
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}