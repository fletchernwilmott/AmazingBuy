import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestOmponentComponent } from './test-omponent.component';

describe('TestOmponentComponent', () => {
  let component: TestOmponentComponent;
  let fixture: ComponentFixture<TestOmponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestOmponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestOmponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
