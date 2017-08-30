"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ButtonComponent = (function () {
    function ButtonComponent() {
        this.childEvent = new core_1.EventEmitter();
    }
    ButtonComponent.prototype.onTapNumb = function (numb) {
        this.childEvent.emit(numb);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ButtonComponent.prototype, "childEvent", void 0);
    ButtonComponent = __decorate([
        core_1.Component({
            selector: "ButtonComponent",
            templateUrl: './components/button.component.html',
            styleUrls: ['./components/button.css']
        }),
        __metadata("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBK0Q7QUFTL0Q7SUFHSTtRQURTLGVBQVUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQTtJQUd4QyxDQUFDO0lBQ0QsbUNBQVMsR0FBVCxVQUFVLElBQUk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5QixDQUFDO0lBTlE7UUFBVCxhQUFNLEVBQUU7O3VEQUFnQztJQUYvQixlQUFlO1FBTjNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUMsaUJBQWlCO1lBQzFCLFdBQVcsRUFBQyxvQ0FBb0M7WUFDaEQsU0FBUyxFQUFDLENBQUMseUJBQXlCLENBQUM7U0FDeEMsQ0FBQzs7T0FFVyxlQUFlLENBUzNCO0lBQUQsc0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOlwiQnV0dG9uQ29tcG9uZW50XCIsXG4gICAgdGVtcGxhdGVVcmw6Jy4vY29tcG9uZW50cy9idXR0b24uY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbJy4vY29tcG9uZW50cy9idXR0b24uY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBCdXR0b25Db21wb25lbnQge1xuXG4gICBAT3V0cHV0KCkgY2hpbGRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBvblRhcE51bWIobnVtYil7XG4gICAgICAgIHRoaXMuY2hpbGRFdmVudC5lbWl0KG51bWIpXG4gICAgfVxufSJdfQ==