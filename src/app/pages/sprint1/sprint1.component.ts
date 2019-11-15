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
        id:'0',
        checked: true,
        changed: false,
        title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
        children: [
          {
            id:'00',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Sarank',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            children: [
              {
                id:'000',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                children: [
                  {
                    id:'0000',
                    checked: false,
                    changed: false,
                    title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Sarank',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    children: []
                  },
                  {
                    id:'0001',
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
                id:'001',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                children: [
                  {
                    id:'0010',
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
            id:'01',
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
        id: '1',
        checked: true,
        changed: false,
        title: 'Customers Have Difficuly Spreading Butter Straight From The Fridge',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Have Difficuly Spreading Butter Straight From The Fridge</b></p>',
        children: [
          {
            id:'10',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Bill Hyde',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            children: [
              {
                id:'100',
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
        id: '2',
        checked: true,
        changed: false,
        title: 'Yello Spreads Are Associated With  Unhealty Fats',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>Yello Spreads Are Associated With  Unhealty Fats</b></p>',
        children: []
      },
      {
        id: '3',
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

}
