import {
    Directive
} from '@angular/core';

import {
    Validator,
    AbstractControl,
    NG_VALIDATORS
} from '@angular/forms';

@Directive({
    selector: '[emailValidator]',
    providers: [{ provide: NG_VALIDATORS, useExisting: EmailValidatorDirective, multi: true }]
})
export class EmailValidatorDirective implements Validator {

    public validate(control: AbstractControl): { [key: string]: any } {

        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

        const emailaddress = control.value;

        let validationObject = { 'emailValidator': { emailaddress } };

        if (emailaddress === null || emailaddress === undefined || emailaddress === '' ||
            emailaddress.length <= 5 || !EMAIL_REGEXP.test(emailaddress)) {
            return validationObject;
        }

        return null;
    }
}