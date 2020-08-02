import { InputHoistDirective } from './input-hoist.directive';
import { createMockFor } from '@nxc/util/testing';
import { ControlContainer, AbstractControl } from '@angular/forms';
import { ElementRef } from '@angular/core';

class Container extends ControlContainer {
  get control(): AbstractControl {
    throw new Error('Method not implemented.');
  }
  constructor() {
    super();
  }
}
describe('InputHoistDirective', () => {
  let directive: InputHoistDirective;

  function createInputHoist({
    containerMock = createMockFor(Container),
    elementRefMock = ElementRef,
  } = {}) {
    return { containerMock, elementRefMock };
  }
  it('should create an instance', () => {
    const { containerMock, elementRefMock } = createInputHoist();
    directive = new InputHoistDirective(containerMock, elementRefMock as any);
    expect(directive).toBeTruthy();
  });
});
