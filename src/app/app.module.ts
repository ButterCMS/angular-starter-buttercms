import { NgModule } from '@angular/core';
import { COMPONENTS, IMPORTS, SERVICES } from '.';
import { AppComponent } from './app.component';

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
