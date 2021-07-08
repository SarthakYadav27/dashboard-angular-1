import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerWrapperComponent } from './player-wrapper.component';

describe('PlayerWrapperComponent', () => {
  let component: PlayerWrapperComponent;
  let fixture: ComponentFixture<PlayerWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
