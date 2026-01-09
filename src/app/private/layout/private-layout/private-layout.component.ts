import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateHeaderComponent } from '../private-header/private-header.component';
import { PrivateFooterComponent } from '../private-footer/private-footer.component';
import { NgClass } from '@angular/common';

/**
 * Private layout component - Main layout for authenticated users
 * Provides sidebar navigation and content area
 */
@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    NgClass,
    PrivateHeaderComponent,
    PrivateFooterComponent
  ],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export default class PrivateLayoutComponent {
  /**
   * Signal indicating if the sidebar is collapsed
   */
  readonly isSidebarCollapsed = signal<boolean>(false);

  /**
   * Toggles the sidebar collapsed state
   */
  toggleSidebar(): void {
    this.isSidebarCollapsed.update(current => !current);
  }
}
