import { Component, OnInit } from '@angular/core';

@Component({
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css']
})
export class SignupComponent implements OnInit {

    public errorMessage: string = null;
    
    public ngOnInit() {
        // Init component... 
    }
}