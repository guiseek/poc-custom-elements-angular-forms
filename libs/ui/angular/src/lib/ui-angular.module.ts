import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NxcInputComponent } from './adapters/nxc-input.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    NxcInputComponent,
  ],
  exports: [
    NxcInputComponent,
    ReactiveFormsModule,
  ],
})
export class UiAngularModule {}
