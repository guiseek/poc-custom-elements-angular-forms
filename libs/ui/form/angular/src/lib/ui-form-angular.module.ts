import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ChangeDirective } from './outputs/change.directive';
import { CustomOutputHoistDirective } from './adapters/custom-output-hoist.directive';
import { InputHoistDirective } from './adapters/input-hoist.directive';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [
    ChangeDirective,
    CustomOutputHoistDirective,
    InputHoistDirective,
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    ChangeDirective,
    CustomOutputHoistDirective,
    InputHoistDirective,
  ],
})
export class UiFormAngularModule {}
