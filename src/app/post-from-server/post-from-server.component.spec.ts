import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostFromServerComponent } from './post-from-server.component';

describe('PostFromServerComponent', () => {
  let component: PostFromServerComponent;
  let fixture: ComponentFixture<PostFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
