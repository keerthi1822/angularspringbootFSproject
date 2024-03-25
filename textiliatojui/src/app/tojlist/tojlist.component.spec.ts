import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TojlistComponent } from './tojlist.component';

describe('TojlistComponent', () => {
  let component: TojlistComponent;
  let fixture: ComponentFixture<TojlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TojlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TojlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
