import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtojComponent } from './addtoj.component';

describe('AddtojComponent', () => {
  let component: AddtojComponent;
  let fixture: ComponentFixture<AddtojComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtojComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddtojComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
