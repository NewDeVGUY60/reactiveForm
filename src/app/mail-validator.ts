import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    // One uppercase at least
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const valid = emailRegex.test(control.value);

    const errors = {
        email: {
            rules: 'Votre mail doit ressembler à "john-doe@gmail.com" ou "john-doe@company.co.uk"'
        }
    };

    return !valid ? errors : null;
}