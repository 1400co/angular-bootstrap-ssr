import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LMarkdownEditorModule } from 'ngx-markdown-editor';
import { ToastrService } from 'ngx-toastr';
import { marked } from 'marked';

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

  constructor(private toastr: ToastrService) {
    this.markdownContent = ``;

  }
  ngOnInit(): void {
  }

  showToastr() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
