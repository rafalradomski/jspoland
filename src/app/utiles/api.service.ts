import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ApiService {
  private http Http;

  constructor(http: Http) {
    this.http = http;
  }

  getData(){
    return new Promise( resolve => {
      
    })
  }

}
