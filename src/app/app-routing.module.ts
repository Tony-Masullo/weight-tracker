import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeightInputComponent } from './weight-input/weight-input.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full'
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'weight-input',
    component: WeightInputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'weight-input/:id',
    component: WeightInputComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }