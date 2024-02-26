import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { GripComponent } from './app/grip/grip.component';
import { DayComponent } from './app/day/day.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(GripComponent, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(DayComponent, appConfig)
  .catch((err) => console.error(err));