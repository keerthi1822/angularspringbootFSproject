import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ButtonModule,TableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'textiliatojui';
}