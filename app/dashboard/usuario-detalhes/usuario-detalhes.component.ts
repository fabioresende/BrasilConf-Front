import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {UsuarioService} from '../user/user.service';
import {Usuario} from "../user/Usuario";
import {Location} from '@angular/common';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'usuario-detalhes',
    moduleId: module.id,
    templateUrl: 'usuario-detalhes.component.html',
    providers: [UsuarioService]
})

export class UsuarioDetalhesComponent implements OnInit {
    private usuario: Usuario;
    private usuarioSelecionado: boolean;
    constructor(private usuarioService: UsuarioService, private route: ActivatedRoute, private location: Location) {
        this.usuario = null;
    };

    ngOnInit() {
        // $.getScript('../../../assets/js/material-dashboard.js');
        this.route.params
            .switchMap((params: Params) => this.usuarioService.getUsuario(+params['id']))
            .subscribe(usuario => this.usuario = usuario);
    }

    goBack(): void {
        this.location.back();
    }

    salvarUsuario(event): void {
        console.log(this.usuario);
        event.preventDefault();
    }
}