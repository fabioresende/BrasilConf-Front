import {Injectable} from '@angular/core';
import {Usuario} from './Usuario';
import {Http} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UsuarioService {
    private URLBASE = 'http://localhost:8000/api';
    constructor(private http: Http){}


    getUsuarios(): Promise<Usuario[]> {
        return this.http.get(this.URLBASE+"/usuarios")
            .toPromise()
            .then(response => response.json() as Usuario[]);
    }; // stub
    getUsuario(idUsuario: number): Promise<Usuario> {
        return this.http.get(this.URLBASE+"/usuario/"+idUsuario)
            .toPromise()
            .then(response => response.json() as Usuario);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}