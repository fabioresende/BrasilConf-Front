import {Route} from '@angular/router';
import {DashboardComponent} from './dashboard.component';
import {HomeComponent} from './home/home.component';
import {UserComponent} from './user/user.component';
import {IconsComponent} from './icons/icons.component';
import {TableComponent} from './table/table.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {TypographyComponent} from './typography/typography.component';
import {MapsComponent} from './maps/maps.component';
import {UsuarioDetalhesComponent} from './usuario-detalhes/usuario-detalhes.component';
import {FornecedorComponent} from './fornecedor/fornecedor.component';
export const MODULE_ROUTES: Route[] = [
    //{path: 'aplication/home', component: HomeComponent},
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    UsuarioDetalhesComponent,
    FornecedorComponent
]
