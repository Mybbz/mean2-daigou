import { Injectable } from '@angular/core';

import { WindowRefService } from '../window-ref/window-ref.service';

@Injectable()
export class AuthTokenService {
  window: any;

  constructor(
    private WindowRef: WindowRefService
  ) {
    this.window = WindowRef.nativeWindow;
  }

  saveToken = (token) => {
    this.window['localStorage'].setItem('user-token', token);
  }

  getToken = () => {
    return this.window['localStorage'].getItem('user-token');
  }
}
