import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router} from '@angular/router';
import {LoginUser} from '../loginuser';
import {AuthService } from '../auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser: LoginUser;
  constructor(private authservice:AuthService,private router:Router,private formbuilder:FormBuilder,
    private toastr:ToastrService) { }

  LoginForm:FormGroup;
    isSubmitted=false;
  
    ngOnInit() {
      this.LoginForm=this.formbuilder.group({
        username:['',[Validators.required]],
        password:['',[Validators.required]],
        // Validators.pattern('[^a-zA-Z]+$')]]
      });
  }
  get formControls() { return this.LoginForm.controls; }

  login()
  {
    console.log(this.LoginForm.value);
    this.isSubmitted=true;
    if(this.LoginForm.valid){

      this.authservice.login(this.LoginForm.value).subscribe(
        data => {
          this.loginUser = data;
          console.log(data);
          console.log(data.roleId);
          if(data.roleId!=null && data.roleId==1){
            this.isSubmitted=true;
            console.log('success login by admin');
            this.router.navigateByUrl('/home');
            this.toastr.success('Login Successfull','UST ');
  
          }
          else{ 
            console.log('by user');
            this.toastr.error('Invalid Credentials','UST');
            this.router.navigateByUrl('/home');
            window.alert("invalid un or pw");
          }
      }
    );
    }
  }
}
