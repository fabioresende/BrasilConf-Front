import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UsuarioService} from '../user/user.service';
import {Usuario} from "../user/Usuario";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
    selector: 'usuario-detalhes',
    moduleId: module.id,
    templateUrl: 'usuario-detalhes.component.html',
    providers: [UsuarioService]
})

export class UsuarioDetalhesComponent implements OnInit {
    private formulario: FormGroup;
    private usuario: Usuario;
    private usuarioSelecionado;
    private tiposUsuario;
    private descricaoTipoUsuario;
    public events: any[] = [];

    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private location: Location, private fb: FormBuilder) {
        this.usuario = null;
        this.usuarioSelecionado = this.routerParams(this.location.path());
        this.tiposUsuario;
    };

    ngOnInit() {
        if (this.usuarioSelecionado != 0) {
            this.route.params
                .switchMap((params: Params) => this.usuarioService.getUsuario(+params['id']))
                .subscribe(usuario => this.usuario = usuario);
        }
        else {
            this.usuario = new Usuario();
        }
        this.formulario = new FormGroup({
            nome: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            cpf: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            telefone: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            usuario: new FormControl('', [<any>Validators.required, <any>Validators.minLength(5)]),
            senha: new FormControl('', [<any>Validators.minLength(8)]),
            id_tipo_usuario: new FormControl('')
        });
        this.buscarTiposUsuarios();
    }

    goBack(): void {
        this.location.back();
    }

    salvarUsuario(usuario: Usuario, isValid: boolean): void {
        this.usuario = usuario;
        this.setTipoUsuario(usuario);
        if (isValid) {
            this.usuarioService.salvarUsuario(this.usuario);
        }
    }

    buscarTiposUsuarios() {
        this.usuarioService.buscarTiposUsuario().then((data) => {
            this.tiposUsuario = data;
            this.descricaoTipoUsuario = this.tiposUsuario[this.usuario.id_tipo_usuario];
        });
    }

    setTipoUsuario(usuario) {
        this.usuario.id_tipo_usuario = this.tiposUsuario.indexOf(usuario.id_tipo_usuario);
    }

    routerParams(params: string): string {
        var parametros = params.split("/");
        var parametro = parametros[2];
        return parametro;
    }
}