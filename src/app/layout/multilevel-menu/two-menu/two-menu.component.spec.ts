import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoMenuComponent } from './two-menu.component';

describe('TwoMenuComponent', () => {
  let component: TwoMenuComponent;
  let fixture: ComponentFixture<TwoMenuComponent>;

  beforeEach(async(() => {
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
