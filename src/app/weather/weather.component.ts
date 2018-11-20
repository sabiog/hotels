import { Component, Input } from '@angular/core';
import { IWeather } from 'src/app/data';

@Component({
  selector: 'hw-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  @Input() item: IWeather;
}
