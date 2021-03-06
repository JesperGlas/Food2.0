import { Injectable, EventEmitter } from '@angular/core';
import {
  Http,
  Response
} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FetchJsonService {

  constructor(private _http: Http) { }

  getPosts(url:string) {
    return this._http.get(url)
                      .map(
                        (response: Response) => {
                          const data = response.json();
                          return data;
                        }
                      );
  }

}
