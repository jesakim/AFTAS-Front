import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FishListComponent } from './fish-list.component';

describe('FishListComponent', () => {
  let component: FishListComponent;
  let fixture: ComponentFixture<FishListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FishListComponent]
    });
    fixture = TestBed.createComponent(FishListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
