import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { ListapetsComponent } from './listapets/listapets.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';
const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: 'listapets', component: ListapetsComponent },
  { path: 'atualizar-animal/:id', component: AtualizarAnimalComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' }, // Redireciona a raiz para /formulario
  { path: '**', redirectTo: '/formulario' } // Redireciona qualquer URL não encontrada para /formulario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
