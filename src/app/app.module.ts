import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from 'src/services/posts.service';
import { Routes, RouterModule } from '@angular/router';
import { PostNewComponent } from './post-new/post-new.component';
import { PostListComponent } from './post-list/post-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'new', component: PostNewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemComponent,
    PostNewComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
