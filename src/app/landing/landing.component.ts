import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss', '../../../node_modules/@fortawesome/fontawesome-free/css/all.css']
})

export class LandingComponent implements OnInit {
    focus: any;
    focus1: any;

    constructor(private translate: TranslateService) {
    }

    ngOnInit() {
    }

    getLanguage() {
        return this.translate.currentLang;
    }

}
