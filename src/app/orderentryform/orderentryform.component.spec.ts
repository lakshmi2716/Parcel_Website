import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderentryformComponent } from './orderentryform.component';

describe('OrderentryformComponent', () => {
  let component: OrderentryformComponent;
  let fixture: ComponentFixture<OrderentryformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderentryformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderentryformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
