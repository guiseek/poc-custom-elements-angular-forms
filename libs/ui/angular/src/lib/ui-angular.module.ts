import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NxcInputComponent } from './adapters/nxc-input.component';
import { NxcColorPickerComponent } from './adapters/nxc-color-picker.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NxcInputComponent,
    NxcColorPickerComponent,
  ],
  exports: [
    NxcInputComponent,
    ReactiveFormsModule,
    NxcColorPickerComponent,
  ],
})
export class UiAngularModule {}
