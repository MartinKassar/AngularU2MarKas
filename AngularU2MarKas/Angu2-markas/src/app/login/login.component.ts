import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: string //Input value
  public loggedUser: string //Boolean to check status
  
  constructor(private authService: AuthServiceService) {
    
  }
  
  // Function on button add click
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

