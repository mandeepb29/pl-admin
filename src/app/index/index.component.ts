import { Component, OnInit } from '@angular/core';
import{ Dashboard } from '../Services/dashboard.model';
import { UserService } from '../Services/user.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private user:UserService) { }

  public dashboarddetails:Dashboard[]=[];
  private dash:Subscription;

  ngOnInit() {
    
    this.user.dashboard();
    this.dash=this.user.getDashboardListeners()
        .subscribe(response=>{
          this.dashboarddetails=response.dashboard
        })
  }

}
