import { Component , OnInit} from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

import {BusinessService} from './services/business.service';


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

  constructor(private _businessService: BusinessService) {}

  ngOnInit(){
    this._businessService.getBusinesses().subscribe(businesses => {
      this.businesses = businesses;
    })
  }
}

export interface Business {
  $key?: string;
  Category?: string;
  city?: string;
  company?: string;
  description?: string;
}