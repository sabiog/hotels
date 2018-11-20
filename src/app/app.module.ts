import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { RandomPhotoComponent } from './random-photo/random-photo.component';
import { InfoComponent } from './info/info.component';
import { InfoCardComponent } from './info/info-card/info-card.component';
import { InfoFilterPipe } from './info/info-filter.pipe';
import { PhonePipe } from './info/info-card/phone.pipe';
import { FirstCapPipe } from './info/first-cap.pipe';
import { MenuComponent } from './info/menu/menu.component';
import { DistinctPipe } from './info/distinct.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RandomPhotoComponent,
    InfoComponent,
    InfoCardComponent,
    InfoFilterPipe,
    PhonePipe,
    FirstCapPipe,
    MenuComponent,
    DistinctPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
