import { Injectable } from '@angular/core';

import { WindowRefService } from '../window-ref/window-ref.service';

@Injectable()
export class LogOutService {
  window: any;
  constructor(
    private WindowRef: WindowRefService
  ) {
    this.window = WindowRef.nativeWindow;
  }

  logout = () => {
    this.window['localStorage'].removeItem('user-token');
    this.window['sessionStorage'].clear();
  }

}
