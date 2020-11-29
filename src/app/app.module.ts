import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {YouTubePlayerModule} from '@angular/youtube-player';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LuckWheelComponent } from './luck-wheel/luck-wheel.component';
import { LoaderComponent } from './loader/loader.component';
import { FyrenetComponent } from './fyrenet/fyrenet.component';
import { YTVideoPlayerComponent } from './ytvideo-player/ytvideo-player.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DownloadsComponent,
    ServerInfoComponent,
    LuckWheelComponent,
    LoaderComponent,
    FyrenetComponent,
    YTVideoPlayerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    YouTubePlayerModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
