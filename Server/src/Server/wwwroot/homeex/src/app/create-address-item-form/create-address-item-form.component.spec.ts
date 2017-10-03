import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAddressItemFormComponent } from './create-address-item-form.component';

describe('CreateAddressItemFormComponent', () => {
  let component: CreateAddressItemFormComponent;
  let fixture: ComponentFixture<CreateAddressItemFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAddressItemFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAddressItemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
