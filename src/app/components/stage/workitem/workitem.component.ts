import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-comp-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {

  @Input() dataWorkitem: any;
  @Input() level: any;
  // @Input() title: string;
  // @Input() checked: boolean;
  // @Input() ownerName: string;
  // @Input() public description: string;
  // @Output('onClick') triggerClick: EventEmitter<any> = new EventEmitter<any>();
  @ViewChild("content", {read: WorkitemComponent, static: false}) content: WorkitemComponent;

  isChild = false;
  public Editor = ClassicEditor;
  showExpand: boolean;

  constructor() {
    this.showExpand = false;
  }

  ngOnInit() {
  }

  clickShowExpand() {
    this.showExpand = !this.showExpand;
  }
}
