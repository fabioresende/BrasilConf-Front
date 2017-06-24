import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UsuarioService} from '../user/user.service';
import {Usuario} from "../user/Usuario";
import {Location} from '@angular/common';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {Mensagem} from "../Mensagem";
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
    private descricaoStatus;
    public events: any[] = [];
    public mensagem:Mensagem;
    public cardMensagem: boolean;

    constructor(private usuarioService: UsuarioService,
                private route: ActivatedRoute,
                private location: Location,
                ) {
        this.usuario = null;
        this.usuarioSelecionado = this.routerParams(this.location.path());
        this.tiposUsuario;
        this.cardMensagem = false;
        this.mensagem = new Mensagem();
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
            id_tipo_usuario: new FormControl(''),
            status: new FormControl('')
        });
        this.buscarTiposUsuarios();
    }

    goBack(): void {
        this.location.back();
    }

    salvarUsuario(usuario: Usuario, isValid: boolean): void {
        usuario = this.setTipoUsuario(usuario);
        if (isValid) {
            this.usuarioService.salvarUsuario(usuario).then((data) => {
                    this.mensagem = data;
                    this.cardMensagem = true;
            });
        }
    }

    buscarTiposUsuarios() {
        this.usuarioService.buscarTiposUsuario().then((data) => {
            this.tiposUsuario = data;
            this.descricaoTipoUsuario = this.tiposUsuario[this.usuario.id_tipo_usuario];
            if (this.usuario.status) {
                this.descricaoStatus = 'Ativo'
            }
            else {
                this.descricaoStatus = 'Inativo'
            }
        });
    }

    setTipoUsuario(usuario) {
        usuario.id = this.usuario.id;
        usuario.id_usuarioadm = this.usuario.id_usuarioadm;
        usuario.id_fornecedor = this.usuario.id_fornecedor;
        if (usuario.id_tipo_usuario == "") {
            usuario.id_tipo_usuario = this.usuario.id_tipo_usuario;
        } else {
            usuario.id_tipo_usuario = this.tiposUsuario.indexOf(usuario.id_tipo_usuario) + 1;
        }
        if(usuario.status == ""){
            usuario.status = this.usuario.status;
        } else{
            if (usuario.status == "Ativo" ) {
                usuario.status = 1;
            }
            else {
                usuario.status = 0;
            }
        }
        return usuario;
    }

    routerParams(params: string): string {
        var parametros = params.split("/");
        var parametro = parametros[3];
        return parametro;
    }

    blurCardMensagem(){
        this.cardMensagem = false;
    }

}