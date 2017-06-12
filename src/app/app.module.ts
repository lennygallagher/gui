import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';
import {requestOptionsProvider}   from './default-request-option.service';

import {AppComponent}  from './app.component';
import {PartyFormComponent} from './party/party-form.component';

@NgModule({
    imports: [BrowserModule,
        FormsModule, HttpModule, JsonpModule],
    declarations: [AppComponent, PartyFormComponent],
    providers: [requestOptionsProvider],
    bootstrap: [AppComponent]
})
export class AppModule {
}
