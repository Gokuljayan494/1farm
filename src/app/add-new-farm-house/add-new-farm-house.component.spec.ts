import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewFarmHouseComponent } from './add-new-farm-house.component';

describe('AddNewFarmHouseComponent', () => {
  let component: AddNewFarmHouseComponent;
  let fixture: ComponentFixture<AddNewFarmHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewFarmHouseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewFarmHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
