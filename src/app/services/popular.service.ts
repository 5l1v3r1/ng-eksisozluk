import { Injectable } from '@angular/core';
import { Http, Headers   } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PopularService {

  constructor(private _http:Http) { }

  getAllPopular(){
    return this._http.get("https://eksi-sozluk.herokuapp.com/popular")
    .map(res => res.json());
  }

}
