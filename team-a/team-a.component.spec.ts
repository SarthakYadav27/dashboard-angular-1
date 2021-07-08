import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamAComponent } from './team-a.component';

describe('TeamAComponent', () => {
  let component: TeamAComponent;
  let fixture: ComponentFixture<TeamAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
