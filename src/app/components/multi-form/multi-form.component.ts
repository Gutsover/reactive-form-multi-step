import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-multi-form',
  templateUrl: './multi-form.component.html',
  styleUrls: ['./multi-form.component.css'],
})
export class MultiFormComponent implements OnInit {
  step: any = 1;
  submitted: any = false;
  formContainer!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formContainer = this.fb.group({
      part1: new FormGroup({
        siret1: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{9,9}'),
        ]),
        siret2: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{6,6}'),
        ]),
      }),
      part2: new FormGroup({
        tel: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{9,10}'),
        ]),
        year: new FormControl('', [
          Validators.required,
          Validators.pattern('^[0-9]{4,4}'),
        ]),
      }),
    });
  }

  submit() {
    this.submitted = true;
    if (this.step == 1 && this.formContainer.get('part1')?.invalid) {
      console.log('Kill you.');
      return;
    }
    // console.log(this.formContainer);
    if (this.step == 2 && this.formContainer.get('part2')?.invalid) {
      console.log('Die.');
      console.log(this.formContainer);
      return;
    }
    console.log('Téléphone : ' + this.tel.value);
    console.log('Date de recensement : ' + this.year.value);
    console.log('siret : ' + this.siret1.value + this.siret2.value);
    this.step = this.step + 1;
  }

  previous() {
    this.step = this.step - 1;
  }

  get part1(): any {
    return this.formContainer.get('part1');
  }

  get part2(): any {
    return this.formContainer.get('part2');
  }

  get siret1(): any {
    return this.formContainer.get('part1')!.get('siret1');
  }

  get siret2(): any {
    return this.formContainer.get('part1')!.get('siret2');
  }

  get tel(): any {
    return this.formContainer.get('part2')!.get('tel');
  }

  get year(): any {
    return this.formContainer.get('part2')!.get('year');
  }
}
