import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkitemListComponent } from './../../components/stage/workitem-list/workitem-list.component'

@Component({
  selector: 'app-sprint1',
  templateUrl: './sprint1.component.html',
  styleUrls: ['./sprint1.component.scss']
})
export class Sprint1Component implements OnInit {
  @ViewChild("content", {read: WorkitemListComponent, static: false}) content: WorkitemListComponent;
  dataWorkitemList: any;
  constructor() {
    this.dataWorkitemList = [
      {
        checked: true,
        title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>'
      },
      {
        checked: false,
        title: 'Customers Have Difficuly Spreading Butter Straight From The Fridge',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Have Difficuly Spreading Butter Straight From The Fridge</b></p>'
      },
      {
        checked: false,
        title: 'Yello Spreads Are Associated With  Unhealty Fats',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>Yello Spreads Are Associated With  Unhealty Fats</b></p>'
      },
      {
        checked: true,
        title: 'Customers Do Not Understand The Difference Between Complex & Simple Fats',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Do Not Understand The Difference Between Complex & Simple Fats</b></p>'
      },
    ]
  }

  ngOnInit() {
  }

}
