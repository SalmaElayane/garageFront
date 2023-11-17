import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GettAllGarageComponent } from './gett-all-garage.component';

describe('GettAllGarageComponent', () => {
  let component: GettAllGarageComponent;
  let fixture: ComponentFixture<GettAllGarageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GettAllGarageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GettAllGarageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
