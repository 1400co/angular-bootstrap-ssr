import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Public footer component - Footer for public pages
 */
@Component({
  selector: 'app-public-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './public-footer.component.html',
  styleUrl: './public-footer.component.scss'
})
export class PublicFooterComponent {
  /**
   * Current year for copyright notice
   */
  readonly currentYear = new Date().getFullYear();
}
