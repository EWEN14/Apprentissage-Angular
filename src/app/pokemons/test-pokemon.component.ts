import {Component} from "@angular/core";

@Component({
    selector: 'test-pokemon',
    templateUrl: './app/pokemons/test-pokemon.component.html'
})

export class TestPokemonComponent {
    private bonjour: string = ''; // Création d'une variable qui affichera le message de bonjour.

    //relacheClavier(event: KeyboardEvent){ // on précise pour plus de clarté que l'event est de type clavier
    //this.bonjour = 'Bonjour ' + (<HTMLInputElement>event.target).value + ' !';
    // Dans ce cas ici, event.target désigne la balise input dans lequel l'évènement s'enclenche.
    // On peut donc préciser pour plus de clarté qu'il est lié à un input.
    //}

    // Autre manière d'écrire
    relacheClavier(bonjour: string) {
        this.bonjour = 'Bonjour ' + bonjour + ' !';
    }
}