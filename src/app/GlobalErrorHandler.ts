import { LocationStrategy } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ErrorHandler, Injectable } from '@angular/core';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(
    private httpClient: HttpClient,
    private locationStrategy: LocationStrategy
  ) {
    super();
  }

  handleError(error: any): void {
    const errorEvent = {
      path: this.locationStrategy.path(),
      message: error.message ?? error.toString(),
      handler: 'GlobalErrorHandler',
      user: 'the-id-of-the-current-user',
      time: new Date(),
      stack: error.stack,
    };

    this.httpClient
      .post('http://localhost:3000/logErrors', errorEvent)
      .subscribe((val) => {
        console.log(val);
      });
  }
}
