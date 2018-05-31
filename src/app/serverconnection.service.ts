import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/timer';
import { ApplicationComponent } from './application/application.component';
import { Configuration } from './configuration';

@Injectable()
export class ServerconnectionService {

  constructor(private http: HttpClient, private conf: Configuration) { 
    this.connectionUrl = conf.SERVER_URL;
  }

  connectionUrl: string;
  data: any;

  addApplication(application) {
    return this.http.post(this.connectionUrl, application);
  }

  getApplicationNames() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get(this.connectionUrl)
        .subscribe(data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }

  getApplicationByName(name: string) : Observable<any> {
    return this.http.get(this.connectionUrl + "/" + name);
  }
}
