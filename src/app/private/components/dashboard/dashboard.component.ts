import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * Dashboard component - Main dashboard for authenticated users
 */
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export default class DashboardComponent {
  /**
   * Dashboard title
   */
  readonly title = signal<string>('Dashboard');

  /**
   * Welcome message for the user
   */
  readonly welcomeMessage = signal<string>('Bienvenido al Dashboard');
}
