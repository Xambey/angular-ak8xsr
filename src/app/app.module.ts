import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AsyncGlobalComponent } from './async-global.component';
import { AppComponent } from './app.component';

import {  RxReactiveFormsModule } from "@rxweb/reactive-form-validators"

import {RxReactiveDynamicFormsModule} from '@rxweb/reactive-dynamic-forms'

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt)

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule,RxReactiveFormsModule,HttpClientModule,RxReactiveDynamicFormsModule ],
  declarations: [AppComponent, AsyncGlobalComponent],
  bootstrap:    [ AppComponent],
  providers:[{ provide: LOCALE_ID, useValue: 'pt' }]
})
export class AppModule { }
