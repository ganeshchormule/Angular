import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';



@Component({
  selector: 'app-reactform',
  templateUrl: './reactform.component.html',
  styleUrls: ['./reactform.component.css']
})
export class ReactformComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      contacts: this.formBuilder.array([])
    });
  }

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get contacts() {
    return this.registerForm.get('contacts') as FormArray;
  }

  addContact() {
    this.contacts.push(this.formBuilder.control(''));
  }

  updateProfile() {
        this.registerForm.patchValue({ firstName : 'ABC' });
      // this.registerForm.setValue({firstName: 'Ganesh'});
  }

  onSubmit() {
    console.log('Submit invoked...');
  }

}
