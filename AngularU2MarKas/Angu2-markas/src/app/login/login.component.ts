import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string //Input value
  public loggedUser: string //String to check if localStorage is empty or not
  
  constructor(private authService: AuthServiceService) {
    this.loggedUser = this.authService.checkIfLoggedIn()
  }
  
  // Function on button login, loggeduser sets to "true" since localstorage adds to loggeduser
  onClickLogin():void {
    this.authService.login(this.user)
    this.loggedUser = this.authService.checkIfLoggedIn()
  }

  onClickLoggedUser():void {
    this.authService.loggedUser(this.loggedUser)
    console.log(this.loggedUser)

  }

  logOut():void {
    this.authService.logOut(this.loggedUser)
    this.loggedUser = this.authService.checkIfLoggedIn()

    
  }

  

  ngOnInit() {
  }

}

