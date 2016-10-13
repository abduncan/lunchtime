import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class FirebaseService {

    public constructor(
        private af: AngularFire
    ) {

    }

    public createUser(email: string, password: string): void {
        debugger;
        this.af.auth.createUser({
            email: 'a1@test.com',
            password: 'password'
        })
            .then(t => {
                debugger;
            }, t => {
                debugger;
            });
    }

    public getSomething() {
        debugger;
        this.af.auth.login({
            email: 'abduncan0@gmail.com',
            password: '123456'
        },
            {
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then(a => {
                debugger;
                this.af.database.list('users').subscribe(u => {
                    debugger;
                    u.forEach(ui => {
                        console.log(u);
                    });
                });
            });
    }

}