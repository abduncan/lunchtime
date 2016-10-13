import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
    AngularFire,
    AuthProviders,
    AuthMethods,
    FirebaseAuthState
} from 'angularfire2';

import { User } from '../models';

@Injectable()
export class AuthService {

    public uid: string;

    public constructor(
        private af: AngularFire
    ) { }

    public createUser(user: User, password: string): Observable<boolean> {
        let promise: Promise<FirebaseAuthState> = this.af.auth.createUser({
            email: user.email,
            password: password
        });

        return Observable.fromPromise(promise)
            .map((authState, index) => {
                this.uid = authState.uid;
                return true;
            });
    }

    public login(email: string, password: string): Observable<boolean> {
        let promise: Promise<FirebaseAuthState> = this.af.auth.login({
            email: email,
            password: password
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            });

        return Observable.fromPromise(promise)
            .map((authState, index) => {
                this.uid = authState.uid;
                debugger;
                return false;
            });
    }

}