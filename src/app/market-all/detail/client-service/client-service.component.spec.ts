import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceComponent } from './client-service.component';

describe('ClientServiceComponent', () => {
  let component: ClientServiceComponent;
  let fixture: ComponentFixture<ClientServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
