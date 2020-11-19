import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TwoTwoMenuComponent } from './two-two-menu.component';

describe('TwoTwoMenuComponent', () => {
  let component: TwoTwoMenuComponent;
  let fixture: ComponentFixture<TwoTwoMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoTwoMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoTwoMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
