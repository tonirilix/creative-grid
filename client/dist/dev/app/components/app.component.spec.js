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
var testing_1 = require('angular2/testing');
var core_1 = require('angular2/core');
var router_1 = require('angular2/router');
var location_mock_1 = require('angular2/src/mock/location_mock');
var router_2 = require('angular2/src/router/router');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var app_component_1 = require('./app.component');
function main() {
    testing_1.describe('App component', function () {
        testing_1.beforeEachProviders(function () { return [
            router_1.RouteRegistry,
            core_1.DirectiveResolver,
            core_1.provide(router_1.Location, { useClass: location_mock_1.SpyLocation }),
            core_1.provide(router_1.ROUTER_PRIMARY_COMPONENT, { useValue: app_component_1.AppComponent }),
            core_1.provide(router_1.Router, { useClass: router_2.RootRouter })
        ]; });
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var appDOMEl = rootTC.debugElement.children[0].nativeElement;
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(appDOMEl, 'sd-app > sd-navbar > nav > a')[1].href).toMatch(/http:\/\/localhost:\d+\/about/);
            });
        }));
    });
}
exports.main = main;
var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent = __decorate([
        core_1.Component({
            selector: 'test-cmp',
            template: '<sd-app></sd-app>',
            directives: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2FwcC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBT08sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQixxQkFBb0QsZUFBZSxDQUFDLENBQUE7QUFFcEUsdUJBQXdFLGlCQUFpQixDQUFDLENBQUE7QUFDMUYsOEJBQTBCLGlDQUFpQyxDQUFDLENBQUE7QUFDNUQsdUJBQXlCLDRCQUE0QixDQUFDLENBQUE7QUFFdEQsNEJBQWtCLHVDQUF1QyxDQUFDLENBQUE7QUFDMUQsOEJBQTJCLGlCQUFpQixDQUFDLENBQUE7QUFFN0M7SUFFRSxrQkFBUSxDQUFDLGVBQWUsRUFBRTtRQUd4Qiw2QkFBbUIsQ0FBQyxjQUFNLE9BQUE7WUFDeEIsc0JBQWE7WUFDYix3QkFBaUI7WUFDakIsY0FBTyxDQUFDLGlCQUFRLEVBQUUsRUFBQyxRQUFRLEVBQUUsMkJBQVcsRUFBQyxDQUFDO1lBQzFDLGNBQU8sQ0FBQyxpQ0FBd0IsRUFBRSxFQUFDLFFBQVEsRUFBRSw0QkFBWSxFQUFDLENBQUM7WUFDM0QsY0FBTyxDQUFDLGVBQU0sRUFBRSxFQUFDLFFBQVEsRUFBRSxtQkFBVSxFQUFDLENBQUM7U0FDeEMsRUFOeUIsQ0FNekIsQ0FBQyxDQUFDO1FBRUgsWUFBRSxDQUFDLGFBQWEsRUFDZCxxQkFBVyxDQUFDLENBQUMsOEJBQW9CLENBQUMsRUFBRSxVQUFDLEdBQXlCO1lBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLFVBQUEsTUFBTTtnQkFDVixNQUFNLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3ZCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDN0QsZ0JBQU0sQ0FBQyxpQkFBRyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSw4QkFBOEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQzFILENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNSLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQXZCZSxZQUFJLE9BdUJuQixDQUFBO0FBT0Q7SUFBQTtJQUFxQixDQUFDO0lBTHRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsVUFBVSxFQUFFLENBQUMsNEJBQVksQ0FBQztTQUMzQixDQUFDOztxQkFBQTtJQUNtQixvQkFBQztBQUFELENBQXJCLEFBQXNCLElBQUEiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGVzdENvbXBvbmVudEJ1aWxkZXIsXG4gIGRlc2NyaWJlLFxuICBleHBlY3QsXG4gIGluamVjdEFzeW5jLFxuICBpdCxcbiAgYmVmb3JlRWFjaFByb3ZpZGVyc1xufSBmcm9tICdhbmd1bGFyMi90ZXN0aW5nJztcbmltcG9ydCB7Q29tcG9uZW50LCBwcm92aWRlLCBEaXJlY3RpdmVSZXNvbHZlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbmltcG9ydCB7TG9jYXRpb24sIFJvdXRlciwgUm91dGVSZWdpc3RyeSwgUk9VVEVSX1BSSU1BUllfQ09NUE9ORU5UfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtTcHlMb2NhdGlvbn0gZnJvbSAnYW5ndWxhcjIvc3JjL21vY2svbG9jYXRpb25fbW9jayc7XG5pbXBvcnQge1Jvb3RSb3V0ZXJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9yb3V0ZXIvcm91dGVyJztcblxuaW1wb3J0IHtET019IGZyb20gJ2FuZ3VsYXIyL3NyYy9wbGF0Zm9ybS9kb20vZG9tX2FkYXB0ZXInO1xuaW1wb3J0IHtBcHBDb21wb25lbnR9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBtYWluKCkge1xuXG4gIGRlc2NyaWJlKCdBcHAgY29tcG9uZW50JywgKCkgPT4ge1xuXG4gICAgLy8gU3VwcG9ydCBmb3IgdGVzdGluZyBjb21wb25lbnQgdGhhdCB1c2VzIFJvdXRlclxuICAgIGJlZm9yZUVhY2hQcm92aWRlcnMoKCkgPT4gW1xuICAgICAgUm91dGVSZWdpc3RyeSxcbiAgICAgIERpcmVjdGl2ZVJlc29sdmVyLFxuICAgICAgcHJvdmlkZShMb2NhdGlvbiwge3VzZUNsYXNzOiBTcHlMb2NhdGlvbn0pLFxuICAgICAgcHJvdmlkZShST1VURVJfUFJJTUFSWV9DT01QT05FTlQsIHt1c2VWYWx1ZTogQXBwQ29tcG9uZW50fSksXG4gICAgICBwcm92aWRlKFJvdXRlciwge3VzZUNsYXNzOiBSb290Um91dGVyfSlcbiAgICBdKTtcblxuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBpbmplY3RBc3luYyhbVGVzdENvbXBvbmVudEJ1aWxkZXJdLCAodGNiOiBUZXN0Q29tcG9uZW50QnVpbGRlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGNiLmNyZWF0ZUFzeW5jKFRlc3RDb21wb25lbnQpXG4gICAgICAgICAgLnRoZW4ocm9vdFRDID0+IHtcbiAgICAgICAgICAgIHJvb3RUQy5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgICAgICBsZXQgYXBwRE9NRWwgPSByb290VEMuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBleHBlY3QoRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoYXBwRE9NRWwsICdzZC1hcHAgPiBzZC1uYXZiYXIgPiBuYXYgPiBhJylbMV0uaHJlZikudG9NYXRjaCgvaHR0cDpcXC9cXC9sb2NhbGhvc3Q6XFxkK1xcL2Fib3V0Lyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLWFwcD48L3NkLWFwcD4nLFxuICBkaXJlY3RpdmVzOiBbQXBwQ29tcG9uZW50XVxufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge31cbiJdfQ==
