import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppService {

constructor(private http: HttpClient) { }

getAuthors(): Observable<any> {
  return this.http.get<any>('https://maqe.github.io/json/authors.json');
}

getPosts(): Observable<any> {
  return this.http.get<any>('https://maqe.github.io/json/posts.json');
}

}
