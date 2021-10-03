import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map} from 'rxjs/operators';
import {Feature} from "../models/feature.model";

@Injectable({
  providedIn: 'root'
})
export class BallparkService {

  constructor(private http: HttpClient) {
  }

  get() {
    return this.http.get(environment.apiUrl + 'trip').pipe(map((x) => {
      return <Feature[]>x;
    }))
  }
}
