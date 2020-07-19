import { Directive, Input, ElementRef } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{
    @Input() set appDropdown(condition:boolean){
    }

    constructor(private elementRef:ElementRef){}
}