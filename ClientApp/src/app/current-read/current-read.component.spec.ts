import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentReadComponent } from './current-read.component';

describe('CurrentReadComponent', () => {
  let component: CurrentReadComponent;
  let fixture: ComponentFixture<CurrentReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
