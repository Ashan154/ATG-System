import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstitutesComponent } from './institutes.component';

describe('InstitutesComponent', () => {
  let component: InstitutesComponent;
  let fixture: ComponentFixture<InstitutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstitutesComponent]
    });
    fixture = TestBed.createComponent(InstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
