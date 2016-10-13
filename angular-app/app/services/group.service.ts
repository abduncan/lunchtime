import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFire } from 'angularfire2';

import { AuthService } from './';

@Injectable()
export class GroupService {

    public constructor(
        private af: AngularFire,
        private authService: AuthService
    ) { }

    public createGroup(name: string): Observable<boolean> {
        let promise = this.af.database.list('/groups').push({ name });
        return Observable.fromPromise(promise);
    }

    public addCurrentUserToGroup(groupId: string): void {
        let uid: string = this.authService.uid;
        let user = this.af.database.object('/groups/' + groupId + '/users/' + uid);
        user.set(true);
    }

}