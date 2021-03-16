import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComponent } from './components/display/display.component';

import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './services/weatherdata.service';
import { SelectionComponent } from './components/selection/selection.component'

import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
