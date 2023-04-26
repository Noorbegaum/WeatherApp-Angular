import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  active = 'active';
  date: any;
  ngOnInit(): void {
    this.date = new Date();
  }
}
