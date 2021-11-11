import { Directive, Input } from '@angular/core';
import {
    FormGroup,
    NG_VALIDATORS,
    ValidationErrors,
    Validator,
} from '@angular/forms';

@Directive({
    selector: '[appMatchPassword]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: MatchPasswordDirective,
            multi: true,
        },
    ],
})
export class MatchPasswordDirective implements Validator {
    validate(control: FormGroup): ValidationErrors | null {
        const passwordControler = control.controls['password'];
        const confirmPasswordControler = control.controls['confirmPassword'];

        if (!!confirmPasswordControler && (passwordControler.value !== confirmPasswordControler.value))
            confirmPasswordControler.setErrors({ cofirmPasswordNotMatching: true })
        else if (!!confirmPasswordControler && (passwordControler.value === confirmPasswordControler.value))
            confirmPasswordControler.setErrors(null);

        return null;
    }
}

