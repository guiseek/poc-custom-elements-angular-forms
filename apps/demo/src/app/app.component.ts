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

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  title = 'demo';

  private destroy$ = new Subject<void>();

  @ViewChild('nxcInput') custom: ElementRef<Components.NxcInput>;

  form = new FormGroup({
    email: new FormControl('guiseek', [Validators.email, Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  ngOnInit() {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(console.log);
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

  onClick() {
    console.log('clicked');

  }
  ngAfterViewInit() {
    window.setTimeout(() => {
      console.log(this.custom.nativeElement);
    });
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
