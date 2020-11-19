import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FourMenuComponent } from './four-menu.component';

describe('FourMenuComponent', () => {
  let component: FourMenuComponent;
  let fixture: ComponentFixture<FourMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FourMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
