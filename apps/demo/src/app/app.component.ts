import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Components } from '@nxc/ui/custom';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type Alert = Pick<Components.NxcAlert, 'type'> & {
  title: string;
  text: string;
};

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'demo';

  alerts: Array<Alert> = [
    { type: 'info', title: 'Alert info', text: 'Alert info' },
    { type: 'danger', title: 'Alert danger', text: 'Alert danger' },
    { type: 'primary', title: 'Alert primary', text: 'Alert primary' },
    { type: 'success', title: 'Alert success', text: 'Alert success' },
    { type: 'warning', title: 'Alert warning', text: 'Alert warning' },
  ];

  private destroy$ = new Subject<void>();

  form = new FormGroup({
    color: new FormControl('#262728'),
    nickname: new FormControl('guiseek'),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  constructor(private element: ElementRef<HTMLElement>) {}

  async ngOnInit() {
    // customElements.whenDefined('nxc-color-picker').then(() => {
    //   const colorPicker = document.querySelector('nxc-color-picker');
    //   console.log(colorPicker);
    //   colorPicker.addEventListener('nxcChange', (ev) => {
    //     console.log(ev);
    //   });
    // });

    // customElements.whenDefined('nxc-button').then(() => {
    //   const buttons = document.querySelectorAll('nxc-button');
    //   console.log(buttons);
    //   buttons.forEach(btn => {
    //     btn.addEventListener('click', (ev) => {
    //       console.log(ev);
    //     });
    //   })
    // });

    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
  }
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

  onClose(event?) {
    console.log(event);
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
