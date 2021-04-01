import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionsViewComponent } from './versions-view.component';

describe('VersionsViewComponent', () => {
  let component: VersionsViewComponent;
  let fixture: ComponentFixture<VersionsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VersionsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VersionsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
