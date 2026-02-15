import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { SPproductComponent } from './Components/spproduct/spproduct.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './Components/login/login.component';

export const routes: Routes = [
    {path:"",
        loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
        .then((c)=>AuthLayoutComponent),children:[
        {path:"login" ,loadComponent:()=>import('./Components/login/login.component').then((c)=>LoginComponent)},
        {path:"Register" ,loadComponent:()=>import('./Components/register/register.component').then((c)=>RegisterComponent)},
        
    ]},
    {path:'',loadComponent:()=>import('./layouts/user-layout/user-layout.component').then((c)=>UserLayoutComponent),children:[
    {path:"home",component:HomeComponent},
    {path:"about",component:AboutComponent},
    {path:"product",component:ProductListComponent},
    {path:"Dashbord",component:DashbordComponent},
    {path:"spproduct/:id",component:SPproductComponent},
    ]},
    {path:"**",component:NotFoundComponent}



];
