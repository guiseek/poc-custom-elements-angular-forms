import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangeDirective } from './outputs/change.directive';
import { InputComponent } from './input/input.component';
import { CustomOutputHoistDirective } from './adapters/custom-output-hoist.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [ChangeDirective, InputComponent, CustomOutputHoistDirective],
  exports: [ReactiveFormsModule, FormsModule, ChangeDirective, InputComponent, CustomOutputHoistDirective],
})
export class UiFormAngularModule {}
