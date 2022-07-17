import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
ImagePath:string;
  constructor() {this.ImagePath='https://media.istockphoto.com/photos/collection-of-different-toys-on-wooden-table-picture-id1322274556?b=1&k=20&m=1322274556&s=170667a&w=0&h=KMtQ3_UG6o2EF-2XcEDs0FSH8SocMVv3ifmJvR8p5rM=' }

  ngOnInit(): void {
  }

}
