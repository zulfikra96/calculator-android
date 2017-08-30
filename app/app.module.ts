import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { Routes,ComponentApp } from "./app.routing"


import { AppComponent } from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
  ...ComponentApp
  ],
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(Routes)
    ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
