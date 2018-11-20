import { Component, Input } from '@angular/core';
import { ISocInfo } from 'src/app/data';

@Component({
  selector: 'hw-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css']
})
export class RandomPhotoComponent {
  @Input() item: ISocInfo;
}
