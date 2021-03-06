import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  logged: boolean = false;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {

  }


  login(email, password) {
    this.http.post('http://localhost:8080/pa165/rest/auth?email=' + email + '&password=' + password, null, { withCredentials: true }).subscribe(
      data=> {
        console.log('Data: ' + data);
        this.router.navigate(['auth/home']);
      },
      error => {
        console.log('Error: ' + error);
        alert("Wrong email or password!");
      }
    )
  }

  logout() {
    this.http.delete('http://localhost:8080/pa165/rest/auth', {withCredentials: true}).subscribe(
      data => console.log('Data: ' + data),
      error => console.log('Error: ' + error)
    )
  }

}
