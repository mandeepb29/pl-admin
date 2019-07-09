import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import {  Subject, from } from 'rxjs';

import {Userdetails} from './userdetails.model';
import{Dashboard} from './dashboard.model';
@Injectable({
    providedIn:"root"
})

export class UserService {
    constructor(private http : HttpClient){}

    public users:Userdetails[]=[];
    private userlisteners=new Subject<{users:Userdetails[]}>();
    private dashboardlistener= new Subject<{dashboard:Dashboard[]}>();
    public dashdetails:Dashboard[]=[];
    getUsers(){
        this.http.get<{users:Userdetails[]}>('https://sheltered-forest-787.herokuapp.com/users')
        .subscribe(response=>{
            this.users=response.users;
            this.userlisteners.next({
                users:this.users
            })
        })
    }

    deteteuser(id:string){
        this.http.get<{result:string}>('https://sheltered-forest-787.herokuapp.com/deleteuser/'+id)
        .subscribe(response=>{
            alert(response.result)
           
        })
    }

    dashboard(){
        this.http.get<{result:Dashboard[]}>('https://sheltered-forest-787.herokuapp.com/dashboard')
        .subscribe(response=>{
            this.dashdetails=response.result
            this.dashboardlistener.next({
                dashboard:this.dashdetails
            })
        })
    }

    getUserListeners(){
        return this.userlisteners.asObservable();
    }

    getDashboardListeners(){
        return this.dashboardlistener.asObservable();
    }

}