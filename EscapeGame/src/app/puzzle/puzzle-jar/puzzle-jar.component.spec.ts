import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuzzleJarComponent } from './puzzle-jar.component';

describe('PuzzleJarComponent', () => {
  let component: PuzzleJarComponent;
  let fixture: ComponentFixture<PuzzleJarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuzzleJarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuzzleJarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
