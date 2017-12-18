import {Component, Inject, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {ApplicationConfig, CONFIG_TOKEN} from "../../app-config";

import {FormControl, Validators} from "@angular/forms";

import {ErrorDialogComponent} from "../../error-dialog/error-dialog.component";
import {MatDialog} from "@angular/material";


@Component({
  selector: 'app-area-create',
  templateUrl: './area-create.component.html',
  styleUrls: ['./area-create.component.scss']
})
export class AreaCreateComponent implements OnInit {

  cookie: boolean = false;
  areaType: string;
  nameFormControl: FormControl;

  type: string;

  constructor(private http: HttpClient,
              private cookieService: CookieService,
              private router: Router,
              private dialog: MatDialog,
              @Inject(CONFIG_TOKEN) private config: ApplicationConfig) {
  }

  ngOnInit() {
    this.cookie = this.cookieService.check('creatures-token');
    if (!this.cookie) {
      this.router.navigate(['/pa165/login']);
      this.dialog.open(ErrorDialogComponent, {
        width: '600px',
        data: ["User is not logged in."],
      });
      return;
    }
    this.checkIfCookieExist();
    this.nameFormControl = new FormControl('', [
      Validators.required,
    ]);
  }

  checkIfCookieExist() {
    if (!this.cookie) {
      this.router.navigate(['/pa165/login']);
    }
  }

  createArea(name, areaType){
    this.cookie = this.cookieService.check('creatures-token');
    this.checkIfCookieExist();
    var json = {"name": name,"type":areaType};
    this.http.post(this.config.apiEndpoint + '/pa165/rest/auth/areas/create', json, {withCredentials: true}).subscribe(
      data => {
        console.log("Updating area with name: " + name + ", type: " + areaType + "was successful.");
        this.router.navigate(['/pa165/areas']);
      }, error => {
        console.log("Error during updating area with name: " + name + ", type: " + areaType + "was successful.");
      }
    )
  }
}
