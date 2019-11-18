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

  showSettingIcon: boolean;
  showSetting: boolean;
  selectedIds: Array<string>;

  constructor() {
    this.showSettingIcon = false;  
    this.showSetting = false;  
    this.selectedIds = [];
  }

  ngOnInit() {
  }

  /**
   * Click event - Setting icon button
   * Get all Ids of selected work items and show in alert
   */
  onClickSetting() {
    this.showSetting = true;
    let self = this;
    setTimeout(function(){
      self.showSetting = false;
    }, 3000);
  }
  
  /**
   * Click event - Run button
   * Get all Ids of selected work items and show in alert
   */
  onClickRun() {
    this.selectedIds = [];
    this.recursiveDataSearch(this.dataWorkitemList);
    console.log(this.selectedIds);
    alert("Selected IDs: " + this.selectedIds.join());
  }

  
  private recursiveDataSearch(objects) {
    for (let o of objects || []) {
      if (o.checked == true) 
        this.selectedIds.push(o.id);
      if (o.children) 
        this.recursiveDataSearch(o.children);
    }
  }
}
