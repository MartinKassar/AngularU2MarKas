import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor() { }

  login(user):void {
    localStorage.setItem("user", user)    
    
  }

  loggedUser(loggedUser):void {
      loggedUser = true;
  }

  logOut(loggedUser):void {
    localStorage.clear();

  }

  checkIfLoggedIn():any {
    return localStorage.getItem("user")
  }

  
}
