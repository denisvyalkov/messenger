/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from 'libs/core/src/lib/core.module';
import { FeatureModule } from 'libs/feature/src/lib/feature.module'
import { AppRoutingModule } from './app.routes';
@NgModule({
  imports: [CoreModule, FeatureModule, AppRoutingModule],
  exports: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
