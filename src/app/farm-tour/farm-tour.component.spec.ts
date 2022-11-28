import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmTourComponent } from './farm-tour.component';

describe('FarmTourComponent', () => {
  let component: FarmTourComponent;
  let fixture: ComponentFixture<FarmTourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FarmTourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FarmTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
