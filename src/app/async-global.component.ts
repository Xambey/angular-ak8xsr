import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from "@angular/forms"

import { RxFormBuilder, FormBuilderConfiguration } from '@rxweb/reactive-form-validators';

import { User } from './user.model';

@Component({
    selector: 'app-async-global',
    templateUrl: './async-global.component.html',
    // changeDetection: ChangeDetectionStrategy.OnPush
})
export class AsyncGlobalComponent implements OnInit {
    userFormGroup: FormGroup

    constructor(
        private formBuilder: RxFormBuilder    ) { }

    ngOnInit() {
        let user = new User();
        this.userFormGroup = this.formBuilder.formGroup(user);
        this.userFormGroup.statusChanges.subscribe(status => {
          console.log(status);
        })
    }

    submit() {
      console.log(this.userFormGroup.valid);
    }
}