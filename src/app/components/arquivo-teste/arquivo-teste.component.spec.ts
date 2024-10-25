import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoTesteComponent } from './arquivo-teste.component';

describe('ArquivoTesteComponent', () => {
  let component: ArquivoTesteComponent;
  let fixture: ComponentFixture<ArquivoTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArquivoTesteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArquivoTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
