import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import {SignupComponent} from './signup/signup.component';
import {LandingComponent} from './landing/landing.component';
import {LoginComponent} from './login/login.component';
import {CafeComponent} from './cafe/cafe.component';
import {PoolComponent} from './pool/pool.component';

const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'about-us', component: ProfileComponent},
    {path: 'register', component: SignupComponent},
    {path: 'landing', component: LandingComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cafe', component: CafeComponent},
    {path: 'pool', component: PoolComponent},
    {path: '', redirectTo: 'landing', pathMatch: 'full'}
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes, {
            useHash: true
        })
    ],
    exports: [],
})
export class AppRoutingModule {
}
