import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-luck-wheel',
  templateUrl: './luck-wheel.component.html',
  styleUrls: ['./luck-wheel.component.scss']
})
export class LuckWheelComponent implements OnInit {
  isDone = false;
  isSpin = false;
  loaded = false;
  @ViewChild("spin") spinner: ElementRef;
  prize = {
    icon: "./assets/fire_crate.png"
  };
  luckItems = [
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    },
    {
      icon: "./assets/fire_crate.png"
    }
  ];
  constructor() {

  }

  ngOnInit(): void {
    window.addEventListener("load",(event) => {
      this.loaded = true;
    });
  }
  Spin(){
    this.isSpin = true;
    this.spinner.nativeElement.style = "transform: rotate(3424deg);transition: all 5s cubic-bezier(0.25, 0.1, 0.25, 1);"
    setTimeout(() => {
      this.isDone = true;
      this.spinner.nativeElement.style = "rotate(calc(3424deg + 360 * 5deg)) scale(0);transition: all 1s ease-in-out;"
    }, 5500);
  }
}
