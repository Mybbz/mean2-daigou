import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AddressService } from '../address.service';

@Component({
  selector: 'app-addr-list',
  templateUrl: './addr-list.component.html',
  styleUrls: ['./addr-list.component.scss']
})
export class AddrListComponent implements OnInit, OnChanges {

  @Input() addressList: Object[];
  deleteMsg: Object;

  constructor(private addressService: AddressService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.addressList) {
      this.addressList = changes.addressList.currentValue;
    }
  }

  ngOnInit() {
  }

  deleteRecord(id: String) {
    this.addressService.deleteAddress(id).subscribe(res => {
      this.deleteMsg = {
        success: res.status === 200,
        message: res.json().message
      };

      this.addressList.splice(this.addressList.findIndex(el => el['_id'] === id), 1);
    });
  }
}
