import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckWheelComponent } from './luck-wheel.component';

describe('LuckWheelComponent', () => {
  let component: LuckWheelComponent;
  let fixture: ComponentFixture<LuckWheelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuckWheelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuckWheelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
