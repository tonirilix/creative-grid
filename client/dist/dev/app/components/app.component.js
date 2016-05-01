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
var navbar_component_1 = require('./navbar.component');
var toolbar_component_1 = require('./toolbar.component');
var index_1 = require('../shared/index');
var index_2 = require('../+home/index');
var index_3 = require('../+about/index');
var index_4 = require('../+alucin/index');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'sd-app',
            viewProviders: [index_1.NameListService],
            template: "\n    <sd-toolbar></sd-toolbar>\n    <sd-navbar></sd-navbar>\n    <router-outlet></router-outlet>\n  ",
            directives: [router_1.ROUTER_DIRECTIVES, navbar_component_1.NavbarComponent, toolbar_component_1.ToolbarComponent]
        }),
        router_1.RouteConfig([
            {
                path: '/',
                name: 'Home',
                component: index_2.HomeComponent
            },
            {
                path: '/about',
                name: 'About',
                component: index_3.AboutComponent
            },
            {
                path: '/alucin',
                name: 'Alucin',
                component: index_4.AlucinComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyx1QkFBNkMsaUJBQWlCLENBQUMsQ0FBQTtBQUMvRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUNuRCxrQ0FBK0IscUJBQXFCLENBQUMsQ0FBQTtBQUNyRCxzQkFBOEIsaUJBQWlCLENBQUMsQ0FBQTtBQUNoRCxzQkFBNEIsZ0JBQWdCLENBQUMsQ0FBQTtBQUM3QyxzQkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxzQkFBOEIsa0JBQWtCLENBQUMsQ0FBQTtBQThCakQ7SUFBQTtJQUEyQixDQUFDO0lBM0I1QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixhQUFhLEVBQUUsQ0FBQyx1QkFBZSxDQUFDO1lBQ2hDLFFBQVEsRUFBRSx1R0FJVDtZQUNELFVBQVUsRUFBRSxDQUFDLDBCQUFpQixFQUFFLGtDQUFlLEVBQUUsb0NBQWdCLENBQUM7U0FDbkUsQ0FBQztRQUNELG9CQUFXLENBQUM7WUFDWDtnQkFDRSxJQUFJLEVBQUUsR0FBRztnQkFDVCxJQUFJLEVBQUUsTUFBTTtnQkFDWixTQUFTLEVBQUUscUJBQWE7YUFDekI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxJQUFJLEVBQUUsT0FBTztnQkFDYixTQUFTLEVBQUUsc0JBQWM7YUFDMUI7WUFDRDtnQkFDRSxJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsUUFBUTtnQkFDZCxTQUFTLEVBQUUsdUJBQWU7YUFDM0I7U0FDRixDQUFDOztvQkFBQTtJQUN5QixtQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixvQkFBWSxlQUFHLENBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7Uk9VVEVSX0RJUkVDVElWRVMsIFJvdXRlQ29uZmlnfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQge1Rvb2xiYXJDb21wb25lbnR9IGZyb20gJy4vdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uL3NoYXJlZC9pbmRleCc7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4uLytob21lL2luZGV4JztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4uLythYm91dC9pbmRleCc7XG5pbXBvcnQge0FsdWNpbkNvbXBvbmVudH0gZnJvbSAnLi4vK2FsdWNpbi9pbmRleCc7XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2QtYXBwJyxcbiAgdmlld1Byb3ZpZGVyczogW05hbWVMaXN0U2VydmljZV0sXG4gIHRlbXBsYXRlVXJsOiAnYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5odG1sJyxcbiAgZGlyZWN0aXZlczogW1JPVVRFUl9ESVJFQ1RJVkVTLCBOYXZiYXJDb21wb25lbnQsIFRvb2xiYXJDb21wb25lbnRdXG59KVxuQFJvdXRlQ29uZmlnKFtcbiAge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZScsXG4gICAgY29tcG9uZW50OiBIb21lQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBuYW1lOiAnQWJvdXQnLFxuICAgIGNvbXBvbmVudDogQWJvdXRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICcvYWx1Y2luJyxcbiAgICBuYW1lOiAnQWx1Y2luJyxcbiAgICBjb21wb25lbnQ6IEFsdWNpbkNvbXBvbmVudFxuICB9XG5dKVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7fVxuIl19
