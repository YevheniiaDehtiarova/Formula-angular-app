
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Injectable()
export class CustomErrorHandler implements ErrorHandler {
  constructor(private injector: Injector) {
    
  }

  handleError(error: any) {
    let router = this.injector.get(Router);
    router.navigate(['/error']);
 }
}
 

