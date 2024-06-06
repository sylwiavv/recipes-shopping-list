import {Component, inject, Input, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  @Input() products = []
  private URL = "https://reqres.in/api/products"
  private http = inject(HttpClient)
  constructor() {
  }



  ngOnInit() {
    this.http.get(this.URL).subscribe({
      next: (results) => console.log(results),
      error: err => console.log(err.message, "ERROR")
    })

    // console.log(this.products, "this.products")
  }
}
