import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFIlterComponent } from './test-filter.component';

describe('TestFIlterComponent', () => {
  let component: TestFIlterComponent;
  let fixture: ComponentFixture<TestFIlterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestFIlterComponent]
    });
    fixture = TestBed.createComponent(TestFIlterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
