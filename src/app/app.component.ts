import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'page-maqe-forum';
  listAuthors: any[] = [];
  listPosts: any[] = [];
  currentDate = new Date();

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getAuthors().subscribe((res) => {
      this.listAuthors = res;
    });

    this.appService.getPosts().subscribe((res) => {
      this.listPosts = res;
    });
  }
  getAuthors(authorId: any, field: string) {
    const authors = this.listAuthors.find((val) => val.id === authorId);
    if (field === 'name') {
      return authors.name;
    } else {
      return authors.avatar_url;
    }
  }
}
