import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent {

    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public errorMessage: string = null;

    public constructor(
        private authService: AuthService
    ) {

    }

    public onSignupFormSubmit(): void {
        let user: User = new User(
            this.firstName,
            this.lastName,
            this.email
        );
        this.authService.createUser(user, this.password)
        .catch(err => {
            if(err.code === 'auth/email-already-in-use') {
                this.errorMessage = 'Whoops! Looks like you already exists :)';
            }
            return Observable.of(false);
        })
            .subscribe(success => {
                debugger;
            });
    }
}