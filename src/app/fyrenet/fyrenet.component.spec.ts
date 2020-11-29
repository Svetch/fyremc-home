import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FyrenetComponent } from './fyrenet.component';

describe('FyrenetComponent', () => {
  let component: FyrenetComponent;
  let fixture: ComponentFixture<FyrenetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FyrenetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FyrenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
