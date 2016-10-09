import { Component }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Config Settings
import { AppSettings } from '../../app.settings';

@Component({
    templateUrl: './first-page.component.html',
    providers: [
        AppSettings
    ]
})

export class FirstPageComponent {
}