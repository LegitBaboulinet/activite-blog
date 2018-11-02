import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [ { title: 'Mon premier post', content: 'Ceci est un post', date: new Date(), likeIts: 11, dontLikeIts: 10 },
      { title: 'Mon second post', content: 'Ceci est un post', date: new Date(), likeIts: 10, dontLikeIts: 11 },
      { title: 'Encore un post', content: 'Ceci est un post', date: new Date(), likeIts: 10, dontLikeIts: 10 } ]
}
