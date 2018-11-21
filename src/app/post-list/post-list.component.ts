import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from './../../services/posts.service';
import { Post } from './../../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

  private posts: Array<Post>;
  private postsSub: Subscription;

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postsSub = this.postService.getPostsSubject().subscribe(
      (posts: Array<Post>) => {
        this.posts = posts;
      }
    );
    this.postService.emitPostSubject();
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
