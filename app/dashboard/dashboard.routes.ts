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
    {path: 'dashboard', component: HomeComponent},
    {path: 'user', component: UserComponent},
    {path: 'table', component: TableComponent},
    {path: 'icons', component: IconsComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'typography', component: TypographyComponent},
    {path: 'maps', component: MapsComponent},
    {path: 'usuario-detalhes/:id', component: UsuarioDetalhesComponent},
    {path: 'fornecedor', component: FornecedorComponent},
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
]

export const MODULE_COMPONENTS = [
    HomeComponent,
    UserComponent,
    TableComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
    UsuarioDetalhesComponent,
    FornecedorComponent
]
