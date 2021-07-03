import { Component, OnInit, Input } from '@angular/core';
import { AbstractControlDirective,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.scss']
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'שדה חובה',
    'minlength': (params) => 'מינימום תווים  ' + params.requiredLength,
    'maxlength': (params) => 'מספר מקסמלי של תווים  ' + params.requiredLength,
    'pattern': (params) => 'חובה תבנית של  ' + params.requiredPattern,
    'custom': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => params.message,
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message
  };
 
  @Input()
  private control: AbstractControlDirective | AbstractControl;
 
  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }
 
  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }
 
  private getMessage(type: string, params: any) {
    return ShowErrorsComponent.errorMessages[type](params);
  }

}
