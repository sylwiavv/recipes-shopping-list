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

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.subscription = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Post[]) => {
        console.log(data)
        this.posts = data;
      }, (error) => {
        console.error('Error fetching posts', error);
      });
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
