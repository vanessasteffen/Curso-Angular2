import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNcstyleComponent } from './diretiva-ncstyle.component';

describe('DiretivaNcstyleComponent', () => {
  let component: DiretivaNcstyleComponent;
  let fixture: ComponentFixture<DiretivaNcstyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNcstyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNcstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
