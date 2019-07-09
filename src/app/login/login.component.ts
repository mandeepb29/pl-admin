import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 loginForm:FormGroup;
  constructor(public router:Router, public logindetail:AuthService) { }

  ngOnInit() {

    this.loginForm= new FormGroup({
      username:new FormControl(null,{validators:[Validators.required]}),
      password:new FormControl(null,{validators:[Validators.required]})
    });

    
  }
  login(){
    //console.log(this.loginForm.value);
    this.logindetail.verifyuser(this.loginForm.value.username, this.loginForm.value.password);
  }

  
}

