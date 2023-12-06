import { BrowserModule } from '@angular/platform-browser';
import { NgModule,} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { WorldBankApiService } from './world-bank-api.service';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';

@NgModule({

  declarations: [
    AppComponent,
    WorldMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

  ],
  providers: [
    WorldBankApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{}
