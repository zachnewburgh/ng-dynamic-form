import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AppService {

  private formDataUrl = 'assets/form-data.json';

  constructor(private http: Http) {
  }

  getFormData() {
    return this.http.get(this.formDataUrl)
                    .map(response => response.json())
                    .catch(this.handleError);
  }

  private handleError(error: any) {
    return Promise.reject(error.message || error);
  }
}
