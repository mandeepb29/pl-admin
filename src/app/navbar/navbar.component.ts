import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth :AuthService) { }

  ngOnInit() {

    try {

      $('.toggle').on('click', function () {
          $('.hamburger').toggleClass('is-active');
          $('.navbar-mobile').slideToggle('500');
        
      });
      // Hamburger Menu
      $('.hamburger').on('click', function () {
        $(this).toggleClass('is-active');
        $('.navbar-mobile').slideToggle('500');
      });
      $('.navbar-mobile__list li.has-dropdown > a').on('click', function () {
        var dropdown = $(this).siblings('ul.navbar-mobile__dropdown');
        $(this).toggleClass('active');
        $(dropdown).slideToggle('500');
        return false;
      });
    } catch (error) {
      console.log(error);
    }

  }

  logout(){
console.log("click")
    this.auth.logout();

  }

}
