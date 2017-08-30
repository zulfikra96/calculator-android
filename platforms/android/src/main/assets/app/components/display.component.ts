import { Component, } from '@angular/core'
import { ButtonComponent  } from './button.component'


@Component({
    selector:"display",
    templateUrl:'./components/display.component.html',
    styleUrls:['./components/display.css'],
})

export class DisplayComponent {

    public output:         string = "0" 
    public displayed:      string = ""
    public value:          string = ""
    public first_value:    number
    public second_value:   number
    public operations:     string
    public operations_bool: boolean = false
    public equal_value:     number = 0
    public equal_number:    number


    public buttonTap(val){
        if(Number.isInteger(val)){
            this.value += val.toString()
            this.displayed += val.toString()
            this.displayedNumber(this.displayed)
            this.operations_bool = false
        }else{
            switch (val) {
                case "add":
                    this.add()
                    break;
                case "reduce":
                    this.reduce()
                    break;
                case "clear":
                    this.clear()
                    break;
                case "equal":
                    this.equal()
                    break;
                case "times":
                    this.times()
                    break;
            
                default:
                    break;
            }
        }
        
    }

    public add(){
        this.first_value = parseInt(this.value)
        this.operations = "add"
        this.operations_bool = true
        this.displayed = ""
    }

    public reduce(){
        this.first_value = parseInt(this.value)
        this.operations = "reduce"
        this.operations_bool = true
        this.displayed = ""
    }

    public times(){
        this.first_value = parseInt(this.value)
        this.operations = "times"
        this.operations_bool = true
        this.displayed = ""
    }

    public clear(){
        this.displayed      = ""
        this.first_value    = 0
        this.second_value   = 0
        this.value = ""
        this.displayedNumber("0")
    }

    public equal(){
        switch (this.operations) {
            case "add":
                this.second_value = parseInt(this.output)
                this.equal_number = this.first_value + this.second_value
                this.displayedNumber(this.equal_number.toString())
                this.operations_bool = true
                this.displayed = ""
                console.log(this.first_value + " " + this.second_value)
                break;
            case "reduce":
                this.second_value = parseInt(this.output)
                this.equal_number = this.first_value / this.second_value
                this.displayedNumber(this.equal_number.toString())
                this.operations_bool = true
                this.displayed = ""
                console.log(this.first_value + " " + this.second_value)
                break;
            case "times":
                this.second_value = parseInt(this.output)
                this.equal_number = this.first_value * this.second_value
                this.displayedNumber(this.equal_number.toString())
                this.operations_bool = true
                this.displayed = ""
                console.log(this.first_value + " " + this.second_value)
                break;
        
            default:
                break;
        }
    }

    public displayedNumber(val:string){
        this.output = val
    }
}