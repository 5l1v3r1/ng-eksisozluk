import { Component, OnInit } from '@angular/core';
import { EntryService } from '../services/entry.service';
@Component({
  moduleId: module.id,
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})

export class EntryComponent implements OnInit {
  Topics: any[];
  Entries: any[];
  popularFound: boolean = false;
  searching: boolean = false;

  

  handleSuccess(data){
    this.Entries = data.Entries;
    this.popularFound = true;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _popService:EntryService) { }

  getPopular(){
    return this._popService.getAllEntries().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    )
  }
  
  ngOnInit() { 
    this.getPopular();
  }

  



  

}
