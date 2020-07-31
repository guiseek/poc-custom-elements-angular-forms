import { Directive, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { NgControl } from '@angular/forms';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Directive({
  selector: `
    [nxc-control],
    nxcControlName,
    [formControl],
    formControlName
  `,
})
export class ControlDirective implements OnInit, OnDestroy {
  destroy$ = new Subject<void>();
  errors: { [k: string]: string };

  errorChange = new EventEmitter();
  constructor(private ngControl: NgControl) {}

  ngOnInit() {
    if (this.ngControl) {
      const until = takeUntil(this.destroy$);
      const debounce = debounceTime(200);
      this.ngControl.statusChanges
        .pipe(until, debounce)
        .subscribe(this.errorChange);
    }
  }

  ngOnDestroy() {
    this.destroy$.complete();
  }
}
