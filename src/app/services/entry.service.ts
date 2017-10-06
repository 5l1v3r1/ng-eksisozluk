import { Injectable } from '@angular/core';
import { Http, Headers   } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryService {

  constructor(private _http:Http) { }

  getAllEntries(){
    return this._http.get("https://eksi-sozluk.herokuapp.com/topic/recep tayyip erdoğan")
    .map(res => res.json());
  }

}
