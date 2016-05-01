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
var home_component_1 = require('./home.component');
var index_1 = require('../../shared/index');
function main() {
    testing_1.describe('Home component', function () {
        testing_1.it('should work', testing_1.injectAsync([testing_1.TestComponentBuilder], function (tcb) {
            return tcb.createAsync(TestComponent)
                .then(function (rootTC) {
                rootTC.detectChanges();
                var homeInstance = rootTC.debugElement.children[0].componentInstance;
                var homeDOMEl = rootTC.debugElement.children[0].nativeElement;
                var nameListLen = function () {
                    return homeInstance.nameListService.names.length;
                };
                testing_1.expect(homeInstance.nameListService).toEqual(jasmine.any(index_1.NameListService));
                testing_1.expect(nameListLen()).toEqual(4);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(homeDOMEl, 'li').length).toEqual(nameListLen());
                homeInstance.newName = 'Minko';
                homeInstance.addName();
                rootTC.detectChanges();
                testing_1.expect(nameListLen()).toEqual(5);
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(homeDOMEl, 'li').length).toEqual(nameListLen());
                testing_1.expect(dom_adapter_1.DOM.querySelectorAll(homeDOMEl, 'li')[4].textContent).toEqual('Minko');
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
            providers: [index_1.NameListService],
            selector: 'test-cmp',
            template: '<sd-home></sd-home>',
            directives: [home_component_1.HomeComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHdCQU1PLGtCQUFrQixDQUFDLENBQUE7QUFDMUIscUJBQXdCLGVBQWUsQ0FBQyxDQUFBO0FBQ3hDLDRCQUFrQix1Q0FBdUMsQ0FBQyxDQUFBO0FBQzFELCtCQUE0QixrQkFBa0IsQ0FBQyxDQUFBO0FBQy9DLHNCQUE4QixvQkFBb0IsQ0FBQyxDQUFBO0FBR25EO0lBQ0Usa0JBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtRQUN6QixZQUFFLENBQUMsYUFBYSxFQUNkLHFCQUFXLENBQUMsQ0FBQyw4QkFBb0IsQ0FBQyxFQUFFLFVBQUMsR0FBeUI7WUFDNUQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2lCQUNsQyxJQUFJLENBQUMsVUFBQSxNQUFNO2dCQUNWLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFFdkIsSUFBSSxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7Z0JBQ3JFLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztnQkFDOUQsSUFBSSxXQUFXLEdBQUc7b0JBQ2hCLE1BQU0sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ25ELENBQUMsQ0FBQztnQkFFRixnQkFBTSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBZSxDQUFDLENBQUMsQ0FBQztnQkFDM0UsZ0JBQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakMsZ0JBQU0sQ0FBQyxpQkFBRyxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFFNUUsWUFBWSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQy9CLFlBQVksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdkIsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUV2QixnQkFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxnQkFBTSxDQUFDLGlCQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUU1RSxnQkFBTSxDQUFDLGlCQUFHLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNoRixDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDUixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUE3QmUsWUFBSSxPQTZCbkIsQ0FBQTtBQVFEO0lBQUE7SUFBcUIsQ0FBQztJQU50QjtRQUFDLGdCQUFTLENBQUM7WUFDVCxTQUFTLEVBQUUsQ0FBQyx1QkFBZSxDQUFDO1lBQzVCLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsVUFBVSxFQUFFLENBQUMsOEJBQWEsQ0FBQztTQUM1QixDQUFDOztxQkFBQTtJQUNtQixvQkFBQztBQUFELENBQXJCLEFBQXNCLElBQUEiLCJmaWxlIjoiYXBwLytob21lL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRlc3RDb21wb25lbnRCdWlsZGVyLFxuICBkZXNjcmliZSxcbiAgZXhwZWN0LFxuICBpbmplY3RBc3luYyxcbiAgaXRcbn0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5pbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RPTX0gZnJvbSAnYW5ndWxhcjIvc3JjL3BsYXRmb3JtL2RvbS9kb21fYWRhcHRlcic7XG5pbXBvcnQge0hvbWVDb21wb25lbnR9IGZyb20gJy4vaG9tZS5jb21wb25lbnQnO1xuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oKSB7XG4gIGRlc2NyaWJlKCdIb21lIGNvbXBvbmVudCcsICgpID0+IHtcbiAgICBpdCgnc2hvdWxkIHdvcmsnLFxuICAgICAgaW5qZWN0QXN5bmMoW1Rlc3RDb21wb25lbnRCdWlsZGVyXSwgKHRjYjogVGVzdENvbXBvbmVudEJ1aWxkZXIpID0+IHtcbiAgICAgICAgcmV0dXJuIHRjYi5jcmVhdGVBc3luYyhUZXN0Q29tcG9uZW50KVxuICAgICAgICAgIC50aGVuKHJvb3RUQyA9PiB7XG4gICAgICAgICAgICByb290VEMuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICBsZXQgaG9tZUluc3RhbmNlID0gcm9vdFRDLmRlYnVnRWxlbWVudC5jaGlsZHJlblswXS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICAgICAgICAgIGxldCBob21lRE9NRWwgPSByb290VEMuZGVidWdFbGVtZW50LmNoaWxkcmVuWzBdLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgICAgICBsZXQgbmFtZUxpc3RMZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBob21lSW5zdGFuY2UubmFtZUxpc3RTZXJ2aWNlLm5hbWVzLmxlbmd0aDtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV4cGVjdChob21lSW5zdGFuY2UubmFtZUxpc3RTZXJ2aWNlKS50b0VxdWFsKGphc21pbmUuYW55KE5hbWVMaXN0U2VydmljZSkpO1xuICAgICAgICAgICAgZXhwZWN0KG5hbWVMaXN0TGVuKCkpLnRvRXF1YWwoNCk7XG4gICAgICAgICAgICBleHBlY3QoRE9NLnF1ZXJ5U2VsZWN0b3JBbGwoaG9tZURPTUVsLCAnbGknKS5sZW5ndGgpLnRvRXF1YWwobmFtZUxpc3RMZW4oKSk7XG5cbiAgICAgICAgICAgIGhvbWVJbnN0YW5jZS5uZXdOYW1lID0gJ01pbmtvJztcbiAgICAgICAgICAgIGhvbWVJbnN0YW5jZS5hZGROYW1lKCk7XG4gICAgICAgICAgICByb290VEMuZGV0ZWN0Q2hhbmdlcygpO1xuXG4gICAgICAgICAgICBleHBlY3QobmFtZUxpc3RMZW4oKSkudG9FcXVhbCg1KTtcbiAgICAgICAgICAgIGV4cGVjdChET00ucXVlcnlTZWxlY3RvckFsbChob21lRE9NRWwsICdsaScpLmxlbmd0aCkudG9FcXVhbChuYW1lTGlzdExlbigpKTtcblxuICAgICAgICAgICAgZXhwZWN0KERPTS5xdWVyeVNlbGVjdG9yQWxsKGhvbWVET01FbCwgJ2xpJylbNF0udGV4dENvbnRlbnQpLnRvRXF1YWwoJ01pbmtvJyk7XG4gICAgICAgICAgfSk7XG4gICAgICB9KSk7XG4gIH0pO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgcHJvdmlkZXJzOiBbTmFtZUxpc3RTZXJ2aWNlXSxcbiAgc2VsZWN0b3I6ICd0ZXN0LWNtcCcsXG4gIHRlbXBsYXRlOiAnPHNkLWhvbWU+PC9zZC1ob21lPicsXG4gIGRpcmVjdGl2ZXM6IFtIb21lQ29tcG9uZW50XVxufSlcbmNsYXNzIFRlc3RDb21wb25lbnQge31cbiJdfQ==
