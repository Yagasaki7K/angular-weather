import { Component } from "@angular/core";

@Component({
  selector: 'weather-core',
  templateUrl: './weather/index.component.html',
  styleUrls: ['./weather/style.component.scss']
})

export class WeatherComponent {
  weatherCity = 'Northampton, GB';
  weatherCelsius = '15ºC';
  weatherInput = '';
  weatherDate = this.setDate();

  api = {
    key: "3117b8dafeaf2d8404be6d127b41b635",
    base: "https://api.openweathermap.org/data/2.5/"
  }

  setQuery(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.getResults((event.target as HTMLInputElement).value);
    }
  }

  setDate() {
    let d = new Date();
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday,", "Monday,", "Tuesday,", "Wednesday,", "Thursday,", "Friday,", "Saturday,"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
    return `${day} ${date} ${month} ${year}`
  }

  getResults(query: string) {
    fetch(`${this.api.base}weather?q=${query}&units=metric&APPID=${this.api.key}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Cidade não encontrada');
        }
        return response.json();
      })
      .then(weather => {
        this.weatherCity = `${weather.name}, ${weather.sys.country}`;
        this.weatherCelsius = `${Math.round(weather.main.temp)}°C`;
      })
      .catch(error => {
        console.error(error);
        alert('Cidade não encontrada');
        this.weatherInput = '';
        this.weatherCity = '';
        this.weatherCelsius = '';
      });
  }
}
