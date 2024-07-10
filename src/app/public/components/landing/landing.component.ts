import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export default class LandingComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  showToastr() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

}
