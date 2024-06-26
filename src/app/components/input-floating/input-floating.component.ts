import { Component, Input, forwardRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ControlValueAccessor,
  FormGroup,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgForm,
} from '@angular/forms';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { ToolsService } from 'src/app/services/tools.service';
import {
  NgxCurrencyConfig,
  NgxCurrencyDirective,
  NgxCurrencyInputMode,
} from 'ngx-currency';

const INPUT_FLOATING_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFloatingComponent),
  multi: true,
};

@Component({
  selector: 'input-floating',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxMaskDirective, NgxCurrencyDirective],
  templateUrl: './input-floating.component.html',
  styleUrls: ['./input-floating.component.scss'],
  providers: [INPUT_FLOATING_VALUE_ACCESSOR, provideNgxMask()],
})
export class InputFloatingComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() size = 'lg';
  @Input() placeholder = ' ';
  @Input() model!: string;
  @Input() label!: string;
  @Input() colorBgLabel = 'bg-cb-primary';
  @Input() mask!: string;
  @Input() dropSpecialCharacters = true;
  @Input() form!: NgForm;
  @Input() isDisabled = false;
  @Input() isReadOnly = false;
  @Input() isRequired = false;
  @Input() isFloating = true;
  @Input() options: any[] = [
    { key: 0, description: 'Não' },
    { key: 1, description: 'Sim' },
  ];
  @Input() bindValue: string = 'id';
  @Input() bindText: string = 'name';
  @Input() rows: any = 4;
  @Input() prefix!: string;
  @Input() suffix!: string;
  @Input() align = 'left';
  @Input() precision!: number;

  optionsMoney!: NgxCurrencyConfig;

  exclude = ['select', 'phone', 'money', 'textarea', 'password'];

  showPass = false;

  constructor(public tools: ToolsService) {}
  ngOnInit(): void {
    this.optionsMoney = {
      align: this.align,
      allowNegative: false,
      allowZero: true,
      decimal: ',',
      precision: this.precision ?? 2,
      prefix: this.prefix ?? 'R$ ',
      suffix: this.suffix ?? '',
      thousands: '.',
      nullable: false,
      min: null,
      max: null,
      inputMode: NgxCurrencyInputMode.Financial,
    };
  }

  private innerValue: any;

  get value() {
    return this.innerValue;
  }

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCb(v);
    }
  }

  onChangeCb: (_: any) => void = () => {};
  onTouchedCb: (_: any) => void = () => {};

  writeValue(v: any): void {
    if (v !== this.innerValue) {
      this.value = v;
      this.onChangeCb(v);
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCb = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedCb = fn;

    // if (this.form && this.model && this.form.controls[this.model]) {
    //   this.form.controls[this.model].markAsTouched();
    // }
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
