import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { PixelService } from 'ngx-multi-pixel';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LMarkdownEditorModule, FormsModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export default class LandingComponent implements OnInit {

  markdownContent: string;
  htmlContent: string | undefined;




  toolbarOptions = {
    "usingFontAwesome5": true,
    "resizable": false,
    "showBorder": false
  };

  constructor(private toastr: ToastrService,
    private pixel: PixelService
  ) {
    this.markdownContent = ``;

  }
  ngOnInit(): void {
    this.pixel.initialize();
    this.pixel.track("PageView", {
    });
  }

  showToastr() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
