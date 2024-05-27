import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { authGuard } from './login/auth-guard/auth.guard';
import { OverviewComponent } from './overview/overview.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'navigation',
    canActivate: [authGuard],
    component: NavigationComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'city', component: CityComponent },
      { path: '', component: OverviewComponent },
    ],
  },
  {
    path: '',
    canActivate: [authGuard],
    component: AppComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
