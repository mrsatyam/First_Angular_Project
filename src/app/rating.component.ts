import { Component } from "@angular/core";
import { ThrowStmt } from '@angular/compiler';

@Component({
    selector: 'rating',
    templateUrl: './rating.component.html'
})

export class RatingComponent{
    rating=0;
    onClick(ratingValue){
        this.rating = ratingValue;
    }
}