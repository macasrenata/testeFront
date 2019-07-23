import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';


const routes: Routes = [
  {
    path: 'lista',
    component: ListaComponent,
    data: { title: 'Lista de Filmes' }
  },
  { path: '',
    redirectTo: '/lista',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
