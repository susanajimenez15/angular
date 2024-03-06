import { ApplicationConfig, Component, Inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GripComponent } from './grip/grip.component';
import { SignalComponent } from './signal/signal.component';
import { TimerComponent } from './timer/timer.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { splitNsName } from '@angular/compiler';
import { CustomerComponent } from './customer/customer.component';
import { CustomerComponentComponent } from './customer-component/customer-component.component';
import { ProfileComponent } from './forms/profile/profile.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    GripComponent,
    SignalComponent,
    TimerComponent,
    AComponent,
    BComponent,
    CustomerComponent,
    CustomerComponentComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'AppComponent'
  name = 'Susana Jimenez';
  user = 'user susi';
  array = [1,2,3,4,5];

  handlerClick(ev:Event){
    ev.stopPropagation();
    this.array.push(this.array.length+1)
  }

}
