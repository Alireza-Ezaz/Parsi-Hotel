import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Food} from '../objects/Food';

@Component({
    selector: 'app-cafe',
    templateUrl: './cafe.component.html',
    styleUrls: ['./cafe.component.scss']
})
export class CafeComponent implements OnInit {
    persianFood = [new Food('کوبیده لقمه', '۱۹۵'),
        new Food('جوجه بدون استخوان', '۱۸۰'),
        new Food('جوجه با استخوان ', '۲۲۰'),
        new Food('وزیری', '۲۲۰'),
        new Food('کباب دیگی', '۱۹۵'),
        new Food('زرشک پلو با مرغ', '۱۶۵'),
        new Food('قیمه(روزهای زوج)', '۱۴۵'),
        new Food('قرمه‌سبزی(روزهای فرد)', '۱۴۵')];

    foodOfTheDay = [new Food('جوجه‌ترش', '۲۰۰', 'شنبه'),
        new Food('قلیه‌ماهی', '۲۰۰', 'یک‌شنبه'),
        new Food('قیمه‌نثار', '۲۴۰', 'دوشنبه'),
        new Food('واویشگا', '۱۶۰', 'سه‌شنبه'),
        new Food('مرصع‌پلو', '۲۴۰', 'چهارشنبه'),
        new Food('فسنجان', '۲۰۰', 'پنج‌شنبه'),
        new Food('کلم‌پلو شیرازی', '۱۸۰', 'جمعه'),
    ];
    breakfast = [new Food('صبحانه انگلیسی', '۱۸۰'),
        new Food('صبحانه ایرانی', '۱۶۵'),
        new Food('نیمرو + چای ', '۶۰'),
        new Food('املت + چای ', '۷۰'),
        new Food('سوسیس تخم‌مرغ + چای', '۸۰'),
    ];

    snacks = [new Food('سیب‌زمینی با سس قارچ و پنیر', '۱۵۰'),
        new Food('چیپس و پنیر', '۱۳۰'),
        new Food('نان سیر ', '۱۰۰'),
        new Food('میرزاقاسمی ', '۱۱۰'),
        new Food('کشک بادمجون', '۱۰۰'),
    ];

    mainCourse = [new Food('پاستا چیکن‌آلفردو', '۱۸۰'),
        new Food('پاستا پستو', '۱۸۰'),
        new Food('مک‌اندچیز ', '۱۹۰'),
        new Food('پنینی مرغ و پستو', '۱۶۰'),
        new Food('پنینی ژامبون', '۱۵۰'),
        new Food('بشقاب ویژه(دونفره)', '۳۵۰'),
        new Food('اسپاگتی', '۱۵۰'),
        new Food('چیزبرگر', '۱۸۰'),
        new Food('لازانیا', '۱۷۰')
    ];

    vegetarianFood = [new Food('لازانیا گیاهی', '۱۶۰'),
        new Food('هات‌داگ گیاهی', '۱۸۰'),
        new Food('پنینی ژامبون گیاهی', '۱۸۰'),
    ];

    salads = [new Food('سالاد سزار', '۱۷۰'),
        new Food('سالاد سرآشپز', '۱۷۰'),
    ];

    milkShakes = [new Food('شیک کلاسیک', '۷۵'),
        new Food('شیک موز شکلات', '۸۰'),
        new Food('شیک قهوه ', '۸۵'),
        new Food('شیک پلاس', '۸۰'),
        new Food('اسکوپ بستنی', '۱۵'),
    ];

    tea = [new Food('چای سیاه', '۴۲'),
        new Food('چای مخصوص', '۵۲'),
        new Food('دمنوش ترش آرام (گل‌گاوزبان + سنبل‌الطیب + لیمو) ', '۶۰'),
        new Food('چای سبز ادلانگ (چای سبز + مرکبات)', '۶۰'),
    ];

    coffee = [new Food('اسپرسو دبل', '۵۵'),
        new Food('کاپوچینو', '۶۰'),
        new Food('آمریکانو ', '۵۸'),
        new Food('لته', '۶۵'),
        new Food('موکا', '۷۰'),
        new Food('کارامل ماکیاتو', '۷۰'),
        new Food('فرانسه', '۷۲'),
        new Food('آفوگاتو', '۷۵'),
        new Food('قهوه ترک', '۶۳'),
    ];

    coldDrinks = [new Food('لیموناد', '۶۸'),
        new Food('موهیتو', '۷۵'),
        new Food('آیس تی لیمو ', '۶۵'),
        new Food('خیارسکنجبین', '۵۵'),
        new Food('سرویس آبجو', '۱۰۰')
    ];

    smoothies = [new Food('اسموتی شیرین (موز + انبه + توت‌فرنگی + آلوئورا)', '۸۰'),
        new Food('اسموتی ملس (کیوی + نعنا + لیمو + وانیل)', '۸۰'),
        new Food('اسموتی ترش (انار + زرشک + لیمو + آلبالو) ', '۸۰')
    ];

    sharbats = [new Food('ونوشه سرخ (گل‌گاوزبان + به‌لیمو + ختمی + بهار مرکبات)', '۷۰'),
        new Food('کرشمه (نعنا فلفلی + ختمی + زرشک + گل نخود + لیمو)', '۷۰'),
        new Food('تبریز (زعفران + پسته + هل + بهارنارنج) ', '۷۰'),
        new Food('مهربانو (تخم‌گشنیز + کارامل + گل‌نخود +زیره سبز) ', '۷۰')
    ];

    cakes = [new Food('دبل چاکلت', '۸۵'),
        new Food('چیزکیک کارامل', '۸۰'),
        new Food('چیزکیک شاتوت ', '۸۰'),
        new Food('کیک روز', '۸۰'),
    ];


    constructor(private translate: TranslateService) {
    }

    ngOnInit(): void {
    }

    getLanguage() {
        return this.translate.currentLang;
    }

}
