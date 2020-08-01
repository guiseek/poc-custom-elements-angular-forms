import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Components } from '@nxc/ui/form/custom';
import { InputComponent } from '@nxc/ui/form/angular';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'demo';
  // @ViewChild('nxcInput') input: ElementRef<Components.NxcInput>;
  // @ViewChild('nxcInput') input: InputComponent;

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
  });

  ngOnInit() {
  }

  ngAfterViewInit() {
    // const input = document.querySelector<HTMLNxcInputElement>('nxc-input');
    // console.log((input as any));
    // document.querySelectorAll('nxc-input').forEach((input) => {
    //   ['valueChange', 'focusChange', 'blurChange'].forEach((inputEvent) => {
    //     input.addEventListener(inputEvent, ($event) => {
    //       console.log($event);
    //     });
    //   });
    // });

    // this.input.nativeElement.first;
  }
  change($event) {
    console.log('event: ', $event);
  }
}
