import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { delay, map, Observable, of } from "rxjs";
import { Currency } from "../model/currency.model";

@Injectable({
  providedIn: "root",
})
export class RequestService {
  constructor(private http: HttpClient) {}

  fetchData(cur: string) {
    return this.http
      .get(
        `https://api.apilayer.com/currency_data/live?source=${cur}&currencies=RUB`,
        {
          headers: new HttpHeaders({
            apikey: "vMvcwSIbn8zj3HugbYHhIooVEr5IIZy7",
          }),

          responseType: "json",
        }
      )
      .pipe(
        map((data: any) => {
          if (data["success"]) {
            return new Currency(cur, data["quotes"][cur + "RUB"]);
          } else {
            return new Currency(cur, 0);
          }
        })
      );
  }
}
