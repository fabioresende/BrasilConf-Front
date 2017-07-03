import {Component, OnInit} from '@angular/core';
import {ROUTES} from './sidebar-routes.config';
import {AuthService} from "../dashboard/autentication/auth.service";
import {Usuario} from "../dashboard/user/Usuario";

declare var $: any;

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['sidebar.component.css'],
    providers: [AuthService]
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    private usuario: Usuario;

    constructor(private authService: AuthService) {
        this.usuario = new Usuario();
        this.menuItems = new Array();
    };

    ngOnInit() {
        this.authService.getUsuarioLogado().then((usuario) => {
            this.usuario = usuario;
            this.menuItems = ROUTES.filter(mostrarMenu(this.usuario));
            function mostrarMenu(usuario) {
                return function (menuItem) {
                    if ($.inArray(usuario.tipo_empresa.toString(),menuItem.permissao) != -1) {
                        return menuItem;
                    }
                }
            }
            $.getScript('../../assets/js/sidebar-moving-tab.js');
        });
    }

}
