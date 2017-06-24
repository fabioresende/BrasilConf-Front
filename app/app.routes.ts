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
import {ProdutoComponent} from "./dashboard/produto/produto.component";
import {ProdutoDetalhesComponent} from "./dashboard/produto-detalhes/produto-detalhes.component";
import {LojaComponent} from "./dashboard/loja/loja.component";
import {VendaComponent} from "./dashboard/venda/venda.component";
import {VendaDetalhesComponent} from "./dashboard/venda-detalhes/venda-detalhes.component";
import {CanActivateViaAuthGuard} from "./dashboard/autentication/canActiveViaAuthGuard.service";
import {PedidoVendaComponent} from "./dashboard/pedido-venda/pedido-venda.component";
import {PedidoComponent} from "./dashboard/pedido/pedido.component";
import {PedidoDetalhesComponent} from "./dashboard/pedido-detalhes/pedido-detalhes.component";

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
            {path: 'fornecedor', component: FornecedorComponent},
            {path: 'produto', component: ProdutoComponent},
            {path: 'produto-detalhes/:id', component: ProdutoDetalhesComponent},
            {path: 'loja', component: LojaComponent},
            {path: 'venda', component: VendaComponent},
            {path: 'venda-detalhes/:id', component: VendaDetalhesComponent},
            {path: 'pedido-venda/:id', component: PedidoVendaComponent},
            {path: 'pedido', component: PedidoComponent},
            {path: 'pedido-detalhes/:id', component: PedidoDetalhesComponent}
        ],canActivate: [
        CanActivateViaAuthGuard
    ]},
    {path: '', component: LoginComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}
]


export const MODULE_COMPONENTS2 = [
    LoginComponent,
    AplicationComponent
]
