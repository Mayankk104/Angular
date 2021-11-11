import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['./forms.component.scss'],
})
export class FormsComponent {
    // @ViewChild('tdForm') tdForm: any;

    questions: string[] = [
        'first pet name',
        'best friend name',
        'your nice name',
    ];

    onSubmit(formData: any) {
        console.log(formData.value)
    }
}
