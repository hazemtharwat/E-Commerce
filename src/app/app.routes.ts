import { registerGardGuard } from './core/gardes/register-gard.guard';
import { Routes, CanActivateFn } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashbordComponent } from './Components/dashbord/dashbord.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { UserLayoutComponent } from './layouts/user-layout/user-layout.component';
import { LoginComponent } from './Components/login/login.component';
import { authGardGuard } from './core/gardes/auth-gard.guard';

export const routes: Routes = [
 
    {path:'',
        loadComponent:()=>import('./layouts/auth-layout/auth-layout.component')
        .then((c)=>c.AuthLayoutComponent),children:[
        {path:'',redirectTo:'login',pathMatch:'full'},
        {path:"login" ,loadComponent:()=>import('./Components/login/login.component').then((c)=>c.LoginComponent)},
        {path:"Register" ,loadComponent:()=>import('./Components/register/register.component').then((c)=>c.RegisterComponent),canDeactivate:[registerGardGuard]},
        
    ]},
    
    {path:'',loadComponent:()=>import('./layouts/user-layout/user-layout.component')
        .then((c)=>c.UserLayoutComponent),canActivate:[authGardGuard],children:[
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:"home",component:HomeComponent},
    {path:"product",loadComponent:()=>import('./Components/product-list/product-list.component').then((c)=>c.ProductListComponent)},
    {path:"Dashbord",component:DashbordComponent},
    {path:"prodDetail/:id",loadComponent:()=>import('./Components/product-detail/product-detail.component').then((c)=>c.ProductDetailComponent)},
    {path:'cart',loadComponent:()=>import('./Components/cart/cart.component').then((c)=>c.CartComponent)}
    ]},
    {path:"**",component:NotFoundComponent}



];
