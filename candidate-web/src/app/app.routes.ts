import { Routes } from '@angular/router';
import { HomeComponent } from './candidate/home/home.component';

export const routes: Routes = [
    {path:"candidates/home", component:HomeComponent},
    {path:"candidates",redirectTo:"candidates/home",pathMatch:"full"},
    {path:"",redirectTo:"candidates/home",pathMatch:"full"}
];
