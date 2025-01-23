import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'links.io';

  groups = [
    {
      description: 'Links',
      links: [
        {
          label: 'Github',
          url: 'https://github.com/victorborges97'
        },
        {
          label: 'Linkedin',
          url: 'https://www.linkedin.com/in/victorborges97/'
        }
      ]
    }
  ]
}
