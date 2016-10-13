import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../../services';


@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

    public constructor(
        private firebaseService: FirebaseService
    ) {

    }

    public ngOnInit() {
        debugger;
        this.firebaseService.getSomething();
    }
}