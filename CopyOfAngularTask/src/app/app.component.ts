import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { WorldBankApiService } from './world-bank-api.service';
import { WorldMapComponent } from './world-map/world-map.component';

interface CountryInfo {
  name: any;
    capitalCity: any;
    region: any;
    income: any;
    latitude: any;
    longitude: any;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})

export class AppComponent implements AfterViewInit {
  @ViewChild(WorldMapComponent) worldMapComponent!: WorldMapComponent;
  title = 'angulartask';
  data: CountryInfo = {
    name: '',
    capitalCity: '',
    region: '',
    income: '',
    latitude: '',
    longitude: '',
  };

  constructor(private worldBankApiService: WorldBankApiService, private el: ElementRef) {}

  ngAfterViewInit() {
    this.el.nativeElement.querySelectorAll('path').forEach((path: any) => {
      path.addEventListener('mouseenter', () => this.getCountryInfo(path.id));
    });
  }

  getCountryInfo(countryId: string) {
    this.worldBankApiService.fetchCountryInfo(countryId).subscribe((resp: any) => {
      const country: CountryInfo = resp[1][0];
      this.data = { ...country };
    });
  }
}