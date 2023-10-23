import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterInstitutesComponent } from './filter-institutes.component';

describe('FilterInstitutesComponent', () => {
  let component: FilterInstitutesComponent;
  let fixture: ComponentFixture<FilterInstitutesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterInstitutesComponent]
    });
    fixture = TestBed.createComponent(FilterInstitutesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
