import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContatoComponent } from './components/contato/contato.component';

export const routes: Routes = [ 
    { path: '', component: HomeComponent },
    { path:'sobre', component: SobreComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'naoencontrado', component: NotfoundComponent },
    { path: '**', redirectTo: 'naoencontrado', pathMatch: 'full'} // Caso não encontre nenhum caminho, redireciona para NotFoundComponent
 ];
