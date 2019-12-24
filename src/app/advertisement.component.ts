import { Component } from "@angular/core";
import { AdvertisementService } from './advertisement.service';

@Component({
    selector:'ad',
    templateUrl: './advertisement.component.html',
    providers:[AdvertisementService]

})

export class AdvertisementComponent{
    ads;
    constructor(ad:AdvertisementService){
        this.ads = ad.getAds();
    }
}