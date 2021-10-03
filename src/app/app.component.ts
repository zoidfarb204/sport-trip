import {Component, OnInit} from '@angular/core';
import {BallparkService} from "./services/ballpark.service";
import {Feature} from "./models/feature.model";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  displayedColumns: string[] = [
    'class',
    'league',
    'team',
    'ballpark',
    'lat',
    'long'
  ];
  parks: Feature[] = [];

  constructor(private ballparkService: BallparkService) {
  }

  ngOnInit(): void {
    this.ballparkService.get().subscribe(x => this.parks = x);
  }
}
