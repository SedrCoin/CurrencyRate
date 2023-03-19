export class Currency {
  constructor(public name: string, public curValue: number) {}
  prevValue: number;

  public countDifference(): any {
    if (!this.prevValue) {
      return 0.0;
    } else {
      return this.curValue - this.prevValue;
    }
  }

  public getIcon(): string {
    if (this.countDifference() > 0) {
      return '+';
    }
    return '';
  }

  public addTicker(): any {
    switch (this.name) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "GBP":
        return "£";
      case "CNY":
        return "¥";
      case "JPY":
        return " ¥";
      case "TRY":
        return "₺";
      default:
        return 'N/A';
    }
  }
}
