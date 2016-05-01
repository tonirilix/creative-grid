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
var router_1 = require('angular2/router');
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'sd-navbar',
            template: "\n    <nav>\n      <a [routerLink]=\"['Home']\">HOME</a>\n      <a [routerLink]=\"['About']\">ABOUT</a>\n      <a [routerLink]=\"['Alucin']\">ALUCIN</a>\n    </nav>\n  ",
            styles: ["\n    :host {\n      border-color: #e1e1e1;\n      border-style: solid;\n      border-width: 0 0 1px;\n      display: block;\n      height: 48px;\n      padding: 0 16px;\n    }\n\n    nav a {\n      color: #8f8f8f;\n      font-size: 14px;\n      font-weight: 500;\n      line-height: 48px;\n      margin-right: 20px;\n      text-decoration: none;\n      vertical-align: middle;\n    }\n\n    nav a.router-link-active {\n      color: #106cc8;\n    }\n  "],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL25hdmJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBZ0MsaUJBQWlCLENBQUMsQ0FBQTtBQXFDbEQ7SUFBQTtJQUE4QixDQUFDO0lBbkMvQjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsMEtBTVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxzY0F1QlIsQ0FBQztZQUNGLFVBQVUsRUFBRSxDQUFDLDBCQUFpQixDQUFDO1NBQ2hDLENBQUM7O3VCQUFBO0lBQzRCLHNCQUFDO0FBQUQsQ0FBOUIsQUFBK0IsSUFBQTtBQUFsQix1QkFBZSxrQkFBRyxDQUFBIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL25hdmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzZC1uYXZiYXInLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC9jb21wb25lbnRzL25hdmJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydhcHAvY29tcG9uZW50cy9uYXZiYXIuY29tcG9uZW50LmNzcyddLFxuICBkaXJlY3RpdmVzOiBbUk9VVEVSX0RJUkVDVElWRVNdXG59KVxuZXhwb3J0IGNsYXNzIE5hdmJhckNvbXBvbmVudCB7fVxuIl19
