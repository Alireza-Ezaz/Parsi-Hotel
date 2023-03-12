import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();

    constructor(private router: Router,
                private translate: TranslateService ) {}

    ngOnInit() {

    }
    getPath(){
      return this.router.url;
    }

    getLanguage() {
        return this.translate.currentLang;
    }
}
