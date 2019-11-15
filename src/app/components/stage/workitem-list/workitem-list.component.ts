import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { WorkitemComponent } from './../workitem/workitem.component'

@Component({
  selector: 'app-comp-workitem-list',
  templateUrl: './workitem-list.component.html',
  styleUrls: ['./workitem-list.component.scss']
})
export class WorkitemListComponent implements OnInit {
  @ViewChild("content", {read: WorkitemComponent, static: false}) content: WorkitemComponent;
  @Input() dataWorkitemList: any;

  constructor() {
    console.log("asdfasdfasdfasdf")
  }

  ngOnInit() {
  }
}
