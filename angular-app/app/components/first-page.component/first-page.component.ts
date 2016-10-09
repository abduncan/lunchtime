import { Component, OnInit }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Config Settings
import { AppSettings } from '../../app.settings';
import { FirebaseService } from '../../services';

@Component({
    templateUrl: './first-page.component.html',
})

export class FirstPageComponent implements OnInit {

    public constructor(
        private firebaseService: FirebaseService
    ) {

    }

    public ngOnInit() {
        debugger;
        this.firebaseService.createUser('a@test.com', '123');
    }

}