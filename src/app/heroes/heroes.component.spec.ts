import { HeroesComponent } from './heroes.component';
import { of } from 'rxjs';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES: { id: number; name: string; strength: number; }[];
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      {id: 1, name: 'Spider Dude', strength: 8},
      {id: 2, name: 'Wonder Dude', strength: 24},
      {id: 3, name: 'Super Dude', strength: 55}
    ];

    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

    component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {

    it('should remove the indiacated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.deleteHero(HEROES[2]);

      expect(component.heroes.length).toBe(2);
    });

    it('should call deleteHero with correct hero', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;

      component.deleteHero(HEROES[2]);

      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
