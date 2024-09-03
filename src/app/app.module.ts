import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Adicione esta linha
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ListapetsComponent } from './listapets/listapets.component';
import { AtualizarAnimalComponent } from './atualizar-animal/atualizar-animal.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListapetsComponent,
    AtualizarAnimalComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule, // Adicione esta linha
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
