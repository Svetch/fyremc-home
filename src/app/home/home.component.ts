import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { faShareAlt, faTshirt } from '@fortawesome/free-solid-svg-icons';
import { YouTubePlayerModule } from '@angular/youtube-player';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  faShare = faShareAlt;
  daily = "300";
  step = 0;
  isStepping = false;
  lastTop = 0;
  body = document.getElementsByTagName("BODY")[0];
  html: any = document.getElementsByTagName("html")[0];
  lastChange = 0;
  apiLoaded = false;
  lastY = 0;
  @ViewChild('videobg') videoBG: ElementRef;
  @ViewChild('videoWrapper') videoWrapper: ElementRef;
  @ViewChild('dialog') dialog: ElementRef;
  @ViewChild('step1') step1: ElementRef;
  @ViewChild('step2') step2: ElementRef;
  @ViewChild('step3') step3: ElementRef;
  @ViewChild('step4') step4: ElementRef;

  steps = [];

  @HostListener('wheel', ['$event'])
  @HostListener('mousewheel', ['$event'])
  onScroll(event) {
    this.reloadSteps();
    console.log(this.steps[this.step].nativeElement.getBoundingClientRect().top);

    if (this.steps[this.step].nativeElement.getBoundingClientRect().top <= 1 || this.html.scrollTopMax == this.html.scrollTop) this.isStepping = false;
    else this.steps[this.step].nativeElement.scrollIntoView({ behavior: "smooth" });
    if (this.steps[this.step].nativeElement.getBoundingClientRect().top > 1 && this.html.scrollTopMax != this.html.scrollTop || this.isStepping) return event.preventDefault();

    if (event.deltaY > 0 && this.step < (this.steps.length-1))
    {
      this.step++;
      console.log('+');

    }
    else if (event.deltaY < 0 && this.step > 0)
    {
      console.log("-");

      this.step--;
    }
    this.steps[this.step].nativeElement.scrollIntoView({ behavior: "smooth" });
    this.isStepping = true;
    console.log(this.step,this.isStepping);
    event.preventDefault();
  }
  @HostListener('touchmove', ['$event'])
  onScrollTouch(event) {
    console.log('touchmove');
    let currentY = event.touches[0].clientY;
    this.reloadSteps();
    if (this.steps[this.step].nativeElement.getBoundingClientRect().top <= 0 || this.html.scrollTopMax == this.html.scrollTop) this.isStepping = false;
    else {
      console.log('scrollIntoView');
      this.steps[this.step].nativeElement.scrollIntoView({ behavior: "smooth" });
    }
    console.log(this.step, this.steps[this.step].nativeElement.getBoundingClientRect(), this.html.scrollTopMax != this.html.scrollTop, this.isStepping);
    if (this.steps[this.step].nativeElement.getBoundingClientRect().top > 0 && this.html.scrollTopMax != this.html.scrollTop || this.isStepping) return event.preventDefault();
    console.log('touched');

    if (currentY > this.lastY && this.step < this.steps.length)
      this.step++;
    else if (currentY < this.lastY && this.step > 0)
      this.step--;
    this.steps[this.step].nativeElement.scrollIntoView({ behavior: "smooth" });
    this.isStepping = true;
    this.lastY = currentY;
    event.preventDefault();

  }
  @HostListener('window:keydown', ['$event'])
  onKeydown(event) {
    console.log(event);
    if (event.code == "ArrowUp") {
      event.preventDefault();
    }
    else if (event.code == "ArrowDown") {
      event.preventDefault();
    }
    else if (event.code == "PageUp") {
      event.preventDefault();
    }
    else if (event.code == "PageDown") {
      event.preventDefault();
    }
    else if (event.code == "Home") {
      event.preventDefault();
    }
    else if (event.code == "End") {
      event.preventDefault();
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    /* let { top } = this.dialog.nativeElement.getBoundingClientRect();
    let delta = top - this.lastTop;

    if (delta < 0) {
      if (this.step == 0)
        this.Stepping(event, 1, true);
      else if (this.step == 1 && this.lastTop < 0)
        this.Stepping(event, 2, true, "auto");
      else if (this.step == 2 && top < 0)
        this.Stepping(event, 3, false);
    }
    else if (delta > 0) {
      if (this.step == 1 && top > 0)
        this.Stepping(event, 0, false);
      else if (this.step == 2 && this.lastTop > 0)
        this.Stepping(event, 1, true, "auto");
      else if (this.step == 3)
        this.Stepping(event, 2, true);
    }
    if (top < 1 && top > -1) {
      setTimeout(() => {
        this.body.classList.remove("locked");
      }, 200);
    }

    this.lastTop = top; */
  }
  /*   Stepping(event, step, focus, behavior = "smooth") {
      event.preventDefault();
      if (focus) {
        this.dialog.nativeElement.scrollIntoView({ behavior });
        this.body.classList.add("locked");
        this.lastChange = new Date().getTime();
      }
      this.step = step;
    } */
  constructor() { }

  ngOnInit(): void {
    this.reloadSteps();





    if (!this.apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }

    /* setInterval(() => {
      let time = new Date().getTime();
      if (this.body.classList.contains("locked") && this.lastChange < (time - 1000)) {
        this.body.classList.remove("locked");
        this.lastChange = time;
      }
    }, 1000); */
    window.addEventListener("load", (event) => {
      this.reloadSteps();
      this.steps[this.step].nativeElement.scrollIntoView({ behavior: "smooth" });
      console.log("loaded");
    });
  }
  reloadSteps() {
    if (this.steps.length < 4 || this.steps.includes(undefined)) {
      this.steps = [this.step1, this.step2, this.step3, this.step3,this.step4];
      console.log("steps reloaded");
    }
  }
  onResize(event) {

  }
  showBgVideo(event) {
    console.log("show");

  }
}
