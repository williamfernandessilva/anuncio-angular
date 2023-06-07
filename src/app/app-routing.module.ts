import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnuncioComponent } from './anuncio/anuncio.component';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'anuncio', component: AnuncioComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
