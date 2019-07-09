import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { BiographyComponent } from './books/biography/biography.component';
import { NovelComponent } from './books/novel/novel.component';
import { SelfhelpComponent } from './books/selfhelp/selfhelp.component';
import { ScienceComponent } from './books/science/science.component';
import { BusinessComponent } from './books/business/business.component';
import { TechnologyComponent } from './books/technology/technology.component';
import { CategoryComponent } from './category/category.component';
import { AddBioComponent } from './add/add-bio/add-bio.component';
import { AddNovelComponent } from './add/add-novel/add-novel.component';
import { AddTechComponent } from './add/add-tech/add-tech.component';
import { AddSelfhelpComponent } from './add/add-selfhelp/add-selfhelp.component';
import { AddBusinessComponent } from './add/add-business/add-business.component';
import { AddScienceComponent } from './add/add-science/add-science.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';


import {AuthGuard} from "./authguard/AuthGuard";
const routes: Routes = [

 


   {path: '' , redirectTo: 'login', pathMatch: 'full'},
   { path: 'login',
      component: LoginComponent, },

   { path: 'dashboard',
    component: DashboardComponent, 
    children:[
      { path: '',
      component: IndexComponent,
      canActivate:[AuthGuard] 
    },
      { path: 'add/biography',
      component: AddBioComponent,canActivate:[AuthGuard] },
      { path: 'add/novel',
      component: AddNovelComponent,canActivate:[AuthGuard] },
      { path: 'add/technology',
      component: AddTechComponent,canActivate:[AuthGuard] },
      { path: 'add/selfhelp',
      component: AddSelfhelpComponent,canActivate:[AuthGuard] },
      { path: 'add/business',
      component: AddBusinessComponent, canActivate:[AuthGuard]},
      { path: 'add/science',
      component: AddScienceComponent,canActivate:[AuthGuard] },
      { path: 'category',
      component: CategoryComponent,canActivate:[AuthGuard] },
      { path: 'books/biography',
      component: BiographyComponent,canActivate:[AuthGuard] },
      { path: 'books/novel',
      component: NovelComponent, canActivate:[AuthGuard]},
      { path: 'books/selfhelp',
      component: SelfhelpComponent,canActivate:[AuthGuard] },
      { path: 'books/science',
      component: ScienceComponent, canActivate:[AuthGuard]},
      { path: 'books/business',
      component: BusinessComponent, canActivate:[AuthGuard]},
      { path: 'books/technology',
      component: TechnologyComponent, canActivate:[AuthGuard]},
      { path: 'users',
      component: UsersComponent,canActivate:[AuthGuard] },
    ]
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
