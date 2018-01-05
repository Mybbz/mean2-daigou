import { Component, OnInit } from '@angular/core';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressList: Object[];
  addressResp: Object[];
  addedMsg: Object;
  searchTerm: string;

  constructor(
    private addressService: AddressService,
  ) { }

  ngOnInit() {
    this.addressService.getAddress().subscribe(res => {
      this.addressResp = this.addressList = res;
    });
  }

  addAddress = ($event) => {
    this.addressList.push($event);
  }

  searchAddr = () => {
    if (!this.searchTerm) {
      this.addressList = this.addressResp;
    } else {
      this.addressList = [];
      this.addressResp.forEach(address => {
        Object.values(address).forEach(value => {
          if (typeof value === 'string' && value.includes(this.searchTerm)) {
            this.addressList.push(address);
          } else if (Array.isArray(value)) {  // address array
            value.forEach(addr => {
              Object.values(addr).forEach(v => {
                if (typeof v === 'string' && v.includes(this.searchTerm)) {
                  this.addressList.push(address);
                }
              });
            });
          }
        });
      });
    }

    this.addressList = this.removeDuplicates(this.addressList, '_id');
  }

  resetSearch = () => {
    this.addressList = this.addressResp;
    this.searchTerm = '';
  }

  private removeDuplicates = (originalArray, objKey) => {
    const trimmedArray = [];
    const values = [];
    let value;

    for (let i = 0; i < originalArray.length; i++) {
      value = originalArray[i][objKey];

      if (values.indexOf(value) === -1) {
        trimmedArray.push(originalArray[i]);
        values.push(value);
      }
    }

    return trimmedArray;
  }
}
