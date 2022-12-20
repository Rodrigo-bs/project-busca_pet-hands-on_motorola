import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { HomeComponent } from './components/home/home.component';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { MeusPetsComponent } from './components/meus-pets/meus-pets.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { PetFeedComponent } from './components/pet-feed/pet-feed.component';
import { WebcamModule } from 'ngx-webcam';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MessagesComponent } from './components/messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    PetFormComponent,
    HomeComponent,
    AnuncioComponent,
    UsuarioComponent,
    LoginComponent,
    MeusPetsComponent,
    UsuarioFormComponent,
    PetFeedComponent,
    MeusPetsComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
