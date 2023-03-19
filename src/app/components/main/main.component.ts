import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { Currency } from "src/app/model/currency.model";
import { RequestService } from "src/app/services/request.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
})
export class MainComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public additionalCurrencies = ["JPY", "TRY", "CNY"];
  loading: boolean = true;
  public error = "";

  public currs: Currency[] = [
    new Currency("USD", 0),
    new Currency("EUR", 0),
    new Currency("GBP", 0),
  ];

  constructor(private request: RequestService) {}

  ngOnInit() {
    setInterval(() => {
      this.currs.forEach((cur: Currency) => {
        this.sub = this.request.fetchData(cur.name).subscribe(
          (newCurr: Currency) => {
            if (!this.additionalCurrencies.some((el) => el === newCurr.name)) {
              const index = this.currs.findIndex((el) => {
                return el.name === newCurr.name;
              });
              if (index === -1) {
                this.currs.push(newCurr);
              } else {
                this.currs[index].prevValue = this.currs[index].curValue;
                this.currs[index].curValue = newCurr.curValue;
              }
            }
          },
          (error) => {
            console.error(error);
            this.error = error;
            this.loading = false;
          }
        );
        this.loading = false;
      });
    }, 5000);
  }

  public onAddCurrency(): void {
    if (this.additionalCurrencies.length) {
      this.currs.push(new Currency(this.additionalCurrencies[0], 0));
      this.additionalCurrencies.shift();
    }
  }

  public onDeleteCurrency(curName: string): void {
    const index = this.currs.findIndex((el) => {
      return el.name === curName;
    });
    if (index !== -1) {
      this.currs.splice(index, 1);
      this.additionalCurrencies.push(curName);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
