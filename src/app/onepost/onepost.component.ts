import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.css']
})
export class OnepostComponent implements OnInit {
  @Input() thepost: Post ={
    subject: 'one',
    thought: 'two'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
