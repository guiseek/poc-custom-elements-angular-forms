import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  form = new FormGroup({
    color: new FormControl('#262728'),
    nickname: new FormControl('guiseek'),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  colorChange(event: CustomEvent) {
    console.log(event);
  }
  colorHide() {
    console.log('hide');
  }
  focusChange(event: CustomEvent) {
    console.log('focusChange: ', event);
  }
  blurChange(event: CustomEvent) {
    console.log('blurChange: ', event);
  }
  valueChange({ detail }: CustomEvent) {
    console.log('valueChange: ', detail);
  }

  onClick(event: Event) {
    console.log('clicked: ', event);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
