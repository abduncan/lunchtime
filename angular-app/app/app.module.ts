import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2'

import { routing } from './app.routing'

// Components
import {
    AppComponent,
    NavComponent,
    SignupComponent,
    LoginComponent
} from './components';

// Providers
import {
    AuthService,
    FirebaseService
} from './services';

// Directives

// Global CSS

require('../node_modules/bootswatch/flatly/bootstrap.min.css');
require('../styles/main.css');

var firebaseConfig = require('../config/firebase.config.js');

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        FormsModule,
        AngularFireModule.initializeApp(firebaseConfig)
    ],
    declarations: [
        AppComponent,
        NavComponent,
        SignupComponent,
        LoginComponent
    ],
    providers: [
        AuthService,
        FirebaseService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }