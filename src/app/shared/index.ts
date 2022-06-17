import {LoaderComponent, SeoComponent} from './components';
import {NgHelmetModule} from 'ng-helmet';
import {CommonModule} from '@angular/common';

export const COMPONENTS = [
  LoaderComponent,
  SeoComponent
];

export const IMPORTS = [
  CommonModule,
  NgHelmetModule
];

export const SERVICES = [];

export const EXPORTS = [
  CommonModule,
  LoaderComponent,
  SeoComponent
];
