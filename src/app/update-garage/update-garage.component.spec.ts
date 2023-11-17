import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGarageComponent } from './update-garage.component';

describe('UpdateGarageComponent', () => {
  let component: UpdateGarageComponent;
  let fixture: ComponentFixture<UpdateGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
