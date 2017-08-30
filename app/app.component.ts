import { Component } from "@angular/core";
import { Page } from "ui/page"

@Component({
  selector: "my-app",
  template: '<page-router-outlet></page-router-outlet>'
})


export class AppComponent {
  // Your TypeScript logic goes here

  constructor(page:Page){
    page.actionBarHidden = true
  }
}
    
