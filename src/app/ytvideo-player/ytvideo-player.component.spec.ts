import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YTVideoPlayerComponent } from './ytvideo-player.component';

describe('YTVideoPlayerComponent', () => {
  let component: YTVideoPlayerComponent;
  let fixture: ComponentFixture<YTVideoPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YTVideoPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YTVideoPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
