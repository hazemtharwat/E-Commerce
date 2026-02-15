import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarAuthComponent } from "./nav-bar-auth/nav-bar-auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarAuthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TestApp';
}
