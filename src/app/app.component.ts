import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, NgFor, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, DecimalPipe, CurrencyPipe, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'localization-demo';
  today = new Date();
  numberValue = 1237512.23;
  test = $localize`:site header|An introduction header for this sample:Hello i18n!`;
  locales = [{
      code: 'ru',
      titel: 'Русский',
      url: 'http://localhost:4201'
  },
  {
    code: 'en',
    titel: 'English',
    url: 'http://localhost:4200'
}]

  switchLocale(locale: string) {
    window.location.href = locale;
  }
}
