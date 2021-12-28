import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isCollapsed:any;
  constructor() { }

  ngOnInit() {}

}
