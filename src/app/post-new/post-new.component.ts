import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup } from '@angular/forms';
import { PostService } from 'src/services/posts.service';
import { Post } from 'src/models/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-new',
  templateUrl: './post-new.component.html',
  styleUrls: ['./post-new.component.scss']
})
export class PostNewComponent implements OnInit {

  private postForm: FormGroup;

  private initForm() {
    this.postForm = this.formBuilder.group({
      title: '',
      content: ''
    });
  }

  private onSubmit() {
    const title = this.postForm.value['title'];
    const content = this.postForm.value['content']
    this.postService.addPost(new Post(title, content, new Date(), 0, 0));
    this.router.navigate(['posts']);
  }

  constructor(private postService: PostService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.initForm();
  }

}
