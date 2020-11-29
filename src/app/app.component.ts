import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fader, slider } from './route-animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations:[fader]
})
export class AppComponent {
  title = 'fyremc-home';
  prepareRoute(outlet: RouterOutlet) {
    return outlet && (outlet.isActivated ? outlet.activatedRoute : outlet.activatedRouteData && outlet.activatedRouteData.animation);
  }
  constructor() {
    window.addEventListener("load", (event) => {
      document.getElementsByTagName("BODY")[0].classList.add("loaded");
      //document.getElementsByClassName("loading")[0].classList.add("loaded");
    });
    window.addEventListener("beforeunload", (event) => {
      document.getElementsByTagName("BODY")[0].classList.remove("loaded");
      //document.getElementsByClassName("loading")[0].classList.remove("loaded");
    });
  }
}
