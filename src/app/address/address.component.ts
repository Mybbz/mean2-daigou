import { Component, OnInit } from '@angular/core';
import { AddressService } from './address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  addressList: Object[];
  addedMsg: Object;

  constructor(
    private addressService: AddressService,
  ) { }

  ngOnInit() {
    this.addressService.getAddress().subscribe(res => {
      this.addressList = res;
    });
  }

  addAddress = ($event) => {
    this.addressList.push($event);
  }
}
