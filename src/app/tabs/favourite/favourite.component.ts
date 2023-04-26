import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  constructor() {}
  favouriteList: any;
  ngOnInit(): void {
    if (localStorage.getItem('favouriteList')) {
      this.favouriteList = localStorage.getItem('favouriteList');
      this.favouriteList = JSON.parse(this.favouriteList);
    }
    for (let i = 0; i < this.favouriteList.length; i++) {
      console.log('in fav', this.favouriteList[i]);
    }
  }
}
