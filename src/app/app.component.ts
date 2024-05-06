import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherModule } from './weather.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WeatherModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'angular-weather';
}
