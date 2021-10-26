import { Component, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  myposts: Post[] = [
    {subject: 'Peanuts', thought: 'Are Tasty'},
    {subject: 'Books', thought: 'Are the root of all art'},
    {subject: 'Thought', thought: 'Is the catalyst of action'},
    {subject: 'Music', thought: 'Is.... Leave me along Im vibing!'},
    {subject: 'Sleep', thought: 'Is the little death.'}

  ]

  
  thesubject: string = '';
  thetho: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.myposts.push({subject: this.thesubject, thought: this.thetho});
  }

}
