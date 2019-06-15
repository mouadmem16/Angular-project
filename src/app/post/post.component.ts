import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() createdAt: Date;
  constructor() {}

  ngOnInit() {
  }
  estRouge(): boolean {
    if (this.loveIts < 0) {
      return true;
    }
  }
  estVerte(): boolean {
    if (this.loveIts > 0) {
      return true;
    }
  }
  DontLoveit(): void {
    this.loveIts--;
  }
  Loveit(): void {
    this.loveIts++;
  }
}
