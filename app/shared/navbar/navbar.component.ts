import { Component, OnInit } from '@angular/core';
import { ROUTES } from '../.././sidebar/sidebar-routes.config';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {Usuario} from "../../dashboard/user/Usuario";
import {AuthService} from "../../dashboard/autentication/auth.service";
import {Router} from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html',
    providers: [AuthService],
    styleUrls: ['navbar.component.css']
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    private usuario: Usuario;
    constructor(location:Location,private authService: AuthService, private router:Router) {
        this.location = location;
        this.usuario = new Usuario();
    }
    ngOnInit(){
        this.listTitles = ROUTES.filter(listTitle => listTitle);
        this.authService.getUsuarioLogado().then((usuario) =>{
            this.usuario = usuario;
        });
    }
    getTitle(){
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if(titlee.charAt(0) === '#'){
            titlee = titlee.slice( 2 );
        }
        for(var item = 0; item < this.listTitles.length; item++){
            if(this.listTitles[item].path === titlee){
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    }
    logout() {
        this.authService.logout();
        this.router.navigate(['/']);
    }
}
