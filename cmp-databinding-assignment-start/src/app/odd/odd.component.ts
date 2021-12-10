import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-odd",
  templateUrl: "./odd.component.html",
  styleUrls: ["./odd.component.css"],
})
export class OddComponent implements OnInit {
  // Allows us to pass data from outside this component into it.
  @Input() number: number;

  constructor() {}

  ngOnInit(): void {}
}
