import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddressService } from '../address.service';
declare var $: any;

@Component({
  selector: 'app-addr-form',
  templateUrl: './addr-form.component.html',
  styleUrls: ['./addr-form.component.scss']
})
export class AddrFormComponent implements OnInit {

  @Output() addAddress = new EventEmitter();

  newAddress: FormGroup;
  resMsg: Object;

  constructor(
    private addressService: AddressService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.newAddress = this.formBuilder.group({
      wechat: [''],
      name: [''],
      address: this.formBuilder.array([
        this.formBuilder.group({
          location: [''],
          recipient: [''],
          tele: ['']
        })
      ])
    });
  }

  addAddrModal() {
    $('#addr-form').modal('show');
    this.newAddress = this.formBuilder.group({
      wechat: [''],
      name: [''],
      address: this.formBuilder.array([
        this.formBuilder.group({
          location: [''],
          recipient: [''],
          tele: ['']
        })
      ])
    });
  }

  createAddress() {
    this.addressService.createAddress(this.newAddress.value)
    .subscribe(res => {
      if (res.success) {
        this.addAddress.emit(res.data);
        $('#addr-form').modal('hide');
      } else {
        this.resMsg = {
          success: false,
          message: 'Failed to add new address, please refresh the page or try again later'
        };
      }
    });
  }
}
