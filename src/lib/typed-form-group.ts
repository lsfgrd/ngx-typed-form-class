import { FormGroup } from '@angular/forms';

export interface TypedFormGroup<T> extends FormGroup {
  typed?: T;
}

export class TypedFormGroup<T> {
  static getFormControls<T>(form: FormGroup | TypedFormGroup<T>): T {
    const controls: any = {};

    Object.keys(form.controls)
      .forEach(formControlName => {
        controls[formControlName] = form.get(formControlName);
      });

    return controls as T;
  }

  static build<T>(type: (new () => T)): TypedFormGroup<T> {
    const form: TypedFormGroup<T> = new FormGroup((new type() as {[key: string]: any}));
    form.typed = TypedFormGroup.getFormControls<T>(form);
    return form;
  }
}
