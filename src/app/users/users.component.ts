import { Component, OnInit } from '@angular/core';
import {UserService} from '../Services/user.service';
import {Userdetails} from '../Services/userdetails.model';
import { from, Subscription } from 'rxjs';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private users:UserService) { }

  public userslist:Userdetails[]=[];
  public userlistlisteners:Subscription;
  public count=1;
  public userid;
  ngOnInit() {
console.log("response")
    this.users.getUsers();
    this.userlistlisteners=this.users.getUserListeners()
                    .subscribe(response=>{
                      console.log(response)
                      this.userslist=response.users;
                    })
  }

  getcount(){
    if(this.count>this.userslist.length)
    this.count=0;
    return this.count++;
  }

  getid(id){
    this.userid=id;
  }

  deleteuser(){
    this.users.deteteuser(this.userid);
    this.users.getUsers();
  }

}
