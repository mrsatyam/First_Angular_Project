import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FirstProject';
  isActive = true;
  coordinates;
  onMove($event){
    this.coordinates = "X : "+ $event.pageX + " Y: " + $event.pageY ;
  }

  onClick($event)
  {
    alert($event);
  }
}
