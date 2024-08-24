import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrivateHeaderComponent } from "../private-header/private-header.component";
import { PrivateFooterComponent } from "../private-footer/private-footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-layout',
  standalone: true,
  imports: [RouterOutlet, PrivateHeaderComponent, PrivateFooterComponent, CommonModule],
  templateUrl: './private-layout.component.html',
  styleUrl: './private-layout.component.scss'
})
export default class PrivateLayoutComponent {
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
