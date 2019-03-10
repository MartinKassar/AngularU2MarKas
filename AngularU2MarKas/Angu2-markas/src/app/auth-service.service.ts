import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor() { }

  //this method sets a localstorage to the user with the key being user
  login(user):void {
    localStorage.setItem("user", user)    
    
  }

  loggedUser(loggedUser):void {
      loggedUser = true;
  }
  // this method clears out local storage
  logOut(loggedUser):void {
    localStorage.clear();

  }

    // this method returns localstorage
  checkIfLoggedIn():any {
    return localStorage.getItem("user")
  }

  
}
