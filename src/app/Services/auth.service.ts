import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { Subject } from 'rxjs';

@Injectable({
    providedIn:'root'
})

export class AuthService {

    private loginstatus:boolean=false;
    private token:string=null;
    private userAuthStatus=new Subject<{status:boolean}>();
    public userId:string
    public userName:string
    constructor(private http:HttpClient, public router:Router){}

    gettoken(){
        return this.token;
    }

    isUserAuthenticated(){
        return this.loginstatus;
    }
    checkLocalStorage(){
        const token=localStorage.getItem('token')
        if(!token){
            return;
        }

        this.loginstatus=true
        this.userAuthStatus.next({
            status:this.loginstatus
        })
        this.token=token;
        this.userName=localStorage.getItem('name');
        this.userId=localStorage.getItem('id');
    }

    verifyuser(username:string,password:string){

        const logindetail={
            username:username,
            password:password
        }

        this.http.post<{message:string, token:string, username:string, userid:string}>('https://protected-thicket-50462.herokuapp.com/login',logindetail)
                 .subscribe((response)=>{
                     this.token=response.token
                        if(this.token){
                            this.userId=response.userid;
                            this.userName=response.username;
                        this.setLocalStorageItem(this.token);
                        this.token=response.token;
                        this.loginstatus=true;
                        this.userAuthStatus.next({
                            status:this.loginstatus
                        })
                        this.router.navigate(['/dashboard'])
                        }
                        
                 })
        
    }

    userAuthListener(){
        return this.userAuthStatus.asObservable();
    }

    setLocalStorageItem(token:string){
        localStorage.setItem('token',token);
        localStorage.setItem('name',this.userName);
        localStorage.setItem('id',this.userId);
    }

    removeLocalStorageItem(){
        localStorage.removeItem('token');
    }

    logout(){
        this.loginstatus=false;
        this.userAuthStatus.next({
            status:this.loginstatus
        })
        this.removeLocalStorageItem();
        this.router.navigate(['/login']);
    }

}