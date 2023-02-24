import { Component } from '@angular/core'


// Se exporta para permitir que pueda ser utilizado más tarde
@Component({
    selector: 'app-component',
    template: `
    <h1>{{ titulo }}</h1>
    <h3>La base es {{base}}</h3>

    <button (click)="acumular(+base)">+ {{base}}</button>
    <span> {{ numero }} </span>
    <button (click)="acumular(-base);">- {{base}}</button>
        
    `

})
export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;

    // Declaramos una variable base
    base: number = 5;

    sumar (){
        this.numero += 1;
    }

    restar (){
        this.numero -= 1;
    }

    acumular (valor : number){
        this.numero += valor;
    }
}