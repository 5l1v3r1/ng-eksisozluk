import { Component, OnInit } from '@angular/core';
import { PopularService } from '../services/popular.service';
@Component({
  moduleId: module.id,
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})

export class PopularComponent implements OnInit {
  Topics: any[];
  popularFound: boolean = false;
  searching: boolean = false;

  

  handleSuccess(data){
    this.popularFound = true;
    this.Topics = data.Topics;
    console.log(data.hits);
  }

  handleError(error){
    console.log(error);
  }

  constructor(private _popService:PopularService) { }

  getPopular(){
    return this._popService.getAllPopular().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    )
  }
  
  ngOnInit() { 
    this.getPopular();
  }

  



  

}
