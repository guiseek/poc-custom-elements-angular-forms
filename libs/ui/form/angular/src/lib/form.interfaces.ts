export type ErrorMessageItem = 'required' | 'email' | 'min' | 'max' | 'minlength' | 'maxlength' | 'pattern';
export type ErrorMessageFn = (error: any) => string

export interface ErrorMessage {
  [K: string]: ErrorMessageFn;
  required: (error: any) => string;
  email: (error: any) => string;
  min: ({ min, actual }: {
    min: any;
    actual: any;
  }) => string;
  max: ({ max, actual }: {
    max: any;
    actual: any;
  }) => string;
  minlength: ({ requiredLength, actualLength }: {
    requiredLength: any;
    actualLength: any;
  }) => string;
  maxlength: ({ requiredLength, actualLength }) => string;
  pattern: ({ requiredPattern, actualValue }) => string;
}
export interface UiFormsConfig {
  defaultMessages: ErrorMessage;
}
