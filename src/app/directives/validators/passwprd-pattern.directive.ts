import { Directive } from '@angular/core';
import { AbstractControl, Validator, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { MatchPasswordDirective } from './match-password.directive';

@Directive({
	selector: '[appPasswprdPattern]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: PasswprdPatternDirective,
			multi: true,
		},
	],
})
export class PasswprdPatternDirective implements Validator {
	validate(controler: AbstractControl): ValidationErrors | null {
		let pattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

		if (pattern.test(controler.value))
			return null
		else
			return { worngFormat: true }
	}
}
