import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketsDataComponent } from './markets-data.component';

describe('MarketsDataComponent', () => {
  let component: MarketsDataComponent;
  let fixture: ComponentFixture<MarketsDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketsDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
