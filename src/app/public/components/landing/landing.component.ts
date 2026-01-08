import { Component, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { PixelService } from 'ngx-multi-pixel';
import { ToastrService } from 'ngx-toastr';

/**
 * Landing page component - Public landing page
 */
@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LMarkdownEditorModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export default class LandingComponent implements OnInit {
  /**
   * Signal containing the markdown content
   */
  readonly markdownContent = signal<string>('');

  /**
   * Signal containing the rendered HTML content
   */
  readonly htmlContent = signal<string | undefined>(undefined);

  /**
   * Markdown editor toolbar configuration
   */
  readonly toolbarOptions = {
    usingFontAwesome5: true,
    resizable: false,
    showBorder: false
  };

  constructor(
    private readonly toastr: ToastrService,
    private readonly pixel: PixelService
  ) {}

  ngOnInit(): void {
    this.initializePixelTracking();
  }

  /**
   * Initializes pixel tracking and tracks page view
   */
  private initializePixelTracking(): void {
    this.pixel.initialize();
    this.pixel.track('PageView', {});
  }

  /**
   * Shows a success toast notification
   */
  showToastr(): void {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
