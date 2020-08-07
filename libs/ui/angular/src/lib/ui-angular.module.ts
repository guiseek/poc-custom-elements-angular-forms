import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NxcInputComponent } from './adapters/nxc-input.component';
import { NxcColorPickerComponent } from './adapters/nxc-color-picker.component';
import { BooleanValueAccessor } from './accessors/boolean-value-accessor';
import { NumericValueAccessor } from './accessors/numeric-value-accessor';
import { SelectValueAccessor } from './accessors/select-value-accessor';
import { RadioValueAccessor } from './accessors/radio-value-accessor';
import { TextValueAccessor } from './accessors/text-value-accessor';

const UiDeclarations = [
  BooleanValueAccessor,
  NumericValueAccessor,
  SelectValueAccessor,
  RadioValueAccessor,
  TextValueAccessor,
];

@NgModule({
  declarations: [
    NxcColorPickerComponent,
    NxcInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    NxcInputComponent,
    ReactiveFormsModule,
    NxcColorPickerComponent,
  ],
})
export class UiAngularModule {}
