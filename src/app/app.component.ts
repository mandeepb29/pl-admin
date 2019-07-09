import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router } from '@angular/router';
import {Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeader: boolean = false;
  showFooter: boolean = false;
  
  logstatus:Subscription;
    constructor(private router: Router,private auth:AuthService) { }

    ngOnInit() {
      this.auth.checkLocalStorage();
      const temp=this.auth.isUserAuthenticated();
      this.showHeader=temp
      this.logstatus=this.auth.userAuthListener()
                    .subscribe((response)=>{
                      this.showHeader=response.status
                    })

      
       
    }
    ngOnDestroy(){
      this.logstatus.unsubscribe()
    }
}
