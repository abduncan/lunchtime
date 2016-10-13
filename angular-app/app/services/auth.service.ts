import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
    AngularFire,
    AuthProviders,
    AuthMethods,
    FirebaseAuthState
} from 'angularfire2';

@Injectable()
export class AuthService {

    public constructor(
        private af: AngularFire
    ) { }

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
            .map((value, index) => {
                debugger;
                return false;
            });
    }

}