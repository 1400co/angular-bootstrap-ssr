import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Private footer component - Footer for authenticated users
 */
@Component({
  selector: 'app-private-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-footer.component.html',
  styleUrl: './private-footer.component.scss'
})
export class PrivateFooterComponent {
  /**
   * Current year for copyright notice
   */
  readonly currentYear = new Date().getFullYear();
}
