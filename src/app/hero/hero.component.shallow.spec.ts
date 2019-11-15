import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HeroComponent (shallow test)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });
    fixture = TestBed.createComponent(HeroComponent);
  });

  it('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'Super Dude',
      strength: 3
    };

    expect(fixture.componentInstance.hero.name).toEqual('Super Dude');
  });

  it('should render the hero name in an anchor tag', () => {
    fixture.componentInstance.hero = {
      id: 1,
      name: 'Super Dude',
      strength: 3
    };
    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('a')).nativeElement.textContent)
      .toContain('Super Dude');
  });
});
