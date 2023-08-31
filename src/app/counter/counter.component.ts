import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter = 0;
  activeDecrease = true; // Inicialmente activo

  increase() {
    this.counter++;
    if (this.counter > 0) {
      this.activeDecrease = true; // Habilitar el botón de disminución
    }
  }

  decrease() {
    if (this.counter > 0) {
      this.counter--;
    }
    if (this.counter === 0) {
      this.activeDecrease = false; // Bloquear el botón de disminución
    }
  }

  inactiveDecrease() {
    this.activeDecrease = !this.activeDecrease;
  }
}
