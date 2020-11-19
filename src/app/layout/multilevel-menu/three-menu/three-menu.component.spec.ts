import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThreeMenuComponent } from './three-menu.component';

describe('ThreeMenuComponent', () => {
  let component: ThreeMenuComponent;
  let fixture: ComponentFixture<ThreeMenuComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
