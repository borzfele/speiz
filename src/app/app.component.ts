import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  width: number = window.innerWidth;

constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'food-container',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/food-container.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'calendar',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/calendar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'note',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/note.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'recipe',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/recipe.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'shopping',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/shopping.svg')
    );
}

  title = 'speiz';
}
