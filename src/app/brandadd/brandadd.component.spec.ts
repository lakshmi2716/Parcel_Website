import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandaddComponent } from './brandadd.component';

describe('BrandaddComponent', () => {
  let component: BrandaddComponent;
  let fixture: ComponentFixture<BrandaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
