import { Component }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Config Settings
import { AppSettings } from '../../app.settings';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    templateUrl: './app.component.html',
    providers: [
        AppSettings
    ]
})

export class AppComponent {
}