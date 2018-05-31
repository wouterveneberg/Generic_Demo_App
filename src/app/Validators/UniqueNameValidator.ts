import { AsyncValidator, AbstractControl, NG_ASYNC_VALIDATORS, NgModel, AsyncValidatorFn, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs/Observable";
import { ServerconnectionService } from '../serverconnection.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Directive } from "@angular/core";
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';


export function existingAppNameValidator(service: ServerconnectionService): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return service.getApplicationByName(control.value).map(
        users => {
            return (users != null) ? {"nameValidator": true} : null;
        }
      );
    };
  }

@Directive({
    selector: '[nameValidator][formControlName],[nameValidator][formControl],[nameValidator][ngModel]',
    providers: [{provide: NG_ASYNC_VALIDATORS, useExisting: UniqueNameValidator, multi: true}]
})
export class UniqueNameValidator implements AsyncValidator {

    constructor(private service: ServerconnectionService) {  }

    validate(c: AbstractControl): Promise<ValidationErrors> | Observable<ValidationErrors> {
        return existingAppNameValidator(this.service)(c);
    }
}