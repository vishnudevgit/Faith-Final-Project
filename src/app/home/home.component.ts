import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public popoverTitle:string ='Logout';
  public popoverMessage:string ='Do you want to Logout ?';
  public confirmClicked: boolean= false;
  public cancelClicked:boolean=false;

  constructor(private authService:AuthService,private  router:Router) { }

  ngOnInit() {
  }
    logout(){
      this.authService.logout();
      this.router.navigateByUrl('/login');

    }
  }

  
