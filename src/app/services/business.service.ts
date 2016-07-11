import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessService {

  businesses: FirebaseListObservable<Business[]>;

  constructor(private _af:AngularFire) {}

  getBusinesses(){
    this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>
    return this.businesses;
  }
}

export interface Business {
  $key?: string;
  Category?: string;
  city?: string;
  company?: string;
  description?: string;
}
