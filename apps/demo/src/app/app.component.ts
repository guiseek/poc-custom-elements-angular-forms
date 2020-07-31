import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'demo';

  form = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    console.log(this.form.value);
    
  }
}
