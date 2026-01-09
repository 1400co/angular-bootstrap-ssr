import { Component, signal } from '@angular/core';

/**
 * Public header component - Header for public pages
 */
@Component({
  selector: 'app-public-header',
  standalone: true,
  imports: [],
  templateUrl: './public-header.component.html',
  styleUrl: './public-header.component.scss'
})
export class PublicHeaderComponent {
  /**
   * Signal containing the currently open dropdown menu identifier
   */
  readonly dropdownOpen = signal<string | null>(null);

  /**
   * Toggles the dropdown menu state
   * @param menu - The identifier of the menu to toggle
   */
  toggleDropdown(menu: string): void {
    const currentOpen = this.dropdownOpen();
    this.dropdownOpen.set(currentOpen === menu ? null : menu);
  }
}
