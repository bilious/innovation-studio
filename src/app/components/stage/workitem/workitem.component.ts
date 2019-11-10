import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {
  @Input() title: string;
  @Input() checked: boolean;
  @Input() ownerName: string;
  @Output('onClick') triggerClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.triggerClick.emit(null);
  }
}
