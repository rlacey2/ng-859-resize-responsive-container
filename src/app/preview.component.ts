import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-responsive-preview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class ResponsivePreviewComponent {
  currentSizeClass = signal<string>('w-mobile');

    colFitClasses = {
    // xs cols followed by > sm 
    
    xs1sm1: "col-12 bg-warning",
    xs2sm4: "col-6 col-sm-3 bg-info",
    xs1sm2: "col-12 col-sm-6 bg-primary",
    xs1sm3: "col-12 col-sm-4 bg-success",

  }

  setSize(sizeClass: string): void {
    this.currentSizeClass.set(sizeClass);
  }
}
