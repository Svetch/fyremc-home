import { Component, EventEmitter, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ytvideo-player',
  templateUrl: './ytvideo-player.component.html',
  styleUrls: ['./ytvideo-player.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class YTVideoPlayerComponent implements OnInit {

  constructor() { }
  @Input() ready: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
  }
  showBgVideo(event) {
    console.log("asd");

    this.ready.emit();
  }
}
