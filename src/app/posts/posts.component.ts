import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  @Input() posts: Post[] = [];
  private subscription: Subscription;
  @Input() postsLoading = false

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.postsLoading = true
    this.subscription = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Post[]) => {
        this.posts = data;
        this.postsLoading = false
      }, (error) => {
        console.error('Error fetching posts', error);
      });

    console.log(this.posts);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
