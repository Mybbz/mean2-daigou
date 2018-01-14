import { Injectable } from '@angular/core';
import { WindowRefService } from '../window-ref/window-ref.service';
import { AuthTokenService } from '../auth-token/auth-token.service';

@Injectable()
export class LoginStatusService {
  window: any;
  constructor(
    private WindowRef: WindowRefService,
    private authTokenService: AuthTokenService
  ) {
    this.window = WindowRef.nativeWindow;
  }

  isLoggedIn = (): boolean => {
    const token = this.authTokenService.getToken();
    return !!token && (JSON.parse(this.window.atob(token.split('.')[1]))['exp'] > Date.now() / 1000);
  }

}
