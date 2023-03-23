import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica1';
  public titulo: string = 'Hola mundo';
  public saludar(): void {
    alert("hola");
  }
}
