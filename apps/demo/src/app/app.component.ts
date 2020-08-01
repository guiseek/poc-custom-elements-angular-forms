import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Components } from '@nxc/ui/form/custom';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'demo';
  @ViewChild('nxcInput') input: ElementRef<Components.NxcInput>;

  form = new FormGroup({
    name: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    // console.log(this.form.value);
  }

  ngAfterViewInit() {
    console.log('input: ', this.input);
    // this.input.nativeElement.first;
  }
}
