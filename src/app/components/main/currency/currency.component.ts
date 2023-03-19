import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Currency } from "src/app/model/currency.model";

@Component({
  selector: "app-currency",
  templateUrl: "./currency.component.html",
  styleUrls: ["./currency.component.scss"],
})
export class CurrencyComponent {
  @Input('value') public currency: Currency;
  @Output() public delete = new EventEmitter<string>();

  onCloseClick() {
    this.delete.emit(this.currency.name);
  }
}
