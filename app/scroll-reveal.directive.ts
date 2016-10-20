import { Directive, AfterViewInit, ElementRef, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Directive( {
    selector: '[scroll-reveal]'
} )

export class ScrollRevealDirective implements AfterViewInit
{
    public el = this._el.nativeElement;

    @Input( 'scroll-reveal' ) options:any;

    constructor( private _el:ElementRef,
                 @Inject(DOCUMENT) private document )
    {

    }
    
    ngAfterViewInit()
    {
        // this.document.on(window, 'scroll', ()=> {
        //     console.log(wh);
        // })
        // window.addEventListener('scroll', () =>{
        //     // let rect = this.document.getBoundingClientRect( this.el );
        //     // let wh = this.innerHeight;
        //     // console.log(rect)
        // })
        const document = this.document 
        const el = this._el.nativeElement
        const elementOffset = el.offsetTop;
            // const scrollTop = document.body.scrollTop;
            // console.log(scrollTop > elementOffset)
            // if (scrollTop > elementOffset) {
            //     console.log('here');
            // }
        // console.log(window.a =  this.document);

        // this._dom.on( window, 'scroll', () =>
        // {

        //     if( rect.top < (wh - this.options.yOffset) )
        //     {
        //         setTimeout( () =>
        //         {
        //             this._dom.setStyle( this.el, 'transition', 'opacity 1s, transform 1s' );
        //             this._dom.setStyle( this.el, 'opacity', '1' );
        //             this._dom.setStyle( this.el, 'transform', 'translate(0, 0)' );
        //         }, this.options.delay);
        //     }
        // } );
    }
}