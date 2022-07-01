import { Component,  OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: [],
})
export class PageNotFoundComponent implements OnInit {
  public error: string = '404 Error';
 public notfound: string= 'Page Not Found!!!'


  constructor() {}

  ngOnInit() {}
}
