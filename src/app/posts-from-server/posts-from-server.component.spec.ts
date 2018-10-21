import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsFromServerComponent } from './posts-from-server.component';

describe('PostsFromServerComponent', () => {
  let component: PostsFromServerComponent;
  let fixture: ComponentFixture<PostsFromServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsFromServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
