import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class ResponsivePreviewComponent {
  currentSizeClass = signal<string>('w-mobile');

  setSize(sizeClass: string): void {
    this.currentSizeClass.set(sizeClass);
  }
}
