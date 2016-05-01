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
var core_1 = require('angular2/core');
var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent = __decorate([
        core_1.Component({
            selector: 'sd-toolbar',
            template: "<h1>Angular 2 Seed</h1> <more></more>",
            styles: [":host{background-color:#106cc8;color:hsla(0,0%,100%,.87);display:block;height:48px;padding:0 16px}h1{display:inline;font-size:20px;font-weight:400;letter-spacing:.1px;line-height:48px}more{background:url(assets/svg/more.svg);float:right;height:24px;margin-top:12px;width:24px}"]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
exports.ToolbarComponent = ToolbarComponent;
