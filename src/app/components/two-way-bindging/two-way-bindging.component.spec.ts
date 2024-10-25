import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBindgingComponent } from './two-way-bindging.component';

describe('TwoWayBindgingComponent', () => {
  let component: TwoWayBindgingComponent;
  let fixture: ComponentFixture<TwoWayBindgingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWayBindgingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBindgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
