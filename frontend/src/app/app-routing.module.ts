
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioComponent } from './components/anuncio/anuncio.component';
import { HomeComponent } from './components/home/home.component';
import { PetFormComponent } from './components/pet-form/pet-form.component';
import { LoginComponent } from './components/login/login.component';
import { MeusPetsComponent } from './components/meus-pets/meus-pets.component';
import { AuthGuard } from './guards/auth-guard.guard';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
//import { ListaPetsComponent } from './components/lista-pets/lista-pets.component';
import { PetFeedComponent } from './components/pet-feed/pet-feed.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      { path: '', component: HomeComponent},
      { path: 'anuncios', component: HomeComponent },
    ]
  },
  {
    path: 'usuario',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'cadastro', component: UsuarioFormComponent },
      { path: 'usuariologin', component: UsuarioComponent},
    ]
  },
  {
    path: 'pets',
    children: [
      { path: 'meusPets', component: MeusPetsComponent, canActivate: [AuthGuard] },
    ]
  },
  {
    path: 'pet', canActivate: [AuthGuard],
    children: [
      { path: 'adicionar', component: PetFormComponent },
    ]
  },
  {
    path: 'anuncio', component: AnuncioComponent, canActivate: [AuthGuard],
    children: [
      { path: 'adicionar', component: AnuncioComponent }
    ]
  },
  //{
    //path: 'pet',
  //  children: [
 //     { //path: 'lista-pets', component: ListaPetsComponent
  //    }
 //   ]
 // },
  {
    path: 'pet',
    children: [
      { path: 'pet-feed', component: PetFeedComponent }
    ]
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
