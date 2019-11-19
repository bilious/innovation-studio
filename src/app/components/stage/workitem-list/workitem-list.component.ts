import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChanges      } from '@angular/core';
import { WorkitemComponent } from './../workitem/workitem.component'

@Component({
  selector: 'app-comp-workitem-list',
  templateUrl: './workitem-list.component.html',
  styleUrls: ['./workitem-list.component.scss']
})
export class WorkitemListComponent implements OnInit, OnChanges {

  @ViewChild("content", {read: WorkitemComponent, static: false}) content: WorkitemComponent;
  @Input() dataWorkitemList: any;
  @Input() filterType: string;
  @Input() filterValue: string;
  @Input() orderBy: string;

  showSettingIcon: boolean;
  showSetting: boolean;
  filteredList: any;
  dataWorkitemList1: any;

  constructor() {
    this.showSettingIcon = false;  
    this.showSetting = false;
    this.filteredList = [];
    this.dataWorkitemList1 = [];
  }

  ngOnInit() {

  }

  /**
   * Parent component change event
   * Get filter and order option and refresh data
   */
  ngOnChanges(changes: SimpleChanges): void {
    
    if (changes['filterType'] || changes['filterValue']) {
      if (this.filterType !== '' && this.filterValue !== '') {
        this.filteredList = [];
        this.filterData(this.dataWorkitemList);
      } else {
        this.filteredList = this.dataWorkitemList;
      }
    }
    if (this.orderBy !== '') {
      this.dataWorkitemList1 = this.sortData(Object.assign([], this.filteredList));
    } else {
      this.dataWorkitemList1 = this.filteredList;
    }
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
    let selectedIds = [];
    this.recursiveDataSearch(this.dataWorkitemList, selectedIds);
    alert("Selected IDs: " + selectedIds.join());
  }

  private recursiveDataSearch(objects, selectedIds) {
    for (let o of objects || []) {
      if (o.checked == true) 
        selectedIds.push(o.id);
      if (o.children) 
        this.recursiveDataSearch(o.children, selectedIds);
    }
  }

  private filterData(objects: any) {
    objects.map((item) => {
      if (item.children && item.children.length > 0) {
        this.filterData(item.children);
      }
      if (this.filterType == 'Owner') {
        if (item['owner'] == this.filterValue) {
          let o = Object.assign({}, item);
          o.children = [];
          this.filteredList.push(o);
        } 
      } else {
        if (item['tags'] && item['tags'].indexOf(this.filterValue) > -1) {
          let o = Object.assign({}, item);
          o.children = [];
          this.filteredList.push(o);
        }
      }
    });
  }

  private sortData(objects) {
    if (objects.children && objects.children.length > 0) {
      objects.children = this.sortData(objects.children);
    }

    return objects.sort((obj1, obj2)=> {
      if (this.orderBy == 'Ranking') {
        return obj1['ranking'] < obj2['ranking'] ? -1 : obj1['ranking'] > obj2['ranking'] ? 1 : 0
      } else {
        return obj1['title'] < obj2['title'] ? -1 : obj1['title'] > obj2['title'] ? 1 : 0
      }
    });
  }

}
