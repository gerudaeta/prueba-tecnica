import {Route, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {Error404PageComponent} from "./shared/pages/error404-page/error404-page.component";

export const appRoutes: Route[] = [
  {
    path: 'heroes',
    loadChildren: () => import('./modules/heroes/heroes.module').then( m => m.HeroesModule ),
  },
  {
    path: '404',
    component: Error404PageComponent,
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
