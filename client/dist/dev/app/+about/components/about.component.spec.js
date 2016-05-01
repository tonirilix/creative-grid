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
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var about_component_1 = require('./about.component');
function main() {
    testing_1.describe('About component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(TestComponent)
                .then(function (rootTC) {
                var aboutDOMEl = rootTC.debugElement.children[0].nativeElement;
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(aboutDOMEl, 'h2')[0].textContent).toEqual('Features');
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
            directives: [about_component_1.AboutComponent],
            template: '<sd-about></sd-about>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWJvdXQvY29tcG9uZW50cy9hYm91dC5jb21wb25lbnQuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsd0JBTU8sa0JBQWtCLENBQUMsQ0FBQTtBQUMxQixxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsNEJBQWtCLHVDQUF1QyxDQUFDLENBQUE7QUFDMUQsZ0NBQTZCLG1CQUFtQixDQUFDLENBQUE7QUFFakQ7SUFDRSxrQkFBUSxDQUFDLGlCQUFpQixFQUFFO1FBQzFCLFlBQUUsQ0FBQyxhQUFhLEVBQ2QscUJBQVcsQ0FBQyxDQUFDLDhCQUFvQixDQUFDLEVBQUUsVUFBQyxHQUF5QjtZQUM1RCxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7aUJBQ2xDLElBQUksQ0FBQyxVQUFDLE1BQVc7Z0JBQ2hCLElBQUksVUFBVSxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFFL0QsZ0JBQU0sQ0FBQyxpQkFBRyxDQUFDLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDcEYsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1IsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBWmUsWUFBSSxPQVluQixDQUFBO0FBT0Q7SUFBQTtJQUFxQixDQUFDO0lBTHRCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFVBQVUsRUFBRSxDQUFDLGdDQUFjLENBQUM7WUFDNUIsUUFBUSxFQUFFLHVCQUF1QjtTQUNsQyxDQUFDOztxQkFBQTtJQUNtQixvQkFBQztBQUFELENBQXJCLEFBQXNCLElBQUEiLCJmaWxlIjoiYXBwLythYm91dC9jb21wb25lbnRzL2Fib3V0LmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgVGVzdENvbXBvbmVudEJ1aWxkZXIsXG4gIGRlc2NyaWJlLFxuICBleHBlY3QsXG4gIGluamVjdEFzeW5jLFxuICBpdFxufSBmcm9tICdhbmd1bGFyMi90ZXN0aW5nJztcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7RE9NfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vZG9tL2RvbV9hZGFwdGVyJztcbmltcG9ydCB7QWJvdXRDb21wb25lbnR9IGZyb20gJy4vYWJvdXQuY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdBYm91dCBjb21wb25lbnQnLCAoKSA9PiB7XG4gICAgaXQoJ3Nob3VsZCB3b3JrJyxcbiAgICAgIGluamVjdEFzeW5jKFtUZXN0Q29tcG9uZW50QnVpbGRlcl0sICh0Y2I6IFRlc3RDb21wb25lbnRCdWlsZGVyKSA9PiB7XG4gICAgICAgIHJldHVybiB0Y2IuY3JlYXRlQXN5bmMoVGVzdENvbXBvbmVudClcbiAgICAgICAgICAudGhlbigocm9vdFRDOiBhbnkpID0+IHtcbiAgICAgICAgICAgIGxldCBhYm91dERPTUVsID0gcm9vdFRDLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5uYXRpdmVFbGVtZW50O1xuXG4gICAgICAgICAgICBleHBlY3QoRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoYWJvdXRET01FbCwgJ2gyJylbMF0udGV4dENvbnRlbnQpLnRvRXF1YWwoJ0ZlYXR1cmVzJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIGRpcmVjdGl2ZXM6IFtBYm91dENvbXBvbmVudF0sXG4gIHRlbXBsYXRlOiAnPHNkLWFib3V0Pjwvc2QtYWJvdXQ+J1xufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge31cbiJdfQ==
