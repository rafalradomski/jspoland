import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  public save(value: any){
    localStorage.setItem('STORE',JSON,stringify(value));
  }

}
