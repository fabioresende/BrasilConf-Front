import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/toPromise';
import {AuthHttp, JwtHelper, tokenNotExpired} from "angular2-jwt";
import {Usuario} from "../user/Usuario";

@Injectable()
export class AuthService {
    jwtHelper: JwtHelper = new JwtHelper();
    headers: Headers = new Headers;

    constructor(public http: Http, public authHttp: AuthHttp) {
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
    }

    login(email: string, senha: string) {
        return this.http.post(
            '/auth/login',
            'usuario=' + email + '&senha=' + senha,
            {
                headers: this.headers
            }
        ).toPromise()
            .then(
                res => {
                    localStorage.setItem('id_token', res.json().access_token);
                    localStorage.setItem('token_type', res.json().token_type);
                    localStorage.setItem('expires_in', res.json().expires_in);
                    localStorage.setItem('estabelecimento', res.json().estabelecimento);
                    localStorage.setItem('nome_usuario', res.json().nome_usuario);
                    return res.json()
                }
            )
            .catch(res => {
                    return res.json()
                }
            )
    }

    getUsuarioLogado(): Promise<Usuario>{
        return this.http.get('/auth/usuario')
            .toPromise()
            .then(
                res => {
                    return res.json() as Usuario
                }
            )
    }

    tokenSubscription() {
        this.authHttp.tokenStream
            .subscribe(
                data => console.log(data),
                err => console.log(err),
                () => console.log('Complete')
            );
    }

    useJwtHelper() {
        var token = localStorage.getItem('id_token');
        var info = {
            'decoded': this.jwtHelper.decodeToken(token),
            'expiration_date': this.jwtHelper.getTokenExpirationDate(token),
            'is_expired': this.jwtHelper.isTokenExpired(token),
            'estabelecimento': localStorage.getItem('estabelecimento'),
            'nome_usuario': localStorage.getItem('nome_usuario')
        }
        console.log(info);
        return info;
    }

    logout() {
        localStorage.removeItem('id_token');
    }

    loggedIn(): boolean{
        var token = localStorage.getItem('id_token');
        if (!token) {
            return false;
        }
        return !this.jwtHelper.isTokenExpired(token);
    }
}