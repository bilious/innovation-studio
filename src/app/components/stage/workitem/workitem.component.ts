import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-comp-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {
  @Input() title: string;
  @Input() checked: boolean;
  @Input() ownerName: string;
  @Input() public description: string;
  @Output('onClick') triggerClick: EventEmitter<any> = new EventEmitter<any>();

  public Editor = ClassicEditor;
  showExpand: boolean;

  constructor() {
    this.showExpand = false;
  }

  ngOnInit() {
  }

  onClick() {
    this.triggerClick.emit(null);
  }

  clickShowExpand() {
    // alert("click expand");
    this.showExpand = !this.showExpand;
  }
}
