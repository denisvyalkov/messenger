import { NgModule } from '@angular/core';
import { MainPageComponent } from './components/mainpage/mainpage.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [RouterModule],
  declarations: [MainPageComponent, HeaderComponent, FooterComponent],
  exports: [MainPageComponent, HeaderComponent, FooterComponent],
  providers: [],
})
export class FeatureModule {}
