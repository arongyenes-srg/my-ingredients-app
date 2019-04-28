import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  loadedFeature = 'recipe';

  value = 0;

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
