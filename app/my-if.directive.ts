import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';


@Directive({
  selector: '[appMyIf]'
})
export class MyIfDirective {

   isViewPresent = false;

  constructor(private templateRef: TemplateRef<any>, private viewCotainerRef: ViewContainerRef) { }

  @Input() set appMyIf(condition: boolean) {

    if ( condition && !this.isViewPresent ) {
      this.viewCotainerRef.createEmbeddedView(this.templateRef);
      this.isViewPresent = true;
    } else {
      this.viewCotainerRef.clear();
      this.isViewPresent = false;
    }

  }

}
