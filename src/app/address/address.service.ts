import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AddressService {

  addressInstance: any;

  constructor(private http: Http) { }

  getAddress = (id?: string, wechat?: string, name?: string) => {
    id = id || '';
    wechat = wechat || '';
    name = name || '';

    if (this.addressInstance) {
      return Observable.of(this.addressInstance);
    }

    return this.http.get(`/api/address?id=${id}&wechat=${wechat}&name=${name}`)
      .map(res => {
        this.addressInstance = res.json();
        return this.addressInstance;
      })
      .catch(err => {
        console.log('Get Address Failed due to ' + err);
        return Observable.throw(err);
      })
      .publishReplay(1).refCount();
  }

  createAddress = (obj) => {
    return this.http.post('/api/address', obj)
      .map(res => Object.assign({success: res.status === 200}, res.json()))
      .catch(err => Object.assign({success: false}, err.json()));
  }

  updateAddress = (obj) => {
    return this.http.put('/api/address', obj)
      .map(res => Object.assign({success: res.status === 200}, res.json()))
      .catch(err => Object.assign({success: false}, err.json()));
  }

  deleteAddress = (id) => {
    return this.http.delete(`/api/address?id=${id}`);
  }
}
