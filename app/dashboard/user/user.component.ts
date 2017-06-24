import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./user.service";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {Usuario} from "./Usuario";
import {Location} from '@angular/common';
import {AuthService} from "../autentication/auth.service";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'user.component.html',
    providers: [UsuarioService,AuthService],
    styleUrls: [ 'user.component.css' ]
})

export class UserComponent implements OnInit {
    private usuarios : Usuario[];
    constructor(
        private usuarioService: UsuarioService,
        private route: ActivatedRoute,
        private router:Router,
        private authService: AuthService
    ){};
    ngOnInit() {
        this.authService.getUsuarioLogado().then((usuario) =>{
            if (usuario.id_tipo_usuario != 1) {
                this.router.navigate(['/aplication/usuario-detalhes',usuario.id]);
            }
        });
        this.route.params
            .switchMap((params: Params) => this.usuarioService.getUsuarios())
            .subscribe(usuarios => this.usuarios = usuarios);
    }
    editarUsuario(idUsuario: number){
        this.router.navigate(['/aplication/usuario-detalhes',idUsuario]);
    }

}
