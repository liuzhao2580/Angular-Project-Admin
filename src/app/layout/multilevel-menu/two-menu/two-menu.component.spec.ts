import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwoMenuComponent } from './two-menu.component';

describe('TwoMenuComponent', () => {
  let component: TwoMenuComponent;
  let fixture: ComponentFixture<TwoMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
