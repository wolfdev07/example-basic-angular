import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example';

  showCurses: boolean = true;

  handleChange(){
    this.showCurses = !this.showCurses;
    console.info(this.showCurses);
  }
}
