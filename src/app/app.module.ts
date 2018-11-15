import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';
import { InfoComponent } from './info/info.component';
import { InfoCardComponent } from './info-card/info-card.component';
import { InfoFilterPipe } from './info-filter.pipe';
import { PhonePipe } from './phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RandomPhotoComponent,
    InfoComponent,
    InfoCardComponent,
    InfoFilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
