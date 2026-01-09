import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule],
  template: `
   <ul class="remote-menu">
  <li><a routerLink="/">Home</a></li>
  <li><a routerLink="general">GeneralApp</a></li>
</ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcome {}
