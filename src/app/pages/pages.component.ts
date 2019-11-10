import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pages',
  template: '<router-outlet></router-outlet>',
})
export class PagesComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
