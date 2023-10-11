import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddlelayerComponent } from './middlelayer.component';

describe('MiddlelayerComponent', () => {
  let component: MiddlelayerComponent;
  let fixture: ComponentFixture<MiddlelayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiddlelayerComponent]
    });
    fixture = TestBed.createComponent(MiddlelayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
