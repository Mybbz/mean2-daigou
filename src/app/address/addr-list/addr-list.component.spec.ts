import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrListComponent } from './addr-list.component';

describe('AddrListComponent', () => {
  let component: AddrListComponent;
  let fixture: ComponentFixture<AddrListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
