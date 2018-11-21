import {Component, Input, OnInit} from '@angular/core';
import { PostService } from 'src/services/posts.service';
import { Post } from 'src/models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  onLikeIt() {
      this.post.likeIts++;
  }
  onDontLikeIt() {
    this.post.dontLikeIts++;
  }
  onDelete() {
    this.postService.deletePost(this.post);
  }

}
