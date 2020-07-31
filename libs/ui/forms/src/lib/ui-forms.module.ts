import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ControlDirective } from './control/control.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UiFormsConfig } from './form.interfaces';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  declarations: [InputComponent, ControlDirective],
  exports: [ReactiveFormsModule, FormsModule, InputComponent, ControlDirective],
})
export class UiFormsModule {
  static forRoot(config: Partial<UiFormsConfig>): ModuleWithProviders<UiFormsModule> {
    return {
      ngModule: UiFormsModule,
      providers: [
        
      ]
    }
  }
}
