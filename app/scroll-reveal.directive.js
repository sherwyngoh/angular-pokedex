"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var ScrollRevealDirective = (function () {
    function ScrollRevealDirective(_el, document) {
        this._el = _el;
        this.document = document;
        this.el = this._el.nativeElement;
    }
    ScrollRevealDirective.prototype.ngAfterViewInit = function () {
        // this.document.on(window, 'scroll', ()=> {
        //     console.log(wh);
        // })
        // window.addEventListener('scroll', () =>{
        //     // let rect = this.document.getBoundingClientRect( this.el );
        //     // let wh = this.innerHeight;
        //     // console.log(rect)
        // })
        var document = this.document;
        var el = this._el.nativeElement;
        var elementOffset = el.offsetTop;
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
    };
    __decorate([
        core_1.Input('scroll-reveal'), 
        __metadata('design:type', Object)
    ], ScrollRevealDirective.prototype, "options", void 0);
    ScrollRevealDirective = __decorate([
        core_1.Directive({
            selector: '[scroll-reveal]'
        }),
        __param(1, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [core_1.ElementRef, Object])
    ], ScrollRevealDirective);
    return ScrollRevealDirective;
}());
exports.ScrollRevealDirective = ScrollRevealDirective;
//# sourceMappingURL=scroll-reveal.directive.js.map