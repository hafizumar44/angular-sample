import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'positiveReaction';
  isLanding = true;
  constructor(private location: Location) { }
  ngOnInit(): void {
    if (environment.production) {
      console.log = () => { };
    }
  }

  handleHeader(): void {
    const baseUrl = this.location.prepareExternalUrl('');
    const route = this.location.path();

    if ((route === `${baseUrl}` || route === '') || route === '/signin'
      || route === '/forgot-password' || route.includes('/change-passwordddd')) {
      this.isLanding = false;
    } else {
      this.isLanding = true;
    }
  }
}
