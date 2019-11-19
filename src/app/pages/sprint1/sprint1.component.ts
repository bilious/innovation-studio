import { Component, OnInit, ViewChild } from '@angular/core';
import { WorkitemListComponent } from './../../components/stage/workitem-list/workitem-list.component'

export interface FilterModel {
  type: string,
  value: string
}

@Component({
  selector: 'app-sprint1',
  templateUrl: './sprint1.component.html',
  styleUrls: ['./sprint1.component.scss']
})

export class Sprint1Component implements OnInit {
  @ViewChild('content', {read: WorkitemListComponent, static: false}) content: WorkitemListComponent;
  dataWorkitemList: any;
  filters: any;
  filterValues: any;
  orderValues: any;
  orderBy: string;
  filter: FilterModel;

  constructor() {  
    this.dataWorkitemList = [
      {
        id:'0010AE01',
        checked: true,
        changed: false,
        title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
        owner: 'Bill Hyde',
        description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
        tags: ['Sprint1', 'Backlog'],
        ranking: 0,
        children: [
          {
            id:'0010AE02',
            checked: false,
            changed: false,
            title: 'Which Can it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Sarank',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            tags: ['Backlog', 'Sprint2', 'Sprint3'],
            ranking: 3,
            children: [
              {
                id:'0010AE06',
                checked: false,
                changed: false,
                title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                tags: ['Sprint1', 'Backlog'],
                ranking: 9,
                children: [
                  {
                    id:'0010AE07',
                    checked: false,
                    changed: false,
                    title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Sarank',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    tags: ['Sprint1', 'Sprint2'],
                    ranking: 2,
                    children: []
                  },
                  {
                    id:'0010AE08',
                    checked: false,
                    changed: false,
                    title: 'Does it Fit Into Your Product Or Brand Strategy ?',
                    owner: 'Bill Hyde',
                    description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                    tags: ['Sprint1', 'Backlog'],
                    ranking: 4,
                    children: []
                  },
                ]
              },
              {
                id:'0010AE03',
                checked: false,
                changed: false,
                title: 'And How Does it Fit Into Your Product Or Brand Strategy ?',
                owner: 'Bill Hyde',
                description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
                tags: ['Backlog'],
                ranking: 8,
                children: [
                  {
                    id:'0010AE05',
                    checked: false,
                    changed: false,
                    title: 'Why Does it Fit Into Your Product Or Brand Strategy ?',
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
            title: 'How Did it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Bill Hyde',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            tags: ['Sprint1'],
            ranking: 0,
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
        tags: ['Sprint2'],
        ranking: 8,
        children: [
          {
            id:'0010AE11',
            checked: false,
            changed: false,
            title: 'How Does it Fit Into Your Product Or Brand Strategy ?',
            owner: 'Bill Hyde',
            description: '<p>Welcome to visit work item: <b>How Does it Fit Into Your Product Or Brand Strategy ?</b></p>',
            ranking: 3,
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
        tags: [],
        ranking: 6,
        children: []
      },
      {
        id: '0010AE13',
        checked: false,
        changed: false,
        title: 'Customers Do Not Understand The Difference Between Complex & Simple Fats',
        owner: 'Sarank',
        description: '<p>Welcome to visit work item: <b>Customers Do Not Understand The Difference Between Complex & Simple Fats</b></p>',
        tags: ['Sprint1', 'Backlog', 'Sprint2'],
        ranking: 4,
        children: []
      },
    ];

    this.filters = [
      {
        id: '00',
        type: 'Owner',
        values: [
          { id: '00', value: 'Bill Hyde' },
          { id: '01', value: 'Sarank' },
        ]
      },
      {
        id: '01',
        type: 'Tag',
        values: [
          { id: '10', value: 'Sprint1' },
          { id: '11', value: 'Sprint2' },
          { id: '12', value: 'Backlog' },
        ]
      }
    ];
    this.filterValues = [];
    this.orderValues = [
      { id: '20', value: 'Ranking' },
      { id: '21', value: 'Title' }
    ]
    this.filter = { type: '', value: '' };
    this.orderBy = '';
  }

  ngOnInit() {
  }

  /**
   * change event - Filter type
   * Get current filter type and set filter data, call refresh 
   */
  changeFilterType() {
    this.filter.value = '';
    if (this.filter.type === '') {
      this.filterValues = [];
      return;
    }
    this.filters.filter((item) => {
      if (item.type === this.filter.type) {
        this.filterValues = item.values;
      }
    });
  }
}
