import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  condition:any = false;
   
  cardData :any;
  
  constructor(private _rest: RestService) { }

  ngOnInit(){
  
  }

  clickTag(){
    this.condition = true;
  }
  clickTag1(){
    this.condition = false;
  }
 
}
