import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

@Injectable()
export class BusinessService {

  businesses: FirebaseListObservable<Business[]>;
  categories: FirebaseListObservable<Categories[]>;

  constructor(private _af:AngularFire) {}

  getBusinesses(category:string = ""){
    if(category != ""){
      this.businesses = this._af.database.list('/businesses', {
        query: {
          orderByChild: 'Category',
          equalTo: category
        }
      }) as FirebaseListObservable<Business[]>
    }else{
      this.businesses = this._af.database.list('/businesses') as FirebaseListObservable<Business[]>
    }
    return this.businesses;
  }
  getCategories( ){
    this.categories = this._af.database.list('/categories') as FirebaseListObservable<Categories[]>
    return this.categories;
  }
  addBusiness( newBusiness :Business) :Promise<any>{
    return this.businesses.push(newBusiness)
  }

  updateBusiness(key, updated_business):Promise<any>{
    return this.businesses.update(key, updated_business);
  }
  

}
export interface Business {
  $key?: string;
  Category?: string;
  city?: string;
  company?: string;
  description?: string;
  created_at?: string;
}



export interface Categories {
  $key?: string;
  name?: string;
}
