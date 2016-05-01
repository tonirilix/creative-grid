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
var common_1 = require('angular2/common');
var index_1 = require('../../shared/index');
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
    }
    HomeComponent.prototype.addName = function () {
        this.nameListService.add(this.newName);
        this.newName = '';
        return false;
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'sd-home',
            template: "\n    <p>\n      Howdy! Here's a list of awesome computer scientists.\n      Do you know any others? Add to the list yourself.\n    </p>\n\n    <form (submit)=\"addName()\">\n      <input [(ngModel)]=\"newName\" placeholder=\"Awesome Computer Scientist\">\n      <button type=\"submit\">Add</button>\n    </form>\n\n\n    <ul>\n      <li *ngFor=\"#name of nameListService.get()\">{{name}}</li>\n    </ul>\n  ",
            styles: ["\n    :host {\n      display: block;\n      padding: 0 16px;\n    }\n\n    input {\n      width: 250px;\n    }\n\n    ul {\n      list-style-type: none;\n      padding: 0 0 0 8px;\n    }\n  "],
            directives: [common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [index_1.NameListService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsdUJBQStDLGlCQUFpQixDQUFDLENBQUE7QUFFakUsc0JBQThCLG9CQUFvQixDQUFDLENBQUE7QUFxQ25EO0lBRUUsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7SUFNdkQsK0JBQU8sR0FBUDtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQS9DSDtRQUFDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsU0FBUztZQUNuQixRQUFRLEVBQUUsMFpBZVQ7WUFDRCxNQUFNLEVBQUUsQ0FBQyxnTUFjUixDQUFDO1lBQ0YsVUFBVSxFQUFFLENBQUMsd0JBQWUsRUFBRSx3QkFBZSxDQUFDO1NBQy9DLENBQUM7O3FCQUFBO0lBY0Ysb0JBQUM7QUFBRCxDQWJBLEFBYUMsSUFBQTtBQWJZLHFCQUFhLGdCQWF6QixDQUFBIiwiZmlsZSI6ImFwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtDT1JFX0RJUkVDVElWRVMsIEZPUk1fRElSRUNUSVZFU30gZnJvbSAnYW5ndWxhcjIvY29tbW9uJztcblxuaW1wb3J0IHtOYW1lTGlzdFNlcnZpY2V9IGZyb20gJy4uLy4uL3NoYXJlZC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxuICB0ZW1wbGF0ZVVybDogJ2FwcC8raG9tZS9jb21wb25lbnRzL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnYXBwLytob21lL2NvbXBvbmVudHMvaG9tZS5jb21wb25lbnQuY3NzJ10sXG4gIGRpcmVjdGl2ZXM6IFtGT1JNX0RJUkVDVElWRVMsIENPUkVfRElSRUNUSVZFU11cbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIG5ld05hbWU6IHN0cmluZztcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlKSB7fVxuXG4gIC8qXG4gICAqIEBwYXJhbSBuZXduYW1lICBhbnkgdGV4dCBhcyBpbnB1dC5cbiAgICogQHJldHVybnMgcmV0dXJuIGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxuICAgKi9cbiAgYWRkTmFtZSgpOiBib29sZWFuIHtcbiAgICB0aGlzLm5hbWVMaXN0U2VydmljZS5hZGQodGhpcy5uZXdOYW1lKTtcbiAgICB0aGlzLm5ld05hbWUgPSAnJztcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==
