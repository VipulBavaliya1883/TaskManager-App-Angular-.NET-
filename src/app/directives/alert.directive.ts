import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';
import 'jquery';

@Directive({
  selector: '[appAlert]'
})

export class AlertDirective {

@Input("error") error : string | any
@HostBinding("title") title : string | any

  constructor(private elementRef : ElementRef, private renderer2 : Renderer2)
  {

  }

  divElement : any
  spanElement : any
  spanText : any

  ngOnInit()
  {
    //For DIV element
    this.divElement = this.renderer2.createElement("div")
    this.renderer2.setAttribute(this.divElement,"role","alert")
    this.renderer2.setAttribute(this.divElement,"class","alert alert-danger fade show")
    this.renderer2.setStyle(this.divElement,"transition","transform 0.5s")

    //For SPAN element
    this.spanElement = this.renderer2.createElement("span")
    this.renderer2.setAttribute(this.spanElement,"class","message")

    //For SPAN TEXT
    this.spanText = this.renderer2.createText(this.error)
    this.renderer2.appendChild(this.spanElement,this.spanText)

    this.renderer2.appendChild(this.divElement,this.spanElement)

    this.elementRef.nativeElement.appendChild(this.divElement)

    // this.elementRef.nativeElement.innerHTML = `
    // <div class="alert alert-danger fade show" role="alert" style="transition:transform 0.5s">
    //   <span>${this.error}</span>
    // </div>
    // `

    this.title = "Please try again!"
  }

  @HostListener("mouseenter", ["$event"])
  onMouseEnter(event : any)
  {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1.1)"
    this.renderer2.setStyle(this.divElement, "transform", "scale(1.1)")
  }

  @HostListener("mouseleave", ["$event"])
  onMouseLeave()
  {
    //this.elementRef.nativeElement.querySelector(".alert").style.transform = "scale(1)"
    this.renderer2.setStyle(this.divElement, "transform", "scale(1)")
  }

}
