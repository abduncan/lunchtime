import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../services';


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    public email: string;
    public password: string;
    public errorMessage: string;

    public constructor(
        private authService: AuthService
    ) {

    }

    public login(): void {
        debugger;
        this.errorMessage = undefined;
        this.authService.login(this.email, this.password)
            .catch(err => {
                this.errorMessage = 'Invalid email and password combination.';
                // show message
                return Observable.of(false);
            })
            .subscribe(isLoggedIn => {
                debugger;
            });
    }
}