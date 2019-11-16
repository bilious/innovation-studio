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
  selectedIds: Array<string>;

  constructor() {
    this.selectedIds = [];
    console.log("asdfasdfasdfasdf");
    this.dataWorkitemList = [
      {
        id:'0010AE01',
        checked: true,
        changed: false,
        title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
        children: [
          {
            id:'0010AE02',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Sarank',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            children: [
              {
                id:'0010AE06',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                children: [
                  {
                    id:'0010AE07',
                    checked: false,
                    changed: false,
                    title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Sarank',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    children: []
                  },
                  {
                    id:'0010AE08',
                    checked: false,
                    changed: false,
                    title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Bill Hyde',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    children: []
                  },
                ]
              },
              {
                id:'0010AE03',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                children: [
                  {
                    id:'0010AE05',
                    checked: false,
                    changed: false,
                    title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Sarank',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    children: []
                  },
                ]
              },
            ]
          },
          {
            id:'0010AE04',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Bill Hyde',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            children: []
          },
        ]
      },
      {
        id: '0010AE09',
        checked: true,
        changed: false,
        title: 'Customers Have Difficuly Spreading Butter Straight From The Fridge',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Have Difficuly Spreading Butter Straight From The Fridge</b></p>',
        children: [
          {
            id:'0010AE11',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Bill Hyde',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            children: [
              {
                id:'0010AE12',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Sarank',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                children: []
              },
            ]
          },
        ]
      },
      {
        id: '0010AE10',
        checked: true,
        changed: false,
        title: 'Yello Spreads Are Associated With  Unhealty Fats',
        owner: 'Bill Hyde',
        description: '',
        children: []
      },
      {
        id: '0010AE13',
        checked: false,
        changed: false,
        title: 'Customers Do Not Understand The Difference Between Complex & Simple Fats',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Do Not Understand The Difference Between Complex & Simple Fats</b></p>',
        children: []
      },
    ]
  }

  ngOnInit() {
  }

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
