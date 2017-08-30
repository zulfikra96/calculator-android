import { Component, Output, EventEmitter } from '@angular/core'


@Component({
    selector:"ButtonComponent",
    templateUrl:'./components/button.component.html',
    styleUrls:['./components/button.css']
})

export class ButtonComponent {

   @Output() childEvent = new EventEmitter()
    constructor(){
        
    }
    onTapNumb(numb){
        this.childEvent.emit(numb)
    }
}