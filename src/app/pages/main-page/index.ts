import {
  BlogSectionComponent,
  FeaturesComponent,
  HeroComponent,
  MainPageComponent,
  TestimonialsComponent,
  TwoColumnWithImageComponent
} from './components';
import {MainPageRouting} from './main-page.routing';
import {SharedModule} from '../../shared/shared.module';
import {NgHelmetModule} from 'ng-helmet';
import {CommonModule} from '@angular/common';

export const COMPONENTS = [
  MainPageComponent,
  HeroComponent,
  TwoColumnWithImageComponent,
  FeaturesComponent,
  TestimonialsComponent,
  BlogSectionComponent
];

export const IMPORTS = [
  MainPageRouting,
  SharedModule
];

export const SERVICES = [];

export const EXPORTS = [];
