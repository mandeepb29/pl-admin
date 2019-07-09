import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import {FormsModule} from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
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

import { AuthInterceptor } from "./interceptor/AuthInterceptor";
import { ErrorInterceptor } from "./interceptor/ErrorInterceptor";
import {AuthGuard} from "./authguard/AuthGuard";
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SidebarComponent,
    UsersComponent,
    BiographyComponent,
    NovelComponent,
    SelfhelpComponent,
    ScienceComponent,
    BusinessComponent,
    TechnologyComponent,
    CategoryComponent,
    AddBioComponent,
    AddNovelComponent,
    AddTechComponent,
    AddSelfhelpComponent,
    AddBusinessComponent,
    AddScienceComponent,
    LoginComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi:true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi:true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
