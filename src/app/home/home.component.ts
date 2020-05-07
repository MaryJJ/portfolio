import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data = {
    name: 'Marilys Jimenez Arguelles | Full Stack Developer',
    bio: `Graduated in Computer Science Bachelor with more than 15 years of experience,
    dedicated to the development of information management system and applications, enthusiast of new technologies`,
    image: 'https://marilys-jimenez.herokuapp.com/assets/mary.jpg',
  };
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit(): void {
    this.title.setTitle(this.data.name);
    this.meta.addTags([
      { name: 'twitter:card', content: 'summary' },
      { name: 'og:url', content: '/about' },
      { name: 'og:title', content: this.data.name },
      { name: 'og:description', content: this.data.bio },
      { name: 'og:image', content: this.data.image },
    ]);
  }
}
