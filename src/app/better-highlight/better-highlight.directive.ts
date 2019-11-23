import { Directive, OnInit, 
  ElementRef, Renderer2, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor:string="transparent";
  @Input() highlightColor:string="blue";
@HostBinding('style.backgroundColor') backgroundColor:string;
  constructor(private elref:ElementRef, private renderer:Renderer2) { }
ngOnInit(){
// this.renderer.setStyle(this.elref.nativeElement, 'background-color', 'blue')
}
@HostListener('mouseenter') performtask1(){
this.backgroundColor=this.highlightColor;
}
@HostListener('mouseleave') performtask2(){
  this.backgroundColor=this.defaultColor;
}
}
