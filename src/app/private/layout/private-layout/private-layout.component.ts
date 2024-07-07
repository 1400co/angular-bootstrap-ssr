import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export default class PrivateLayoutComponent {

}
