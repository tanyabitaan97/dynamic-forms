import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Angular';
  formGroup = this.fb.group({
    arr: this.fb.array([this.createItem()])
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {


    // this.formGroup.valueChanges.subscribe(rs => {});
    // this.f.arr.controls[0].name.valueChanges.subscribe(rs => {
    //   console.log(rs);
    //   this.f.title.setValidators([Validators.required]);
    //   this.f.title.clearValidators();
    //   this.f.title.updateValueAndValidity();
    // })
  }

  get f() {
    return this.formGroup.get('arr') as FormArray;
  }

  createItem() {
    return this.fb.group({
      name: ['', Validators.required]
    });
  }

  addItem() {

    (this.formGroup.get('arr') as FormArray).push(this.createItem());
  }

  removeItem(idx: number): void {
    (this.formGroup?.controls['arr'] as FormArray).removeAt(idx);
  }

  onSubmit() {
    this.formGroup?.markAllAsTouched();
    console.log(this.formGroup?.value);
  }
}
