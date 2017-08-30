"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var AppComponent = (function () {
    // Your TypeScript logic goes here
    function AppComponent(page) {
        page.actionBarHidden = true;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: '<page-router-outlet></page-router-outlet>'
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsZ0NBQThCO0FBUTlCO0lBQ0Usa0NBQWtDO0lBRWxDLHNCQUFZLElBQVM7UUFDbkIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUE7SUFDN0IsQ0FBQztJQUxVLFlBQVk7UUFOeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSwyQ0FBMkM7U0FDdEQsQ0FBQzt5Q0FNaUIsV0FBSTtPQUhWLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6ICc8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0Pidcbn0pXG5cblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIC8vIFlvdXIgVHlwZVNjcmlwdCBsb2dpYyBnb2VzIGhlcmVcblxuICBjb25zdHJ1Y3RvcihwYWdlOlBhZ2Upe1xuICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZVxuICB9XG59XG4gICAgXG4iXX0=