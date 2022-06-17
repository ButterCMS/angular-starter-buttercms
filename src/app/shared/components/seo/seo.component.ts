import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html'
})
export class SeoComponent implements OnInit {

  @Input() title;
  @Input() description;
  @Input() image;

  constructor() {
  }

  ngOnInit(): void {
  }

}
