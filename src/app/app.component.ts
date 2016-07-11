import { Component , OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {BusinessService, Business} from './services/business.service';


@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [BusinessService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  businesses: Business[];
  appState: string;
  activeKey: string;

  constructor(private _businessService: BusinessService) {}

  ngOnInit(){
    this.appState = "default";
    this._businessService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    })
  }

  changeState(state, key){
    console.log("App state :" + state)
    if(key){
      console.log("active key: " + key);
      this.activeKey = key;
    }
    this.appState = state;
  }
}
