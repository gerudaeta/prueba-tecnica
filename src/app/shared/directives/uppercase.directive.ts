import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appUppercase]'
})
export class UppercaseDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event']) onInput(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    const newValue = inputElement.value.toUpperCase();
    inputElement.value = newValue;
  }
}