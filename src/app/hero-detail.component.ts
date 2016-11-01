import { Component, Input } from '@angular/core';
import { Hero } from './hero'

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.pug'
})

export class HeroDetailComponent {
  @Input()
  hero: Hero;
}
