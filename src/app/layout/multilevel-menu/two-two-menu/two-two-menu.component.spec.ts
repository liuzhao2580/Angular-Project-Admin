import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoTwoMenuComponent } from './two-two-menu.component';

describe('TwoTwoMenuComponent', () => {
  let component: TwoTwoMenuComponent;
  let fixture: ComponentFixture<TwoTwoMenuComponent>;

  beforeEach(async(() => {
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
