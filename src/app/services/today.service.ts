import { Injectable } from '@angular/core';
import { Http, Headers   } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TodayService {

  constructor(private _http:Http) { }

  getAllPopular(){
    return this._http.get("https://eksi-sozluk.herokuapp.com/today")
    .map(res => res.json());
  }

}
