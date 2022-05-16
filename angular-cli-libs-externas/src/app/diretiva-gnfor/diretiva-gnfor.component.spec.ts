import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaGnforComponent } from './diretiva-gnfor.component';

describe('DiretivaGnforComponent', () => {
  let component: DiretivaGnforComponent;
  let fixture: ComponentFixture<DiretivaGnforComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaGnforComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaGnforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
