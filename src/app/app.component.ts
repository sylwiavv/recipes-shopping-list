import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature ="shopping-list"

  onNavigate(feature: string) {
    console.log(feature, "FEATURE");
    this.loadedFeature = feature
  }
}
