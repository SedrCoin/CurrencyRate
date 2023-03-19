import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from "@angular/material/icon";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { DateComponent } from "./components/date/date.component";
import { MainComponent } from "./components/main/main.component";
import { CurrencyComponent } from "./components/main/currency/currency.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    MainComponent,
    CurrencyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
