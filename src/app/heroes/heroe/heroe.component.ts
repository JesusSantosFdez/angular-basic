import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{

    nombre: String = 'Ironman';
    edad: number = 45;

    //Getters y setters
    get nombreMayusculas() : string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return `${ this.nombre } - ${this.edad}`
    }

    cambiarNombre() : void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad() : void{
        this.edad = 25;
    }
}