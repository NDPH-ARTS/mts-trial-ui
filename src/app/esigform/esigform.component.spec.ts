import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsigformComponent } from './esigform.component';

describe('EsigformComponent', () => {
  let component: EsigformComponent;
  let fixture: ComponentFixture<EsigformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EsigformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EsigformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
