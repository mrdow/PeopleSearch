import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormComponent } from './address-form.component';
import { Address, StateCodes } from '../models/address';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { generateString } from '../testing/string-generation-helper';

describe('AddressFormComponent', () => {
  let component: AddressFormComponent;
  let fixture: ComponentFixture<AddressFormComponent>;

  let expectedDefaultAddress: Address;
  let expectedInitializedAddress: Address;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddressFormComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ],
      providers: [AddressFormComponent]
    });

    fixture = TestBed.createComponent(AddressFormComponent);
    component = fixture.componentInstance;

    expectedDefaultAddress = new Address();
    expectedInitializedAddress = new Address();
    expectedInitializedAddress.address1 = 'addr1';
    expectedInitializedAddress.address2 = 'addr2';
    expectedInitializedAddress.city = 'city';
    expectedInitializedAddress.state = StateCodes.WA;
    expectedInitializedAddress.zip = '98223';
  }));

  describe('class', () => {
    it('should be created', () => {
      expect(component).toBeTruthy();
    });

    it('should begin uninitialized', () => {
      expect(component.address).toEqual(undefined);
      expect(component.addressForm).toEqual(undefined);
      expect(component.nestableForm).toEqual(undefined);
    });

    describe('ngOnInit', () => {
      it('should initialize', () => {
        component.ngOnInit();

        expect(component.address).toEqual(expectedDefaultAddress);
        expect(component.addressForm).toBeTruthy();
        expect(component.nestableForm).toEqual(undefined);
      });

      it('should initialize nestableForm', () => {
        component.nestableForm = new FormGroup({});

        component.ngOnInit();

        expect(component.address).toEqual(expectedDefaultAddress);
        expect(component.addressForm).toBeTruthy();
        expect(component.nestableForm).toBeTruthy();
      });
    });

    describe('stateCodeKeys', () => {
      it('should return StateCode keys', () => {
        expect(component.stateCodeKeys()).toEqual(Object.keys(StateCodes).filter(key => !isNaN(Number(StateCodes[key]))));
      });
    });

    describe('address1', () => {
      beforeEach(() => {
        fixture.autoDetectChanges(true);
      });

      it('should return default with default address', () => {
        expect(component.address1.value).toEqual(expectedDefaultAddress.address1);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.address1.value).toEqual(expectedInitializedAddress.address1);
      });

      it('should detect required', () => {
        expect(component.address1.errors.required).toBeTruthy();
      });

      it('should validate value', () => {
        component.address1.setValue('a');

        const errors = component.address1.errors || {}
        expect(errors.required).not.toBeTruthy();
      });

      it('should allow less than max length', () => {
        component.address1.setValue(generateString(100));

        const errors = component.address1.errors || {}
        expect(errors.maxlength).not.toBeTruthy();
      });

      it('should reject more than max length', () => {
        component.address1.setValue(generateString(101));
        
        expect(component.address1.errors.maxlength).toBeTruthy();
      });
    });

    describe('address2', () => {
      beforeEach(() => {
        fixture.autoDetectChanges(true);
      });

      it('should return default with default address', () => {
        expect(component.address2.value).toEqual(expectedDefaultAddress.address2);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.address2.value).toEqual(expectedInitializedAddress.address2);
      });

      it('should allow less than max length', () => {
        component.address2.setValue(generateString(100));

        const errors = component.address2.errors || {}
        expect(errors.maxlength).not.toBeTruthy();
      });

      it('should reject more than max length', () => {
        component.address2.setValue(generateString(101));
        
        expect(component.address2.errors.maxlength).toBeTruthy();
      });
    });

    describe('city', () => {
      beforeEach(() => {
        fixture.autoDetectChanges(true);
      });

      it('should return default with default address', () => {
        expect(component.city.value).toEqual(expectedDefaultAddress.city);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.city.value).toEqual(expectedInitializedAddress.city);
      });

      it('should detect required', () => {
        expect(component.city.errors.required).toBeTruthy();
      });

      it('should validate value', () => {
        component.city.setValue('a');

        const errors = component.city.errors || {}
        expect(errors.required).not.toBeTruthy();
      });

      it('should allow less than max length', () => {
        component.city.setValue(generateString(50));

        const errors = component.city.errors || {}
        expect(errors.maxlength).not.toBeTruthy();
      });

      it('should reject more than max length', () => {
        component.city.setValue(generateString(51));

        expect(component.city.errors.maxlength).toBeTruthy();
      });
    });

    describe('state', () => {
      beforeEach(() => {
        fixture.autoDetectChanges(true);
      });

      it('should return default with default address', () => {
        expect(component.state.value).toEqual(expectedDefaultAddress.state);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.state.value).toEqual(expectedInitializedAddress.state);
      });

      it('should detect required', () => {
        expect(component.city.errors.required).toBeTruthy();
      });

      it('should validate value', () => {
        component.state.setValue(StateCodes.WA);

        const errors = component.state.errors || {}
        expect(errors.required).not.toBeTruthy();
      });
    });

    describe('zip', () => {
      beforeEach(() => {
        fixture.autoDetectChanges(true);
      });

      it('should return default with default address', () => {
        expect(component.zip.value).toEqual(expectedDefaultAddress.zip);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.zip.value).toEqual(expectedInitializedAddress.zip);
      });

      it('should detect required', () => {
        expect(component.zip.errors.required).toBeTruthy();
      });

      it('should validate value', () => {
        component.zip.setValue('a');

        const errors = component.zip.errors || {}
        expect(errors.required).not.toBeTruthy();
      });

      it('should allow 5 digit pattern', () => {
        component.zip.setValue('98223');

        let errors = component.zip.errors || {}
        expect(errors.pattern).not.toBeTruthy();
      });

      it('should allow 5+4 with dash pattern', () => {
        component.zip.setValue('98223-7869');

        let errors = component.zip.errors || {}
        expect(errors.pattern).not.toBeTruthy();
      });

      it('should reject 5+4 without dash', () => {
        component.zip.setValue('982237869');

        expect(component.zip.errors.pattern).toBeTruthy();
      });

      it('should reject letters', () => {
        component.zip.setValue('9822a');

        expect(component.zip.errors.pattern).toBeTruthy();
      });
    });
  });

  describe('dom', () => {
    let debugElement: DebugElement;
    let htmlElement: HTMLElement;

    beforeEach(() => {
      fixture.autoDetectChanges(true);
      debugElement = fixture.debugElement;
      htmlElement = debugElement.nativeElement;
    });

    it('should be created', () => {
      expect(htmlElement).toBeTruthy();
    });

    it('should render #address-form', () => {
      expect(htmlElement.querySelector('#address-form')).toBeTruthy();
    });

    describe('address1', () => {
      it('should render input#address1', () => {
        expect(htmlElement.querySelector('input#address1')).toBeTruthy();
      })

      it('should render default when uninitialized', () => {
        expect((htmlElement.querySelector('input#address1') as HTMLInputElement).value).toEqual(expectedDefaultAddress.address1);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();
        fixture.detectChanges();

        expect((htmlElement.querySelector('input#address1') as HTMLInputElement).value).toEqual(expectedInitializedAddress.address1);
      });

      it('should store input from the browser', () => {
        const address1: HTMLInputElement = htmlElement.querySelector('input#address1');
        address1.value = expectedInitializedAddress.address1;
        address1.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.address1.value).toEqual(expectedInitializedAddress.address1);
      });

      it('should render div#address1-error-required', () => {
        component.address1.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address1-error-required')).toBeTruthy();
      });

      it('should hide required message when populated', () => {
        component.address1.setValue('a');
        component.address1.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address1-error-required')).not.toBeTruthy();
      });

      it('should render div#address1-error-maxlength', () => {
        component.address1.setValue(generateString(101));
        component.address1.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address1-error-maxlength')).toBeTruthy();
      });

      it('should hide length message when valid', () => {
        component.address1.setValue(generateString(100));
        component.address1.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address1-error-maxlength')).not.toBeTruthy();
      });
    });

    describe('address2', () => {
      it('should render input#address2', () => {
        expect(htmlElement.querySelector('input#address2')).toBeTruthy();
      })

      it('should render default when uninitialized', () => {
        expect((htmlElement.querySelector('input#address2') as HTMLInputElement).value).toEqual(expectedDefaultAddress.address2);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();
        fixture.detectChanges();

        expect((htmlElement.querySelector('input#address2') as HTMLInputElement).value).toEqual(expectedInitializedAddress.address2);
      });

      it('should store input from the browser', () => {
        const address2: HTMLInputElement = htmlElement.querySelector('input#address2');
        address2.value = expectedInitializedAddress.address2;
        address2.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.address2.value).toEqual(expectedInitializedAddress.address2);
      });

      it('should render div#address2-error-maxlength', () => {
        component.address2.setValue(generateString(101));
        component.address2.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address2-error-maxlength')).toBeTruthy();
      });

      it('should hide length message when valid', () => {
        component.address2.setValue(generateString(100));
        component.address2.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#address2-error-maxlength')).not.toBeTruthy();
      });
    });

    describe('city', () => {
      it('should render input#city', () => {
        expect(htmlElement.querySelector('input#city')).toBeTruthy();
      })

      it('should render default when uninitialized', () => {
        expect((htmlElement.querySelector('input#city') as HTMLInputElement).value).toEqual(expectedDefaultAddress.city);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();
        fixture.detectChanges();

        expect((htmlElement.querySelector('input#city') as HTMLInputElement).value).toEqual(expectedInitializedAddress.city);
      });

      it('should store input from the browser', () => {
        const city: HTMLInputElement = htmlElement.querySelector('input#city');
        city.value = expectedInitializedAddress.city;
        city.dispatchEvent(new Event('input'));
        fixture.detectChanges();

        expect(component.city.value).toEqual(expectedInitializedAddress.city);
      });

      it('should render div#city-error-required', () => {
        component.city.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#city-error-required')).toBeTruthy();
      });

      it('should hide required message when populated', () => {
        component.city.setValue('a');
        component.city.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#city-error-required')).not.toBeTruthy();
      });

      it('should render div#city-error-maxlength', () => {
        component.city.setValue(generateString(51));
        component.city.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#city-error-maxlength')).toBeTruthy();
      });

      it('should hide length message when valid', () => {
        component.city.setValue(generateString(50));
        component.city.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#city-error-maxlength')).not.toBeTruthy();
      });
    });

    describe('state', () => {
      it('should render inselectput#state', () => {
        expect(htmlElement.querySelector('select#state')).toBeTruthy();
      })

      it('should render default when uninwithitialized', () => {
        expect((htmlElement.querySelector('select#state') as HTMLSelectElement).value).toEqual('');
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();
        fixture.detectChanges();
        
        expect((htmlElement.querySelector('select#state') as HTMLSelectElement).value).toEqual(expectedInitializedAddress.state.toString());
      });

      it('should store input from the browser', () => {
        const state: HTMLSelectElement = htmlElement.querySelector('select#state');
        state.value = expectedInitializedAddress.state.toString();
        state.dispatchEvent(new Event('change'));
        fixture.detectChanges();

        expect(component.state.value).toEqual(expectedInitializedAddress.state.toString());
      });

      it('should render div#state-error-required', () => {
        component.state.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#state-error-required')).toBeTruthy();
      });

      it('should hide required message when populated', () => {
        component.state.setValue('a');
        component.state.markAsDirty();
        fixture.detectChanges();

        expect(htmlElement.querySelector('div#state-error-required')).not.toBeTruthy();
      });
    });

    describe('zip', () => {
      it('should return default with default address', () => {
        expect(component.zip.value).toEqual(expectedDefaultAddress.zip);
      });

      it('should return expected when initialized', () => {
        component.address = expectedInitializedAddress;
        component.ngOnInit();

        expect(component.zip.value).toEqual(expectedInitializedAddress.zip);
      });

      it('should detect required', () => {
        expect(component.zip.errors.required).toBeTruthy();
      });

      it('should validate value', () => {
        component.zip.setValue('a');

        const errors = component.zip.errors || {}
        expect(errors.required).not.toBeTruthy();
      });

      it('should allow 5 digits', () => {
        component.zip.setValue('98223');

        let errors = component.zip.errors || {}
        expect(errors.pattern).not.toBeTruthy();
      });

      it('should allow 5+4 with dash', () => {
        component.zip.setValue('98223-7869');

        let errors = component.zip.errors || {}
        expect(errors.pattern).not.toBeTruthy();
      });

      it('should reject 5+4 without dash', () => {
        component.zip.setValue('982237869');

        expect(component.zip.errors.pattern).toBeTruthy();
      });

      it('should reject letters', () => {
        component.zip.setValue('9822a');

        expect(component.zip.errors.pattern).toBeTruthy();
      });
    });
  });
});
