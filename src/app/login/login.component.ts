import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginUserData = {
    'email': '',
    'password': ''
  }

  constructor(private _auth: AuthService, private _router: Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    //console.log(this.loginUserData)
    this._auth.loginUser(this.loginUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          localStorage.setItem('id', res.id)
          //console.log('userId = ' + localStorage.getItem('id'))
          //console.log('local storage: ' + localStorage.getItem('token'))
          this._router.navigate(['/weight-input/'])
        },
        err => console.log(err)
    )
  }

}
