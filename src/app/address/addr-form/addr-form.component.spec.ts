import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrFormComponent } from './addr-form.component';

describe('AddrFormComponent', () => {
  let component: AddrFormComponent;
  let fixture: ComponentFixture<AddrFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
