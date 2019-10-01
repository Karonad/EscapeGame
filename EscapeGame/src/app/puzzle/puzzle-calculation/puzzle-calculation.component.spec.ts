import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleCalculationComponent } from './puzzle-calculation.component';

describe('PuzzleCalculationComponent', () => {
  let component: PuzzleCalculationComponent;
  let fixture: ComponentFixture<PuzzleCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
