import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourMenuComponent } from './four-menu.component';

describe('FourMenuComponent', () => {
  let component: FourMenuComponent;
  let fixture: ComponentFixture<FourMenuComponent>;

  beforeEach(async(() => {
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
