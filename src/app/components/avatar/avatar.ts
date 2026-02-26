import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class AvatarComponent {
  colorFondo = signal('#sadasd');
  tamano = signal(50);
  tieneLentes = signal(false);
  tipoExpresion = signal(1);
  nombre = signal("avatar")
  angulo = signal(0)

  cambiarTamano(event: Event) {
    const input = event.target as HTMLInputElement
    this.tamano.set(+input.value)
  }
  cambiarColor(event: Event) {
    const input = event.target as HTMLInputElement
    this.colorFondo.set(input.value)
  }

  toggleLentes() {
    this.tieneLentes.update(flag => !flag)
  }

  setExpresion(tipo: number) {
    this.tipoExpresion.set(tipo)

  }

  cambiarNombre(nombre: string) {
    this.nombre.set(nombre)

  }



  cambiarAngulo(evento: Event) {
    const input = evento.target as HTMLInputElement;
    this.angulo.set(parseInt(input.value));
  }
}
