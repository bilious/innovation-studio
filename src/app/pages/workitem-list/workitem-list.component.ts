import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkitemComponent } from '../../components/stage/workitem/workitem.component'

@Component({
  selector: 'app-workitem-list',
  templateUrl: './workitem-list.component.html',
  styleUrls: ['./workitem-list.component.scss']
})
export class WorkitemListComponent implements OnInit {
  @ViewChild("content", {read: WorkitemComponent, static: false}) content: WorkitemComponent;
  dataWorkitem: any;

  constructor() {
    this.dataWorkitem = [
      {
        checked: true,
        title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
        owner: 'Bill Hyde'
      },
      {
        checked: true,
        title: 'Customers Have Difficuly Spreading Butter Straight From The Fridge',
        owner: 'Sarank'
      },
      {
        checked: true,
        title: 'Yello Spreads Are Associated With  Unhealty Fats',
        owner: 'Bill Hyde'
      },
      {
        checked: true,
        title: 'Customers Do Not Understand The Difference Between Complex & Simple Fats',
        owner: 'Sarank'
      },
    ]
  }

  ngOnInit() {
  }

  onClickExpand(ind) {
    console.log(ind)
  }
}
