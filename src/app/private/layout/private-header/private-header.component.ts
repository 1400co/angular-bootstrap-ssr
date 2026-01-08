import { Component, signal, Output, EventEmitter } from '@angular/core';

/**
 * Private header component - Header for authenticated users
 */
@Component({
  selector: 'app-private-header',
  standalone: true,
  imports: [],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  /**
   * Signal indicating if the sidebar is toggled
   */
  readonly isToggled = signal<boolean>(false);

  /**
   * Event emitter for sidebar toggle
   */
  @Output() sidebarToggle = new EventEmitter<void>();

  /**
   * Toggles the sidebar state
   */
  toggleSidebar(): void {
    this.isToggled.update(current => !current);
    this.sidebarToggle.emit();
  }
}
