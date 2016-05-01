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
var alucin_component_1 = require('./alucin.component');
function main() {
    testing_1.describe('Alucin component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(TestComponent)
                .then(function (rootTC) {
                var alucinDOMEl = rootTC.debugElement.children[0].nativeElement;
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(alucinDOMEl, 'h2')[0].textContent).toEqual('Alucin');
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
            directives: [alucin_component_1.AlucinComponent],
            template: '<sd-alucin></sd-alucin>'
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8rYWx1Y2luL2NvbXBvbmVudHMvYWx1Y2luLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSx3QkFNTyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzFCLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4Qyw0QkFBa0IsdUNBQXVDLENBQUMsQ0FBQTtBQUMxRCxpQ0FBOEIsb0JBQW9CLENBQUMsQ0FBQTtBQUVuRDtJQUNFLGtCQUFRLENBQUMsa0JBQWtCLEVBQUU7UUFDM0IsWUFBRSxDQUFDLGFBQWEsRUFDZCxxQkFBVyxDQUFDLENBQUMsOEJBQW9CLENBQUMsRUFBRSxVQUFDLEdBQXlCO1lBQzVELE1BQU0sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQztpQkFDbEMsSUFBSSxDQUFDLFVBQUMsTUFBVztnQkFDaEIsSUFBSSxXQUFXLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDO2dCQUVoRSxnQkFBTSxDQUFDLGlCQUFHLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNuRixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFaZSxZQUFJLE9BWW5CLENBQUE7QUFPRDtJQUFBO0lBQXFCLENBQUM7SUFMdEI7UUFBQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsVUFBVSxFQUFFLENBQUMsa0NBQWUsQ0FBQztZQUM3QixRQUFRLEVBQUUseUJBQXlCO1NBQ3BDLENBQUM7O3FCQUFBO0lBQ21CLG9CQUFDO0FBQUQsQ0FBckIsQUFBc0IsSUFBQSIsImZpbGUiOiJhcHAvK2FsdWNpbi9jb21wb25lbnRzL2FsdWNpbi5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICBkZXNjcmliZSxcbiAgZXhwZWN0LFxuICBpbmplY3RBc3luYyxcbiAgaXRcbn0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0FsdWNpbkNvbXBvbmVudH0gZnJvbSAnLi9hbHVjaW4uY29tcG9uZW50JztcblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdBbHVjaW4gY29tcG9uZW50JywgKCkgPT4ge1xuICAgIGl0KCdzaG91bGQgd29yaycsXG4gICAgICBpbmplY3RBc3luYyhbVGVzdENvbXBvbmVudEJ1aWxkZXJdLCAodGNiOiBUZXN0Q29tcG9uZW50QnVpbGRlcikgPT4ge1xuICAgICAgICByZXR1cm4gdGNiLmNyZWF0ZUFzeW5jKFRlc3RDb21wb25lbnQpXG4gICAgICAgICAgLnRoZW4oKHJvb3RUQzogYW55KSA9PiB7XG4gICAgICAgICAgICBsZXQgYWx1Y2luRE9NRWwgPSByb290VEMuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAgICAgICAgIGV4cGVjdChET00ucXVlcnlTZWxlY3RvckFsbChhbHVjaW5ET01FbCwgJ2gyJylbMF0udGV4dENvbnRlbnQpLnRvRXF1YWwoJ0FsdWNpbicpO1xuICAgICAgICAgIH0pO1xuICAgICAgfSkpO1xuICB9KTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGVzdC1jbXAnLFxuICBkaXJlY3RpdmVzOiBbQWx1Y2luQ29tcG9uZW50XSxcbiAgdGVtcGxhdGU6ICc8c2QtYWx1Y2luPjwvc2QtYWx1Y2luPidcbn0pXG5jbGFzcyBUZXN0Q29tcG9uZW50IHt9XG4iXX0=
