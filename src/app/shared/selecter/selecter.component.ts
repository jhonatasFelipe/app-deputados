import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'selecter',
  templateUrl: './selecter.component.html',
  styleUrls: ['./selecter.component.scss'],
  providers : [     
    {       provide: NG_VALUE_ACCESSOR, 
            useExisting: forwardRef(() => SelecterComponent),
            multi: true     
    }   
    ]
})
export class SelecterComponent implements ControlValueAccessor {
  @Input() options: string[] = [];
  _value:string[] = [];
  onTouched:any = ()=>{}
  onChange: any = ()=>{}
  isDisabled: boolean = false;
  constructor() { }

  set value(val:string[]){
    if(val || val !== this.value){
      this._value = val
      this.onChange(val);
      this.onTouched(val);
    }
  }

  get value(){
    return this._value
  }

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }

  

}
