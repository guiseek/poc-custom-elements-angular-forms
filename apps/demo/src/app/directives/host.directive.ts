import { Directive, ElementRef, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[demoHost], nxc-input[demoHost]'
})
export class HostDirective implements AfterViewInit {
  @Output() valueChange = new EventEmitter();
  @Output() focusChange = new EventEmitter();
  @Output() blurChange = new EventEmitter();
  constructor(
    private host: ElementRef<Element>
  ) {
    
    console.log('host.nativeElement: ', host.nativeElement);
    ['valueChange', 'focusChange', 'blurChange'].forEach((inputEvent) => {
      host.nativeElement.addEventListener(inputEvent, ($event: CustomEvent) => {
        this[inputEvent].emit($event.detail)
      });
    });
  }

  ngAfterViewInit() {
    // window.setTimeout(() => {
    //   console.log(this.host.nativeElement.shadowRoot);
    //   console.log(this.host.nativeElement.slot);
    //   console.log();
    //   this.host.nativeElement.shadowRoot.addEventListener('load', (evt) => {
    //     console.log('evt', evt);
        
    //   })
      
    // })
    
  }
}
