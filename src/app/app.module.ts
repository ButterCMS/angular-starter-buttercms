import { NgModule } from '@angular/core';
import { COMPONENTS, IMPORTS, SERVICES } from '.';
import { AppComponent } from './app.component';
import {Location, PathLocationStrategy} from '@angular/common';

const _orig_prepareExternalUrl = PathLocationStrategy.prototype.prepareExternalUrl;

PathLocationStrategy.prototype.prepareExternalUrl = function(internal) {
  const url = _orig_prepareExternalUrl.call(this, internal);

  if (url === '') {
    return url;
  }
  if (url.endsWith('.html')) {
    return url;
  }
  if (url.endsWith('/')) {
    return url;
  }
  return url + '/';

};

Location.stripTrailingSlash = function (url) {
  const /** @type {?} */ match = url.match(/#|\?|$/);
  const /** @type {?} */ pathEndIdx = match && match.index || url.length;
  const /** @type {?} */ droppedSlashIdx = pathEndIdx - (url[pathEndIdx - 1] === '/' ? 1 : 0);
  const first = url.slice(0, droppedSlashIdx);
  const last = url.slice(pathEndIdx);

  if (first.endsWith('.html')) {
    return first + last;
  }
  return first + '/' + last;
};

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...IMPORTS
  ],
  providers: [
    ...SERVICES
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
