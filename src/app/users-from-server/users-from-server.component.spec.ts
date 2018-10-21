import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersFromServerComponent } from './users-from-server.component';

describe('UsersFromServerComponent', () => {
  let component: UsersFromServerComponent;
  let fixture: ComponentFixture<UsersFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
