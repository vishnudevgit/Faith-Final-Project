import { Injectable } from '@angular/core';
import { LoginUser } from './loginuser';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpService:HttpClient) { }
  public login(userInfo:LoginUser){
    localStorage.setItem('ACCESS_TOKEN',"accesstoken");
    return this.httpService.get<LoginUser>(environment.apiUrl+'login/'+userInfo.username+'/'+userInfo.password);
  }

  public isloggedin(){
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
 

}
