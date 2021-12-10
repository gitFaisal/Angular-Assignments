import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"],
})
export class GameControlComponent implements OnInit {
  // intervalFired is now available publically
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastNumber = 0;
  running = false;

  constructor() {}

  ngOnInit(): void {}

  onStartGame() {
    this.running = true;
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onPauseGame() {
    this.running = false;
    clearInterval(this.interval);
  }
}
