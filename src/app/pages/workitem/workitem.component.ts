import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workitem',
  templateUrl: './workitem.component.html',
  styleUrls: ['./workitem.component.scss']
})
export class WorkitemComponent implements OnInit {

  title = 'Lime Canary';
  checked = false;
  
  constructor() {
    
  }

  ngOnInit() {
  }

}
