import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ControlDirective } from './control/control.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [InputComponent, ControlDirective],
  exports: [ReactiveFormsModule, FormsModule, ControlDirective],
})
export class UiFormAngularModule {
}
