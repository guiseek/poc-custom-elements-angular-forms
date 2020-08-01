import {
  Directive,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

const triggers = ['valueChange', 'focusChange', 'blurChange'];

@Directive({
  selector: '[nxcCustomOutputHoist]',
})
export class CustomOutputHoistDirective {
  @Input('nxcCustomOutputHoist') triggers: string[] = triggers;

  @Output() valueChange = new EventEmitter();
  @Output() focusChange = new EventEmitter();
  @Output() blurChange = new EventEmitter();

  constructor(private hoist: ElementRef<Element>) {
    console.log('this.triggers: ', this.triggers);
    
  }
  context() { return this };

  attachTriggers(events: string[]) {
    events.filter(evt => triggers.includes(evt))
    .forEach(trigger => {
      this.hoist.nativeElement.addEventListener(trigger, ({ detail }: CustomEvent) => {
        console.log(this.context.caller);
        
        this[trigger].emit(detail);
      })
    })
  }

}
