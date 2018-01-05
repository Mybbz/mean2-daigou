import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

import { AddressService } from '../address.service';

@Component({
  selector: 'app-addr-list',
  templateUrl: './addr-list.component.html',
  styleUrls: ['./addr-list.component.scss']
})
export class AddrListComponent implements OnInit, OnChanges {

  @Input() addressList: Object[];
  deleteMsg: Object;
  updatedAddress: FormGroup;
  addressCtrl: FormArray;

  constructor(
    private addressService: AddressService,
    private formBuilder: FormBuilder
  ) { }

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

  updateRecord(id: String) {
    const record = this.addressList.find(elem => elem['_id'] === id);
    record['updateFlag'] = true;

    this.addressCtrl = this.formBuilder.array([]);
    record['address'].forEach(addr => {
      this.addressCtrl.push(this.formBuilder.group({
        location: [addr['location']],
        recipient: [addr['recipient']],
        tele: [addr['tele']]
      }));
    });

    this.updatedAddress = this.formBuilder.group({
      wechat: [record['wechat']],
      name: [record['name']],
      address: this.addressCtrl
    });
  }

  saveUpdate(id: String) {
    const record = this.addressList.find(elem => elem['_id'] === id);
    const payload = Object.assign(record, this.updatedAddress.value);
    record['updateFlag'] = false;

    this.addressService.updateAddress(payload).subscribe(res => {
      console.log(res);
    });
  }

  cancelUpdate(id: String) {
    const record = this.addressList.find(elem => elem['_id'] === id);
    record['updateFlag'] = false;
  }
}
