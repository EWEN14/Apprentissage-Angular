import {Directive, ElementRef, HostListener, Input} from '@angular/core';
import { Pokemon } from './pokemon';

@Directive({
	selector: '[pkmnBorderCard]'
})

export class BorderCardDirective {

	private initialColor: string = '#f5f5f5';
	private defaultColor: string = '#009688';
	private defaultHeight: number = 180;

	private setBorder(color: string) {
		this.el.nativeElement.style.border = 'solid 4px ' + color; // Cette ligne équivaut aux deux suivantes (2 en 1).
		/*let border = 'solid 4px ' + color;
		this.el.nativeElement.style.border = border;*/
	}

	private setHeight(height: number) {
		this.el.nativeElement.style.height = height + 'px';
	}

	constructor(private el: ElementRef) {
		this.setBorder(this.initialColor);
		this.setHeight(this.defaultHeight);
	}

	@Input('pkmnBorderCard') borderColor: string; //utilisation d'un alias : borderColor
 	//@Input() pkmnBorderCard: string; //Pas d'alias

	@HostListener('mouseenter') onMouseEnter() {
		this.setBorder(this.borderColor || this.defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.setBorder(this.initialColor);
	}
}
