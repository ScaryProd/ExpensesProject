import { Component } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {

  categories = [
    'Restaurants',
    'Groceries',
    'Utilities',
    'Clothes',
    'Games',
    'Pets',]

  creditLines = [
    'BBVA',
    'Hey',
    'AMEX'
  ]

  createForm = this.fb.group({
    cost: ['', Validators.required],
    category: ['', Validators.required],
    currency: ['', Validators.required],
    recurring: ['', Validators.required],
    credit: [''],
    creditLine: ['']
  });

  public log(){
    console.log(this.createForm);
  }

  public onSubmit(){
    console.warn(this.createForm.value.cost);
  }

  constructor(private fb: FormBuilder){

  }
}
