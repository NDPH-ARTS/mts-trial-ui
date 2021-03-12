import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignedSitesPageComponent } from './assigned-sites-page.component';

describe('AssignedSitesComponent', () => {
  let component: AssignedSitesPageComponent;
  let fixture: ComponentFixture<AssignedSitesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssignedSitesPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignedSitesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
