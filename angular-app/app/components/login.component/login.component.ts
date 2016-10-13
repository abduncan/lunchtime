import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SignupComponent } from '../signup.component/signup.component';
import { AuthService } from '../../services';


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent {

    public email: string;
    public password: string;
    public errorMessage: string = null;

    public constructor(
        private authService: AuthService,
        private router: Router
    ) {

    }

    public login(): void {
        this.errorMessage = null;
        this.authService.login(this.email, this.password)
            .catch(err => {
                if (err.code === 'auth/user-not-found') {
                    this.errorMessage = 'Oops! Looks like you don\'t exist.';
                    this.errorMessage += ' Try creating an account first.';
                }

                // show message
                return Observable.of(false);
            })
            .subscribe(isLoggedIn => {
                if (!isLoggedIn) {
                    this.errorMessage = 'Login failed.';
                } else {
                    // redirect
                }
            });
    }

    public onCreateAccountClick(): void {
        this.router.navigateByUrl('/signup');
    }
}