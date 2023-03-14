import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRepeater]'
})
export class RepeaterDirective {

  @Input("appRepeater") n : number | any

  constructor(private viewContainerRef : ViewContainerRef, private templateRef : TemplateRef<any>)
  {
    this.viewContainerRef.clear()
  }

  ngOnInit()
  {
    // for(let i=0;this.n<5;i++)
    // {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef,{$implicit : i})
    // }
  }

}
