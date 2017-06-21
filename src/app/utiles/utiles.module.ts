import { NgModule } from '@angular/core';
import {LoggerService} from "./logger.service";
import {StorageService} from "./storage.service";

@NgModule({
  providers:[LoggerService, StorageService]
})
export class UtilesModule { }
