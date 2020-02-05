import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from './pokemon';
/*
 * Affiche la bordure de couleur correspondant au type du pokémon.
 * Prend en argument le type du pokémon.
 * Exemple d'utilisation:
 *   {{ pokemon.type | pokemonTypeColor }}
*/
@Pipe({ name: 'pokemonBorderColor' })
export class PokemonBorderColorPipe implements PipeTransform {
    transform(type: string): string {

        let bgcolor: string;

        switch (type) {
            case 'Feu':
                bgcolor = 'red';
                break;
            case 'Eau':
                bgcolor = 'blue';
                break;
            case 'Plante':
                bgcolor = 'green';
                break;
            case 'Insecte':
                bgcolor = '#8d6e63';
                break;
            case 'Normal':
                bgcolor = 'grey';
                break;
            case 'Vol':
                bgcolor = '#90CAF9';
                break;
            case 'Poison':
                bgcolor = 'purple';
                break;
            case 'Fée':
                bgcolor = 'pink';
                break;
            case 'Psy':
                bgcolor = 'purple';
                break;
            case 'Electrik':
                bgcolor = 'yellow';
                break;
            case 'Combat':
                bgcolor = 'orange';
                break;
            default:
                bgcolor = 'grey';
                break;
        }

        return bgcolor;

    }
}
