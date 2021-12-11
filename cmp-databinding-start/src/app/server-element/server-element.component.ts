import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanes called!");
    console.log(changes);
  }

  ngOnInit(): void {}
}
