import { Component, Output, EventEmitter } from '@angular/core'
import { WeatherDataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component'

declare var ADRUM : any;
declare var CITY: any;

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent {
  @Output() onSelection: EventEmitter<Weather> = new EventEmitter<Weather>()
  weather: Weather = new Weather()
  city: String = ""

  constructor(private weatherData: WeatherDataService) { }

  submit() {

    var url = window.location.href;
 
    var vPageView = new ADRUM.events.VPageView({
        url: 'https://localhost:8080/VPage.html',
    });

    vPageView.start();
    
    vPageView.markViewChangeStart();
    vPageView.markViewChangeEnd();
    vPageView.markViewDOMLoaded();
    vPageView.markXhrRequestsCompleted();
    


    this.weatherData.load(this.city).subscribe(data => {
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['main']
      this.weather.temperature = Math.round((data['main']['temp'] - 273.15)*1.8 + 32)
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])

      this.onSelection.emit(this.weather)
    })

    CITY= this.weather.city;
    vPageView.end();

    ADRUM.report(vPageView);

  }
}
