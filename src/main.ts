import { bootstrapApplication } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { ResponsivePreviewComponent } from './app/preview.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ResponsivePreviewComponent],
  template: `<app-responsive-preview></app-responsive-preview>`
})
export class App {}

bootstrapApplication(App).catch((err) => console.error(err));
