import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routing'

// Components
import { AppComponent } from './components/app.component/app.component';
import { FirstPageComponent } from './components/first-page.component/first-page.component';

// Directives

// Global CSS
require("../styles/main.css")

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        FirstPageComponent
        ],
    bootstrap: [AppComponent]
})
export class AppModule { }