import { Component } from '@angular/core';
import { NavBarBlankComponent } from "../../nav-bar-blank/nav-bar-blank.component";
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-user-layout',
  standalone: true,
  imports: [NavBarBlankComponent, RouterOutlet, FooterComponent],
  templateUrl: './user-layout.component.html',
  styleUrl: './user-layout.component.scss'
})
export class UserLayoutComponent {

}
