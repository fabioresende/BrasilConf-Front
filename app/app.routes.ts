import {Route} from '@angular/router';
import {AplicationComponent} from "./aplication/aplication.component";
import {LoginComponent} from "./login/login.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HomeComponent} from "./dashboard/home/home.component";
import {UserComponent} from "./dashboard/user/user.component";
import {TableComponent} from "./dashboard/table/table.component";
import {NotificationsComponent} from "./dashboard/notifications/notifications.component";
import {IconsComponent} from "./dashboard/icons/icons.component";
import {TypographyComponent} from "./dashboard/typography/typography.component";
import {UsuarioDetalhesComponent} from "./dashboard/usuario-detalhes/usuario-detalhes.component";
import {FornecedorComponent} from "./dashboard/fornecedor/fornecedor.component";

export const APP_MODULE_ROUTES: Route[] = [
    {path: 'aplication', component: AplicationComponent,
        children:[
            {path: 'home',component: HomeComponent},
            {path: 'user', component: UserComponent},
            {path: 'table', component: TableComponent},
            {path: 'icons', component: IconsComponent},
            {path: 'notifications', component: NotificationsComponent},
            {path: 'typography', component: TypographyComponent},
            {path: 'usuario-detalhes/:id', component: UsuarioDetalhesComponent},
            {path: 'fornecedor', component: FornecedorComponent}
        ]},
    {path: 'login', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
]


export const MODULE_COMPONENTS2 = [
    LoginComponent,
    AplicationComponent
]