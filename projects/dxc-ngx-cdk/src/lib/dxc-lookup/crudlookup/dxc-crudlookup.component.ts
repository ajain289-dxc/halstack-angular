import { ConfigurationsetupService } from './../../services/startup/configurationsetup.service';
import { EAction } from './../../models/startup/configuration.model';
import { Component, ElementRef, ViewChild, OnInit, Input, Output, EventEmitter, forwardRef, OnDestroy } from '@angular/core';
import { IRequest, EMethod } from '../../models/startup/configuration.model';
import { HttpParams } from '@angular/common/http';
import { ELookupType, Mode, GridMode } from '../../models/lookup/lookup';
import { DxcBaselookupComponent } from '../baselookup/dxc-baselookup.component';
//import { BaseComponent } from '../../basecomponent';
import { ICodes } from '../../models/lookup/lookup.model';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { LookupService } from '../../services/lookup/lookup.service';
import { GridHelper } from '../../helpers/grid/helper';
import { MessageService } from './../../services/toaster/message.service';
import { GridService } from '../../services/grid/grid.service';


@Component({
  selector: 'dxc-crud-lookup',
  templateUrl: './dxc-crudlookup.component.html',
  styleUrls: ['./dxc-crudlookup.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DxcCrudLookupComponent),
    multi: true
  }]
})
export class DxcCrudLookupComponent extends DxcBaselookupComponent<ICodes | Array<ICodes>> implements
  ControlValueAccessor, OnInit, OnDestroy {
  resultValue: any | Array<any>;
  defaulttoolbar = true;
  @ViewChild('appFoo', { static: false }) appFoo: DxcBaselookupComponent<any | Array<any>>;

  @Input('id') id: string;
  @Input('lookuptype') lookupType: ELookupType = ELookupType.SINGLE;
  @Input('mode') mode: Mode = Mode.SELECT;
  @Input('gridmode') gridMode: GridMode = GridMode.MODAl;
  @Input('label') label: string;
  @Input('removeiconarialabel') removeiconarialabel: string;
  @Input('addrequired') addrequired: boolean;
  @Input('autosearchrequired') autosearchrequired: boolean;
  @Input('minimumColumns') minimumColumns: number;
  @Input('maximumColumns') maximumColumns: number;
  @Input('key') key: string;
  @Input('isrequired') required: boolean;

  @Input('disabled') disabled: false;
  
  @Input('ariaLabel') ariaLabel: string = null;
  @Input('ariaLabelledBy') ariaLabelledBy: string = null;
  @Input('ariaDescribedBy') ariaDescribedBy: string = null; 
  @Input('ariaRequired') ariaRequired: boolean = false;

  @Output()
  resultChange: EventEmitter<any | Array<any>> = new EventEmitter<any | Array<any>>();


  @Input()
  get result() {
    return this.resultValue;
  }


  set result(val) {
    this.resultValue = val;
    this.resultChange.emit(this.resultValue);

  }

  isPanelOpen: boolean = false;


  registerOnChangeFn = (val) => { this.result = val; };
  registerOnTouchFn = () => { };

  constructor(public config: ConfigurationsetupService,
    public lookupService: LookupService, 
    public commonServiceEvent: GridHelper, 
    public messageService: MessageService, 
    public gridService: GridService) {
      super(config, lookupService, commonServiceEvent, messageService, gridService);
    }

  ngOnChange() {
  }

  ngOnInit() {

  }

  displayFn = (code: any) => {
  if (code && (code.shortCode || code.desc)) {
      return code.shortCode + ' ' + code.desc;
    } else {
      return '';
    }
  }

  writeValue(val: any): void {
    this.resultValue = val;
  }
  ngOnDestroy() {

  }
  registerOnChange(fn: any): void {
    this.registerOnChangeFn = fn;
  }

  registerOnTouched(fn: any): void {
    this.registerOnTouchFn = fn;
  }

  setDisabledState(boolV): void {
    this.disabled = boolV;
  }

  lookupEvents = (action: EAction) => {
    switch (action) {
      case EAction.ADD:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.REMOVE:
        this.registerOnChangeFn(this.result);
        break;
      case EAction.NOSELECTEDROW:
        this.isPanelOpen = !this.isPanelOpen;
        setTimeout(() => { this.isPanelOpen = false; })
        break;
      default:
        break;
    }
  }

}
