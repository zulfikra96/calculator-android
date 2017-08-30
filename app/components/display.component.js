"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DisplayComponent = (function () {
    function DisplayComponent() {
        this.output = "0";
        this.displayed = "";
        this.value = "";
        this.operations_bool = false;
        this.equal_value = 0;
    }
    DisplayComponent.prototype.buttonTap = function (val) {
        if (Number.isInteger(val)) {
            this.value += val.toString();
            this.displayed += val.toString();
            this.displayedNumber(this.displayed);
            this.operations_bool = false;
        }
        else {
            switch (val) {
                case "add":
                    this.add();
                    break;
                case "reduce":
                    this.reduce();
                    break;
                case "clear":
                    this.clear();
                    break;
                case "equal":
                    this.equal();
                    break;
                case "times":
                    this.times();
                    break;
                default:
                    break;
            }
        }
    };
    DisplayComponent.prototype.add = function () {
        this.first_value = parseInt(this.value);
        this.operations = "add";
        this.operations_bool = true;
        this.displayed = "";
    };
    DisplayComponent.prototype.reduce = function () {
        this.first_value = parseInt(this.value);
        this.operations = "reduce";
        this.operations_bool = true;
        this.displayed = "";
    };
    DisplayComponent.prototype.times = function () {
        this.first_value = parseInt(this.value);
        this.operations = "times";
        this.operations_bool = true;
        this.displayed = "";
    };
    DisplayComponent.prototype.clear = function () {
        this.displayed = "";
        this.first_value = 0;
        this.second_value = 0;
        this.value = "";
        this.displayedNumber("0");
    };
    DisplayComponent.prototype.equal = function () {
        switch (this.operations) {
            case "add":
                this.second_value = parseInt(this.output);
                this.equal_number = this.first_value + this.second_value;
                this.displayedNumber(this.equal_number.toString());
                this.operations_bool = true;
                this.displayed = "";
                console.log(this.first_value + " " + this.second_value);
                break;
            case "reduce":
                this.second_value = parseInt(this.output);
                this.equal_number = this.first_value / this.second_value;
                this.displayedNumber(this.equal_number.toString());
                this.operations_bool = true;
                this.displayed = "";
                console.log(this.first_value + " " + this.second_value);
                break;
            case "times":
                this.second_value = parseInt(this.output);
                this.equal_number = this.first_value * this.second_value;
                this.displayedNumber(this.equal_number.toString());
                this.operations_bool = true;
                this.displayed = "";
                console.log(this.first_value + " " + this.second_value);
                break;
            default:
                break;
        }
    };
    DisplayComponent.prototype.displayedNumber = function (val) {
        this.output = val;
    };
    DisplayComponent = __decorate([
        core_1.Component({
            selector: "display",
            templateUrl: './components/display.component.html',
            styleUrls: ['./components/display.css'],
        })
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaXNwbGF5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQVUxQztJQU5BO1FBUVcsV0FBTSxHQUFtQixHQUFHLENBQUE7UUFDNUIsY0FBUyxHQUFnQixFQUFFLENBQUE7UUFDM0IsVUFBSyxHQUFvQixFQUFFLENBQUE7UUFJM0Isb0JBQWUsR0FBWSxLQUFLLENBQUE7UUFDaEMsZ0JBQVcsR0FBZSxDQUFDLENBQUE7SUFtR3RDLENBQUM7SUEvRlUsb0NBQVMsR0FBaEIsVUFBaUIsR0FBRztRQUNoQixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBQztZQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUM1QixJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUNwQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQTtRQUNoQyxDQUFDO1FBQUEsSUFBSSxDQUFBLENBQUM7WUFDRixNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNWLEtBQUssS0FBSztvQkFDTixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUE7b0JBQ1YsS0FBSyxDQUFDO2dCQUNWLEtBQUssUUFBUTtvQkFDVCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7b0JBQ2IsS0FBSyxDQUFDO2dCQUNWLEtBQUssT0FBTztvQkFDUixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQ1osS0FBSyxDQUFDO2dCQUNWLEtBQUssT0FBTztvQkFDUixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7b0JBQ1osS0FBSyxDQUFDO2dCQUNW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QUFNLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7Z0JBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO2dCQUNsRCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtnQkFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7Z0JBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO2dCQUN2RCxLQUFLLENBQUM7WUFFVjtnQkFDSSxLQUFLLENBQUM7UUFDZCxDQUFDO0lBQ0wsQ0FBQztJQUVNLDBDQUFlLEdBQXRCLFVBQXVCLEdBQVU7UUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDckIsQ0FBQztJQTNHUSxnQkFBZ0I7UUFONUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBQyxTQUFTO1lBQ2xCLFdBQVcsRUFBQyxxQ0FBcUM7WUFDakQsU0FBUyxFQUFDLENBQUMsMEJBQTBCLENBQUM7U0FDekMsQ0FBQztPQUVXLGdCQUFnQixDQTRHNUI7SUFBRCx1QkFBQztDQUFBLEFBNUdELElBNEdDO0FBNUdZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0IHsgQnV0dG9uQ29tcG9uZW50ICB9IGZyb20gJy4vYnV0dG9uLmNvbXBvbmVudCdcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcImRpc3BsYXlcIixcbiAgICB0ZW1wbGF0ZVVybDonLi9jb21wb25lbnRzL2Rpc3BsYXkuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczpbJy4vY29tcG9uZW50cy9kaXNwbGF5LmNzcyddLFxufSlcblxuZXhwb3J0IGNsYXNzIERpc3BsYXlDb21wb25lbnQge1xuXG4gICAgcHVibGljIG91dHB1dDogICAgICAgICBzdHJpbmcgPSBcIjBcIiBcbiAgICBwdWJsaWMgZGlzcGxheWVkOiAgICAgIHN0cmluZyA9IFwiXCJcbiAgICBwdWJsaWMgdmFsdWU6ICAgICAgICAgIHN0cmluZyA9IFwiXCJcbiAgICBwdWJsaWMgZmlyc3RfdmFsdWU6ICAgIG51bWJlclxuICAgIHB1YmxpYyBzZWNvbmRfdmFsdWU6ICAgbnVtYmVyXG4gICAgcHVibGljIG9wZXJhdGlvbnM6ICAgICBzdHJpbmdcbiAgICBwdWJsaWMgb3BlcmF0aW9uc19ib29sOiBib29sZWFuID0gZmFsc2VcbiAgICBwdWJsaWMgZXF1YWxfdmFsdWU6ICAgICBudW1iZXIgPSAwXG4gICAgcHVibGljIGVxdWFsX251bWJlcjogICAgbnVtYmVyXG5cblxuICAgIHB1YmxpYyBidXR0b25UYXAodmFsKXtcbiAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcih2YWwpKXtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gdmFsLnRvU3RyaW5nKClcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkICs9IHZhbC50b1N0cmluZygpXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZE51bWJlcih0aGlzLmRpc3BsYXllZClcbiAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc19ib29sID0gZmFsc2VcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzd2l0Y2ggKHZhbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwicmVkdWNlXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiZXF1YWxcIjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcXVhbCgpXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCJ0aW1lc1wiOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVzKClcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG5cbiAgICBwdWJsaWMgYWRkKCl7XG4gICAgICAgIHRoaXMuZmlyc3RfdmFsdWUgPSBwYXJzZUludCh0aGlzLnZhbHVlKVxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBcImFkZFwiXG4gICAgICAgIHRoaXMub3BlcmF0aW9uc19ib29sID0gdHJ1ZVxuICAgICAgICB0aGlzLmRpc3BsYXllZCA9IFwiXCJcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVkdWNlKCl7XG4gICAgICAgIHRoaXMuZmlyc3RfdmFsdWUgPSBwYXJzZUludCh0aGlzLnZhbHVlKVxuICAgICAgICB0aGlzLm9wZXJhdGlvbnMgPSBcInJlZHVjZVwiXG4gICAgICAgIHRoaXMub3BlcmF0aW9uc19ib29sID0gdHJ1ZVxuICAgICAgICB0aGlzLmRpc3BsYXllZCA9IFwiXCJcbiAgICB9XG5cbiAgICBwdWJsaWMgdGltZXMoKXtcbiAgICAgICAgdGhpcy5maXJzdF92YWx1ZSA9IHBhcnNlSW50KHRoaXMudmFsdWUpXG4gICAgICAgIHRoaXMub3BlcmF0aW9ucyA9IFwidGltZXNcIlxuICAgICAgICB0aGlzLm9wZXJhdGlvbnNfYm9vbCA9IHRydWVcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWQgPSBcIlwiXG4gICAgfVxuXG4gICAgcHVibGljIGNsZWFyKCl7XG4gICAgICAgIHRoaXMuZGlzcGxheWVkICAgICAgPSBcIlwiXG4gICAgICAgIHRoaXMuZmlyc3RfdmFsdWUgICAgPSAwXG4gICAgICAgIHRoaXMuc2Vjb25kX3ZhbHVlICAgPSAwXG4gICAgICAgIHRoaXMudmFsdWUgPSBcIlwiXG4gICAgICAgIHRoaXMuZGlzcGxheWVkTnVtYmVyKFwiMFwiKVxuICAgIH1cblxuICAgIHB1YmxpYyBlcXVhbCgpe1xuICAgICAgICBzd2l0Y2ggKHRoaXMub3BlcmF0aW9ucykge1xuICAgICAgICAgICAgY2FzZSBcImFkZFwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kX3ZhbHVlID0gcGFyc2VJbnQodGhpcy5vdXRwdXQpXG4gICAgICAgICAgICAgICAgdGhpcy5lcXVhbF9udW1iZXIgPSB0aGlzLmZpcnN0X3ZhbHVlICsgdGhpcy5zZWNvbmRfdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZE51bWJlcih0aGlzLmVxdWFsX251bWJlci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc19ib29sID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkID0gXCJcIlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RfdmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kX3ZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlZHVjZVwiOlxuICAgICAgICAgICAgICAgIHRoaXMuc2Vjb25kX3ZhbHVlID0gcGFyc2VJbnQodGhpcy5vdXRwdXQpXG4gICAgICAgICAgICAgICAgdGhpcy5lcXVhbF9udW1iZXIgPSB0aGlzLmZpcnN0X3ZhbHVlIC8gdGhpcy5zZWNvbmRfdmFsdWVcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZE51bWJlcih0aGlzLmVxdWFsX251bWJlci50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgIHRoaXMub3BlcmF0aW9uc19ib29sID0gdHJ1ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkID0gXCJcIlxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RfdmFsdWUgKyBcIiBcIiArIHRoaXMuc2Vjb25kX3ZhbHVlKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRpbWVzXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5zZWNvbmRfdmFsdWUgPSBwYXJzZUludCh0aGlzLm91dHB1dClcbiAgICAgICAgICAgICAgICB0aGlzLmVxdWFsX251bWJlciA9IHRoaXMuZmlyc3RfdmFsdWUgKiB0aGlzLnNlY29uZF92YWx1ZVxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkTnVtYmVyKHRoaXMuZXF1YWxfbnVtYmVyLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgdGhpcy5vcGVyYXRpb25zX2Jvb2wgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWQgPSBcIlwiXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5maXJzdF92YWx1ZSArIFwiIFwiICsgdGhpcy5zZWNvbmRfdmFsdWUpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIFxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5ZWROdW1iZXIodmFsOnN0cmluZyl7XG4gICAgICAgIHRoaXMub3V0cHV0ID0gdmFsXG4gICAgfVxufSJdfQ==