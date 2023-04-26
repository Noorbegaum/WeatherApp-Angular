import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouriteComponent } from './tabs/favourite/favourite.component';
import { HomeComponent } from './tabs/home/home.component';
import { RecentsearchComponent } from './tabs/recentsearch/recentsearch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'favourite', component: FavouriteComponent },
  { path: 'recent', component: RecentsearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
