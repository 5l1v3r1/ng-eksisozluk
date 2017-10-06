import { Component, OnInit } from '@angular/core';
import { TodayService } from '../services/today.service';
@Component({
  moduleId: module.id,
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})

export class TodayComponent implements OnInit {
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

  constructor(private _todService:TodayService) { }

  getPopular(){
    return this._todService.getAllPopular().subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error)
    )
  }
  
  ngOnInit() { 
    this.getPopular();
  }

  



  

}
