import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lorem elit, id iaculis est imperdiet eget.',
      loveIts: 2,
      createdAt: new Date(),
      title: 'Mon Premier Post'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lorem elit, id iaculis est imperdiet eget.',
      loveIts: -1,
      createdAt: new Date(),
      title: 'Mon Deuxième Post'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat lorem elit, id iaculis est imperdiet eget.',
      loveIts: 0,
      createdAt: new Date(),
      title: 'Mon Troisième Post'
    }
  ];
}
