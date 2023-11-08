import { Component } from '@angular/core';
import { Link } from '../interfaces/link.interface';

@Component({
  selector: 'molecule-link-list',
  templateUrl: './link-list.component.html',
  styleUrls: ['./link-list.component.css']
})
export class LinkListComponent {
  public links:Link[] = [
    {
      name: 'About',
      href: '',
    },
    {
      name: 'Services',
      href: ''
    },
    {
      name: 'Solutions',
      href: ''
    },
    {
      name: 'Blog',
      href: ''
    }
  ];
}
