# NgxTypedFormClass (ngx-typed-form-class)

This is a small lib (more like an starter ideia) for those who (like me) are in the waits for strongly typed Reactive Forms.

I hope this can be useful for someone.

## Important note

This was not throughly tested. I only used it once at work in the feature I'm currently working on. It may or may not suck very badly in some specific scenarios. If you try it, please leave some feedback in the issues menu.

## Installing
```npm install ngx-typed-form-class```

## Getting Started
The key of this library is that **form groups === form classes**. You need to declare a class for every form group you have, and initialize every single one of the properties in the constructor. 

```javascript
export class PersonForm {
  name: FormControl;
  document: FormControl;
  age: FormControl;
  photos: FormArray;

  constructor() {
    this.name = new FormControl(['', Validators.required]);
    this.document = new FormControl({ value: '', disabled: true });
    this.age = new FormControl(['']);
    this.photos = new FormArray([]);
  }
}
```

Then, just import the lib and
```javascript
const formGroup: TypedFormGroup<PersonForm> = TypedFormGroup.build(PersonForm);
```

To access your controls:
```javascript
formGroup.typed.document
```

**Good things about this method of typing forms:**
* Types;
* Easier refactoring if you ever need to (types);
* Intellisense (...types);
* Small lib;
* Kinda forces you into isolating the form from your main component (DO IT), concentrating it in one place;
* Keeps the funtionality of FormGroup intact.

**Bad things:**
* *A lot* of boilerplate code;
* You cannot use the FormBuilder service to build the controls and arrays;
* ...I don't know. Tell me, please. Maybe we can fix it together.
